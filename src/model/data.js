"use strict";

/**
 * "Global" Constants.
 */

var sMod = 0.025;
var aMod = 0.0003;
var speedModifier = 0.7;

 export default {
	sMod: sMod,
	aMod: aMod,
	speedModifier: speedModifier,

	// Ship Type.
	rebelCruiser: {
		name:    "Rebel Cruiser",
		speed:    200 * 2 * sMod,//5.0,
		accel:    280 * 3 * aMod,//0.2,
		turn:     3.0 * 1.5, //4.0,
		shields: 5000,
		armor:    800,
		space:    120,
		cargo:     60,
		fuel:     400,
		crew:     100,
		length:   100,
		mass:     100,
		guns:       6,
		turrets:    4,
		cost:   14000000,
		weapons: [
			{"name":"laserCannon",   "count":1, "ammo":-1},
			{"name":"protonCannon",  "count":1, "ammo":-1},
			{"name":"neutronCannon", "count":1, "ammo":-1}
		],
		sprite: "content/RebelCruiserSprite.png"
	},

	laserCannon: {
		speed: 500  * sMod,
		accel:  0,
		lifespan: 600,
		turn:    0,
		damage: 5,
		delay: 100,
		spread: 10,
		color: '#0f0'
	},
	
	protonCannon: {
		speed: 500  * sMod,
		accel:  0,
		lifespan: 600,
		turn:    0,
		damage: 10,
		delay: 100,
		spread: 10,
		color: '#00f'
	},
	
	neutronCannon: {
		speed: 500  * sMod,
		accel:  0,
		lifespan: 600,
		turn:    0,
		damage: 20,
		delay: 120,
		spread: 10,
		color: '#f00'
	},

	demoPlanet: {
		name: "Demo Planet",
		x: 100,
		y: 100,
		sprite: "images/sprites/Spob 2000.png",
	}
};