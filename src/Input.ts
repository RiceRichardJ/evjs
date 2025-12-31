"use strict";

// Helper to close all dialogs
function closeAllDialogs() {
	const dialogs = document.querySelectorAll('dialog[open]');
	dialogs.forEach(dialog => (dialog as HTMLDialogElement).close());
}

import Model from './Model';
import StarMapUI from './view/StarMapUI';
import SpaceportUI from './view/SpaceportUI';
import Data from './model/Data';

export default class Input {
	private dialogs: NodeListOf<HTMLDialogElement>;

	constructor(
		private model: Model,
		private starMapUI: StarMapUI, // TODO this should be refactored out of here since it is a View object and Input should not directly manipulate View
		private keyPressed: {[key: string]: boolean} = {},
		private keyPrev = {},

	) {
		this.dialogs = document.querySelectorAll('dialog');
		this.registerKeyListeners();
		this.registerModalListeners();
	}

	/**
	 * Register Key Listeners.
	 */
	private registerKeyListeners() {
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			// console.log(e.keyCode);
			if ([9, 16, 27, 32, 37, 38, 39, 40].includes(e.keyCode)) {
				e.preventDefault();
			}
			if (e.keyCode == 9) { // [TAB]
				if (this.model.mapView) {
					// If map is open, cycle through linked systems
					this.starMapUI.cycleLinkedSystem();
				} else {
					// Otherwise, cycle through targets
					this.model.player.cycleTargets(this.model.actors);
				}
			} else if (e.keyCode == 87) { // [W]
				this.model.player.switchSecondary();
			} else if (e.keyCode == 16) { // [SHIFT]
				this.model.player.fireSecondary();
			}
			this.keyPressed[e.keyCode] = true;
		}, false);

		document.addEventListener('keyup', (e) => {
			if (e.keyCode == 9) {
				e.preventDefault();
			}
			this.keyPressed[e.keyCode] = false;
		}, false);
	}

	/**
	 * Register Modal/Dialog Listeners.
	 */
	private registerModalListeners() {
		// Pause game when ANY dialog opens (using MutationObserver)
		this.dialogs.forEach(dialog => {
			// Listen for dialog open events
			const observer = new MutationObserver(() => {
				if (dialog.open) {
					console.log("Dialog opened - pausing game");
					this.model.paused = true;
				}
			});

			observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });

			// Also listen for close event
			dialog.addEventListener('close', () => {
				console.log("Dialog closed - unpausing game");
				this.model.paused = false;
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
					const currentSpob = this.model.player.ai.nav;

					if (currentSpob) {
						SpaceportUI.initLandingModal(this.model.player, currentSpob, Data.descs);
					}
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
					this.model.mapView = true;
					// Center map on current system
					this.starMapUI.centerOnCurrentSystem();
					// Show current system info by default
					this.starMapUI.updateSystemInfo(this.starMapUI.currentSystemId);
				} else {
					console.log("Star map closed", this.model.player.getHyperNav());
					this.model.mapView = false;
					// Reset selection and clear hyperNav
					this.starMapUI.resetMapSelection();
					// this.model.player.clearHyperNav();
				}
			});
			observer.observe(starmapDialog, { attributes: true, attributeFilter: ['open'] });
		}

		// Listen for system selection events
		window.addEventListener('systemSelected', (e: Event) => {
			const customEvent = e as CustomEvent;
			const systemId = customEvent.detail.systemId;
			console.log("System selected event:", systemId);
			this.starMapUI.updateSystemInfo(systemId);
		});

		// Listen for linked system selection events (Tab or click on linked system)
		window.addEventListener('linkedSystemSelected', (e: Event) => {
			const customEvent = e as CustomEvent;
			const systemId = customEvent.detail.systemId;
			const shiftKey = customEvent.detail.shiftKey || false;
			console.log("Linked system selected:", systemId, shiftKey ? "(shift)" : "");

			if (shiftKey) {
				// Shift+click: add to path
				this.model.player.addToHyperNav(systemId);
			} else {
				// Tab or regular click on linked system: replace path
				this.model.player.setHyperNav([systemId]);
			}
		});

		// Setup star map zoom buttons
		const mapZoomInBtn = document.getElementById('mapZoomIn');
		const mapZoomOutBtn = document.getElementById('mapZoomOut');

		if (mapZoomInBtn) {
			mapZoomInBtn.addEventListener('click', () => {
				this.starMapUI.zoomIn();
			});
		}

		if (mapZoomOutBtn) {
			mapZoomOutBtn.addEventListener('click', () => {
				this.starMapUI.zoomOut();
			});
		}
	}

	/**
	 * Check if any dialog is open.
	 */
	public isAnyDialogOpen(): boolean {
		return Array.from(this.dialogs).some(d => d.open);
	}

	/**
	 * Controls: Key Listeners.
	 */
	public poll() {
		if (this.keyPressed["27"]) { // [esc]
			closeAllDialogs();
		}
		if (this.keyPressed["13"]) { // [Enter]
			if (this.model.mapView) {
				const starmapDialog = document.getElementById('dialogStarmap') as HTMLDialogElement;
				if (starmapDialog) {
					starmapDialog.close();
				}
			}
		}
		if (this.keyPressed["32"]) { // [spacebar]
			this.model.player.fire();
		}
		if (this.keyPressed["37"]) { // [Left]
			this.model.player.turnLeft();
		}
		if (this.keyPressed["38"]) { // [Up]
			this.model.player.applyThrust();
		}
		if (this.keyPressed["39"]) { // [Right]
			this.model.player.turnRight();
		}
		if (this.keyPressed["40"]) { // [Down]
			this.model.player.reverse();
			//if (velocity > 0) { velocity -= thrust; }
			//if (velocity < 0) { velocity = 0; }
		}
		if (this.keyPressed["49"]) { // [1]
			this.model.player.navSelect(this.model.spobs[0]);
		}
		if (this.keyPressed["50"]) { // [2]
			this.model.player.navSelect(this.model.spobs[1]);
		}
		if (this.keyPressed["51"]) { // [3]
			this.model.player.navSelect(this.model.spobs[2]);
		}
		if (this.keyPressed["52"]) { // [4]
			this.model.player.navSelect(this.model.spobs[3]);
		}
		if (this.keyPressed["65"]) { // [A]
			this.model.player.autoPilot();
		}
		if (this.keyPressed["66"]) { // [B]
			this.model.player.board();
		}
		if (this.keyPressed["67"]) { // [C]
			// escort formation // return to ship
		}
		if (this.keyPressed["68"]) { // [D]
			// self destruct
		}
		if (this.keyPressed["69"]) { // [E]
			// escort menu // command+e = eject
		}
		if (this.keyPressed["70"]) { // [F]
			// attack
		}
		if (this.keyPressed["71"]) { // [G]
			// 
		}
		if (this.keyPressed["72"]) { // [H]
			this.model.player.navSelect(0);
		}
		if (this.keyPressed["73"]) { // [I]
			this.model.player.missionInfo();
		}
		if (this.keyPressed["74"]) { // [J]
			this.model.player.jump();
		}
		if (this.keyPressed["75"]) { // [K]
			// jettison cargo // need to hold cmd
		}
		if (this.keyPressed["76"]) { // [L]
			var status = this.model.player.land();
			if (status == 2) {
				// stage.ctx.font = "9pt Arial";	// TODO uhhhh
				// stage.ctx.fillText("Moving too fast to land!",10,590);
			}
		}
		if (this.keyPressed["77"]) { // [M]
			this.model.player.map();
			// mapView is now set by dialog observer in main.ts
		}
		if (this.keyPressed["78"]) { // [N]
			this.model.player.navSelect(null);
		}
		if (this.keyPressed["79"]) { // [O]
			// 
		}
		if (this.keyPressed["80"]) { // [P]
			this.model.player.playerInfo();
		}
		if (this.keyPressed["81"]) { // [Q]
			// 
		}
		if (this.keyPressed["82"]) { // [R]
			//closestEnemy();
		}
		if (this.keyPressed["83"]) { // [S]
			this.model.player.weapInd = -1;
		}
		if (this.keyPressed["84"]) { // [T]
			// 
		}
		if (this.keyPressed["85"]) { // [U]
			// cloak
		}
		if (this.keyPressed["86"]) { // [V]
			// hold position
		}
		if (this.keyPressed["87"]) { // [W]
			// secondary weapon select
		}
		if (this.keyPressed["88"]) { // [X]
			// flares
		}
		if (this.keyPressed["89"]) { // [Y]
			// comms
		}
		if (this.keyPressed["90"]) { // [Z]
			// afterburner
		}
		if (this.keyPressed["192"]) { // [`]
			// nav off
		}
		if (this.keyPressed["220"]) { // [\]
			// hyper select
		}
		if (this.keyPressed["187"] || this.keyPressed["61"]) { // [+] or [=]
			this.starMapUI.zoomIn();
		}
		if (this.keyPressed["189"] || this.keyPressed["173"]) { // [-]
			this.starMapUI.zoomOut();
		}
	}
}

