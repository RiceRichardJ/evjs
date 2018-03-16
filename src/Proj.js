"use strict";

import Actor  from 'Actor';
import Data   from 'data';
import Vector from 'Vector';

/**
 * Projectile Class.
 * Constructor and instance variables.
 */
export default class Proj extends Actor {
	constructor(type, xPos, yPos, dir, sender) {
		super();

		this.speed  = type.speed * Data.speedModifier;
		this.turn   = type.turn  * Data.speedModifier;
		this.x    = xPos;
		this.y    = yPos;
		this.thrust = new Vector(dir, type.accel * Data.speedModifier);
		this.travel = new Vector(dir, type.speed);
		this.lifespan = type.lifespan;
		this.born = new Date();

		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
		this.sender = sender;
	}
}