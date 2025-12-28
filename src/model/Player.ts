"use strict";

import { ShipType } from '@/json/ship';
import Ship   from './Ship';
import Vector from './Vector'
import Data      from './Data'
import Pilot from './Pilot';

// Helper to open dialogs
function openDialog(id: string) {
	const dialog = document.getElementById(id) as HTMLDialogElement;
	if (dialog) {
		dialog.showModal();
	}
}

export default class Player extends Ship {
	private targInd: number = -1;                // 
	private paused: boolean = false;             // should be higher up (Model.ts, etc)
	private hyperNav: number[] = [];             // 
	private weapInd: number = -1;                // 
	
	// private credits: number = 100000;            // 
	// private cargo: Record<string, number> = {};  // cargo id -> qty in tons
	// private cargoSpace: number = 0;              // 
	// private cargoUsed: number = 0;               // should be calculated
	// private fuel: number = 0;                    // 
	// private fuelMax: number = 0;                 // 
	// private outfits: any[] = [];                 // needs to sync with Pilot.ts

	private pilot: Pilot = new Pilot();

	constructor(shipType: ShipType) {
		super(shipType);
		this.targInd = -1;
		this.paused = false;
		this.hyperNav = [];
		this.weapInd = -1;

		// // Economic state
		// this.credits = 100000; // Starting credits
		// this.cargo = {
		// 	food: 0,
		// 	industrial: 0,
		// 	medical: 0,
		// 	luxury: 0,
		// 	metal: 0,
		// 	equipment: 0
		// };
		// this.cargoSpace = shipType.cargo; // Total cargo capacity
		// this.cargoUsed = 0; // Current cargo used

		// // Fuel management
		// this.fuel = shipType.fuel[0]; // Current fuel
		// this.fuelMax = shipType.fuel[0]; // Maximum fuel capacity

		// // Outfits
		// this.outfits = []; // Installed outfits
	}

	cycleTargets(actors) {
		this.targInd++;
		if (this.targInd >= actors.length) { 
			this.ai.target = null;
			this.targInd = -1;
			return;
		}
		this.ai.target = actors[this.targInd];
	}

	navSelect(target) {
		this.ai.nav = target;
	}

	land() {
		if (!this.ai.nav) { 
			console.log("No Nav");
			return 1;
		}
		const dist = Vector.distance(this.x, this.y,
			this.ai.nav.x, this.ai.nav.y);

		if (dist < 75 && !this.paused) {
			if (this.travel.magnitude > 0.5) {
				// stage.ctx.font = "9pt Arial";
				// stage.ctx.fillText("Moving too fast to land!",10,590);
				console.log(`Too Fast, speed=${this.travel.magnitude}`);

				return 2;
			} else {
				console.log("open land modal")
				openDialog('dialogSpaceport');
				return 0;
			}
		} else {
			console.log(`Too Far, dist=${dist}, paused=${this.paused}`);
			return 3;
		}
		
	}

	/**
	 * TODO: Maybe make SECONDARIES a seperate array from WEAPONS?
	 */
	switchSecondary() {
		// var secondaries = [];
		// for (var weap of this.weapons) {
		// 	if (weap.type.secondary) {
		// 		secondaries.push(weap);
		// 	}
		// }
		// this.weapInd++;
		// if (this.weapInd >= secondaries.length) { 
		// 	this.weapInd = -1;
		// }
		this.weapInd++;
		while (this.weapInd < this.weapons.length && !this.weapons[this.weapInd].type.secondary) {
			this.weapInd++;
		}
		if (this.weapInd >= this.weapons.length) {
			this.weapInd = -1;
		}
	}

	fire(targ = this.ai.target) {
		if (this.dead || this.disabled) { return; }
		for (var myWeap of this.weapons) {
			if (myWeap.type.secondary) { continue; }
			var projectile = myWeap.fire(targ, this);
			if (projectile) {
				if (projectile.className == "Proj") {
					this.newProj.push(projectile);
				} else if (projectile.className == "Ship") {
					this.newShip.push(projectile);
				}
			}
		}
	}

	fireSecondary(targ = this.ai.target) {
		var myWeap = this.weapons[this.weapInd];
		if (myWeap.type.type == "guided" && !targ) { return; }
		var projectile = myWeap.fire(targ, this);
		if (projectile) {
			if (projectile.className == "Proj") {
				this.newProj.push(projectile);
			} else if (projectile.className == "Ship") {
				this.newShip.push(projectile);
			}
		}
	}

	board(targ = this.ai.target) {
		if (!targ || targ.className != 'Ship' || !targ.disabled) { console.log("A"); return; }
		if (this.travel.magnitude > 0.5) { console.log("B"); return; }
		if (Vector.distance(this.x, this.y, targ.x, targ.y) > 50) { console.log("C"); return; }
				// stage.ctx.font = "9pt Arial";
				// stage.ctx.fillText("Moving too fast to land!",10,590);
		if (!this.paused) {
			openDialog('dialogBoard');
		}
	}

	map() {
		// Allow star map to open even when paused (when landed)
		openDialog('dialogStarmap');
		return true;
	}

	playerInfo() {
		if (!this.paused) {
			openDialog('dialogPlayer');
		}
	}

	missionInfo() {
		if (!this.paused) {
			openDialog('dialogInfo');
		}
	}

	/**
	 * Get the hyperspace navigation path.
	 */
	getHyperNav(): number[] {
		return this.hyperNav;
	}

	/**
	 * Add a system to the hyperspace navigation path.
	 */
	addToHyperNav(systemId: number) {
		this.hyperNav.push(systemId);
	}

	/**
	 * Set the entire hyperspace navigation path.
	 */
	setHyperNav(path: number[]) {
		this.hyperNav = path;
	}

	/**
	 * Clear the hyperspace navigation path.
	 */
	clearHyperNav() {
		this.hyperNav = [];
	}
}
