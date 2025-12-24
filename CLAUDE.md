# CLAUDE.md - AI Assistant Instructions

## Codebase Summary

**EVJS** is a browser-based 2D space combat/trading game - a TypeScript clone of Escape Velocity (1996). Built with TypeScript, ES2024, HTML5 Canvas, and Vite.

**Architecture:** MVC pattern
- Entry: `src/main.ts` - 60 FPS game loop with top-level await
- Model: `Model.ts` - game state
- View: `View.ts` + `view/*` - Canvas rendering & HUD
- Controller: `Input.ts` - keyboard handling

**Key Systems:**
- Entities: `Actor/Ship/Player/AI/Proj/Weapon` classes
- Physics: Custom `Vector` class with polar coordinates, realistic inertia
- Rendering: 360° sprite rotation, parallax starfield, HUD with radar
- Data: JSON-driven content in `src/json/` (ships, weapons, systems, planets)
- Economy: Commodity trading system with dynamic pricing (`Economy.ts`, `SpaceportUI.ts`)
- Build: TypeScript 5.9.3 + Vite 7.3.0 with instant HMR

**Features:** Real-time combat, AI opponents, targeting system, planet landing (triggers Bootstrap modals for trading/refueling/outfitting), commodity trading, star map navigation.

**Tech Stack:** TypeScript 5.9.3, ES2024, Vite 7.3.0, jQuery 3.2.1, Bootstrap 3.3.7, HTML5 Canvas

**Dev:**
- `npm run dev` - Vite dev server with HMR (localhost:8080)
- `npm run build` - Production build to dist/ (static files)
- `npm run type-check` - TypeScript validation
- `npm run preview` - Preview production build

**Data Conversion:** `data-conversion/` contains CSV→JSON converter for EV resource data. Converts 14 resource types from CSV plus STR# and spïn from text files. Uses resource fork text files as authoritative source. Run `node data-conversion/convert-csv-to-json.js` to regenerate. Output: desc, dude, flet, govt, junk, misn, nebu, oops, outf, pers, ship, spob, syst, weap, STR#.js (strings), spin.js (sprite metadata).

---

## Instructions for Claude

1. **Always read this file at the start of every session.**
2. **Upon completion of a prompt, update this file as needed. Always keep this file as concise as possible.**
3. **Create a git commit after the end of every prompt.**
4. **Re-read this file as needed during a session to refresh memory.**
