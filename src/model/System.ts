"use strict";

import Actor     from './Actor';
import AI        from './AI';
import Sidebar   from '../view/Sidebar';
import StarField from '../view/StarField';
import Vector    from './Vector';
import { Syst } from '@/resources/syst';
import Ship from './Ship';
import Data from './Data';

/**
 * Manages Actors(data), and renders them with Canvas.
 */
export default class System {

	syst: Syst;

	spobs: Actor[] = [];

	ships: Ship[] = [];

	constructor(syst: Syst) {
		this.init(syst);
	}

	init(syst: Syst) {
		this.syst = syst;
		console.log(`syst`, syst)
		this.spobs = syst.spobs.map(spobId => {
			console.log(`spobId`, spobId);
			const spobSpinId = 300 + Data.spobs[spobId].type;
			console.log(`spobSpinId`, spobSpinId);
			const spriteId = Data.spins[spobSpinId].SpritesID;

			console.log(`sprite`, `images/sprites/Spob ${spriteId}.png`);

			return new Actor({
				name: Data.spobs[spobId].name,
				x: Data.spobs[spobId].xPos,
				y: Data.spobs[spobId].yPos,
				sprite: `images/sprites/Spob ${spriteId}.png`,
				spob: Data.spobs[spobId]
			})
		});
		console.log(this.spobs)
		System.generateDudeIds(this.syst);
	}

	private static generateDudeIds(syst: Syst): number[] {
		const numShips = System.getRandomIntInclusive(syst.avgShips * 0.5, syst.avgShips * 1.5);
		const dudes = [];

		for (let i = 0; i < numShips; i++) {
			const r = Math.trunc(Math.random() * 100); // 0-99
			let sumDudeProb = 0;

			for (const [dudeId, dudeProb] of syst.dudes) {
				sumDudeProb += dudeProb;
				if (r < sumDudeProb) {
					dudes.push(dudeId);
					break;
				}
			}
		}

		return dudes;
	}

	private static generateShipsForDude() {

	}

	// TODO - move to utils
	private static getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; 
		// The maximum and the minimum are both inclusive
	}


}