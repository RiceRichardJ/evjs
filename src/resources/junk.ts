/**
 * jünk Resource - Special/Unique Commodity Definitions
 *
 * The jünk resource defines special or unique commodities that can be traded
 * at specific planets. Unlike standard commodities, jünk items are often
 * mission-specific or regional specialties.
 *
 * Resource ID: Each unique commodity type
 *
 * Fields:
 *
 * name (STR#63): Name of this commodity
 *
 * soldAt (WORD): ID of spöb where this commodity is sold (-1 if not sold anywhere)
 *
 * boughtAt (WORD): ID of spöb where this commodity is bought (-1 if not bought anywhere)
 *
 * basePrice (WORD): Base price in credits per ton
 *
 * flags (HEXWORD): Special flags for this commodity
 *
 * Usage:
 * - Jünk items provide additional trading variety beyond standard goods
 * - Often used for mission-specific cargo deliveries
 * - Can create unique trading routes between specific planets
 *
 * Source: Escape Velocity Resource Bible, Page 11
 */

export type junk = {
	id: number;
	name: string;
	soldAt: number;
	boughtAt: number;
	basePrice: number;
	flags: string;
	flagsDecoded?: Record<string, boolean>;
};

const junk: junk[] = [
	{
			"id": 128,
			"name": "Stembolts",
			"soldAt": 174,
			"boughtAt": 129,
			"basePrice": 50,
			"flags": "0x0000"
		},
		{
			"id": 129,
			"name": "Keychains",
			"soldAt": 130,
			"boughtAt": 187,
			"basePrice": 8,
			"flags": "0x0000"
		},
		{
			"id": 130,
			"name": "Seafood",
			"soldAt": 134,
			"boughtAt": 163,
			"basePrice": 40,
			"flags": "0x0000"
		},
		{
			"id": 131,
			"name": "Root Extract",
			"soldAt": 138,
			"boughtAt": 183,
			"basePrice": 50,
			"flags": "0x0000"
		},
		{
			"id": 132,
			"name": "Lobsters",
			"soldAt": 139,
			"boughtAt": 188,
			"basePrice": 80,
			"flags": "0x0000"
		},
		{
			"id": 133,
			"name": "Viral Serum",
			"soldAt": 156,
			"boughtAt": 142,
			"basePrice": 680,
			"flags": "0x0000"
		},
		{
			"id": 134,
			"name": "Workdroids",
			"soldAt": 144,
			"boughtAt": 137,
			"basePrice": 340,
			"flags": "0x0000"
		},
		{
			"id": 135,
			"name": "Wood",
			"soldAt": 205,
			"boughtAt": 147,
			"basePrice": 270,
			"flags": "0x0000"
		},
		{
			"id": 136,
			"name": "Magazines",
			"soldAt": 233,
			"boughtAt": 149,
			"basePrice": 10,
			"flags": "0x0000"
		},
		{
			"id": 137,
			"name": "Camels",
			"soldAt": 194,
			"boughtAt": 150,
			"basePrice": 25,
			"flags": "0x0000"
		},
		{
			"id": 138,
			"name": "Appetizers",
			"soldAt": 168,
			"boughtAt": 159,
			"basePrice": 150,
			"flags": "0x0000"
		},
		{
			"id": 139,
			"name": "T-Shirts",
			"soldAt": 175,
			"boughtAt": 229,
			"basePrice": 15,
			"flags": "0x0000"
		},
		{
			"id": 140,
			"name": "Seaweed",
			"soldAt": 176,
			"boughtAt": 137,
			"basePrice": 38,
			"flags": "0x0000"
		},
		{
			"id": 141,
			"name": "Computers",
			"soldAt": 210,
			"boughtAt": 181,
			"basePrice": 45,
			"flags": "0x0000"
		},
		{
			"id": 142,
			"name": "Bug Juice",
			"soldAt": 189,
			"boughtAt": 207,
			"basePrice": 20,
			"flags": "0x0000"
		},
		{
			"id": 143,
			"name": "Parrots",
			"soldAt": 198,
			"boughtAt": -1,
			"basePrice": 10,
			"flags": "0x0001",
			"flagsDecoded": {
				"tribbles": true
			}
		},
		{
			"id": 144,
			"name": "Banderfrogs",
			"soldAt": 208,
			"boughtAt": 146,
			"basePrice": 42,
			"flags": "0x0000"
		},
		{
			"id": 145,
			"name": "Grain",
			"soldAt": 212,
			"boughtAt": 152,
			"basePrice": 26,
			"flags": "0x0000"
		},
		{
			"id": 146,
			"name": "Vegetables",
			"soldAt": 214,
			"boughtAt": 150,
			"basePrice": 17,
			"flags": "0x0000"
		},
////////////////////////////////////////////////////////////////////////////////
		{ "id": 0,  "name": "Food",       "soldAt": -1,  "boughtAt": -1,  "basePrice": 120,  "flags": "0x1000" },
		{ "id": 1,  "name": "Industrial", "soldAt": -1,  "boughtAt": -1,  "basePrice": 240,  "flags": "0x1000" },
		{ "id": 2,  "name": "Medical",    "soldAt": -1,  "boughtAt": -1,  "basePrice": 600,  "flags": "0x1000" },
		{ "id": 3,  "name": "Luxury",     "soldAt": -1,  "boughtAt": -1,  "basePrice": 420,  "flags": "0x1000" },
		{ "id": 4,  "name": "Metal",      "soldAt": -1,  "boughtAt": -1,  "basePrice": 180,  "flags": "0x1000" },
		{ "id": 5,  "name": "Equipment",  "soldAt": -1,  "boughtAt": -1,  "basePrice": 360,  "flags": "0x1000" },
];

export default junk;
