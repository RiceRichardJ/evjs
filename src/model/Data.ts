"use strict";

import jsonboom from '../json/boom';
import jsonchar from '../json/char';
import jsoncron from '../json/cron';
import jsondesc from '../json/desc';
import dude, { Dude, DudeId } from '../resources/dude' // import jsondude from '../json/dude';
import jsonflet from '../json/flet';
import jsongovt from '../json/govt';
import jsonjunk from '../json/junk';
import jsonmisn from '../json/misn';
import jsonnebu from '../json/nebu';
import jsonoops from '../json/oops';
import jsonoutf from '../json/outf';
import jsonpers from '../json/pers';
import jsonroid from '../json/roid';
import jsonship, { ShipType } from '../json/ship';
import jsonsnd  from '../json/snd';
import spin, { Spin } from '@/resources/spin'; // import jsonspin from '../json/spin';
import spob, { Spob } from '../resources/spob'; // import jsonspob from '../json/spob';
import syst, { Syst } from '../resources/syst'; // import jsonsyst from '../json/syst';
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
	dudes: Record<DudeId, Dude> = {};
	flets: any[] = [];
	govts: any[] = [];
	junks: any[] = [];
	misns: any[] = [];
	nebus: any[] = [];
	oopss: any[] = [];
	outfs: any[] = [];
	perss: any[] = [];
	roids: any[] = [];
	ships: ShipType[] = [];
	snds: Record<number, any> = {};
	spins: Record<number, Spin> = {};
	spobs: Record<number, Spob> = {};
	systs: Record<number, Syst> = {};
	weaps: any[] = [];
	fps: number = 0;
	sMod: number = 0;
	aMod: number = 0;
	tMod: number = 0;
	gMod: number = 0;
	// rebelCruiser: any;
	// cannon: any;
	// laserCannon: any;
	// protonCannon: any;
	// neutronCannon: any;
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
		this.dudes = dude;
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
		this.spins = spin;
		this.spobs = spob;
		this.systs = syst;
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
		
		// Use actual spob data from JSON (Earth = ID 128, Mars = ID 130)
		const earthData = this.spobs[128];
		const marsData = this.spobs[130];

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
