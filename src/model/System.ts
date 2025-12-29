"use strict";

import Actor     from './Actor';;
import { Syst } from '@/resources/syst';
import Ship from './Ship';
import Data from './Data';
import Vector from './Vector';

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

		const dudeIds = System.generateDudeIds(this.syst);
		const shipIds = dudeIds.map(dudeId => System.generateShipsForDude(dudeId));

		console.log('dudeIds', dudeIds);
		console.log('shipIds', shipIds);

		this.ships = shipIds.map(shipId => {
			console.log(Data.ships[shipId], Data);
			const ship = new Ship(Data.ships[shipId]);
			const angle = 360 * Math.random();
			const v = new Vector(angle, (500 * Math.random()));
			ship.x = v.getX();
			ship.y = v.getY();
			ship.thrust.degrees = angle + 180;
			ship.ai.nav = this.spobs[0];

			return ship;
		});
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

	private static generateShipsForDude(dudeId: number): number {
		let sumShipProb = 0;
		const r = Math.trunc(Math.random() * 100); // 0-99

		for (let i = 0; i < 4; i++) {
			const ship = Data.dudes[dudeId].shipTypes[i];
			const prob = Data.dudes[dudeId].probability[i];
			
			sumShipProb += prob;
			if (r < sumShipProb) {
				return ship
			}
		}
	}

	// TODO - move to utils
	private static getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; 
		// The maximum and the minimum are both inclusive
	}


}