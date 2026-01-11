"use strict";

import Model from "@/Model";
import FileSystem from "../utils/FileSystem";

/**
 * Save file.
 */
export default class Pilot {

	// General

	pilotName: string = "Pilot";
	currentDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 250));
	systId: number = 128; // Levo
	spobId: number = 133;
	legalStatus: number = 0;
	combatRating: number = 0;
	shipId: number = 128; // Shuttlecraft
	fuelStatus: number = 400;
	credits: number = 10000;

	// Cargo

	cargoTypeIds: number[] = []; // TODO define cargo type IDs. Would live at same level of "jünk" -> "carg" or "comd" or "stuf"
	cargoTypeQty: number[] = [];

	// Extras

	outfitIds: number[] = [];
	outfitQtys: number[] = [];

	// Explored Map

	exploredSystems: Record<number, boolean> = {};
	exploredStellar: Record<number, boolean> = {};
	// does this also need to store system specific govt friendliness ratings?

	// Flags
	// Todo - need to create a "mission bits" object to track this

	/**
	 * Save this pilot to localStorage
	 */
	save(model: Model): Pilot {
		try {
			this.systId = model.currentSystem.syst.id;

			console.log(JSON.stringify(this), this);
			localStorage.setItem('evjs-pilot', JSON.stringify(this));
			console.log('Game saved');
			return this;
		} catch (error) {
			console.error('Save failed:', error);
			return this;
		}
	}

	/**
	 * Load pilot from localStorage
	 * Returns null if no save exists
	 */
	static load(): Pilot | null {
		try {
			const stored = localStorage.getItem('evjs-pilot');
			if (!stored) { return null; }

			const data = JSON.parse(stored);
			console.log('Game loaded', data);
			return Pilot.deserialize(data);
		} catch (error) {
			console.error('Load failed:', error);
			return null;
		}
	}

	/**
	 * Export pilot to file using File System Access API
	 */
	async export(): Promise<void> {
		try {
			if (!FileSystem.isSupported()) {
				throw new Error('File System Access API not supported. Use a Chromium-based browser.');
			}

			await FileSystem.writeJSON('pilot.json', this);
			console.log('Pilot exported to pilot.json');
		} catch (error) {
			console.error('Export failed:', error);
			throw error;
		}
	}

	/**
	 * Import pilot from file and save to localStorage
	 */
	static async import(): Promise<Pilot> {
		try {
			if (!FileSystem.isSupported()) {
				throw new Error('File System Access API not supported. Use a Chromium-based browser.');
			}

			const data = await FileSystem.readJSON('pilot.json');
			const pilot = Pilot.deserialize(data);
			pilot.save(); // Save to localStorage
			console.log('Pilot imported from pilot.json');
			return pilot;
		} catch (error) {
			console.error('Import failed:', error);
			throw error;
		}
	}

	/**
	 * Create a new pilot with default values and save it
	 */
	static createNew(pilotName: string = "Pilot"): Pilot {
		console.log("Create new pilot")

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

		return pilot.save();
	}

	/**
	 * Helper: Deserialize data into Pilot instance
	 */
	private static deserialize(data: any): Pilot {
		const pilot = Object.assign(new Pilot(), data);
		pilot.currentDate = data.currentDate ? new Date(data.currentDate) : data.currentDate;
		return pilot;
	}
}