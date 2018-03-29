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
export const Constants = {
	fps: 60,
	sMod: 0.02,
	aMod: 0.00005,
	tMod: 0.15,
	gMod: 1.0 // overall gameSpeedModifier
};
const C = Constants;

/**
 * Responsible for loading data files, plugins, and processing the data to be
 * game ready, including filling in default values and speed modifiers.
 */
export default class Data {
	constructor() {
		this.loadJson();
		this.loadTestData();
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
		this.spobs = jsonspob.spob;
		this.systs = jsonsyst.syst;
		this.weaps = jsonweap.weap;

		this.fps  = Constants.fps;
		this.sMod = Constants.sMod;
		this.aMod = Constants.aMod;
		this.tMod = Constants.tMod;
		this.gMod = Constants.gMod;
	}

	loadTestData() {
		this.rebelCruiser = {
			name:    "Rebel Cruiser",
			speed:    300,        //200,// * 2 * sMod,//5.0,
			accel:    630,        //280,// * 3 * aMod,//0.2,
			turn:      30,        //3.0 * 1.5, //4.0,
			shield:  5000,
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
		};

		this.laserCannon = {
			speed: 1313,//500,
			accel:  0,
			lifespan: 20 / C.fps * 1000,//600,
			turn:    0,
			damage: 5,
			delay: 130,//100,
			spread: 10,
			color: '#0f0'
		};
		
		this.protonCannon = {
			speed: 1313,//500,
			accel:  0,
			lifespan: 600,
			turn:    0,
			damage: 10,
			delay: 100,
			spread: 10,
			color: '#00f'
		};
		
		this.neutronCannon = {
			speed: 1313,//500,
			accel:  0,
			lifespan: 600,
			turn:    0,
			damage: 20,
			delay: 120,
			spread: 10,
			color: '#f00'
		};

		this.demoPlanet = {
			name: "Demo Planet",
			x: 100,
			y: 100,
			sprite: "images/sprites/Spob 2000.png",
		};
	}
};