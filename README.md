# Canvas

Three.js experiments and a Vite plus React starter. This is the sketchbook where the 3D work lives.

## What is here

**Vitruvian Antikythera Chronos-Armillary.html** - A standalone 3D Gimbal Atom Simulation with resonant acceleration. Open it directly in a browser, no build step needed. A proton sits at the center with an electron orbiting it, wrapped in three gimbal rings: an inner fixed ring, an electron following ring, and an outer fixed ring. When the rings align, taps between them boost their rotation speeds, which is the resonant acceleration in the title. OrbitControls let you drag to rotate and scroll to zoom, and a Toggle Debug Axes button overlays the coordinate axes. Built on Three.js r128 with Tailwind for the page chrome, both loaded from CDNs, so it needs an internet connection to run.

**createStructure.js** - A Node scaffolding script. Run `node createStructure.js` and it generates a full React game project tree: GameEngine, PlayerAvatar, EnemyAI, HUD, and Menu components, plus hooks, contexts, utils (math tools, pathfinding, collision detection), services, constants, assets, styles, tests, and config. Every file starts empty, ready to fill in.

**package.json** and **vite.config.js** - The `canvas-app` package (v1.0.0) wired for Vite with the React plugin. `npm start` runs the dev server.

**Resonant Engineering_ Tapping the Universe's Hidden Harmony from Atoms to You.mp3** - Audio on the same resonance theme as the simulation above.

## How to run the simulation

Just open `Vitruvian Antikythera Chronos-Armillary.html` in a modern browser. Drag to orbit, scroll to zoom, watch for ring alignments.

## How to run the Vite app

```
npm install
npm start
```
