"use strict";

import Vector from './Vector';

/**
 * Any space object.
 */
export default class Actor {
	constructor(
		spob: any = null,
		public x: number = 0.0,
		public y: number = 0.0,
		public travel = new Vector(-90.0, 0.0),
		public thrust = new Vector(-90.0, 0.0),
		public speed: number = 0.0,
		public turn: number = 0.0,
		public sprite = new Image(),
		public born = new Date(),
		public lifespan: number = -1,
		public className: string = 'Actor',
		public dead: boolean = false,
		public dying: boolean = false,
		public color: string = '#0f0',
		public spin: number[] = [1, 1],
		public name: string = '',
	) {
		if (spob) {
			this.sprite.src = spob.sprite;
			this.className = 'Spob';
			this.name = spob.name;
		}
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
