"use strict";

import Ship   from './Ship';
import Vector from './Vector'

export default class Player extends Ship {
	constructor(shipType, data) {
		super(shipType, 0, data);
		this.targInd = -1;
		this.paused = false;
		this.hyperNav = null;
		this.weapInd = -1;
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
		if (!this.ai.nav) { return 1; }
		var dist = Vector.distance(this.x, this.y,
			this.ai.nav.x, this.ai.nav.y);

		if (dist < 50 && !this.paused) {
			if (this.travel.magnitude > 0.5) {
				// stage.ctx.font = "9pt Arial";
				// stage.ctx.fillText("Moving too fast to land!",10,590);
				return 2;
			}
			this.paused = true;
			$("#landButton").click();
			return 0;
		}
		return 3;
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
			this.paused = true;
			$("#boardButton").click();
		}
	}

	map() {
		if (!this.paused) {
			this.paused = true;
			$("#mapButton").click();
			return true;
		}
		return false;
	}

	playerInfo() {
		if (!this.paused) {
			this.paused = true;
			$("#playerButton").click();
		}
	}

	missionInfo() {
		if (!this.paused) {
			this.paused = true;
			$("#infoButton").click();
		}
	}
}
