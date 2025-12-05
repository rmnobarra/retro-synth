# 🎹 Retro Synth

> **"The Past is Loud."**

**Retro Synth** is a "Retro-Modern" virtual synthesizer and jukebox built with Next.js and Tone.js. It combines the nostalgic aesthetic of 80s hardware with the timeless genius of classical composers, all rendered in glorious 8-bit square waves.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

-   **🎹 Fully Playable Keyboard:** A chromatic 8-bit piano (C4-C5) with responsive visual feedback.
-   **🎼 Classical Jukebox Mode:** Sit back and listen to 8-bit renditions of:
    -   *Ode to Joy* (Beethoven)
    -   *Für Elise* (Beethoven)
    -   *Eine Kleine Nachtmusik* (Mozart)
    -   *Ride of the Valkyries* (Wagner)
-   **👾 Retro Aesthetics:** CRT scanlines, neon glow effects, and a physical "chassis" design.
-   **🐳 Docker Ready:** Includes a production-ready Dockerfile and Makefile.

## 🛠️ Tech Stack

-   **Framework:** Next.js 15 (App Router)
-   **Language:** TypeScript
-   **Audio Engine:** Tone.js
-   **Styling:** Tailwind CSS & Shadcn/ui
-   **Font:** Press Start 2P

## 🚀 Getting Started

### Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000).

### 🐳 Docker

We have included a `Makefile` to simplify Docker operations.

**Build the image:**
```bash
make build
```

**Run the container:**
```bash
make run
```
The app will be available at `http://localhost:3000`.

**Push to registry:**
```bash
make push REGISTRY=your-username
```

## 🎮 How to Use

1.  **Start Audio:** Click any key on the keyboard first to initialize the Audio Context (browser policy requirement).
2.  **Play:** Use your mouse to click the keys.
3.  **Auto Mode:** Click the Green **Play** button on the dashboard to start the Classical Jukebox. The screen will display the current track title and composer.