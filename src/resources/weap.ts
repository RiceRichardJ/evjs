/**
 * wëap Resource - Weapon Definitions
 *
 * The wëap resource defines the characteristics of all weapons in EV, including
 * guns, missiles, turrets, beams, and fighter bays. Each weapon specifies damage,
 * speed, reload time, and special behaviors.
 *
 * Resource ID: Each weapon type (Laser Cannon=128, Neutron Blaster=129, etc.)
 *
 * Fields:
 *
 * name (STR#63): Weapon name
 *
 * massDmg (WORD): Mass damage (damage to armor/hull)
 *
 * energyDmg (WORD): Energy damage (damage to shields)
 *
 * reload (WORD): Reload time in frames between shots (30 frames = 0.5 seconds)
 *
 * speed (WORD): Projectile speed (arbitrary units)
 *
 * duration (WORD): Projectile lifetime in frames (determines maximum range)
 *
 * spread (WORD): Firing inaccuracy in degrees (0 = perfect accuracy)
 *
 * explosion (WORD): Explosion graphic ID when projectile impacts (-1 = none,
 *   0-2 = small/med/large explosions)
 *
 * graphic (WORD): Sprite ID for projectile (references spïn resource, -1 to -10
 *   for special beam graphics)
 *
 * sound (WORD): Sound ID for firing sound
 *
 * ammoType (WORD): Ammo/outfit ID required to fire this weapon (-1 for energy weapons,
 *   -1004 = ship's fuel as ammo)
 *
 * type (WORD): Weapon behavior type:
 *   -1 = unguided projectile
 *   0 = beam weapon
 *   1 = torpedo (slow seeking)
 *   2 = missile (fast seeking)
 *   3 = tractor beam
 *   4 = front turret
 *   5 = free-fall bomb
 *   6 = rocket pod
 *   7 = side turret (left/right)
 *   8 = rear turret
 *   99 = fighter/ship bay
 *
 * impact (WORD): Impact mass (for pushing ships, also used for beam intensity)
 *
 * proxRadius (WORD): Proximity fuse radius (projectile explodes when this close
 *   to target)
 *
 * blastRadius (WORD): Blast damage radius (all ships within this radius take damage)
 *
 * flags (HEXWORD): Weapon behavior flags
 *
 * Flag bits (in flagsDecoded):
 * - spinGraphic: Rotate projectile sprite to face direction of travel
 * - secondaryTrigger: Fired with secondary weapon key (not primary)
 * - fireSimultaneously: All shots of this weapon fire at once
 * - loopSound: Sound loops while weapon is firing (for beams)
 * - decoyForMissiles: Attracts missiles away from ship (flares)
 * (See Resource Bible pages 35-37 for complete flag list)
 *
 * Usage:
 * - Weapons installed on ships via oütf resources (modType=1)
 * - Energy weapons use ship power, ammo weapons require ammo outfits
 * - Turrets can track and fire at targets automatically
 * - Bays launch fighter ships that act as escorts
 *
 * Source: Escape Velocity Resource Bible, Pages 35-37
 */

export type weap = {
	id: number;
	name: string;
	massDmg: number;
	energyDmg: number;
	reload: number;
	speed: number;
	duration: number;
	spread: number;
	explosion: number;
	graphic: number;
	sound: number;
	ammoType: number;
	type: number;
	impact: number;
	proxRadius: number;
	blastRadius: number;
	flags: string;
	flagsDecoded?: Record<string, boolean>;
};

