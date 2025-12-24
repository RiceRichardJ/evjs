/**
 * spïn Resource - Sprite and Mask Definitions
 *
 * The spïn resource defines the characteristics of a sprite or series of sprites,
 * and tells EV where to find the actual sprite or mask images.
 *
 * Resource ID: One for each ship, weapon, asteroid, explosion, etc.
 *
 * Fields:
 *
 * SpritesID (WORD): ID number of the sprites PICT resource which holds the
 *   sprite images for this object.
 *
 * MasksID (WORD): ID number of the sprites PICT resource which holds the mask
 *   images for this object.
 *
 * xSize (WORD): X (horizontal) size of each sprite (must match the actual sprite
 *   image size in the appropriate PICT resource).
 *
 * ySize (WORD): Y (vertical) size of each sprite (must match the actual sprite
 *   image size in the appropriate PICT resource).
 *
 * xTiles (WORD): Number of horizontal frames in each animation (ships generally
 *   have 6 or 36, depending on whether the classic 6-angle display or the newer
 *   36-angle display is used).
 *
 * yTiles (WORD): Number of vertical frames in each animation (most objects have
 *   6, except for beams which generally have only 1).
 *
 * Note: The sprite and mask PICT resources must be the same size and contain the
 * same number of frames.
 *
 * Source: Escape Velocity Resource Bible, Page 4
 */

export type spin = {
	id: number;
	name: string;
	SpritesID: number;
	MasksID: number;
	xSize: number;
	ySize: number;
	xTiles: number;
	yTiles: number;
};

