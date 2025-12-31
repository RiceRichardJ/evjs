import { loadModals } from './utils/loadModals';
import { Constants as C } from './model/Data';
import Input from './Input';
import Model from './Model';
import View from './View';
import StarMapUI from './view/StarMapUI';

// Load modals HTML before initializing game (top-level await - ES2025)
await loadModals();

const view = new View(
	document.getElementById("gc") as HTMLCanvasElement
);

const model = new Model();

const starMapUI = new StarMapUI(
	document.getElementById("mapGc") as HTMLCanvasElement,
	model
);
const input = new Input(model, starMapUI);

// Set player reference for map navigation
starMapUI.setPlayer(model.player);

/**
 * Main Loop. Each frame.
 */
setInterval((): void => {
	// Read user input
	input.poll();

	if (model.mapView) {
		starMapUI.render(model.player);
	}

	// Don't update if any dialog is open
	if (input.isAnyDialogOpen()) {
		return;
	}

	// Draw output, run AI.
	model.action(view); // is this backwards?, should the model should be passed into view?


}, 1000 / C.fps); // 60fps
