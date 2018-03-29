"use strict";

import Ship   from './Ship';
import Vector from './Vector'

export default class Player extends Ship {
	constructor(shipType, data) {
		super(shipType, 0, data);
		this.targInd = -1;
		this.landed = false;
		this.hyperNav = null;
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
		// switch(target) {
		// 	case -1:
		// 		this.ai.nav = null; break;
		// 	case 0:
		// 		this.ai.nav = hyperNav; break
		// 	case 1: case 2: case 3: case 4:
		// 		this.ai.nav = break;
		// 	default:
		// }
	}

	land() {
		if (!this.ai.nav) { return 1; }
		var dist = Vector.distance(this.x, this.y,
			this.ai.nav.x, this.ai.nav.y);

		if (dist < 50 && !this.landed) {
			if (this.travel.magnitude > 0.5) {
				// stage.ctx.font = "9pt Arial";
				// stage.ctx.fillText("Moving too fast to land!",10,590);
				return 2;
			}
			this.landed = true;
			$("#landButton").click();
			return 0;
		}
		return 3;
	}
}