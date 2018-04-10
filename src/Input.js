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
			// alert(e.keyCode);
			if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
				e.preventDefault();
			}
			if (e.keyCode == 9) { // [TAB]
				e.preventDefault();
				this.model.player.cycleTargets(this.model.actors);
			} else if (e.keyCode == 87) { // [W]
				this.model.player.switchSecondary();
			} else if (e.keyCode == 16) { // [SHIFT]
				e.preventDefault();
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
			this.model.player.navSelect(1);
		}
		if (this.keyPressed["50"]) { // [2]
			this.model.player.navSelect(2);
		}
		if (this.keyPressed["51"]) { // [3]
			this.model.player.navSelect(3);
		}
		if (this.keyPressed["52"]) { // [4]
			this.model.player.navSelect(4);
		}
		if (this.keyPressed["65"]) { // [A]
			this.model.player.autoPilot();
		}
		if (this.keyPressed["72"]) { // [H]
			this.model.player.navSelect(0);
		}
		if (this.keyPressed["76"]) { // [L]
			var status = this.model.player.land();
			if (status == 2) {
				stage.ctx.font = "9pt Arial";	// TODO uhhhh
				stage.ctx.fillText("Moving too fast to land!",10,590);
			}
		}
		if (this.keyPressed["78"]) { // [N]
			this.model.player.navSelect(-1);
		}
		if (this.keyPressed["82"]) { // [R]
			//closestEnemy();
		}
	}
}

