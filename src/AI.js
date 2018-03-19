"use strict";

import Vector from 'Vector';

/**
 * AI Static Class. Contains static funtions that provide AI to Actors.
 * Instances are used to store AI mood and combat states.
 */
export default class AI {
	constructor() {
		this.mood = AI.moods().passive;
		this.pers = AI.pers().brave;
		this.target = null;
	}

	static moods() {
		return Object.freeze({
			"passive":1, "aggressive":2, "disabled":3, "escort":4, "patrol":5, "":6, "":7
		});
	}
	
	static pers() {
		return Object.freeze({
			"wimpy":1, "brave":2, "warship":3, "escort":4, "fighter":5
		});
	}

	/**
	 * Run AI on all ships of given list.
	 * @param {*} ships - List of ships.
	 */
	static runAll(ships) {
		for (var ship of ships) {
			if (ship.className == 'Ship') {
				this.go(ship, ship.ai.target);
			}
		}
	}

	/**
	 * Fly ship towards target.
	 * @param {*} ship The ship to govern.
	 * @param {*} target The target to fly towards.
	 */
	static go(ship, target) {	
		ship.autoPilot(target);
		
		var dist = Vector.distance(ship.x, ship.y, target.x, target.y);
		if (dist < 300) {
			if (target.className == 'Spob') {
				AI.stop(ship);
				if (dist < 50 && ship.travel.magnitude < 0.5) {
					ship.travel.magnitude = 0;
				}
				return; // don't apply thrust.
			} else {
				ship.fire(target);
			}
		}

		ship.applyThrust();
	}
	
	/**
	 * Stop the ship.
	 * @param {*} ship The ship to stop. 
	 */
	static stop(ship) {
		var targetAngle  = ((Vector.fixDeg(ship.travel.degrees) + 180) % 360);
		var currentAngle =   Vector.fixDeg(ship.thrust.degrees);

		targetAngle  = (targetAngle - currentAngle);
		currentAngle = currentAngle - currentAngle;

		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {
				ship.turnRight();
			} else {
				ship.turnLeft();
			}
			return;
		}
		if (ship.travel.magnitude > 0) {
			//console.log("THRUST");
			ship.applyThrust();
		} else {
			//console.log("DRIFT");
		}
	}

}
