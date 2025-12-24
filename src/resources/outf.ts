/**
 * oütf Resource - Outfit/Equipment Definitions
 *
 * The oütf resource defines purchasable outfits (weapons, shields, engines, etc.)
 * that can be added to ships. Each outfit modifies ship characteristics or adds
 * weapons/functionality.
 *
 * Resource ID: Each outfit type
 *
 * Fields:
 *
 * name (STR#63): Name of this outfit
 *
 * missionBit (WORD): Mission bit required to make this outfit available (-1 = always)
 *
 * mass (WORD): Mass in tons (reduces available cargo space)
 *
 * techLevel (WORD): Minimum tech level planet must have to sell this outfit
 *
 * modType (WORD): Type of modification this outfit provides:
 *   0 = special (no stat change, just grants access)
 *   1 = weapon (adds wëap via modVal)
 *   2 = ammo (increases ammo for weapon modVal)
 *   3 = shields (adds modVal to shield strength)
 *   4 = shield recharge (adds modVal to recharge rate)
 *   5 = armor (adds modVal to armor)
 *   6 = speed (adds modVal to max speed)
 *   7 = acceleration (adds modVal to acceleration)
 *   8 = turning (adds modVal to turn rate)
 *   9 = fuel (adds modVal to fuel capacity)
 *   10 = ramscoop (enables fuel scooping)
 *   11 = cargo space (adds modVal tons of cargo)
 *
 * modVal (WORD): Value for the modification (meaning depends on modType)
 *
 * max (WORD): Maximum number of this outfit that can be installed on one ship
 *   (use 255 for effectively unlimited)
 *
 * cost (DWORD): Purchase price in credits
 *
 * flags (HEXWORD): Outfit behavior flags
 *
 * Flag bits (in flagsDecoded):
 * - fixedGun: This is a fixed forward-firing gun
 * - turret: This is a turreted weapon
 * - cantSell: Player cannot sell this outfit once purchased
 * - reqsMissionComplete: Requires specific mission completion
 *
 * Usage:
 * - Outfits purchased at planets' Outfitter facility
 * - Apply their effects immediately to ship stats
 * - Some outfits prerequisite for others (e.g., turret requires turret base)
 * - Can be sold back for 75% of purchase price (unless cantSell flag set)
 *
 * Source: Escape Velocity Resource Bible, Pages 21-22
 */

export type outf = {
	id: number;
	name: string;
	missionBit: number;
	mass: number;
	techLevel: number;
	modType: number;
	modVal: number;
	max: number;
	cost: number;
	flags: string;
	flagsDecoded?: Record<string, boolean>;
};

