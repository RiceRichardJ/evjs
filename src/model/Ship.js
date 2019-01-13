"use strict";

import {Constants as C} from './Data';
import Actor  from './Actor';
import AI     from './AI';
import Data   from './Data';
import Proj   from './Proj';
import Vector from './Vector';
import Weapon from './Weapon';

/**
 * Ship class.
 */
export default class Ship extends Actor {

	/**
	 * Construct a Ship object given a type to base it off of.
	 * @param {ShipType} type The ship type to build off of.
	 * @param {number} num ID number; for debugging.
	 */
	constructor(type, num, data) {
		console.log("SHIP CONSTRUCTOR...");
		super();
		this.type = type;
		this.className = 'Ship';

		this.name             = type.name + ":" + num;
		this.speed            = type.speed * C.sMod;
		this.turn             = type.turn  * C.tMod;
		this.thrust.magnitude = type.accel * C.aMod;
		//this.thrust = new Vector(-90.0, type.accel * speedModifier);

		this.shield    = type.shield[0];
		this.shieldMax = type.shield[0];
		this.armor     = type.armor[0];
		this.armorMax  = type.armor[0];
		this.sprite.src = type.sprite;
		
		this.weapons = [];
		this.populateWeapons(type, data);
		this.ai = new AI(this);
		this.newProj = []; // Allow Stage to handle adding to projs array.
		this.newShip = []; // ditto but for fighters
		this.spin = [6,6];
		this.disabled = false;
	}

	/**
	 * Build Weapon objects.
	 * @param {*} shipType 
	 */
	populateWeapons(shipType, data) {
		for (var weap of shipType.weapons) {
			var weapType = Data.weaps[parseInt(weap.id)-127];
			var newWeap = new Weapon(
				Object.assign({}, Data.weaps[0], weapType), 
				weap.count, weap.ammo
			);
			this.weapons.push(newWeap);
		}
	}

	/**
	 * Turn our ship to the left.
	 */
	turnLeft() {
		if (this.dead || this.disabled) { return; }
		this.thrust.degrees -= this.turn;
		if (this.thrust.degrees < 0) { this.thrust.degrees += 360; }
	}

	/**
	 * Turn our ship to the right.
	 */
	turnRight() {
		if (this.dead || this.disabled) { return; }
		this.thrust.degrees += this.turn;
		if (this.thrust.degrees > 360) { this.thrust.degrees %= 360; }
	}

	/**
	 * Turn ship to point backwards.
	 */
	reverse() {
		// TODO
	}

	/**
	 * Turn ship towards target.
	 * @param {*} target Target to turn ship towards. If none given, use AI's target.
	 */
	autoPilot(target) {
		if (target == null) { target = this.ai.target; }
		if (target == null) { target = this.ai.nav; }
		if (target == null) { return; }
		var targetAngle = Vector.angleBetween(this, target);
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {	// this doesn't work right.
				this.turnRight();
			} else {
				this.turnLeft();
			}
		// 	return true;
		// } else {
		// 	return false;
		}
	}

	evade(target) {
		if (target == null) { return; }
		var targetAngle = Vector.angleBetween(this, target) + 180;
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {	// this doesn't work right.
				this.turnRight();
			} else {
				this.turnLeft();
			}
		}
	}

	orbit(target, radius = 300) {
		var distance = Vector.distance(this.x, this.y, target.x, target.y);
		if (distance > radius + 50) {
			this.autoPilot(target);
		}
		if (distance < radius - 50) {
			this.evade(target);
		}
		//this.applyThrust();
	}
	
	/**
	 * Fire our weapons at the given target.
	 * @param {*} projs The PROJectiles array that we'll add our fired projectiles to.
	 * @param {*} targ The target to fire at.
	 */
	fire(targ = this.ai.target) {
		if (this.dead || this.disabled) { return; }
		for (var myWeap of this.weapons) {
			// console.log(myWeap);
			if (myWeap.type.beam) {
				this.beam();
				continue;
			}
			var projectile = myWeap.fire(targ, this);
			if (projectile) {
				if (projectile.className == "Proj") {
					this.newProj.push(projectile);
				} else if (projectile.className == "Ship") {
					this.newShip.push(projectile);
				} else if (projectile.className == "Beam") {
					this.beam();
				}
			}
			// if (myWeap.fire()) {
			// 	var spread = Math.random() * (myWeap.type.spread);// / 2);
			// 	var targetAngle = 0;
			// 	if (targ != null) {
			// 		targetAngle = Vector.intercept(this, myWeap.type.speed, targ);
			// 	}
			// 	this.newProj = new Proj(
			// 		myWeap.type, this.x, this.y, this.thrust.degrees + targetAngle + spread, this
			// 	);
			// }
		}
	}

	beam() {
		// fire new beam? draw new beam?????
	}
	
	/**
	 * Take damage (and maybe die).
	 * @param {*} proj The projectile we're hit with.
	 */
	hit(proj) {
		if (proj.type.damage[0] > this.shield) {
			this.armor -= proj.type.damage[1] - this.shield;
			this.shield = 0;
		} else {
			this.shield -= proj.type.damage[0];
		}
		
		// this.ai.target = proj.sender;
		this.ai.hit(proj.sender, proj.type.damage[0]);
		if (this.armor <= 0) {
			this.armor = 0;
			this.die();
		} else if (this.armor < this.armorMax / 3) {
			this.disabled = true;
		}
	}

	act() {
		super.act();
		this.rechargeShields();
		this.rechargeFuel();
		if (this.disabled) {
			this.travel.magnitude -= 20 * C.aMod;
			if (this.travel.magnitude < 0) { this.travel.magnitude = 0; }
		}
	}

	rechargeShields() {
		if (this.disabled || this.dead) { return; }
		if (this.shield < this.shieldMax) {
			this.shield += (this.type.shield[1] * C.rMod);
			if (this.shield > this.shieldMax) {
				this.shield = this.shieldMax;
			}
		}
	}

	rechargeFuel() {
		// if ramscoop...
	}
}