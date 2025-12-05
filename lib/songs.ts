export type NoteEvent = {
  time: string;
  note: string;
  duration: string;
};

export type Song = {
  id: string;
  title: string;
  composer: string;
  bpm: number;
  notes: NoteEvent[];
};

export const CLASSICAL_SONGS: Song[] = [
  {
    id: "ode-to-joy",
    title: "Ode to Joy",
    composer: "Beethoven",
    bpm: 120,
    notes: [
      // Phrase 1
      { time: "0:0", note: "E4", duration: "4n" },
      { time: "0:1", note: "E4", duration: "4n" },
      { time: "0:2", note: "F4", duration: "4n" },
      { time: "0:3", note: "G4", duration: "4n" },
      { time: "1:0", note: "G4", duration: "4n" },
      { time: "1:1", note: "F4", duration: "4n" },
      { time: "1:2", note: "E4", duration: "4n" },
      { time: "1:3", note: "D4", duration: "4n" },
      { time: "2:0", note: "C4", duration: "4n" },
      { time: "2:1", note: "C4", duration: "4n" },
      { time: "2:2", note: "D4", duration: "4n" },
      { time: "2:3", note: "E4", duration: "4n" },
      { time: "3:0", note: "E4", duration: "4n." },
      { time: "3:1.5", note: "D4", duration: "8n" },
      { time: "3:2", note: "D4", duration: "2n" },
      // Phrase 2
      { time: "4:0", note: "E4", duration: "4n" },
      { time: "4:1", note: "E4", duration: "4n" },
      { time: "4:2", note: "F4", duration: "4n" },
      { time: "4:3", note: "G4", duration: "4n" },
      { time: "5:0", note: "G4", duration: "4n" },
      { time: "5:1", note: "F4", duration: "4n" },
      { time: "5:2", note: "E4", duration: "4n" },
      { time: "5:3", note: "D4", duration: "4n" },
      { time: "6:0", note: "C4", duration: "4n" },
      { time: "6:1", note: "C4", duration: "4n" },
      { time: "6:2", note: "D4", duration: "4n" },
      { time: "6:3", note: "E4", duration: "4n" },
      { time: "7:0", note: "D4", duration: "4n." },
      { time: "7:1.5", note: "C4", duration: "8n" },
      { time: "7:2", note: "C4", duration: "2n" },
    ],
  },
  {
    id: "fur-elise",
    title: "Fur Elise",
    composer: "Beethoven",
    bpm: 140,
    notes: [
      // Main Theme
      { time: "0:0", note: "E5", duration: "8n" },
      { time: "0:0.5", note: "D#5", duration: "8n" },
      { time: "0:1", note: "E5", duration: "8n" },
      { time: "0:1.5", note: "D#5", duration: "8n" },
      { time: "0:2", note: "E5", duration: "8n" },
      { time: "0:2.5", note: "B4", duration: "8n" },
      { time: "0:3", note: "D5", duration: "8n" },
      { time: "0:3.5", note: "C5", duration: "8n" },
      { time: "1:0", note: "A4", duration: "4n" },
      { time: "1:1", note: "C4", duration: "8n" },
      { time: "1:1.5", note: "E4", duration: "8n" },
      { time: "1:2", note: "A4", duration: "8n" },
      { time: "1:2.5", note: "B4", duration: "4n" },
      { time: "1:3.5", note: "E4", duration: "8n" },
      { time: "2:0", note: "G#4", duration: "8n" },
      { time: "2:0.5", note: "B4", duration: "8n" },
      { time: "2:1", note: "C5", duration: "4n" },
      { time: "2:2", note: "E4", duration: "8n" },
      // Repeat start
      { time: "2:2.5", note: "E5", duration: "8n" },
      { time: "2:3", note: "D#5", duration: "8n" },
      { time: "2:3.5", note: "E5", duration: "8n" },
      { time: "3:0", note: "D#5", duration: "8n" },
      { time: "3:0.5", note: "E5", duration: "8n" },
      { time: "3:1", note: "B4", duration: "8n" },
      { time: "3:1.5", note: "D5", duration: "8n" },
      { time: "3:2", note: "C5", duration: "8n" },
      { time: "3:2.5", note: "A4", duration: "4n" },
    ],
  },
  {
    id: "eine-kleine",
    title: "Eine Kleine",
    composer: "Mozart",
    bpm: 140,
    notes: [
      { time: "0:0", note: "G4", duration: "4n" },
      { time: "0:1", note: "D4", duration: "4n" },
      { time: "0:2", note: "G4", duration: "4n" },
      { time: "0:3", note: "D4", duration: "4n" },
      { time: "1:0", note: "G4", duration: "8n" },
      { time: "1:0.5", note: "D4", duration: "8n" },
      { time: "1:1", note: "G4", duration: "8n" },
      { time: "1:1.5", note: "B4", duration: "8n" },
      { time: "1:2", note: "D5", duration: "2n" },
      // Second part
      { time: "2:0", note: "C5", duration: "4n" },
      { time: "2:1", note: "A4", duration: "4n" },
      { time: "2:2", note: "C5", duration: "4n" },
      { time: "2:3", note: "A4", duration: "4n" },
      { time: "3:0", note: "C5", duration: "8n" },
      { time: "3:0.5", note: "A4", duration: "8n" },
      { time: "3:1", note: "F#4", duration: "8n" },
      { time: "3:1.5", note: "A4", duration: "8n" },
      { time: "3:2", note: "D4", duration: "2n" },
    ],
  },
  {
    id: "valkyries",
    title: "Ride of Valkyries",
    composer: "Wagner",
    bpm: 160,
    notes: [
      { time: "0:0", note: "B4", duration: "8n" },
      { time: "0:0.5", note: "G4", duration: "16n" },
      { time: "0:0.75", note: "B4", duration: "16n" },
      { time: "0:1", note: "D5", duration: "4n" },
      { time: "0:2", note: "B4", duration: "8n" },
      { time: "0:2.5", note: "G4", duration: "16n" },
      { time: "0:2.75", note: "B4", duration: "16n" },
      { time: "0:3", note: "D5", duration: "4n" },
      // Continued
      { time: "1:0", note: "B4", duration: "8n" },
      { time: "1:0.5", note: "G4", duration: "16n" },
      { time: "1:0.75", note: "B4", duration: "16n" },
      { time: "1:1", note: "D5", duration: "8n." },
      { time: "1:1.75", note: "B4", duration: "16n" },
      { time: "1:2", note: "G5", duration: "8n." },
      { time: "1:2.75", note: "D5", duration: "16n" },
      { time: "1:3", note: "B4", duration: "8n." },
      { time: "1:3.75", note: "G4", duration: "16n" },
      { time: "2:0", note: "D4", duration: "2n" },
    ],
  },
];