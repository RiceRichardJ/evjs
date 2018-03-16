"use strict";

import Vector from 'Vector';

/**
 * AI Static Class. Contains static funtions that provide AI to Actors.
 */
export default class AI {
	constructor() {}

	/**
	 * Run AI on all ships of given list.
	 * @param {*} ships - List of ships.
	 */
	static runAll(ships) {
		for (var ship of ships) {
			if (ship.className == 'Ship') {
				this.go(ship, ship.target);
			}
		}
	}

	/**
	 * Fly ship towards target.
	 * @param {*} ship The ship to govern.
	 * @param {*} target The target to fly towards.
	 */
	static go(ship, target) {	
		// given two points, find angle between them.
		var targetAngle = Vector.radToDeg( Math.atan2(ship.y - target.y, ship.x - target.x) );
		targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = Vector.fixDeg(ship.thrust.degrees);
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);
		currentAngle = currentAngle - currentAngle;
		
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {
				ship.turnRight();
			} else {
				ship.turnLeft();
			}
		}
		
		var dist = Vector.distance(ship.x, ship.y, target.x, target.y);
		if (dist < 300) {
			AI.stop(ship);
			if (dist < 50 && ship.travel.magnitude < 0.5) {
				ship.travel.magnitude = 0;
			}
			return;
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
