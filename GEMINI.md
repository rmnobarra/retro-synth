# Project Context: Retro 8-Bit Synth Application

## Role
Act as a Senior Frontend Software Engineer specialized in Creative Coding, React, and Web Audio.

## Project Goal
Build a "Retro-Modern" virtual synthesizer web application.
The app simulates an 8-bit keyboard that allows users to play notes and generates random melodies (jukebox mode).

## Tech Stack
- **Framework:** Next.js 14+ (App Router, TypeScript).
- **Styling:** Tailwind CSS.
- **UI Library:** shadcn/ui (using components like Card, Button, Slider).
- **Audio Engine:** Tone.js (Must use PolySynth with 'square' or 'triangle' waves for 8-bit sound).
- **Icons:** Lucide React.
- **Font:** 'Press Start 2P' (via Google Fonts or Next.js Font optimization).

## Design System & Aesthetics
- **Theme:** "Retro-Modern". Dark background (slate-950), neon accents (green-500, green-400).
- **Interactive:** Buttons should feel "tactile" (using CSS borders to simulate depth).
- **Animations:** Subtle CRT scanline effects, pulsing text during playback.

## Architectural Constraints
1. **Audio Context:** Always handle `Tone.start()` on the first user interaction to comply with browser autoplay policies.
2. **State Management:** Use React `useState` and `useEffect`. Avoid complex global state for this scope.
3. **Component Structure:**
   - `components/synth/SynthBoard.tsx`: Main container.
   - `hooks/use-audio-engine.ts`: Custom hook to manage Tone.js logic (separation of concerns).
   - `app/page.tsx`: Entry point.

## Step-by-Step Implementation Plan

### Step 1: Project Setup & Dependencies
- Initialize Next.js project.
- Install dependencies: `tone`, `clsx`, `tailwind-merge`.
- Initialize shadcn/ui.
- Add specific shadcn components: `button`, `card`, `slider`.

### Step 2: Audio Logic (The Hook)
- Create `hooks/use-audio-engine.ts`.
- Initialize `Tone.PolySynth`.
- Implement `playNote(note)` function.
- Implement `toggleRandomMode()` using `Tone.Loop` and `Tone.Draw` for sync.
- Ensure proper cleanup (`dispose`) on unmount.

### Step 3: UI Component (The Board)
- Create `components/synth/SynthBoard.tsx`.
- Use `Card` for the device chassis.
- Create a visual display (simulating an LCD screen).
- Map a scale of notes (e.g., C Major Pentatonic) to Buttons.
- Visual feedback: The active button must light up when played (either by user or auto-mode).

### Step 4: Page Integration
- Update `app/page.tsx` to render the `SynthBoard`.
- Apply global styles for the pixel font.