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

}