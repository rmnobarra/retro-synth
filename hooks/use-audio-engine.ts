"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import * as Tone from 'tone'
import { CLASSICAL_SONGS, Song } from '@/lib/songs'

export function useAudioEngine() {
  const [isStarted, setIsStarted] = useState(false)
  const [isPlayingSequence, setIsPlayingSequence] = useState(false)
  const [activeNote, setActiveNote] = useState<string | null>(null)
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  
  const synthRef = useRef<Tone.PolySynth | null>(null)
  const partRef = useRef<Tone.Part | null>(null)

  useEffect(() => {
    // Initialize synth
    const synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: "square" // 8-bit sound
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.1,
        release: 1
      }
    }).toDestination()
    
    synth.volume.value = -8
    synthRef.current = synth

    return () => {
      synth.dispose()
      if (partRef.current) {
        partRef.current.dispose()
      }
      Tone.Transport.stop()
    }
  }, [])

  const startAudioContext = useCallback(async () => {
    if (!isStarted) {
      await Tone.start()
      setIsStarted(true)
      console.log("Audio Context Started")
    }
  }, [isStarted])

  const playNote = useCallback((note: string, duration: string = "8n") => {
    startAudioContext()
    if (synthRef.current) {
      synthRef.current.triggerAttackRelease(note, duration)
      setActiveNote(note)
      setTimeout(() => setActiveNote(null), 200)
    }
  }, [startAudioContext])

  const playRandomSong = useCallback(async () => {
    // 1. cleanup any previous state
    Tone.Transport.stop()
    Tone.Transport.cancel()
    
    if (partRef.current) {
      partRef.current.dispose()
      partRef.current = null
    }

    // 2. Pick new song
    const randomSong = CLASSICAL_SONGS[Math.floor(Math.random() * CLASSICAL_SONGS.length)]
    setCurrentSong(randomSong)
    Tone.Transport.bpm.value = randomSong.bpm

    // 3. Create Part
    const part = new Tone.Part((time, value) => {
      synthRef.current?.triggerAttackRelease(value.note, value.duration, time)
      
      Tone.Draw.schedule(() => {
        setActiveNote(value.note)
        const durationMs = Tone.Time(value.duration).toSeconds() * 1000
        setTimeout(() => setActiveNote(null), durationMs * 0.9)
      }, time)
    }, randomSong.notes)

    part.loop = false
    part.start(0)
    
    // 4. Calculate proper end time to schedule next song
    let maxEndTime = 0
    randomSong.notes.forEach(n => {
        const end = Tone.Time(n.time).toSeconds() + Tone.Time(n.duration).toSeconds()
        if (end > maxEndTime) maxEndTime = end
    })
    
    // 5. Schedule next song (recursion)
    // We schedule it on the Transport timeline. When it fires, it will reset the Transport.
    Tone.Transport.scheduleOnce(() => {
       playRandomSong()
    }, maxEndTime + 1) // 1 second gap

    partRef.current = part
    
    // 6. Start
    Tone.Transport.start()
  }, [])

  const toggleJukeboxMode = useCallback(async () => {
    await startAudioContext()

    if (isPlayingSequence) {
      // Stop
      Tone.Transport.stop()
      Tone.Transport.cancel() // Clear all scheduled events
      if (partRef.current) {
        partRef.current.dispose()
        partRef.current = null
      }
      setIsPlayingSequence(false)
      setCurrentSong(null)
      setActiveNote(null)
    } else {
      // Start
      Tone.Transport.start()
      playRandomSong()
      setIsPlayingSequence(true)
    }
  }, [isPlayingSequence, startAudioContext, playRandomSong])

  return {
    playNote,
    toggleJukeboxMode,
    isStarted,
    isPlayingSequence,
    activeNote,
    currentSong
  }
}
