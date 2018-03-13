"use strict";

import Actor  from 'Actor';
import Data   from 'data';
import Proj   from 'Proj';
import Vector from 'Vector';

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
		console.log("Ship.constructor.type: " + JSON.stringify(type));

		this.className = 'Ship';
		this.name   = type.name + ":" + num;
		this.speed  = type.speed * Data.speedModifier;
		this.turn   = type.turn  * Data.speedModifier;
		this.thrust.magnitude = type.accel * Data.speedModifier;

		//this.thrust = new Vector(-90.0, type.accel * speedModifier);
		this.shields = 200;
		this.armor   = 100;
		this.mass    = 100;
		this.sprite.src = type.sprite;
		this.type = type;

		console.log("SPEED: " + this.speed);
		this.lastFire = new Date().getTime();
	}

	/**
	 * Turn our ship to the left.
	 */
	turnLeft() {
		this.thrust.degrees -= this.turn;
	}

	/**
	 * Turn our ship to the right.
	 */
	turnRight() {
		this.thrust.degrees += this.turn;
	}
	
	// TODO: Make a loop of "myWeap"s for all weaps.
	/**
	 * Fire our weapons at the given target.
	 * @param {*} projs The PROJectiles array that we'll add our fired projectiles to.
	 * @param {*} targ The target to fire at.
	 */
	fire(projs, targ) {

		//for (var i = 0; i < this.type.weapons.length; i++) {
			//var myWeap = Data[this.type.weapons[i]];//Data.laserCannon;
			var myWeap = Data.laserCannon;
			
			var spread = Math.random() * myWeap.spread - (myWeap.spread / 2);
			
			if (new Date().getTime() < this.lastFire + myWeap.delay) { return; }
			this.lastFire = new Date().getTime();
			
			if (targ != null) {
				// var targetAngle1 = Vector.angleBetween(this, targ);
				var targetAngle = Vector.intercept(this, myWeap.speed, targ);
				// console.log(targetAngle1 + " VS " + targetAngle);
				
				projs.push(new Proj(
					myWeap, this.x, this.y, this.thrust.degrees + targetAngle + spread, this
				));
			} else {
				// var projectile = new Proj(
					// myWeap, this.x, this.y, this.thrust.degrees + spread
				// );
				// projectile.travel = Vector.sum(projectile.travel, this.travel);
				// actors.push(projectile);
				
				projs.push(new Proj(
					myWeap, this.x, this.y, this.thrust.degrees + spread, this
				));
				/*actors[actors.length-1].travel.magnitude += this.travel.magnitude;
				console.log("me: " + this.travel.magnitude);
				console.log("bullet: " + actors[actors.length-1].travel.magnitude);*/
				//var proj = actors[actors.length-1];
				//actors[actors.length-1].travel = Vector.sum(actors[actors.length-1].travel, this.travel);
				//console.log("px: " + actors[actors.length-1].travel.getX() +", py: " + actors[actors.length-1].travel.getY());
			}
		
		//}

	};
	
	hit(proj) {
		this.shields -= proj.type.damage;
		if (this.shields <= 0) {
			this.die();
		}
	}

	// var lastFire = new Date().getTime();
	// class Ship extends Actor {
		// constructor(type) {
			// this.speed  = type.speed * speedModifier;
			// this.turn   = type.turn  * speedModifier;
			// this.thrust.magnitude = type.accel * speedModifier;//this.thrust = new Vector(-90.0, type.accel * speedModifier);
			// this.shields = 100;
			// this.armor   = 100;
			// this.mass    = 100;
			// this.sprite.src = type.sprite;
		// }
		// turnLeft() {
			// this.thrust.degrees -= this.turn;
		// }
		// turnRight() {
			// this.thrust.degrees += this.turn;
		// }
		// fire(actors) {
			// if (new Date().getTime() > lastFire + 400) {
				// lastFire = new Date().getTime();
				// console.log(this.x +","+ this.y +","+this.thrust.degrees);
				// actors.push(new Proj(laserCannon, this.x, this.y, this.thrust.degrees));
				// console.log("[SHOOT]"+this.thrust.degrees);
			// }
		// }
	// }
	
}