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
	async save(): Promise<void> {
		try {
			if (FileSystem.isSupported()) {
				await FileSystem.writeJSON('pilot.json', this);
			} else {
				Pilot.saveToLocalStorage(this);
			}
		} catch (error) {
			console.error('Save failed, using localStorage:', error);
			Pilot.saveToLocalStorage(this);
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
	static async createNew(): Promise<Pilot> {
		const pilot = new Pilot();

		// Set default values
		pilot.pilotName = "Pilot";
		pilot.currentDate = new Date();
		pilot.systId = 129; // Sol
		pilot.legalStatus = 0;
		pilot.combatRating = 0;
		pilot.shipId = 141; // Rebel Destroyer
		pilot.fuelStatus = 400;
		pilot.credits = 10000;
		pilot.cargoTypeIds = [];
		pilot.cargoTypeQty = [];
		pilot.outfitIds = [];
		pilot.outfitQtys = [];
		pilot.exploredSystems = {};

		// Save the new pilot
		await pilot.save();

		return pilot;
	}

	/**
	 * Helper: Deserialize data into Pilot instance
	 */
	private static deserialize(data: any): Pilot {
		const pilot = Object.assign(new Pilot(), data);
		if (data.currentDate) {
			pilot.currentDate = new Date(data.currentDate);
		}
		return pilot;
	}

	/**
	 * Helper: Save to localStorage
	 */
	private static saveToLocalStorage(pilot: Pilot): void {
		localStorage.setItem('evjs-pilot', JSON.stringify(pilot));
		console.log('Saved to localStorage');
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