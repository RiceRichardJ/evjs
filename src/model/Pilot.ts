"use strict";

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


	save() {
		// write to file
	}

	load() {
		// read from file
	}
}