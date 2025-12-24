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
import jsonsnd  from '../json/snd';
import jsonspin from '../json/spin';
import jsonspob from '../json/spob';
import jsonsyst from '../json/syst';
import jsonweap from '../json/weap';

/**
 * "Global" Constants.
 */
const fps = 60;
const gMod = 1.0;
export const Constants = {
	fps: fps,
	gMod: gMod,
	tMod: gMod * 30 / fps / 10,    // Turn
	sMod: gMod * 30 / fps / 100,   // Speed
	aMod: gMod * 30 / fps / 10000, // Accel
	rMod: gMod * 30 / fps / 1000,  // Rech rate
	f2ms: 1 / 30 * 1000            // fr to ms
};
const C = Constants;


/**
 * Responsible for loading data files, plugins, and processing the data to be
 * game ready, including filling in default values and speed modifiers.
 */
class DataClass {
	booms: any[] = [];
	chars: any[] = [];
	crons: any[] = [];
	descs: any[] = [];
	dudes: any[] = [];
	flets: any[] = [];
	govts: any[] = [];
	junks: any[] = [];
	misns: any[] = [];
	nebus: any[] = [];
	oopss: any[] = [];
	outfs: any[] = [];
	perss: any[] = [];
	roids: any[] = [];
	ships: any[] = [];
	snds: Record<number, any> = {};
	spins: Record<number, any> = {};
	spobs: any[] = [];
	systs: any[] = [];
	weaps: any[] = [];
	fps: number = 0;
	sMod: number = 0;
	aMod: number = 0;
	tMod: number = 0;
	gMod: number = 0;
	rebelCruiser: any;
	cannon: any;
	laserCannon: any;
	protonCannon: any;
	neutronCannon: any;
	demoPlanet: any;
	demoPlanet2: any;

	constructor() {
		this.loadJson();
		this.convertValues();
		this.loadTestData();
		this.loadTargetImages();
	}

	loadTargetImages() {
		
	}

	loadJson() {
		this.booms = jsonboom.boom;
		this.chars = jsonchar.char;
		this.crons = jsoncron.cron;
		this.descs = jsondesc.desc;
		this.dudes = jsondude.dude;
		this.flets = jsonflet.flet;
		this.govts = jsongovt.govt;
		this.junks = jsonjunk.junk;
		this.misns = jsonmisn.misn;
		this.nebus = jsonnebu.nebu;
		this.oopss = jsonoops.oops;
		this.outfs = jsonoutf.outf;
		this.perss = jsonpers.pers;
		this.roids = jsonroid.roid;
		this.ships = jsonship.ship;
		this.snds  = jsonsnd.snd;
		this.spins = jsonspin.spin;
		this.spobs = jsonspob.spob;
		this.systs = jsonsyst.syst;
		this.weaps = jsonweap.weap;

		this.fps  = Constants.fps;
		this.sMod = Constants.sMod;
		this.aMod = Constants.aMod;
		this.tMod = Constants.tMod;
		this.gMod = Constants.gMod;
	}

	convertValues() {
		// for (var weap of this.weaps) {
		// 	weap.reload   *= C.f2ms;
		// 	weap.duration *= C.f2ms;
		// }
	}

	loadTestData() {
		// this.rebelCruiserzz = {
		// 	name:    "Rebel Cruiser",
		// 	speed:    300,        //200,// * 2 * sMod,//5.0,
		// 	accel:    630,        //280,// * 3 * aMod,//0.2,
		// 	turn:      30,        //3.0 * 1.5, //4.0,
		// 	shield:  5000,
		// 	armor:    800,
		// 	space:    120,
		// 	cargo:     60,
		// 	fuel:     400,
		// 	crew:     100,
		// 	length:   100,
		// 	mass:     100,
		// 	guns:       6,
		// 	turrets:    4,
		// 	cost:   14000000,
		// 	weapons: [
		// 		{"name":"laserCannon",   "count":1, "ammo":-1},
		// 		{"name":"protonCannon",  "count":1, "ammo":-1},
		// 		{"name":"neutronCannon", "count":1, "ammo":-1}
		// 	],
		// 	sprite: "content/RebelCruiserSprite.png"
		// };

		this.rebelCruiser = Object.assign({}, this.ships[0], this.ships[142-127]);
		// 384 x 384 -> 64
		// this.rebelCruiser.sprite = "images/sprites/Rebel Cruiser Masked Sprite.png"; //"content/RebelCruiserSprite.png";
		this.rebelCruiser.sprite = "images/sprites/Rebel Cruiser.png";
		// this.rebelCruiser.mask   = "images/sprites/Rebel Cruiser Mask.png";
			// this.rebelCruiser.weapons = [
			// 	{"name":"laserCannon",   "count":1, "ammo":-1},
			// 	{"name":"protonCannon",  "count":1, "ammo":-1},
			// 	{"name":"neutronCannon", "count":1, "ammo":-1}
			// ];

		this.cannon = {
			speed: 1313,//500,
			accel:  0,
			lifespan: 20 * C.f2ms, //20 / 30 * 1000,//600,
			turn:    0,
			spread: 10,
		};

		this.laserCannon = Object.assign({}, this.cannon, {
			damage: 5,
			delay: 130,
			color: "#0f0",
		});
		
		this.protonCannon = Object.assign({}, this.cannon, {
			damage: 10,
			delay: 150,
			color: "#00f",
		});

		this.neutronCannon = Object.assign({}, this.cannon, {
			damage: 20,
			delay: 170,
			color: "#f00",
		});

		// Use actual spob data from JSON (Earth = ID 128, Mars = ID 130)
		const earthData = this.spobs.find(s => s.id === 128);
		const marsData = this.spobs.find(s => s.id === 130);

		this.demoPlanet = {
			name: earthData ? earthData.name : "Demo Planet",
			x: 100,
			y: 100,
			sprite: "images/sprites/Spob 2000.png",
			spobData: earthData // Attach full spob data
		};

		this.demoPlanet2 = {
			name: marsData ? marsData.name : "Demo Planet 2",
			x: 100,
			y: 100,
			sprite: "images/sprites/Spob 2000.png",
			spobData: marsData // Attach full spob data
		};
	}
};

const Data = new DataClass();
export default Data;
