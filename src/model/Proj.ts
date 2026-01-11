"use strict";

import {Constants as C} from './Data';
import Actor  from './Actor';
import Data   from './Data';
import Vector from './Vector';
import { Weap } from '@/resources/weap';
import Point from './Point';
import Ship from './Ship';

const tempWeapSpins = {
	400 : {
		src : "images/sprites/Small Explosion.png"
	},  401 : {
		src : "images/sprites/Medium Explosion.png"
	},  402 : {
		src : "images/sprites/Large Explosion.png"
	},  500 : {
		src : "images/sprites/Box.png"
	},  800 : {
		src : "images/sprites/Asteroid.png"
	},  801 : {
		src : "images/sprites/Large Asteroid.png"
	}, 3000 : {
		src : "images/sprites/Laser.png"
	}, 3001 : {
		src : "images/sprites/Neutron.png"
	}, 3002 : {
		src : "images/sprites/Proton.png"
	}, 3003 : {
		src : "images/sprites/Torpedo.png"
	}, 3004 : {
		src : "images/sprites/Missile.png"
	}, 3005 : {
		src : "images/sprites/Mass Dart.png"
	}, 3006 : {
		src : "images/sprites/Heavy Rocket.png"
	}, 3007 : {
		src : "images/sprites/Bomb.png"
	}, 3008 : {
		src : "images/sprites/Javelin.png"
	}, 3009 : {
		src : "images/sprites/Flare.png"
	}, 3010 : {
		src : "images/sprites/Seeker.png"
	}, 3063 : {
		src : "images/sprites/Forklift.png"
	}
}

/**
 * Projectile Class.
 * Constructor and instance variables.
 */
export default class Proj extends Actor {
	sender: any;
	target: any;
	sound: HTMLAudioElement;

	constructor(
		public readonly type: Weap, 
		xPos: number, 
		yPos: number, 
		dir: number, 
		sender: Ship, 
		target: Point
	) {
		super();
		
		this.speed  = type.speed * C.sMod;
		this.turn   = type.turn  * C.tMod;
		this.x      = xPos;
		this.y      = yPos;
		this.thrust = new Vector(dir, 1000);// /*type.accel*/ 1000 * C.aMod);
		this.travel = new Vector(dir, type.speed * C.sMod);
		this.born   = new Date();	// why???
		
		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
		this.sender = sender;
		this.target = target;
		this.spin = [6,6];
		this.lifespan = type.duration * C.f2ms;
		
		this.sound  = new Audio();//"sounds/" + Data.snds[this.type.sound]);

		// temporary
		// if (type.name.match(/laser/i)) {
		// 	this.color = "#0f0";
		// 	this.sprite.src = Data.spins[type.graphic].src;
		// } else if (type.name.match(/proton/i)) {
		// 	this.color = "#44f";
		// 	this.sprite.src = Data.spins[type.graphic].src;
		// } else if (type.name.match(/neutron/i)) {
		// 	this.color = "#f00";
		// } else if (type.secondary) {
		// 	this.color = "#ff0";
		// 	if (type.name.match(/missile/i)) {
		// 		this.sprite.src = Data.spins[type.graphic].src;
		// 	}
		// }

		// Assign Graphic
		// if (Data.spins[type.graphic]) {
		// 		this.sprite.src = Data.spins[type.graphic].src;
		if (tempWeapSpins[type.graphic]) {
			this.sprite.src = tempWeapSpins[type.graphic].src;
		} else {
			console.log(type);
		}
		
	}

	/**
	 * Turn projectile to the left.
	 */
	turnLeft() {
		if (this.dead) { return; }
		this.thrust.degrees -= this.turn;
		if (this.thrust.degrees < 0) { this.thrust.degrees += 360; }
	}

	/**
	 * Turn projectile to the right.
	 */
	turnRight() {
		if (this.dead) { return; }
		this.thrust.degrees += this.turn;
		if (this.thrust.degrees > 360) { this.thrust.degrees %= 360; }
	}

	/**
	 * Turn towards target.
	 * @param {*} target Target to turn towards.
	 */
	autoPilot() {
		if (this.target == null) { return; }
		var targetAngle = Vector.angleBetween(this, this.target);
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {	// this doesn't work right.
				this.turnRight();
			} else {
				this.turnLeft();
			}
		}
	}

	act() {
		super.act();
		this.autoPilot();
		this.applyThrust();
	}
}