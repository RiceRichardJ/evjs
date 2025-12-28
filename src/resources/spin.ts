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

export type Spin = {
	id: number;
	name: string;
	SpritesID: number;
	MasksID: number;
	xSize: number;
	ySize: number;
	xTiles: number;
	yTiles: number;
};

const spin: Record<number, Spin> = {
	128: {
		"id": 128,
		"name": "Shuttle",
		"SpritesID": 1000,
		"MasksID": 1001,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 6,
		"yTiles": 6
	},
	129: {
		"id": 129,
		"name": "Light Freighter",
		"SpritesID": 1002,
		"MasksID": 1003,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	130: {
		"id": 130,
		"name": "Bulk Freighter",
		"SpritesID": 1004,
		"MasksID": 1005,
		"xSize": 72,
		"ySize": 72,
		"xTiles": 6,
		"yTiles": 6
	},
	131: {
		"id": 131,
		"name": "Courier",
		"SpritesID": 1022,
		"MasksID": 1023,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	132: {
		"id": 132,
		"name": "Argosy",
		"SpritesID": 1028,
		"MasksID": 1029,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	133: {
		"id": 133,
		"name": "Frigate",
		"SpritesID": 1010,
		"MasksID": 1011,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	134: {
		"id": 134,
		"name": "Cruiser",
		"SpritesID": 1012,
		"MasksID": 1013,
		"xSize": 72,
		"ySize": 72,
		"xTiles": 6,
		"yTiles": 6
	},
	135: {
		"id": 135,
		"name": "Patrol Ship",
		"SpritesID": 1014,
		"MasksID": 1015,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	136: {
		"id": 136,
		"name": "Rapier",
		"SpritesID": 1016,
		"MasksID": 1017,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	137: {
		"id": 137,
		"name": "Lightning",
		"SpritesID": 1020,
		"MasksID": 1021,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	138: {
		"id": 138,
		"name": "Defender",
		"SpritesID": 1006,
		"MasksID": 1007,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	139: {
		"id": 139,
		"name": "Executive Transport",
		"SpritesID": 1008,
		"MasksID": 1009,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	140: {
		"id": 140,
		"name": "Liner",
		"SpritesID": 1018,
		"MasksID": 1019,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	141: {
		"id": 141,
		"name": "Rebel Destroyer",
		"SpritesID": 1024,
		"MasksID": 1025,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	142: {
		"id": 142,
		"name": "Rebel Cruiser",
		"SpritesID": 1026,
		"MasksID": 1027,
		"xSize": 64,
		"ySize": 64,
		"xTiles": 6,
		"yTiles": 6
	},
	143: {
		"id": 143,
		"name": "Kestrel",
		"SpritesID": 1030,
		"MasksID": 1031,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	144: {
		"id": 144,
		"name": "Manta",
		"SpritesID": 1032,
		"MasksID": 1033,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	145: {
		"id": 145,
		"name": "Scoutship",
		"SpritesID": 1034,
		"MasksID": 1035,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	146: {
		"id": 146,
		"name": "Corvette",
		"SpritesID": 1036,
		"MasksID": 1037,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	147: {
		"id": 147,
		"name": "Gunboat",
		"SpritesID": 1040,
		"MasksID": 1041,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	148: {
		"id": 148,
		"name": "Hawk",
		"SpritesID": 1042,
		"MasksID": 1043,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	149: {
		"id": 149,
		"name": "Alien Fighter",
		"SpritesID": 1044,
		"MasksID": 1045,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	150: {
		"id": 150,
		"name": "Alien Cruiser",
		"SpritesID": 1046,
		"MasksID": 1047,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	151: {
		"id": 151,
		"name": "Clipper",
		"SpritesID": 1048,
		"MasksID": 1049,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 6,
		"yTiles": 6
	},
	152: {
		"id": 152,
		"name": "Kestrel",
		"SpritesID": 1030,
		"MasksID": 1031,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 6,
		"yTiles": 6
	},
	153: {
		"id": 153,
		"name": "Escort Carrier",
		"SpritesID": 1004,
		"MasksID": 1005,
		"xSize": 72,
		"ySize": 72,
		"xTiles": 6,
		"yTiles": 6
	},
	191: {
		"id": 191,
		"name": "Escape Pod",
		"SpritesID": 1038,
		"MasksID": 1039,
		"xSize": 16,
		"ySize": 16,
		"xTiles": 6,
		"yTiles": 6
	},
	200: {
		"id": 200,
		"name": "Laser Bolt",
		"SpritesID": 210,
		"MasksID": 211,
		"xSize": 8,
		"ySize": 8,
		"xTiles": 6,
		"yTiles": 6
	},
	201: {
		"id": 201,
		"name": "Neutron Blast",
		"SpritesID": 200,
		"MasksID": 201,
		"xSize": 8,
		"ySize": 8,
		"xTiles": 6,
		"yTiles": 6
	},
	202: {
		"id": 202,
		"name": "Proton Bolt",
		"SpritesID": 202,
		"MasksID": 203,
		"xSize": 8,
		"ySize": 8,
		"xTiles": 6,
		"yTiles": 6
	},
	203: {
		"id": 203,
		"name": "Torpedo",
		"SpritesID": 204,
		"MasksID": 205,
		"xSize": 16,
		"ySize": 16,
		"xTiles": 6,
		"yTiles": 6
	},
	204: {
		"id": 204,
		"name": "Missile",
		"SpritesID": 206,
		"MasksID": 207,
		"xSize": 24,
		"ySize": 20,
		"xTiles": 6,
		"yTiles": 6
	},
	205: {
		"id": 205,
		"name": "Mass Dart",
		"SpritesID": 208,
		"MasksID": 209,
		"xSize": 8,
		"ySize": 8,
		"xTiles": 6,
		"yTiles": 6
	},
	206: {
		"id": 206,
		"name": "Rocket",
		"SpritesID": 212,
		"MasksID": 213,
		"xSize": 32,
		"ySize": 28,
		"xTiles": 6,
		"yTiles": 6
	},
	207: {
		"id": 207,
		"name": "Space Bomb",
		"SpritesID": 214,
		"MasksID": 215,
		"xSize": 16,
		"ySize": 16,
		"xTiles": 6,
		"yTiles": 6
	},
	208: {
		"id": 208,
		"name": "Javelin",
		"SpritesID": 216,
		"MasksID": 217,
		"xSize": 16,
		"ySize": 16,
		"xTiles": 6,
		"yTiles": 6
	},
	209: {
		"id": 209,
		"name": "Flare",
		"SpritesID": 218,
		"MasksID": 219,
		"xSize": 8,
		"ySize": 8,
		"xTiles": 6,
		"yTiles": 6
	},
	210: {
		"id": 210,
		"name": "Seeker Drone",
		"SpritesID": 220,
		"MasksID": 221,
		"xSize": 16,
		"ySize": 16,
		"xTiles": 6,
		"yTiles": 6
	},
	263: {
		"id": 263,
		"name": "Forklift",
		"SpritesID": 230,
		"MasksID": 231,
		"xSize": 16,
		"ySize": 16,
		"xTiles": 6,
		"yTiles": 6
	},
	300: {
		"id": 300,
		"name": "Planets",
		"SpritesID": 2000,
		"MasksID": 2041,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	301: {
		"id": 301,
		"name": "",
		"SpritesID": 2001,
		"MasksID": 2042,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	302: {
		"id": 302,
		"name": "",
		"SpritesID": 2002,
		"MasksID": 2043,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	303: {
		"id": 303,
		"name": "",
		"SpritesID": 2003,
		"MasksID": 2044,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	304: {
		"id": 304,
		"name": "",
		"SpritesID": 2004,
		"MasksID": 2045,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	305: {
		"id": 305,
		"name": "",
		"SpritesID": 2005,
		"MasksID": 2046,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	306: {
		"id": 306,
		"name": "",
		"SpritesID": 2006,
		"MasksID": 2047,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	307: {
		"id": 307,
		"name": "",
		"SpritesID": 2007,
		"MasksID": 2048,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	308: {
		"id": 308,
		"name": "",
		"SpritesID": 2008,
		"MasksID": 2049,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	309: {
		"id": 309,
		"name": "",
		"SpritesID": 2009,
		"MasksID": 2050,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	310: {
		"id": 310,
		"name": "",
		"SpritesID": 2010,
		"MasksID": 2051,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	311: {
		"id": 311,
		"name": "",
		"SpritesID": 2011,
		"MasksID": 2052,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	312: {
		"id": 312,
		"name": "",
		"SpritesID": 2012,
		"MasksID": 2053,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	313: {
		"id": 313,
		"name": "",
		"SpritesID": 2013,
		"MasksID": 2054,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	314: {
		"id": 314,
		"name": "",
		"SpritesID": 2014,
		"MasksID": 2055,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	315: {
		"id": 315,
		"name": "",
		"SpritesID": 2015,
		"MasksID": 2056,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	316: {
		"id": 316,
		"name": "",
		"SpritesID": 2016,
		"MasksID": 2057,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	317: {
		"id": 317,
		"name": "",
		"SpritesID": 2017,
		"MasksID": 2058,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	318: {
		"id": 318,
		"name": "",
		"SpritesID": 2018,
		"MasksID": 2059,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	319: {
		"id": 319,
		"name": "",
		"SpritesID": 2019,
		"MasksID": 2060,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	320: {
		"id": 320,
		"name": "",
		"SpritesID": 2020,
		"MasksID": 2061,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	321: {
		"id": 321,
		"name": "",
		"SpritesID": 2021,
		"MasksID": 2062,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	322: {
		"id": 322,
		"name": "",
		"SpritesID": 2022,
		"MasksID": 2063,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	323: {
		"id": 323,
		"name": "",
		"SpritesID": 2023,
		"MasksID": 2064,
		"xSize": 80,
		"ySize": 75,
		"xTiles": 1,
		"yTiles": 1
	},
	324: {
		"id": 324,
		"name": "Stations",
		"SpritesID": 2026,
		"MasksID": 2027,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 1,
		"yTiles": 1
	},
	325: {
		"id": 325,
		"name": "",
		"SpritesID": 2028,
		"MasksID": 2029,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 1,
		"yTiles": 1
	},
	326: {
		"id": 326,
		"name": "",
		"SpritesID": 2030,
		"MasksID": 2031,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 1,
		"yTiles": 1
	},
	327: {
		"id": 327,
		"name": "",
		"SpritesID": 2032,
		"MasksID": 2033,
		"xSize": 48,
		"ySize": 48,
		"xTiles": 1,
		"yTiles": 1
	},
	328: {
		"id": 328,
		"name": "Moons",
		"SpritesID": 2034,
		"MasksID": 2040,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 1,
		"yTiles": 1
	},
	329: {
		"id": 329,
		"name": "",
		"SpritesID": 2035,
		"MasksID": 2040,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 1,
		"yTiles": 1
	},
	330: {
		"id": 330,
		"name": "",
		"SpritesID": 2036,
		"MasksID": 2040,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 1,
		"yTiles": 1
	},
	331: {
		"id": 331,
		"name": "",
		"SpritesID": 2037,
		"MasksID": 2040,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 1,
		"yTiles": 1
	},
	332: {
		"id": 332,
		"name": "",
		"SpritesID": 2038,
		"MasksID": 2040,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 1,
		"yTiles": 1
	},
	333: {
		"id": 333,
		"name": "",
		"SpritesID": 2039,
		"MasksID": 2040,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 1,
		"yTiles": 1
	},
	400: {
		"id": 400,
		"name": "Small Explosion",
		"SpritesID": 4000,
		"MasksID": 4001,
		"xSize": 16,
		"ySize": 12,
		"xTiles": 8,
		"yTiles": 1
	},
	401: {
		"id": 401,
		"name": "Med Explosion",
		"SpritesID": 4002,
		"MasksID": 4003,
		"xSize": 32,
		"ySize": 26,
		"xTiles": 8,
		"yTiles": 1
	},
	402: {
		"id": 402,
		"name": "Large Explosion",
		"SpritesID": 4004,
		"MasksID": 4005,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 8,
		"yTiles": 1
	},
	500: {
		"id": 500,
		"name": "Boxes",
		"SpritesID": 500,
		"MasksID": 501,
		"xSize": 8,
		"ySize": 8,
		"xTiles": 6,
		"yTiles": 6
	},
	700: {
		"id": 700,
		"name": "Stars",
		"SpritesID": 700,
		"MasksID": 701,
		"xSize": 8,
		"ySize": 1,
		"xTiles": 2,
		"yTiles": 1
	},
	800: {
		"id": 800,
		"name": "Small Asteroids",
		"SpritesID": 800,
		"MasksID": 801,
		"xSize": 24,
		"ySize": 24,
		"xTiles": 5,
		"yTiles": 4
	},
	801: {
		"id": 801,
		"name": "Big Asteroids",
		"SpritesID": 802,
		"MasksID": 803,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 5,
		"yTiles": 6
	},
	900: {
		"id": 900,
		"name": "Main screen orbs",
		"SpritesID": 8005,
		"MasksID": 8006,
		"xSize": 32,
		"ySize": 32,
		"xTiles": 4,
		"yTiles": 1
	}
};

export default spin;
