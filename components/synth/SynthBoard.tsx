"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAudioEngine } from "@/hooks/use-audio-engine"
import { cn } from "@/lib/utils"
import { Play, Square } from "lucide-react"

const KEYS = [
  { note: "C4", label: "C", type: "white" },
  { note: "C#4", label: "", type: "black" },
  { note: "D4", label: "D", type: "white" },
  { note: "D#4", label: "", type: "black" },
  { note: "E4", label: "E", type: "white" },
  { note: "F4", label: "F", type: "white" },
  { note: "F#4", label: "", type: "black" },
  { note: "G4", label: "G", type: "white" },
  { note: "G#4", label: "", type: "black" },
  { note: "A4", label: "A", type: "white" },
  { note: "A#4", label: "", type: "black" },
  { note: "B4", label: "B", type: "white" },
  { note: "C5", label: "C", type: "white" },
]

export function SynthBoard() {
  const { playNote, toggleJukeboxMode, isPlayingSequence, activeNote, isStarted, currentSong } = useAudioEngine()

  return (
    <div className="flex items-center justify-center min-h-[50vh] p-4 w-full select-none">
      <Card className="relative w-full max-w-4xl bg-slate-900 border-slate-800 shadow-2xl p-4 md:p-8 rounded-xl overflow-hidden ring-4 ring-slate-950">
        {/* Chassis Texture */}
        <div className="absolute inset-0 bg-slate-900 opacity-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-8">
          {/* Header / Display */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950 p-6 rounded-lg border-2 border-slate-800 shadow-inner">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl font-bold text-slate-100 tracking-tighter uppercase font-mono">
                Retro Synth
              </h1>
              <p className="text-xs text-slate-500 font-mono">Model: RS-8000</p>
            </div>
            
            {/* LCD Screen */}
            <div className="w-full md:w-64 h-16 bg-[#1a1c1a] rounded border-4 border-slate-700 flex items-center justify-center relative overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none z-20" />
              <div className="flex flex-col items-center justify-center z-10 w-full px-2">
                 {isPlayingSequence && currentSong ? (
                   <>
                    <span className="font-mono text-[10px] text-green-600 uppercase tracking-widest mb-1">
                      Now Playing
                    </span>
                    <span className="font-mono text-xs text-green-400 animate-pulse text-center leading-tight">
                      {currentSong.title}
                    </span>
                    <span className="font-mono text-[8px] text-green-700 mt-1">
                      {currentSong.composer}
                    </span>
                   </>
                 ) : (
                  <span className={cn(
                    "font-mono text-xl font-bold tracking-widest transition-all duration-100",
                    activeNote ? "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" : "text-slate-700"
                  )}>
                    {activeNote || "READY"}
                  </span>
                 )}
              </div>
            </div>

            <Button
              variant={isPlayingSequence ? "destructive" : "default"}
              size="icon"
              className={cn(
                "h-12 w-12 rounded-full border-4 shadow-lg transition-transform active:scale-95 shrink-0",
                isPlayingSequence 
                  ? "bg-red-500 hover:bg-red-600 border-red-800" 
                  : "bg-green-600 hover:bg-green-700 border-green-800"
              )}
              onClick={toggleJukeboxMode}
            >
              {isPlayingSequence ? <Square className="fill-current" /> : <Play className="fill-current" />}
            </Button>
          </div>

          {/* Keyboard - Piano Layout */}
          <div className="relative h-48 md:h-64 bg-slate-950 rounded-lg shadow-inner border border-slate-800 p-2 md:p-4 flex justify-center">
            <div className="relative flex h-full w-full max-w-3xl">
               {KEYS.map(({ note, label, type }) => {
                 if (type === "white") {
                   return (
                     <button
                        key={note}
                        onMouseDown={() => playNote(note)}
                        className={cn(
                          "flex-1 h-full bg-slate-100 rounded-b-md border-b-[6px] border-r border-l border-slate-300 active:border-b-2 active:scale-[0.99] origin-top transition-all duration-75 relative z-10",
                          "first:rounded-bl-md last:rounded-br-md hover:bg-slate-50",
                           activeNote === note && "bg-green-200 shadow-[inset_0_0_20px_rgba(74,222,128,0.5)] border-green-400 scale-[0.99] border-b-2"
                        )}
                        aria-label={`Play ${note}`}
                     >
                       <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono font-bold text-slate-400 text-sm md:text-base pointer-events-none">
                         {label}
                       </span>
                     </button>
                   )
                 }
                 return null
               })}
               
               {/* Render Black Keys on top using absolute positioning */}
               {/* 
                  Standard Piano geometry:
                  Black keys are between white keys.
                  C# -> between C and D
                  D# -> between D and E
                  ... gap (E-F) ...
                  F# -> between F and G
                  G# -> between G and A
                  A# -> between A and B
                  
                  We have 8 white keys (C, D, E, F, G, A, B, C).
                  Total 7 gaps, but E-F and B-C have no black keys.
                  
                  Since we use flex-1 for white keys, each white key is ~12.5% width.
                  Black keys should be centered on the border (left: 12.5%, 25%, etc.).
               */}
               <div className="absolute inset-0 w-full h-full pointer-events-none z-20 flex pl-[6.25%] pr-[6.25%]">
                  {/* C# */}
                  <div className="flex-1 flex justify-center"><BlackKey note="C#4" playNote={playNote} activeNote={activeNote} /></div>
                  {/* D# */}
                  <div className="flex-1 flex justify-center"><BlackKey note="D#4" playNote={playNote} activeNote={activeNote} /></div>
                  {/* E-F Gap (Empty) */}
                  <div className="flex-1 pointer-events-none" />
                  {/* F# */}
                  <div className="flex-1 flex justify-center"><BlackKey note="F#4" playNote={playNote} activeNote={activeNote} /></div>
                  {/* G# */}
                  <div className="flex-1 flex justify-center"><BlackKey note="G#4" playNote={playNote} activeNote={activeNote} /></div>
                  {/* A# */}
                  <div className="flex-1 flex justify-center"><BlackKey note="A#4" playNote={playNote} activeNote={activeNote} /></div>
                  {/* B-C Gap (Empty) */}
                  <div className="flex-1 pointer-events-none" />
               </div>
            </div>
          </div>
          
          <div className="text-center text-slate-600 text-xs font-mono">
            {!isStarted && "Click any key to start audio engine"}
          </div>
        </div>
      </Card>
    </div>
  )
}

function BlackKey({ note, playNote, activeNote }: { note: string, playNote: (n: string) => void, activeNote: string | null }) {
  return (
    <button
      onMouseDown={(e) => {
        e.stopPropagation() // Prevent clicking white key underneath
        playNote(note)
      }}
      className={cn(
        "w-[60%] h-[60%] bg-slate-800 rounded-b-sm border-b-4 border-r-2 border-l-2 border-black pointer-events-auto shadow-lg active:border-b-1 active:scale-[0.98] origin-top transition-all duration-75",
        activeNote === note && "bg-green-600 border-green-800 shadow-[0_0_15px_rgba(74,222,128,0.6)] scale-[0.98] border-b-1"
      )}
      aria-label={`Play ${note}`}
    />
  )
}
