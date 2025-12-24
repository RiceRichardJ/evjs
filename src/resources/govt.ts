/**
 * gövt Resource - Government/Faction Definitions
 *
 * The gövt resource defines the characteristics, relationships, and behavior
 * of factions/governments in EV. Governs diplomacy, combat behavior, legal
 * systems, and player reputation.
 *
 * Resource ID: Each major faction (Confederation, Rebellion, Pirates, etc.)
 *
 * Fields:
 *
 * name (STR#63): Name of this government
 *
 * flags (HEXWORD): Behavior flags controlling AI, bribery, law enforcement, etc.
 *
 * ally (WORD): ID of allied government (65535 for none)
 *
 * enemy (WORD): ID of enemy government (65535 for none)
 *
 * crimeTol (WORD): How quickly this govt forgives crimes (lower = longer memory)
 *
 * smugPenalty (WORD): Legal record penalty for smuggling illegal goods
 *
 * disabPenalty (WORD): Legal record penalty for disabling their ships
 *
 * boardPenalty (WORD): Legal record penalty for boarding their ships
 *
 * killPenalty (WORD): Legal record penalty for destroying their ships
 *
 * shootPenalty (WORD): Legal record penalty for firing on their ships
 *
 * initialRec (WORD): Initial player reputation with this government (negative
 *   values = hostile, positive = friendly)
 *
 * Flag bits (in flagsDecoded):
 * - attackPlayerInNonAlliedSystems: Ships attack player in neutral space
 * - retreatAt25Shields: Ships retreat when shields drop below 25%
 * - persShipsNoEscapePod: Përs ships don't get escape pods
 * - warshipsTakeBribes: Warships can be bribed
 * - freightersTakeBribes: Freighters can be bribed
 * - planetsTakeBribes: Planets accept bribes to clear legal record
 *
 * Usage:
 * - Player actions affect legal record with each government independently
 * - Ships check government relationships for auto-hostility
 * - Affects mission availability and planet services
 *
 * Source: Escape Velocity Resource Bible, Pages 9-10
 */

export type govt = {
	id: number;
	name: string;
	flags: string;
	ally: number;
	enemy: number;
	crimeTol: number;
	smugPenalty: number;
	disabPenalty: number;
	boardPenalty: number;
	killPenalty: number;
	shootPenalty: number;
	initialRec: number;
	flagsDecoded?: Record<string, boolean>;
};

