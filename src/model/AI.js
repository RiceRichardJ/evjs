"use strict";

import Vector from './Vector';

/**
 * AI Static Class. Contains static funtions that provide AI to Actors.
 * Instances are used to store AI mood and combat states.
 */
export default class AI {
	constructor(ship) {
		this.myShip = ship;
		this.mood = AI.moods().passive;
		this.pers = AI.pers().brave;
		this.nav = null;
		this.target = null;
		this.suspects = {};
		this.enemies = {};
		this.landing = false;
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
//				this.go(ship, ship.ai.target);
				ship.ai.go();
			}
		}
	}

	/**
	 * Fly ship towards target.
	 * @param {*} ship The ship to govern.
	 * @param {*} target The target to fly towards.
	 */
	// static go(ship, target) {	
	// 	ship.autoPilot(target);
		
	// 	var dist = Vector.distance(ship.x, ship.y, target.x, target.y);
	// 	if (dist < 300) {
	// 		if (target.className == 'Spob') {
	// 			AI.stop(ship);
	// 			if (dist < 50 && ship.travel.magnitude < 0.5) {
	// 				ship.travel.magnitude = 0;
	// 			}
	// 			return; // don't apply thrust.
	// 		} else {
	// 			ship.fire(target);
	// 		}
	// 	}

	// 	ship.applyThrust();
	// }

	go() {
		if (this.target) {
			if (this.target.dead) {
				console.log("TARGET DEAD");
				this.target = null;
			} else {
				console.log("TARGET ALIVE");
				this.attack(this.target);
			}
		} else {
			console.log("NO TARGET");
			this.land();
		}
	}

// 	go() {
// 		if (Object.keys(this.enemies).length > 0) {
// 			// if (this.mood == AI.moods().passive) {
// 			// 	this.myShip.evade();
// 			// 	this.myShip.applyThrust();
// 			// } else if (this.mood == AI.moods().aggressive) {
// 				console.log("preprepreATTACK : " + JSON.stringify(this.enemies) );
// 				console.log("preprepreATTACK : " + JSON.stringify(Object.keys(this.enemies) ));
// 				console.log("prepreATTACK : " + JSON.stringify(Object.keys(this.enemies)[0] ));
// 				console.log("preATTACK : " + JSON.stringify(Object.keys(this.enemies)[0].x );
// 				this.attack( Object.keys(this.enemies)[0] );
// 				this.myShip.applyThrust();
// 			// }
// 		} else {
// //			this.myShip.autoPilot(this.nav);
// 			// this.myShip.orbit(this.nav, 300);
// 			this.land();
// 		}
// 	}

	/**
	 * Track all ships who've shot us. If they damage us too much, they become enemies.
	 * @param {Ship} suspect The ship that shot us.
	 * @param {number} damage How much damage they did.
	 */
	hit(ship, damage) {
		this.target = ship;
		// this.stopping = false;
		// if (!this.suspects[ship]) { this.suspects[ship] = damage; }
		// else { this.suspects[ship] += damage; }
		// if (this.suspects[ship] > this.myShip.shieldsMax * 0.05) {
		// 	this.enemies[ship] = this.suspects[ship];
		// 	console.log( "hit ship: " + ship.x +"|"+ ship.y );
		// 	delete this.suspects[ship];
		// }
	}

	// engage
	attack(target) {
		this.myShip.autoPilot(target);
		this.myShip.applyThrust();
		var dist = Vector.distance(this.myShip.x, this.myShip.y, target.x, target.y);
		if (dist < 300) {
			this.myShip.fire(target);
		}
	}

	retreat() {

	}
	
	orbit() {

	}

	/**
	 * 1. Approach.
	 * 2. Stop.
	 * 3. Final approach.
	 */
	land() {
		var dist = Vector.distance(this.myShip.x, this.myShip.y, this.nav.x, this.nav.y);
		// if (this.landing == 'stopping') { this.stop(this.nav, dist); }
		// else if (this.landing == 'final') { this.finalApproach(this.nav, dist); }
		if (dist < 300) {
			// this.landing = 'stopping';
			console.log("Try to stop...");
			this.stop(this.nav, dist);
		} else {
			// this.landing = 'approach';
			console.log("Fly towards planet...");
			this.myShip.autoPilot(this.nav);

				// var targetAngle = Vector.intercept(this.myShip, this.myShip.travel.magnitude, this.nav);
				// var currentAngle = Vector.fixDeg(this.myShip.thrust.degrees);
				// targetAngle = (targetAngle - currentAngle);
				// if (Math.abs(targetAngle) > 2) {	// turn
				// 	if (targetAngle > 2) {
				// 		this.myShip.turnRight();
				// 	} else {
				// 		this.myShip.turnLeft();
				// 	}
				// }

			this.myShip.applyThrust();
		}
	}

	/**
	 * Stop the ship on target.
	 */
	stop(target, dist) {
		var targetAngle  = ((Vector.fixDeg(this.myShip.travel.degrees) + 180) % 360);
		var currentAngle =   Vector.fixDeg(this.myShip.thrust.degrees);
		targetAngle = (targetAngle - currentAngle);

		if (Math.abs(targetAngle) > 2) {	// turn
			if (targetAngle > 0) {
				this.myShip.turnRight();
			} else {
				this.myShip.turnLeft();
			}
		} else {
			// if (this.myShip.travel.magnitude > 0.5) {	// slow
			// 	this.myShip.applyThrust();
			// } else {
				// //this.finalApproach(target, dist);
				// this.landing = 'final';
				if (dist > 50) {
					// if (! this.myShip.autoPilot(target)) {
						if (this.myShip.travel.magnitude > 2) {	// slow
							this.myShip.applyThrust();
						}
					// }
				} else {
					if (this.myShip.travel.magnitude > 0.5) {	// stop
						this.myShip.applyThrust();
					} else {
						this.myShip.travel.magnitude = 0;
					}
				}
			// }
		}
	}

	// finalApproach(target, dist) {
	// 	if (dist > 50) {
	// 		if (! this.myShip.autoPilot(target)) {
	// 			if (this.myShip.travel.magnitude < 2) {	// slow
	// 				this.myShip.applyThrust();
	// 			}
	// 		}
	// 	} else {
	// 		if (this.myShip.travel.magnitude > 0.5) {	// stop
	// 			this.myShip.applyThrust();
	// 		} else {
	// 			this.myShip.travel.magnitude = 0;
	// 		}
	// 	}
	// }

}
