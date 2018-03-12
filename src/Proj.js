"use strict";

import Actor  from 'Actor';
import Data   from 'data';
import Vector from 'Vector';

/**
 * Projectile Class.
 * Constructor and instance variables.
 */
export default class Proj extends Actor {
	constructor(type, xPos, yPos, dir) {
		super();

		this.speed  = type.speed * Data.speedModifier;
		this.turn   = type.turn  * Data.speedModifier;
		//this.thrust.magnitude = type.accel * speedModifier;
		this.lifespan = type.lifespan;
		this.born = new Date();// + this.lifetime;
		this.x    = xPos;
		this.y    = yPos;
		this.thrust = new Vector(dir, type.accel * Data.speedModifier);
		//this.thrust.degrees = dir;
		this.travel = new Vector(dir, type.speed);//this.travel.degress = dir;
		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
	}
}