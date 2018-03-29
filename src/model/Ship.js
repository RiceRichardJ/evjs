	"use strict";

	import Actor  from './Actor';
	import AI     from './AI';
	import Data   from './data';
	import Proj   from './Proj';
	import Vector from './Vector';
	import Weapon from './Weapon';

	/**
	 * Ship class.
	 */
	export default class Ship extends Actor {

		/**
		 * Construct a Ship object given a type to base it off of.
		 * @param {ShipType} type The ship type to build off of.
		 * @param {number} num ID number; for debugging.
		 */
		constructor(type, num) {
			super();

			console.log(Data.sMod +"|"+ Data.aMod +"|"+ Data.tMod);

			this.className = 'Ship';
			this.name             = type.name + ":" + num;
			this.speed            = type.speed * Data.sMod;
			this.turn             = type.turn  * Data.tMod;
			this.thrust.magnitude = type.accel * Data.aMod;

			console.log(this.speed +"|"+ this.thrust.magnitude +"|"+ this.turn);

			//this.thrust = new Vector(-90.0, type.accel * speedModifier);
			this.shields   = 500;//type.shields; // 200;
			this.shieldsMax = 500;//type.shields; // 200;
			this.armor   = 100;
			this.mass    = 100;
			this.sprite.src = type.sprite;
			this.type = type;

			this.weapons = Ship.populateWeapons(type);
			this.ai = new AI(this);
			this.newProj = null; // Allow Stage to handle adding to projs array.
		}

		static populateWeapons(shipType) {
			var myWeaps = [];
			for (var battery of shipType.weapons) {
				var weapType = Data[battery.name];
				myWeaps.push(new Weapon(weapType, battery.count, battery.ammo));
			}
			return myWeaps;
		}

		/**
		 * Turn our ship to the left.
		 */
		turnLeft() {
			if (this.dead) { return; }
			this.thrust.degrees -= this.turn;
		}

		/**
		 * Turn our ship to the right.
		 */
		turnRight() {
			if (this.dead) { return; }
			this.thrust.degrees += this.turn;
		}

		/**
		 * Turn ship to point backwards.
		 */
		reverse() {
			// TODO
		}

		/**
		 * Turn ship towards target.
		 * @param {*} target Target to turn ship towards. If none given, use AI's target.
		 */
		autoPilot(target) {
			if (target == null) { target = this.ai.target; }
			if (target == null) { target = this.ai.nav; }
			if (target == null) { return; }
			var targetAngle = Vector.angleBetween(this, target);
			if (this.name == this.type.name + ":0") {
				// console.log("targetAngle: " + targetAngle);
			}
			if (Math.abs(targetAngle) > 2) {
				if (targetAngle > 0) {	// this doesn't work right.
					this.turnRight();
				} else {
					this.turnLeft();
				}
			// 	return true;
			// } else {
			// 	return false;
			}
		}

		evade(target) {
			if (target == null) { return; }
			var targetAngle = Vector.angleBetween(this, target) + 180;
			if (Math.abs(targetAngle) > 2) {
				if (targetAngle > 0) {	// this doesn't work right.
					this.turnRight();
				} else {
					this.turnLeft();
				}
			}
		}

		orbit(target, radius = 300) {
			var distance = Vector.distance(this.x, this.y, target.x, target.y);
			//console.log(distance);
			if (distance > radius + 50) {
				this.autoPilot(target);
			}
			if (distance < radius - 50) {
				this.evade(target);
			}
			//this.applyThrust();
		}
		
		/**
		 * Fire our weapons at the given target.
		 * @param {*} projs The PROJectiles array that we'll add our fired projectiles to.
		 * @param {*} targ The target to fire at.
		 */
		fire(targ = this.ai.target) {
			if (this.dead) { return; }
			for (var myWeap of this.weapons) {
				if (myWeap.fire()) {
					var spread = Math.random() * (myWeap.type.spread / 2);
					var targetAngle = 0;
					if (targ != null) {
						targetAngle = Vector.intercept(this, myWeap.type.speed, targ);
					}
					this.newProj = new Proj(
						myWeap.type, this.x, this.y, this.thrust.degrees + targetAngle + spread, this
					);
				}
			}
		}
		
		/**
		 * Take damage (and maybe die).
		 * @param {*} proj The projectile we're hit with.
		 */
		hit(proj) {
			this.shields -= proj.type.damage;
			// this.ai.target = proj.sender;
			this.ai.hit(proj.sender, proj.type.damage);
			if (this.shields <= 0) {
				this.shields = 0;
				this.die();
			}
		}
	}