const weap: weap[] = [
	{
			"id": 128,
			"name": "Laser Cannon",
			"massDmg": 2,
			"energyDmg": 10,
			"reload": 20,
			"speed": 875,
			"duration": 30,
			"spread": 1,
			"explosion": 0,
			"graphic": 0,
			"sound": 0,
			"type": -1,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 129,
			"name": "Neutron Blaster",
			"massDmg": 10,
			"energyDmg": 30,
			"reload": 30,
			"speed": 325,
			"duration": 50,
			"spread": 2,
			"explosion": 0,
			"graphic": 1,
			"sound": 1,
			"type": -1,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 130,
			"name": "Proton Bolts",
			"massDmg": 10,
			"energyDmg": 10,
			"reload": 30,
			"speed": 850,
			"duration": 30,
			"spread": 3,
			"explosion": 0,
			"graphic": 2,
			"sound": 2,
			"type": -1,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 131,
			"name": "Torpedos",
			"massDmg": 150,
			"energyDmg": 75,
			"reload": 100,
			"speed": 600,
			"duration": 800,
			"spread": 0,
			"explosion": 1,
			"graphic": 3,
			"sound": 3,
			"ammoType": 3,
			"type": 1,
			"impact": 100,
			"proxRadius": 3,
			"blastRadius": 8,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 132,
			"name": "Missiles",
			"massDmg": 100,
			"energyDmg": 50,
			"reload": 100,
			"speed": 850,
			"duration": 175,
			"spread": 0,
			"explosion": 1,
			"graphic": 4,
			"sound": 4,
			"ammoType": 4,
			"type": 2,
			"impact": 30,
			"proxRadius": 3,
			"blastRadius": 5,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 133,
			"name": "Laser Turret",
			"massDmg": 0,
			"energyDmg": 10,
			"reload": 10,
			"speed": 875,
			"duration": 26,
			"spread": 8,
			"explosion": 0,
			"graphic": 0,
			"sound": 0,
			"type": 4,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 134,
			"name": "Proton Turret",
			"massDmg": 10,
			"energyDmg": 10,
			"reload": 10,
			"speed": 850,
			"duration": 26,
			"spread": 6,
			"explosion": 0,
			"graphic": 2,
			"sound": 2,
			"type": 4,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 135,
			"name": "Mass Driver",
			"massDmg": 30,
			"energyDmg": 0,
			"reload": 25,
			"speed": 350,
			"duration": 80,
			"spread": 1,
			"explosion": 0,
			"graphic": 5,
			"sound": 5,
			"type": -1,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 136,
			"name": "Patrol Ship Bay",
			"massDmg": -1,
			"energyDmg": -1,
			"reload": 125,
			"speed": 200,
			"duration": 30,
			"spread": 0,
			"explosion": -1,
			"graphic": -1,
			"sound": 6,
			"ammoType": 135,
			"type": 99,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 137,
			"name": "Manta Bay",
			"massDmg": -1,
			"energyDmg": -1,
			"reload": 15,
			"speed": 100,
			"duration": 50,
			"spread": 45,
			"explosion": -1,
			"graphic": -1,
			"sound": 8,
			"ammoType": 144,
			"type": 99,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0042",
			"flagsDecoded": {
				"secondaryTrigger": true,
				"fireSimultaneously": true
			}
		},
		{
			"id": 138,
			"name": "Lightning Bay",
			"massDmg": -1,
			"energyDmg": -1,
			"reload": 100,
			"speed": 275,
			"duration": 50,
			"spread": 0,
			"explosion": -1,
			"graphic": -1,
			"sound": 7,
			"ammoType": 137,
			"type": 99,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 139,
			"name": "Heavy Rockets",
			"massDmg": 225,
			"energyDmg": 110,
			"reload": 100,
			"speed": 700,
			"duration": 200,
			"spread": 0,
			"explosion": 1,
			"graphic": 6,
			"sound": 9,
			"ammoType": 11,
			"type": 6,
			"impact": 250,
			"proxRadius": 20,
			"blastRadius": 25,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 140,
			"name": "Space Bombs",
			"massDmg": 750,
			"energyDmg": 750,
			"reload": 40,
			"speed": 10,
			"duration": 1000,
			"spread": 30,
			"explosion": 2,
			"graphic": 7,
			"sound": 10,
			"ammoType": 12,
			"type": 5,
			"impact": 750,
			"proxRadius": 40,
			"blastRadius": 55,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 141,
			"name": "Javelin Rockets",
			"massDmg": 15,
			"energyDmg": 0,
			"reload": 10,
			"speed": 780,
			"duration": 100,
			"spread": 4,
			"explosion": 0,
			"graphic": 8,
			"sound": 11,
			"ammoType": 13,
			"type": -1,
			"impact": 20,
			"proxRadius": 12,
			"blastRadius": 12,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 142,
			"name": "Particle Beam",
			"massDmg": 10,
			"energyDmg": 0,
			"reload": 2,
			"speed": 16000,
			"duration": 2,
			"spread": 1,
			"explosion": 0,
			"graphic": -10,
			"sound": 12,
			"ammoType": -1004,
			"type": 0,
			"impact": 256,
			"proxRadius": 3,
			"blastRadius": 1,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 143,
			"name": "Rear Laser Turret",
			"massDmg": 0,
			"energyDmg": 10,
			"reload": 10,
			"speed": 875,
			"duration": 30,
			"spread": 6,
			"explosion": 0,
			"graphic": 0,
			"sound": 0,
			"type": 8,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 144,
			"name": "Swivel Laser Cannon",
			"massDmg": 0,
			"energyDmg": 10,
			"reload": 20,
			"speed": 875,
			"duration": 30,
			"spread": 8,
			"explosion": 0,
			"graphic": 0,
			"sound": 0,
			"type": 7,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 145,
			"name": "Gunboat Bay",
			"massDmg": -1,
			"energyDmg": -1,
			"reload": 125,
			"speed": 200,
			"duration": 30,
			"spread": 0,
			"explosion": -1,
			"graphic": -1,
			"sound": 6,
			"ammoType": 147,
			"type": 99,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 146,
			"name": "Hawk Fighter Bay",
			"massDmg": -1,
			"energyDmg": -1,
			"reload": 125,
			"speed": 200,
			"duration": 30,
			"spread": 0,
			"explosion": -1,
			"graphic": -1,
			"sound": 7,
			"ammoType": 148,
			"type": 99,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		},
		{
			"id": 147,
			"name": "Fusion Beam",
			"massDmg": 0,
			"energyDmg": 3,
			"reload": 2,
			"speed": 15000,
			"duration": 2,
			"spread": 1,
			"explosion": 0,
			"graphic": -6,
			"sound": 16,
			"type": 0,
			"impact": 1,
			"proxRadius": 1,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 148,
			"name": "Seeker Drones",
			"massDmg": 150,
			"energyDmg": 150,
			"reload": 180,
			"speed": 400,
			"duration": 800,
			"spread": 90,
			"explosion": 1,
			"graphic": 10,
			"sound": 15,
			"ammoType": 3,
			"type": 2,
			"impact": 25,
			"proxRadius": 3,
			"blastRadius": 8,
			"flags": "0x0043",
			"flagsDecoded": {
				"spinGraphic": true,
				"secondaryTrigger": true,
				"fireSimultaneously": true
			}
		},
		{
			"id": 149,
			"name": "Tractor Beam",
			"massDmg": 0,
			"energyDmg": 0,
			"reload": 2,
			"speed": 9000,
			"duration": 2,
			"spread": 4,
			"explosion": -1,
			"graphic": -9,
			"sound": 13,
			"type": 3,
			"impact": -1,
			"proxRadius": 3,
			"blastRadius": 1,
			"flags": "0x0012",
			"flagsDecoded": {
				"secondaryTrigger": true,
				"loopSound": true
			}
		},
		{
			"id": 150,
			"name": "Decoy Flares",
			"massDmg": 0,
			"energyDmg": 0,
			"reload": 28,
			"speed": 10,
			"duration": 95,
			"spread": 30,
			"explosion": 0,
			"graphic": 9,
			"sound": 14,
			"ammoType": 22,
			"type": 5,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0023",
			"flagsDecoded": {
				"spinGraphic": true,
				"secondaryTrigger": true,
				"decoyForMissiles": true
			}
		},
		{
			"id": 151,
			"name": "Alien Fighter Bay",
			"massDmg": -1,
			"energyDmg": -1,
			"reload": 30,
			"speed": 200,
			"duration": 15,
			"spread": 45,
			"explosion": -1,
			"graphic": -1,
			"sound": 7,
			"ammoType": 149,
			"type": 99,
			"impact": 0,
			"proxRadius": 0,
			"blastRadius": 0,
			"flags": "0x0042",
			"flagsDecoded": {
				"secondaryTrigger": true,
				"fireSimultaneously": true
			}
		},
		{
			"id": 152,
			"name": "Heavy Fusion Beam",
			"massDmg": 10,
			"energyDmg": 10,
			"reload": 2,
			"speed": 15000,
			"duration": 2,
			"spread": 1,
			"explosion": 0,
			"graphic": -8,
			"sound": 16,
			"type": 0,
			"impact": 128,
			"proxRadius": 3,
			"blastRadius": 0,
			"flags": "0x0000"
		},
		{
			"id": 191,
			"name": "Forklift",
			"massDmg": 1000,
			"energyDmg": 1000,
			"reload": 100,
			"speed": 500,
			"duration": 1200,
			"spread": 0,
			"explosion": 2,
			"graphic": 63,
			"sound": 23,
			"type": 2,
			"impact": 400,
			"proxRadius": 0,
			"blastRadius": 100,
			"flags": "0x0002",
			"flagsDecoded": {
				"secondaryTrigger": true
			}
		}
];

export default weap;