const spin: spin[] = [
	{
			"id": 128,
			"name": "Shuttle",
			"SpritesID": 1000,
			"MasksID": 1001,
			"xSize": 24,
			"ySize": 24,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 129,
			"name": "Light Freighter",
			"SpritesID": 1002,
			"MasksID": 1003,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 130,
			"name": "Bulk Freighter",
			"SpritesID": 1004,
			"MasksID": 1005,
			"xSize": 72,
			"ySize": 72,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 131,
			"name": "Courier",
			"SpritesID": 1022,
			"MasksID": 1023,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 132,
			"name": "Argosy",
			"SpritesID": 1028,
			"MasksID": 1029,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 133,
			"name": "Frigate",
			"SpritesID": 1010,
			"MasksID": 1011,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 134,
			"name": "Cruiser",
			"SpritesID": 1012,
			"MasksID": 1013,
			"xSize": 72,
			"ySize": 72,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 135,
			"name": "Patrol Ship",
			"SpritesID": 1014,
			"MasksID": 1015,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 136,
			"name": "Rapier",
			"SpritesID": 1016,
			"MasksID": 1017,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 137,
			"name": "Lightning",
			"SpritesID": 1020,
			"MasksID": 1021,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 138,
			"name": "Defender",
			"SpritesID": 1006,
			"MasksID": 1007,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 139,
			"name": "Executive Transport",
			"SpritesID": 1008,
			"MasksID": 1009,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 140,
			"name": "Liner",
			"SpritesID": 1018,
			"MasksID": 1019,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 141,
			"name": "Rebel Destroyer",
			"SpritesID": 1024,
			"MasksID": 1025,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 142,
			"name": "Rebel Cruiser",
			"SpritesID": 1026,
			"MasksID": 1027,
			"xSize": 64,
			"ySize": 64,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 143,
			"name": "Kestrel",
			"SpritesID": 1030,
			"MasksID": 1031,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 144,
			"name": "Manta",
			"SpritesID": 1032,
			"MasksID": 1033,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 145,
			"name": "Scoutship",
			"SpritesID": 1034,
			"MasksID": 1035,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 146,
			"name": "Corvette",
			"SpritesID": 1036,
			"MasksID": 1037,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 147,
			"name": "Gunboat",
			"SpritesID": 1040,
			"MasksID": 1041,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 148,
			"name": "Hawk",
			"SpritesID": 1042,
			"MasksID": 1043,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 149,
			"name": "Alien Fighter",
			"SpritesID": 1044,
			"MasksID": 1045,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 150,
			"name": "Alien Cruiser",
			"SpritesID": 1046,
			"MasksID": 1047,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 151,
			"name": "Clipper",
			"SpritesID": 1048,
			"MasksID": 1049,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 152,
			"name": "Kestrel",
			"SpritesID": 1030,
			"MasksID": 1031,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 153,
			"name": "Escort Carrier",
			"SpritesID": 1004,
			"MasksID": 1005,
			"xSize": 72,
			"ySize": 72,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 191,
			"name": "Escape Pod",
			"SpritesID": 1038,
			"MasksID": 1039,
			"xSize": 16,
			"ySize": 16,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 200,
			"name": "Laser Bolt",
			"SpritesID": 210,
			"MasksID": 211,
			"xSize": 8,
			"ySize": 8,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 201,
			"name": "Neutron Blast",
			"SpritesID": 200,
			"MasksID": 201,
			"xSize": 8,
			"ySize": 8,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 202,
			"name": "Proton Bolt",
			"SpritesID": 202,
			"MasksID": 203,
			"xSize": 8,
			"ySize": 8,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 203,
			"name": "Torpedo",
			"SpritesID": 204,
			"MasksID": 205,
			"xSize": 16,
			"ySize": 16,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 204,
			"name": "Missile",
			"SpritesID": 206,
			"MasksID": 207,
			"xSize": 24,
			"ySize": 20,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 205,
			"name": "Mass Dart",
			"SpritesID": 208,
			"MasksID": 209,
			"xSize": 8,
			"ySize": 8,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 206,
			"name": "Rocket",
			"SpritesID": 212,
			"MasksID": 213,
			"xSize": 32,
			"ySize": 28,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 207,
			"name": "Space Bomb",
			"SpritesID": 214,
			"MasksID": 215,
			"xSize": 16,
			"ySize": 16,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 208,
			"name": "Javelin",
			"SpritesID": 216,
			"MasksID": 217,
			"xSize": 16,
			"ySize": 16,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 209,
			"name": "Flare",
			"SpritesID": 218,
			"MasksID": 219,
			"xSize": 8,
			"ySize": 8,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 210,
			"name": "Seeker Drone",
			"SpritesID": 220,
			"MasksID": 221,
			"xSize": 16,
			"ySize": 16,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 263,
			"name": "Forklift",
			"SpritesID": 230,
			"MasksID": 231,
			"xSize": 16,
			"ySize": 16,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 300,
			"name": "Planets",
			"SpritesID": 2000,
			"MasksID": 2041,
			"xSize": 80,
			"ySize": 75,
			"xTiles": 1,
			"yTiles": 1
		},
		{
			"id": 324,
			"name": "Stations",
			"SpritesID": 2026,
			"MasksID": 2027,
			"xSize": 48,
			"ySize": 48,
			"xTiles": 1,
			"yTiles": 1
		},
		{
			"id": 328,
			"name": "Moons",
			"SpritesID": 2034,
			"MasksID": 2040,
			"xSize": 24,
			"ySize": 24,
			"xTiles": 1,
			"yTiles": 1
		},
		{
			"id": 400,
			"name": "Small Explosion",
			"SpritesID": 4000,
			"MasksID": 4001,
			"xSize": 16,
			"ySize": 12,
			"xTiles": 8,
			"yTiles": 1
		},
		{
			"id": 401,
			"name": "Med Explosion",
			"SpritesID": 4002,
			"MasksID": 4003,
			"xSize": 32,
			"ySize": 26,
			"xTiles": 8,
			"yTiles": 1
		},
		{
			"id": 402,
			"name": "Large Explosion",
			"SpritesID": 4004,
			"MasksID": 4005,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 8,
			"yTiles": 1
		},
		{
			"id": 500,
			"name": "Boxes",
			"SpritesID": 500,
			"MasksID": 501,
			"xSize": 8,
			"ySize": 8,
			"xTiles": 6,
			"yTiles": 6
		},
		{
			"id": 700,
			"name": "Stars",
			"SpritesID": 700,
			"MasksID": 701,
			"xSize": 8,
			"ySize": 1,
			"xTiles": 2,
			"yTiles": 1
		},
		{
			"id": 800,
			"name": "Small Asteroids",
			"SpritesID": 800,
			"MasksID": 801,
			"xSize": 24,
			"ySize": 24,
			"xTiles": 5,
			"yTiles": 4
		},
		{
			"id": 801,
			"name": "Big Asteroids",
			"SpritesID": 802,
			"MasksID": 803,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 5,
			"yTiles": 6
		},
		{
			"id": 900,
			"name": "Main screen orbs",
			"SpritesID": 8005,
			"MasksID": 8006,
			"xSize": 32,
			"ySize": 32,
			"xTiles": 4,
			"yTiles": 1
		}
];

export default spin;
