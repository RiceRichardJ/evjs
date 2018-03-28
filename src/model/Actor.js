"use strict";

import Vector from './Vector';

/**
 * Any space object.
 */
export default class Actor {
	constructor(spob) {
		this.x = 0.0;
		this.y = 0.0;
		this.travel = new Vector(-90.0, 0.0);
		this.thrust = new Vector(-90.0, 0.0);
		this.speed  = 0.0;
		this.turn   = 0.0;
		this.sprite = new Image();
		this.born   = new Date();
		this.lifespan = -1;
		this.className = 'Actor';
		if (spob) {
			this.sprite.src = spob.sprite;
			this.className = 'Spob';
			this.name   = spob.name;
		}
		this.dead = false;
		this.color = '#0f0';
	}

	/**
	 * Apply Thrust.
	 */
	applyThrust() {
		if (this.dead) { return; }
		
		// Sum thust and travel vects to find new travel vect.
		var xNewVect = this.travel.getX() + this.thrust.getX();
		var yNewVect = this.travel.getY() + this.thrust.getY();

		// Apply sum to our travel vect.
		this.travel.setXY(xNewVect, yNewVect);

		// Scale down the speed
		if (this.travel.magnitude > this.speed) {
			this.travel.magnitude = this.speed;
		}
	}

	/**
	 * Apply Travel.
	 */
	applyTravel() {
		this.x += this.travel.getX();
		this.y += this.travel.getY();
	}

	/**
	 * Act. This is called each frame, for each actor.
	 */
	act() {
		if (this.lifespan > 0 &&
				(new Date()).getTime() > this.born.getTime() + this.lifespan) {
			this.die();
		} else {
			this.applyTravel();
		}
	}

	/**
	 * Die.
	 */
	die() {
		this.dead = true;
	}
}