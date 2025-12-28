import { loadModals } from './utils/loadModals';
import { Constants as C } from './model/Data';
import Data from './model/Data';
import Input from './Input';
import Model from './Model';
import View from './View';
// import SpaceportUI from './view/SpaceportUI';

import $ from "jquery";

// Load modals HTML before initializing game (top-level await - ES2025)
await loadModals();

const view = new View(document.getElementById("gc") as HTMLCanvasElement);
const model = new Model();
const input = new Input(model);

// Track currently landed spob
let currentSpob: any = null;

// Pause game when ANY modal opens
$('.modal').on('shown.bs.modal', (): void => {
	console.log("Modal opened - pausing game");
	model.player.paused = true;
});

// Unpause game when ANY modal closes
$('.modal').on('hidden.bs.modal', (): void => {
	console.log("Modal closed - unpausing game");
	model.player.paused = false;
});

// Initialize spaceport modal when landing
$('#modalSpaceport').on('shown.bs.modal', (): void => {
	console.log("LANDED at spaceport");
	// Get the spob the player is near (their nav target)
	currentSpob = model.player.ai.nav;

	// if (currentSpob?.spobData) {
	// 	SpaceportUI.initLandingModal(model.player, currentSpob.spobData, Data.descs);
	// }
});

// // Initialize commodity exchange when modal opens
// $('#modalCommodity').on('shown.bs.modal', (): void => {
// 	console.log("OPENED commodity exchange", currentSpob);
// 	if (currentSpob?.spobData) {
// 		SpaceportUI.initCommodityExchange(model.player, currentSpob.spobData);
// 	}
// });

// // Initialize refuel when modal opens
// $('#refuel').on('shown.bs.modal', (): void => {
// 	console.log("OPENED refuel");
// 	SpaceportUI.initRefuel(model.player);
// });

/**
 * Main Loop. Each frame.
 */
setInterval((): void => {
	// Read user input
	input.poll();

	if (model.mapView) {
		view.mapRender();
	}

	// Don't update if we're landed.
	if ($('.modal').hasClass('in')) {
		return;
	}

	// Draw output, run AI.
	model.action(view);
}, 1000 / C.fps); // 60fps
