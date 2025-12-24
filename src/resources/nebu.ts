/**
 * nëbu Resource - Nebula Definitions
 *
 * The nëbu resource defines nebulae (and asteroid belts) that appear on the
 * star map. Nebulae can hide systems and create visual variety.
 *
 * Resource ID: Each nebula or asteroid belt
 *
 * Fields:
 *
 * name (STR#63): Name of this nebula
 *
 * x (WORD): X coordinate of nebula's top-left corner on star map
 *
 * y (WORD): Y coordinate of nebula's top-left corner on star map
 *
 * w (WORD): Width of nebula in pixels
 *
 * h (WORD): Height of nebula in pixels
 *
 * showNCB (STR#255): NCB (test expression) that must be true for nebula to appear
 *
 * setWhenExplored (STR#255): NCB (set expression) to execute when player explores this nebula
 *
 * Usage:
 * - Nebulae appear as semi-transparent colored regions on star map
 * - Can hide star systems until explored
 * - Often mark dangerous or special regions of space
 *
 * Source: Escape Velocity Resource Bible, Page 19
 */

export type nebu = {
	id: number;
	name: string;
	x: number;
	y: number;
	w: number;
	h: number;
	showNCB: string;
	setWhenExplored: string;
};

const nebu: nebu[] = [
	{
			"id": 128,
			"name": "Serpens Nebula",
			"x": 100,
			"y": -100,
			"w": 128,
			"h": 128,
			"showNCB": "",
			"setWhenExplored": ""
		},
		{
			"id": 129,
			"name": "Trugati Asteroid Belt",
			"x": -50,
			"y": 100,
			"w": 87,
			"h": 86,
			"showNCB": "",
			"setWhenExplored": ""
		}
];

export default nebu;
