"use strict";

import {Constants as C} from './Data';
import Actor  from './Actor';
import Data   from './Data';
import Vector from './Vector';

/**
 * Projectile Class.
 * Constructor and instance variables.
 */
export default class Proj extends Actor {
	constructor(type, xPos, yPos, dir, sender, target) {
		super();

		this.speed  = type.speed * C.sMod;
		this.turn   = type.turn  * C.tMod;
		this.x      = xPos;
		this.y      = yPos;
		this.thrust = new Vector(dir, 1000);// /*type.accel*/ 1000 * C.aMod);
		this.travel = new Vector(dir, type.speed * C.sMod);
		this.born   = new Date();	// why???

		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
		this.sender = sender;
		this.target = target;
		this.spin = [6,6];
		this.lifespan = type.duration * C.f2ms;

		// temporary
		// if (type.name.match(/laser/i)) {
		// 	this.color = "#0f0";
		// 	this.sprite.src = Data.spins[type.graphic].src;
		// } else if (type.name.match(/proton/i)) {
		// 	this.color = "#44f";
		// 	this.sprite.src = Data.spins[type.graphic].src;
		// } else if (type.name.match(/neutron/i)) {
		// 	this.color = "#f00";
		// } else if (type.secondary) {
		// 	this.color = "#ff0";
		// 	if (type.name.match(/missile/i)) {
		// 		this.sprite.src = Data.spins[type.graphic].src;
		// 	}
		// }

		// Assign Graphic
		if (Data.spins[type.graphic]) {
			this.sprite.src = Data.spins[type.graphic].src;
		} else {
			console.log(type);
		}
		
	}

	/**
	 * Turn projectile to the left.
	 */
	turnLeft() {
		if (this.dead) { return; }
		this.thrust.degrees -= this.turn;
		if (this.thrust.degrees < 0) { this.thrust.degrees += 360; }
	}

	/**
	 * Turn projectile to the right.
	 */
	turnRight() {
		if (this.dead) { return; }
		this.thrust.degrees += this.turn;
		if (this.thrust.degrees > 360) { this.thrust.degrees %= 360; }
	}

	/**
	 * Turn towards target.
	 * @param {*} target Target to turn towards.
	 */
	autoPilot() {
		if (this.target == null) { return; }
		var targetAngle = Vector.angleBetween(this, this.target);
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {	// this doesn't work right.
				this.turnRight();
			} else {
				this.turnLeft();
			}
		}
	}

	act() {
		super.act();
		this.autoPilot();
		this.applyThrust();
	}
}