const govt: govt[] = [
	{
			"id": 128,
			"name": "Confederation",
			"flags": "0x6312",
			"ally": 65535,
			"enemy": 129,
			"crimeTol": 50,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"attackPlayerInNonAlliedSystems": true,
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 129,
			"name": "Rebellion",
			"flags": "0x6200",
			"ally": 65535,
			"enemy": 128,
			"crimeTol": 75,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 130,
			"name": "Pirates",
			"flags": "0xD311",
			"ally": 65535,
			"enemy": 128,
			"crimeTol": -20,
			"smugPenalty": 0,
			"disabPenalty": 3,
			"boardPenalty": 5,
			"killPenalty": 10,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"xenophobic": true,
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"plunderBeforeDestroying": true,
				"planetsTakeBribes": true,
				"higherBribeDemands": true
			}
		},
		{
			"id": 131,
			"name": "Cydonian",
			"flags": "0x4210",
			"ally": 65535,
			"enemy": 132,
			"crimeTol": 100,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"retreatAt25Shields": true,
				"warshipsTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 132,
			"name": "Lethean",
			"flags": "0x4210",
			"ally": 65535,
			"enemy": 131,
			"crimeTol": 100,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"retreatAt25Shields": true,
				"warshipsTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 133,
			"name": "Militia",
			"flags": "0x4312",
			"ally": 65535,
			"enemy": -1,
			"crimeTol": 60,
			"smugPenalty": 5,
			"disabPenalty": 10,
			"boardPenalty": 15,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"attackPlayerInNonAlliedSystems": true,
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 134,
			"name": "Unexplored",
			"flags": "0x0800",
			"ally": 65535,
			"enemy": -1,
			"crimeTol": 32767,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 0,
			"killPenalty": 0,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"shipsStartDisabled": true
			}
		},
		{
			"id": 135,
			"name": "Astex",
			"flags": "0x6310",
			"ally": 128,
			"enemy": 129,
			"crimeTol": 50,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 136,
			"name": "Merchants",
			"flags": "0x0000",
			"ally": 65535,
			"enemy": -1,
			"crimeTol": 32767,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 0,
			"killPenalty": 0,
			"shootPenalty": 0,
			"initialRec": 0
		},
		{
			"id": 137,
			"name": "Mercenaries",
			"flags": "0x0310",
			"ally": 65535,
			"enemy": 130,
			"crimeTol": 60,
			"smugPenalty": 5,
			"disabPenalty": 10,
			"boardPenalty": 15,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true
			}
		},
		{
			"id": 138,
			"name": "Starbound Shipping",
			"flags": "0x0000",
			"ally": 65535,
			"enemy": 139,
			"crimeTol": 60,
			"smugPenalty": 5,
			"disabPenalty": 10,
			"boardPenalty": 15,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0
		},
		{
			"id": 139,
			"name": "Consolidated Express",
			"flags": "0x0000",
			"ally": 65535,
			"enemy": 138,
			"crimeTol": 60,
			"smugPenalty": 5,
			"disabPenalty": 10,
			"boardPenalty": 15,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0
		},
		{
			"id": 140,
			"name": "Aliens",
			"flags": "0x0401",
			"ally": 65535,
			"enemy": -1,
			"crimeTol": 0,
			"smugPenalty": 9999,
			"disabPenalty": 9999,
			"boardPenalty": 9999,
			"killPenalty": 9999,
			"shootPenalty": 9999,
			"initialRec": 0,
			"flagsDecoded": {
				"xenophobic": true,
				"cantHail": true
			}
		},
		{
			"id": 141,
			"name": "Derelicts",
			"flags": "0x0C00",
			"ally": 65535,
			"enemy": -1,
			"crimeTol": 32000,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 0,
			"killPenalty": 0,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"cantHail": true,
				"shipsStartDisabled": true
			}
		},
		{
			"id": 142,
			"name": "United Galactic Express",
			"flags": "0x0000",
			"ally": 65535,
			"enemy": 139,
			"crimeTol": 100,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 15,
			"shootPenalty": 20,
			"initialRec": 0
		},
		{
			"id": 143,
			"name": "Psycho Confederation",
			"flags": "0x6314",
			"ally": 65535,
			"enemy": 129,
			"crimeTol": 50,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"alwaysAttacksPlayer": true,
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 144,
			"name": "Escort Rebellion",
			"flags": "0x6240",
			"ally": 65535,
			"enemy": 128,
			"crimeTol": 75,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 145,
			"name": "Escort Confederation",
			"flags": "0x6350",
			"ally": 65535,
			"enemy": 129,
			"crimeTol": 50,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 146,
			"name": "Psycho Rebellion",
			"flags": "0x6204",
			"ally": 65535,
			"enemy": 128,
			"crimeTol": 75,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"alwaysAttacksPlayer": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 147,
			"name": "Psycho ConEx",
			"flags": "0x0024",
			"ally": 65535,
			"enemy": 138,
			"crimeTol": 60,
			"smugPenalty": 5,
			"disabPenalty": 10,
			"boardPenalty": 15,
			"killPenalty": 20,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"alwaysAttacksPlayer": true,
				"ignoreInDoGoodSamaritan": true
			}
		},
		{
			"id": 148,
			"name": "Psycho Astex",
			"flags": "0x6314",
			"ally": 128,
			"enemy": 129,
			"crimeTol": 50,
			"smugPenalty": 3,
			"disabPenalty": 5,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 3,
			"initialRec": 0,
			"flagsDecoded": {
				"alwaysAttacksPlayer": true,
				"retreatAt25Shields": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 149,
			"name": "Traitor Confederation",
			"flags": "0x6332",
			"ally": 129,
			"enemy": -1,
			"crimeTol": 50,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 0,
			"killPenalty": 0,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"attackPlayerInNonAlliedSystems": true,
				"retreatAt25Shields": true,
				"ignoreInDoGoodSamaritan": true,
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		},
		{
			"id": 150,
			"name": "Psycho Aliens",
			"flags": "0x0505",
			"ally": 65535,
			"enemy": -1,
			"crimeTol": 0,
			"smugPenalty": 9999,
			"disabPenalty": 9999,
			"boardPenalty": 9999,
			"killPenalty": 9999,
			"shootPenalty": 9999,
			"initialRec": 0,
			"flagsDecoded": {
				"xenophobic": true,
				"alwaysAttacksPlayer": true,
				"persShipsNoEscapePod": true,
				"cantHail": true
			}
		},
		{
			"id": 152,
			"name": "Hunters",
			"flags": "0x0008",
			"ally": 65535,
			"enemy": 130,
			"crimeTol": 9999,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 0,
			"killPenalty": 0,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"neverAttacksPlayer": true
			}
		},
		{
			"id": 153,
			"name": "NoEP Rebellion",
			"flags": "0x6300",
			"ally": 65535,
			"enemy": 128,
			"crimeTol": 75,
			"smugPenalty": 0,
			"disabPenalty": 0,
			"boardPenalty": 10,
			"killPenalty": 25,
			"shootPenalty": 0,
			"initialRec": 0,
			"flagsDecoded": {
				"persShipsNoEscapePod": true,
				"warshipsTakeBribes": true,
				"freightersTakeBribes": true,
				"planetsTakeBribes": true
			}
		}
];

export default govt;
