"use strict";

import {Constants as C} from './Data';
import Actor  from './Actor';
import Vector from './Vector';

/**
 * Projectile Class.
 * Constructor and instance variables.
 */
export default class Proj extends Actor {
	constructor(type, xPos, yPos, dir, sender) {
		super();

		this.speed  = type.speed * C.sMod;
		this.turn   = type.turn  * C.tMod;
		this.x      = xPos;
		this.y      = yPos;
		this.thrust = new Vector(dir, type.accel * C.aMod);
		this.travel = new Vector(dir, type.speed * C.sMod);
		this.lifespan = type.lifespan;
		this.born   = new Date();	// why???

		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
		this.sender = sender;
	}
}