const outf: outf[] = [
	{
			"id": 128,
			"name": "Laser Cannon",
			"missionBit": -1,
			"mass": 5,
			"techLevel": 1,
			"modType": 1,
			"modVal": 128,
			"max": 4,
			"cost": 5000,
			"flags": "0x0001",
			"flagsDecoded": {
				"fixedGun": true
			}
		},
		{
			"id": 129,
			"name": "Neutron Blaster",
			"missionBit": -1,
			"mass": 35,
			"techLevel": 4,
			"modType": 1,
			"modVal": 129,
			"max": 4,
			"cost": 30000,
			"flags": "0x0001",
			"flagsDecoded": {
				"fixedGun": true
			}
		},
		{
			"id": 130,
			"name": "Proton Bolt Cannon",
			"missionBit": -1,
			"mass": 8,
			"techLevel": 2,
			"modType": 1,
			"modVal": 130,
			"max": 5,
			"cost": 8500,
			"flags": "0x0001",
			"flagsDecoded": {
				"fixedGun": true
			}
		},
		{
			"id": 131,
			"name": "Torpedo Launcher",
			"missionBit": -1,
			"mass": 25,
			"techLevel": 3,
			"modType": 1,
			"modVal": 131,
			"max": 2,
			"cost": 20000,
			"flags": "0x0000"
		},
		{
			"id": 132,
			"name": "Torpedo",
			"missionBit": -1,
			"mass": 1,
			"techLevel": 2,
			"modType": 3,
			"modVal": 131,
			"max": 999,
			"cost": 2000,
			"flags": "0x0000"
		},
		{
			"id": 133,
			"name": "Missile Rack",
			"missionBit": -1,
			"mass": 10,
			"techLevel": 3,
			"modType": 1,
			"modVal": 132,
			"max": 2,
			"cost": 15000,
			"flags": "0x0000"
		},
		{
			"id": 134,
			"name": "Missile",
			"missionBit": -1,
			"mass": 1,
			"techLevel": 2,
			"modType": 3,
			"modVal": 132,
			"max": 999,
			"cost": 3500,
			"flags": "0x0000"
		},
		{
			"id": 135,
			"name": "Cargo Pod",
			"missionBit": -1,
			"mass": 20,
			"techLevel": 2,
			"modType": 2,
			"modVal": 10,
			"max": 2,
			"cost": 7500,
			"flags": "0x0000"
		},
		{
			"id": 136,
			"name": "Laser Turret",
			"missionBit": -1,
			"mass": 20,
			"techLevel": 4,
			"modType": 1,
			"modVal": 133,
			"max": 4,
			"cost": 20000,
			"flags": "0x0002",
			"flagsDecoded": {
				"turret": true
			}
		},
		{
			"id": 137,
			"name": "Proton Turret",
			"missionBit": -1,
			"mass": 30,
			"techLevel": 5,
			"modType": 1,
			"modVal": 134,
			"max": 4,
			"cost": 30000,
			"flags": "0x0002",
			"flagsDecoded": {
				"turret": true
			}
		},
		{
			"id": 138,
			"name": "Fighter Bay",
			"missionBit": -1,
			"mass": 50,
			"techLevel": 4,
			"modType": 1,
			"modVal": 146,
			"max": 1,
			"cost": 1000000,
			"flags": "0x0000"
		},
		{
			"id": 139,
			"name": "Hawk Light Fighter",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 4,
			"modType": 3,
			"modVal": 146,
			"max": 2,
			"cost": 250000,
			"flags": "0x0000"
		},
		{
			"id": 140,
			"name": "Mass Expansion",
			"missionBit": -1,
			"mass": -10,
			"techLevel": 3,
			"modType": 2,
			"modVal": -15,
			"max": 9999,
			"cost": 50000,
			"flags": "0x0000"
		},
		{
			"id": 141,
			"name": "Confed Patrol Ship",
			"missionBit": 66,
			"mass": 0,
			"techLevel": 5001,
			"modType": 3,
			"modVal": 136,
			"max": 4,
			"cost": 700000,
			"flags": "0x0000"
		},
		{
			"id": 142,
			"name": "Manta Light Fighter",
			"missionBit": 61,
			"mass": 0,
			"techLevel": 5000,
			"modType": 3,
			"modVal": 137,
			"max": 4,
			"cost": 180000,
			"flags": "0x0000"
		},
		{
			"id": 143,
			"name": "Lightning Fighter-Bomber",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 5,
			"modType": 3,
			"modVal": 138,
			"max": 2,
			"cost": 1000000,
			"flags": "0x0000"
		},
		{
			"id": 144,
			"name": "Mass Driver",
			"missionBit": 61,
			"mass": 40,
			"techLevel": 5000,
			"modType": 1,
			"modVal": 135,
			"max": 4,
			"cost": 80000,
			"flags": "0x0001",
			"flagsDecoded": {
				"fixedGun": true
			}
		},
		{
			"id": 145,
			"name": "Shield Capacitor",
			"missionBit": -1,
			"mass": 3,
			"techLevel": 200,
			"modType": 4,
			"modVal": 15,
			"max": 4,
			"cost": 90000,
			"flags": "0x0000"
		},
		{
			"id": 146,
			"name": "Shield Booster",
			"missionBit": -1,
			"mass": 2,
			"techLevel": 200,
			"modType": 5,
			"modVal": -2,
			"max": 1,
			"cost": 125000,
			"flags": "0x0000"
		},
		{
			"id": 147,
			"name": "Armaplast Plating",
			"missionBit": -1,
			"mass": 5,
			"techLevel": 2,
			"modType": 6,
			"modVal": 100,
			"max": 1,
			"cost": 30000,
			"flags": "0x0000"
		},
		{
			"id": 148,
			"name": "Durasteel Armor",
			"missionBit": -1,
			"mass": 20,
			"techLevel": 3,
			"modType": 6,
			"modVal": 250,
			"max": 1,
			"cost": 90000,
			"flags": "0x0000"
		},
		{
			"id": 149,
			"name": "Tritanium Armor",
			"missionBit": -1,
			"mass": 40,
			"techLevel": 200,
			"modType": 6,
			"modVal": 500,
			"max": 1,
			"cost": 1000000,
			"flags": "0x0000"
		},
		{
			"id": 150,
			"name": "Thrust Enhancement",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 300,
			"modType": 7,
			"modVal": 150,
			"max": 1,
			"cost": 100000,
			"flags": "0x0000"
		},
		{
			"id": 151,
			"name": "Engine Upgrade",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 300,
			"modType": 8,
			"modVal": 150,
			"max": 1,
			"cost": 150000,
			"flags": "0x0000"
		},
		{
			"id": 152,
			"name": "RCS Upgrade",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 300,
			"modType": 9,
			"modVal": 1,
			"max": 1,
			"cost": 180000,
			"flags": "0x0000"
		},
		{
			"id": 153,
			"name": "External Fuel Tank",
			"missionBit": -1,
			"mass": 5,
			"techLevel": 2,
			"modType": 12,
			"modVal": 100,
			"max": 2,
			"cost": 1500,
			"flags": "0x0000"
		},
		{
			"id": 154,
			"name": "Escape Pod",
			"missionBit": -1,
			"mass": 1,
			"techLevel": 1,
			"modType": 11,
			"modVal": 1,
			"max": 1,
			"cost": 5000,
			"flags": "0x0000"
		},
		{
			"id": 155,
			"name": "Density Scanner",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 3,
			"modType": 13,
			"modVal": 0,
			"max": 1,
			"cost": 8000,
			"flags": "0x0000"
		},
		{
			"id": 156,
			"name": "IFF Decoder",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 4,
			"modType": 14,
			"modVal": 0,
			"max": 1,
			"cost": 11000,
			"flags": "0x0000"
		},
		{
			"id": 157,
			"name": "Afterburner",
			"missionBit": -1,
			"mass": 5,
			"techLevel": 1,
			"modType": 15,
			"modVal": 0,
			"max": 1,
			"cost": 10000,
			"flags": "0x0000"
		},
		{
			"id": 158,
			"name": "Missile Jammer",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 400,
			"modType": 10,
			"modVal": 0,
			"max": 1,
			"cost": 30000,
			"flags": "0x0000"
		},
		{
			"id": 159,
			"name": "Rocket Launcher",
			"missionBit": -1,
			"mass": 30,
			"techLevel": 3,
			"modType": 1,
			"modVal": 139,
			"max": 2,
			"cost": 20000,
			"flags": "0x0000"
		},
		{
			"id": 160,
			"name": "Heavy Rocket",
			"missionBit": -1,
			"mass": 2,
			"techLevel": 2,
			"modType": 3,
			"modVal": 139,
			"max": 999,
			"cost": 1000,
			"flags": "0x0000"
		},
		{
			"id": 161,
			"name": "Bomb Rack",
			"missionBit": -1,
			"mass": 30,
			"techLevel": 500,
			"modType": 1,
			"modVal": 140,
			"max": 2,
			"cost": 20000,
			"flags": "0x0000"
		},
		{
			"id": 162,
			"name": "Space Bomb",
			"missionBit": -1,
			"mass": 2,
			"techLevel": 500,
			"modType": 3,
			"modVal": 140,
			"max": 999,
			"cost": 15000,
			"flags": "0x0000"
		},
		{
			"id": 163,
			"name": "Javelin Pod",
			"missionBit": -1,
			"mass": 5,
			"techLevel": 3,
			"modType": 1,
			"modVal": 141,
			"max": 2,
			"cost": 20000,
			"flags": "0x0000"
		},
		{
			"id": 164,
			"name": "Javelin Rocket",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 2,
			"modType": 3,
			"modVal": 141,
			"max": 999,
			"cost": 175,
			"flags": "0x0000"
		},
		{
			"id": 165,
			"name": "Regional Map",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 2,
			"modType": 16,
			"modVal": 2,
			"max": 999,
			"cost": 2500,
			"flags": "0x0000"
		},
		{
			"id": 166,
			"name": "Particle Beam",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 142,
			"max": 1,
			"cost": 1000000,
			"flags": "0x0004",
			"flagsDecoded": {
				"staysWhenTradeShips": true
			}
		},
		{
			"id": 167,
			"name": "Cloaking Device",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 17,
			"modVal": 1,
			"max": 1,
			"cost": 1000000,
			"flags": "0x0004",
			"flagsDecoded": {
				"staysWhenTradeShips": true
			}
		},
		{
			"id": 168,
			"name": "Meizner Ramscoop",
			"missionBit": -1,
			"mass": 5,
			"techLevel": 2,
			"modType": 18,
			"modVal": 80,
			"max": 1,
			"cost": 25000,
			"flags": "0x0000"
		},
		{
			"id": 169,
			"name": "Auto-Refueller",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 1,
			"modType": 19,
			"modVal": 0,
			"max": 1,
			"cost": 5000,
			"flags": "0x0000"
		},
		{
			"id": 170,
			"name": "Fighter Bay",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 138,
			"max": 1,
			"cost": 0,
			"flags": "0x0000"
		},
		{
			"id": 171,
			"name": "Rear Laser Turret",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 143,
			"max": 0,
			"cost": 0,
			"flags": "0x0000"
		},
		{
			"id": 172,
			"name": "Swivel Laser Cannon",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 144,
			"max": 0,
			"cost": 0,
			"flags": "0x0000"
		},
		{
			"id": 173,
			"name": "Tractor Beam",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 149,
			"max": 1,
			"cost": 1000000,
			"flags": "0x0004",
			"flagsDecoded": {
				"staysWhenTradeShips": true
			}
		},
		{
			"id": 174,
			"name": "Flare Launcher",
			"missionBit": -1,
			"mass": 1,
			"techLevel": 1,
			"modType": 1,
			"modVal": 150,
			"max": 1,
			"cost": 35000,
			"flags": "0x0000"
		},
		{
			"id": 175,
			"name": "Decoy Flare",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 1,
			"modType": 3,
			"modVal": 150,
			"max": 50,
			"cost": 250,
			"flags": "0x0000"
		},
		{
			"id": 176,
			"name": "Forklift",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 32767,
			"modType": 1,
			"modVal": 191,
			"max": 1,
			"cost": 9999999,
			"flags": "0x0004",
			"flagsDecoded": {
				"staysWhenTradeShips": true
			}
		},
		{
			"id": 177,
			"name": "Fighter Bay",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 136,
			"max": 1,
			"cost": 0,
			"flags": "0x0000"
		},
		{
			"id": 178,
			"name": "Fighter Bay",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 137,
			"max": 1,
			"cost": 0,
			"flags": "0x0000"
		},
		{
			"id": 179,
			"name": "Fighter Bay",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 9999,
			"modType": 1,
			"modVal": 145,
			"max": 1,
			"cost": 0,
			"flags": "0x0000"
		},
		{
			"id": 180,
			"name": "Fake ID Papers",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 597,
			"modType": 21,
			"modVal": 128,
			"max": 1,
			"cost": 2500000,
			"flags": "0x0000"
		},
		{
			"id": 181,
			"name": "Auto-Ejection System",
			"missionBit": -1,
			"mass": 0,
			"techLevel": 2,
			"modType": 20,
			"modVal": -1,
			"max": 1,
			"cost": 3000,
			"flags": "0x0000"
		}
];

export default outf;
