"use strict";

import jsonboom from '../json/boom';
import jsonchar from '../json/char';
import jsoncron from '../json/cron';
import jsondesc from '../json/desc';
import jsondude from '../json/dude';
import jsonflet from '../json/flet';
import jsongovt from '../json/govt';
import jsonjunk from '../json/junk';
import jsonmisn from '../json/misn';
import jsonnebu from '../json/nebu';
import jsonoops from '../json/oops';
import jsonoutf from '../json/outf';
import jsonpers from '../json/pers';
import jsonroid from '../json/roid';
import jsonship from '../json/ship';
import jsonspob from '../json/spob';
import jsonsyst from '../json/syst';
import jsonweap from '../json/weap';

/**
 * "Global" Constants.
 */

var sMod = 0.002;
var aMod = 0.000005;
var tMod = 0.015;
var gMod = 1.0; // overall gameSpeedModifier

export default {
	booms: jsonboom.boom,
	chars: jsonchar.char,
	crons: jsoncron.cron,
	descs: jsondesc.desc,
	dudes: jsondude.dude,
	flets: jsonflet.flet,
	govts: jsongovt.govt,
	junks: jsonjunk.junk,
	misns: jsonmisn.misn,
	nebus: jsonnebu.nebu,
	oopss: jsonoops.oops,
	outfs: jsonoutf.outf,
	perss: jsonpers.pers,
	roids: jsonroid.roid,
	ships: jsonship.ship,
	spobs: jsonspob.spob,
	systs: jsonsyst.syst,
	weaps: jsonweap.weap,

	sMod: sMod * gMod,
	aMod: aMod * gMod,
	tMod: tMod * gMod,
	gMod: gMod,

	// "speed"  : 300,
	// "accel"  : 630,
	// "turn"   : 30,

	// Ship Type.
	rebelCruiser: {
		name:    "Rebel Cruiser",
		speed:    300,    //200,// * 2 * sMod,//5.0,
		accel:    630,    //280,// * 3 * aMod,//0.2,
		turn:      30,    //3.0 * 1.5, //4.0,
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
		speed: 1313,//500,
		accel:  0,
		lifespan: 20,//600,
		turn:    0,
		damage: 5,
		delay: 130,//100,
		spread: 10,
		color: '#0f0'
	},
	
	protonCannon: {
		speed: 1313,//500,
		accel:  0,
		lifespan: 600,
		turn:    0,
		damage: 10,
		delay: 100,
		spread: 10,
		color: '#00f'
	},
	
	neutronCannon: {
		speed: 1313,//500,
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