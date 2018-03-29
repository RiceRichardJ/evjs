"use strict";

import Actor  from './Actor';
import Data   from './data';
import Vector from './Vector';

/**
 * Projectile Class.
 * Constructor and instance variables.
 */
export default class Proj extends Actor {
	constructor(type, xPos, yPos, dir, sender) {
		super();

		this.speed  = type.speed * Data.sMod;
		this.turn   = type.turn  * Data.tMod;
		this.x      = xPos;
		this.y      = yPos;
		this.thrust = new Vector(dir, type.accel * Data.aMod);
		this.travel = new Vector(dir, type.speed * Data.sMod);
		this.lifespan = type.lifespan;
		this.born   = new Date();	// why???

		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
		this.sender = sender;
	}
}