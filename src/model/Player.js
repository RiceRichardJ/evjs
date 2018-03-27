"use strict";

import Data   from './Data';
import Ship   from './Ship';
import Vector from './Vector'

export default class Player extends Ship {
	constructor() {
		super(Data.rebelCruiser, 0);
		this.targInd = 0;
		this.landed = false;
	}

	cycleTargets(actors) {
		this.targInd++;
		if (this.targInd >= actors.length) { this.targInd = 0; }
		this.ai.target = actors[this.targInd];
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