"use strict";

import Data   from './Data';
import Proj   from './Proj';

export default class Weapon {
	constructor(type, count, ammo) {
		this.type = type;
		this.count = count;
		this.ammo = ammo;
		this.lastFire = 0;
	}

	fire(targ, sender) {
		if (this.canFire(targ)) {
			return this.buildProjectile(targ, sender);
		} else {
			return null;
		}
	}

	canFire(targ) {
		var now = new Date().getTime();
		if (now < this.lastFire + (this.type.delay / this.count)) { console.log("A"); return false; }
		if (this.type.secondary && !targ) { /*console.log("B");*/ return false; }
		if (this.type.ammoType == "unlimited") {
			this.lastFire = now;
			return true;
		} else if (this.ammo > 0) {
			this.ammo--;
			this.lastFire = now;
			// console.log("D"); return true;
		} else {
			// console.log("E"); return false;
		}
	}

	buildProjectile(targ, sender) {
		var spread = Math.random() * (this.type.spread);// / 2);
		var targetAngle = 0;
		if (targ != null && this.type.type == 'turret') {
			targetAngle = Vector.intercept(this, myWeap.type.speed, targ);
		}
		if (this.type.type == "ship") {
			return new Ship(Data.ships[this.type.ammo - 127], 0, Data);
		} else {
			console.log("new proj");
			console.log(this.type);
			return new Proj(
				this.type, sender.x, sender.y, 
				sender.thrust.degrees + targetAngle + spread, sender, targ
			);
		}
		/**
		 * unguided
		 * guided
		 * turret
		 * ship
		 * rocket
		 * bomb
		 * beam
		 */
	}
}