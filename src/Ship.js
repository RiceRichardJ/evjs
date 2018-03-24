"use strict";

import Actor  from 'Actor';
import AI     from 'AI';
import Data   from 'data';
import Proj   from 'Proj';
import Vector from 'Vector';
import Weapon from 'Weapon';

/**
 * Ship class.
 */
export default class Ship extends Actor {

	/**
	 * Construct a Ship object given a type to base it off of.
	 * @param {ShipType} type The ship type to build off of.
	 * @param {number} num ID number; for debugging.
	 */
	constructor(type, num) {
		super();

		this.className = 'Ship';
		this.name   = type.name + ":" + num;
		this.speed  = type.speed * Data.speedModifier;
		this.turn   = type.turn  * Data.speedModifier;
		this.thrust.magnitude = type.accel * Data.speedModifier;

		//this.thrust = new Vector(-90.0, type.accel * speedModifier);
		this.shields   = 200;//type.shields; // 200;
		this.shieldsMax = 200;//type.shields; // 200;
		this.armor   = 100;
		this.mass    = 100;
		this.sprite.src = type.sprite;
		this.type = type;

		this.weapons = Ship.populateWeapons(type);
		this.ai = new AI();
		this.newProj = null; // Allow Stage to handle adding to projs array.
	}

	static populateWeapons(shipType) {
		var myWeaps = [];
		for (var battery of shipType.weapons) {
			var weapType = Data[battery.name];
			myWeaps.push(new Weapon(weapType, battery.count, battery.ammo));
		}
		return myWeaps;
	}

	/**
	 * Turn our ship to the left.
	 */
	turnLeft() {
		this.thrust.degrees -= this.turn;
	}

	/**
	 * Turn our ship to the right.
	 */
	turnRight() {
		this.thrust.degrees += this.turn;
	}

	/**
	 * Turn ship towards target.
	 * @param {*} target Target to turn ship towards. If none given, use AI's target.
	 */
	autoPilot(target = this.ai.target) {
		if (target == null) { return; }
		var targetAngle = Vector.angleBetween(this, target);
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {	// this doesn't work right.
				this.turnRight();
			} else {
				this.turnLeft();
			}
		}
	}
	
	/**
	 * Fire our weapons at the given target.
	 * @param {*} projs The PROJectiles array that we'll add our fired projectiles to.
	 * @param {*} targ The target to fire at.
	 */
	fire(targ) {
		for (var myWeap of this.weapons) {
			if (myWeap.fire()) {
				var spread = Math.random() * (myWeap.type.spread / 2);
				var targetAngle = 0;
				if (targ != null) {
					targetAngle = Vector.intercept(this, myWeap.type.speed, targ);
				}
				this.newProj = new Proj(
					myWeap.type, this.x, this.y, this.thrust.degrees + targetAngle + spread, this
				);
			}
		}
	}
	
	/**
	 * Take damage (and maybe die).
	 * @param {*} proj The projectile we're hit with.
	 */
	hit(proj) {
		this.shields -= proj.type.damage;
		this.ai.target = proj.sender;
		if (this.shields <= 0) {
			this.die();
		}
	}
}