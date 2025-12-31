"use strict";

import FileSystem from "../utils/FileSystem";

/**
 * Save file.
 */
export default class Pilot {

	// General

	pilotName: string;
	currentDate: Date;
	systId: number;
	legalStatus: number;
	combatRating: number;
	shipId: number;
	fuelStatus: number;
	credits: number;

	// Cargo

	cargoTypeIds: number[]; // TODO define cargo type IDs. Would live at same level of "jünk" -> "carg" or "comd" or "stuf"
	cargoTypeQty: number[];

	// Extras

	outfitIds: number[];
	outfitQtys: number[];

	// Explored Map

	exploredSystems: Record<number, boolean>;
	// does this also need to store system specific govt friendliness ratings?

	// Flags
	// Todo - need to create a "mission bits" object to track this


	/**
	 * Save this pilot to file
	 */
	async save(): Promise<Pilot> {
		try {
			if (FileSystem.isSupported()) {
				await FileSystem.writeJSON('pilot.json', this);
			} else {
				localStorage.setItem('evjs-pilot', JSON.stringify(this));
			}
			return this
		} catch (error) {
			console.error('Save failed, using localStorage:', error);
			localStorage.setItem('evjs-pilot', JSON.stringify(this));
		}
	}

	/**
	 * Load pilot from file
	 * Returns null if no save exists
	 */
	static async load(): Promise<Pilot | null> {
		try {
			if (FileSystem.isSupported()) {
				const data = await FileSystem.readJSON('pilot.json');
				return Pilot.deserialize(data);
			} else {
				return Pilot.loadFromLocalStorage();
			}
		} catch (error) {
			console.log('Load failed, trying localStorage:', error);
			return Pilot.loadFromLocalStorage();
		}
	}

	/**
	 * Create a new pilot with default values and save it
	 */
	static async createNew(pilotName: string = "Pilot"): Promise<Pilot> {
		const pilot = new Pilot();

		// Set default values
		pilot.pilotName = pilotName;
		pilot.currentDate = new Date();
		pilot.currentDate.setFullYear(2275); // add 250 years // 1000 * 60 * 60 * 24 * 365 * 250
		pilot.systId = 128; // Levo
		pilot.legalStatus = 0;
		pilot.combatRating = 0;
		pilot.shipId = 128; // Shuttlecraft
		pilot.fuelStatus = 400;
		pilot.credits = 10000;
		pilot.cargoTypeIds = [];
		pilot.cargoTypeQty = [];
		pilot.outfitIds = [];
		pilot.outfitQtys = [];
		pilot.exploredSystems = {};

		return await pilot.save();
	}

	/**
	 * Helper: Deserialize data into Pilot instance
	 */
	private static deserialize(data: any): Pilot {
		const pilot = Object.assign(new Pilot(), data); 
		pilot.currentDate = data.currentDate ? new Date(data.currentDate) : data.currentDate;
		return pilot;
	}

	/**
	 * Helper: Load from localStorage
	 */
	private static loadFromLocalStorage(): Pilot | null {
		try {
			const stored = localStorage.getItem('evjs-pilot');
			if (!stored) return null;

			const data = JSON.parse(stored);
			console.log('Loaded from localStorage');
			return Pilot.deserialize(data);
		} catch {
			return null;
		}
	}
}