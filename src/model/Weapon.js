"use strict";

export default class Weapon {
	constructor(type, count, ammo) {
		this.type = type;
		this.count = count;
		this.ammo = ammo;
		this.lastFire = 0;
	}

	fire() {
		var now = new Date().getTime();
		if (now < this.lastFire + this.type.delay) { return false; }
		if (this.ammo == -1) {
			this.lastFire = now;
			return true;
		}
		if (this.ammo > 0) {
			this.ammo--;
			this.lastFire = now;
			return true;
		} else {
			return false;
		}
	}
}