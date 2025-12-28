import { loadModals } from './utils/loadModals';
import { Constants as C } from './model/Data';
import Data from './model/Data';
import Input from './Input';
import Model from './Model';
import View from './View';
import StarMapUI from './view/StarMapUI';
// import SpaceportUI from './view/SpaceportUI';

// Load modals HTML before initializing game (top-level await - ES2025)
await loadModals();

const view = new View(
	document.getElementById("gc") as HTMLCanvasElement,
	document.getElementById("mapGc") as HTMLCanvasElement
);
const model = new Model();
const input = new Input(model, view);

// Track currently landed spob
let currentSpob: any = null;

// Get all dialog elements
const dialogs = document.querySelectorAll('dialog');

console.log("Found dialogs:", dialogs.length);

// Pause game when ANY dialog opens (using MutationObserver)
dialogs.forEach(dialog => {
	// Listen for dialog open events
	const observer = new MutationObserver(() => {
		if (dialog.open) {
			console.log("Dialog opened - pausing game");
			model.player.paused = true;
		}
	});

	observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });

	// Also listen for close event
	dialog.addEventListener('close', () => {
		console.log("Dialog closed - unpausing game");
		model.player.paused = false;
	});
});

// Handle data-dialog buttons (for opening sub-dialogs from spaceport)
document.addEventListener('click', (e: MouseEvent) => {
	const target = e.target as HTMLElement;
	if (target.hasAttribute('data-dialog')) {
		const dialogId = target.getAttribute('data-dialog');
		const dialog = document.getElementById(dialogId) as HTMLDialogElement;
		if (dialog) {
			dialog.showModal();
		}
	}
});

// Initialize spaceport modal when landing
const spaceportDialog = document.getElementById('dialogSpaceport') as HTMLDialogElement;
if (spaceportDialog) {
	const observer = new MutationObserver(() => {
		if (spaceportDialog.open) {
			console.log("LANDED at spaceport");
			// Get the spob the player is near (their nav target)
			currentSpob = model.player.ai.nav;

			// if (currentSpob?.spobData) {
			// 	SpaceportUI.initLandingModal(model.player, currentSpob.spobData, Data.descs);
			// }
		}
	});
	observer.observe(spaceportDialog, { attributes: true, attributeFilter: ['open'] });
}

// Initialize star map dialog
const starmapDialog = document.getElementById('dialogStarmap') as HTMLDialogElement;
if (starmapDialog) {
	const observer = new MutationObserver(() => {
		if (starmapDialog.open) {
			console.log("Star map opened");
			model.mapView = true;
			// Show current system info by default
			StarMapUI.updateSystemInfo(view.currentSystemId, model);
		} else {
			console.log("Star map closed");
			model.mapView = false;
			// Reset selection and clear hyperNav
			view.resetMapSelection();
			model.player.clearHyperNav();
		}
	});
	observer.observe(starmapDialog, { attributes: true, attributeFilter: ['open'] });
}

// Listen for system selection events
window.addEventListener('systemSelected', (e: Event) => {
	const customEvent = e as CustomEvent;
	const systemId = customEvent.detail.systemId;
	console.log("System selected event:", systemId);
	StarMapUI.updateSystemInfo(systemId, model);
});

// Listen for linked system selection events (Tab or click on linked system)
window.addEventListener('linkedSystemSelected', (e: Event) => {
	const customEvent = e as CustomEvent;
	const systemId = customEvent.detail.systemId;
	const shiftKey = customEvent.detail.shiftKey || false;
	console.log("Linked system selected:", systemId, shiftKey ? "(shift)" : "");

	if (shiftKey) {
		// Shift+click: add to path
		model.player.addToHyperNav(systemId);
	} else {
		// Tab or regular click on linked system: replace path
		model.player.setHyperNav([systemId]);
	}
});

// Setup star map zoom buttons
const mapZoomInBtn = document.getElementById('mapZoomIn');
const mapZoomOutBtn = document.getElementById('mapZoomOut');

if (mapZoomInBtn) {
	mapZoomInBtn.addEventListener('click', () => {
		view.zoomIn();
	});
}

if (mapZoomOutBtn) {
	mapZoomOutBtn.addEventListener('click', () => {
		view.zoomOut();
	});
}

/**
 * Main Loop. Each frame.
 */
setInterval((): void => {
	// Read user input
	input.poll();

	if (model.mapView) {
		view.mapRender(model.player);
	}

	// Don't update if any dialog is open
	const anyDialogOpen = Array.from(dialogs).some(d => d.open);
	if (anyDialogOpen) {
		return;
	}

	// Draw output, run AI.
	model.action(view);
}, 1000 / C.fps); // 60fps
