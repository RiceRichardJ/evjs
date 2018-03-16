"use strict";

import Actor  from 'Actor';
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
		this.shields = 200;
		this.armor   = 100;
		this.mass    = 100;
		this.sprite.src = type.sprite;
		this.type = type;

		// this.lastFire = new Date().getTime();
		this.weapons = Ship.populateWeapons(type);
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
	
	// TODO: Make a loop of "myWeap"s for all weaps.
	/**
	 * Fire our weapons at the given target.
	 * @param {*} projs The PROJectiles array that we'll add our fired projectiles to.
	 * @param {*} targ The target to fire at.
	 */
	fire(projs, targ) {
		for (var myWeap of this.weapons) {
			if (myWeap.fire()) {
				var spread = Math.random() * (myWeap.type.spread / 2);
				var targetAngle = 0;
				if (targ != null) {
					targetAngle = Vector.intercept(this, myWeap.type.speed, targ);
				}
				projs.push(new Proj(
					myWeap.type, this.x, this.y, this.thrust.degrees + targetAngle + spread, this
				));
			}
		}
	};
	
	hit(proj) {
		this.shields -= proj.type.damage;
		if (this.shields <= 0) {
			this.die();
		}
	}
}