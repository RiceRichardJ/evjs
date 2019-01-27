"use strict";

import Model from './Model';

export default class Input {
	constructor(model = new Model()) {
		this.keyPressed = {};
		this.keyPrev = {};
		this.model = model;
		this.registerKeyListeners();
	}

	/**
	 * Register Key Listeners.
	 */
	registerKeyListeners() {
		document.addEventListener('keydown', function(e) {
			// console.log(e.keyCode);
			if([9, 16, 27, 32, 37, 38, 39, 40].includes(e.keyCode)) {
				e.preventDefault();
			}
			if (e.keyCode == 9) { // [TAB]
				this.model.player.cycleTargets(this.model.actors);
			} else if (e.keyCode == 87) { // [W]
				this.model.player.switchSecondary();
			} else if (e.keyCode == 16) { // [SHIFT]
				this.model.player.fireSecondary();
			}
			this.keyPressed[e.keyCode] = true;
		}.bind(this), false);

		document.addEventListener('keyup', function(e) {
			if (e.keyCode == 9) {
				e.preventDefault();
			}
			this.keyPressed[e.keyCode] = false;
		}.bind(this), false);
	}

	/**
	 * Controls: Key Listeners.
	 */
	poll() {
		if (this.keyPressed["27"]) { // [esc]
			$('.modal').modal('hide');
		}
		if (this.keyPressed["32"]) { // spacebar
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
			console.log($('#modalSpaceport').hasClass('in'));
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
		if (this.keyPressed["74"] || this.keyPressed["75"]) { // [J][K]
			// jettison cargo
		}
		if (this.keyPressed["76"]) { // [L]
			var status = this.model.player.land();
			if (status == 2) {
				stage.ctx.font = "9pt Arial";	// TODO uhhhh
				stage.ctx.fillText("Moving too fast to land!",10,590);
			}
		}
		if (this.keyPressed["77"]) { // [M]
			this.model.player.map();
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
	}
}

