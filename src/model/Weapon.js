"use strict";

import {Constants as C} from './Data';
import Data   from './Data';
import Proj   from './Proj';
import Ship   from './Ship';
import Vector from './Vector';

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
		var delayMs = this.type.reload * C.f2ms;
		if (now < this.lastFire + (delayMs / this.count)) { return false; }
		// if (this.type.secondary && !targ) { /*console.log("B");*/ return false; }
		if (this.type.ammoType == "unlimited") {
			this.lastFire = now;
			return true;
		} else if (this.ammo > 0) {
			this.ammo--;
			this.lastFire = now;
			console.log("D"); return true;
		} else {
			console.log("E"); return false;
		}
	}

	buildProjectile(targ, sender) {
		var spread = Math.random() * (this.type.spread);// / 2);
		var targetAngle = 0;
		if (targ != null && this.type.type == 'turret') {
			targetAngle = Vector.intercept(sender, this.type.speed, targ);
		}
		if (this.type.type == "ship") {
// 			//return new Ship(Object.assign(...Data.ships[0], Data.ships[this.type.ammo - 127], Data));//Data.ships[this.type.ammo - 127], 0, Data);
// 			// return new Actor();//Data.ships[this.type.ammo - 127], 0, Data);
// Object.assign(...Data.ships[0], shipType) // wtf is this

			let shipType = Data.ships[this.type.ammo - 127]; console.log( shipType );
			let newShip = new Ship.default(shipType, 99, null); // the "default" part seems to be required because a javascript bug
			newShip.type = shipType;
			newShip.x = sender.x;
			newShip.y = sender.y;
			newShip.travel.degrees   = sender.travel.degrees;
			newShip.travel.magnitude = sender.travel.magnitude;
			newShip.thrust.degress   = sender.thrust.degrees + spread;
			newShip.thrust.magnitude = this.type.speed;
			newShip.ai.target = targ;
			newShip.ai.govt = sender.ai.govt;
			return newShip;
		} else {
			return new Proj(
				this.type, sender.x, sender.y, 
				sender.thrust.degrees + targetAngle + spread, sender, targ
			);
		}
		// else if BEAM {
		// 	return  new Beam()??
		// }
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