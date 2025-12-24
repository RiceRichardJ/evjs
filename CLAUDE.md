# CLAUDE.md - AI Assistant Instructions

## Codebase Summary

**EVJS** is a browser-based 2D space combat/trading game - a JavaScript clone of Escape Velocity (1996). Built with ES6, HTML5 Canvas, and RequireJS.

**Architecture:** MVC pattern
- Entry: `src/main.js` - 60 FPS game loop
- Model: `Model.js` - game state
- View: `View.js` + `view/*` - Canvas rendering & HUD
- Controller: `Input.js` - keyboard handling

**Key Systems:**
- Entities: `Actor/Ship/Player/AI/Proj/Weapon` classes
- Physics: Custom `Vector` class with polar coordinates, realistic inertia
- Rendering: 360° sprite rotation, parallax starfield, HUD with radar
- Data: JSON-driven content in `src/json/` (ships, weapons, systems, planets)
- Build: Babel transpiles ES6 → AMD modules

**Features:** Real-time combat, AI opponents, targeting system, planet landing (triggers Bootstrap modals for trading/outfitting), star map navigation.

**Tech Stack:** ES6 → Babel → RequireJS, jQuery 3.2.1, Bootstrap 3.3.7, HTML5 Canvas

**Dev:** `npm run build` → `npm run server` (localhost:8080)

**Data Conversion:** `data-conversion/` contains CSV→JSON converter for EV resource data. Converts 14 resource types from CSV plus STR# and spïn from text files. Uses resource fork text files as authoritative source. Run `node data-conversion/convert-csv-to-json.js` to regenerate. Output: desc, dude, flet, govt, junk, misn, nebu, oops, outf, pers, ship, spob, syst, weap, STR#.js (strings), spin.js (sprite metadata).

---

## Instructions for Claude

1. **Always read this file at the start of every session.**
2. **Upon completion of a prompt, update this file as needed. Always keep this file as concise as possible.**
3. **Create a git commit after the end of every prompt.**
4. **Re-read this file as needed during a session to refresh memory.**
