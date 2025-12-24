/**
 * flët Resource - Fleet Definitions
 *
 * The flët resource defines pre-composed fleets of ships that travel together,
 * including a lead ship and up to 4 types of escort ships. Fleets maintain
 * formation and coordinate their actions.
 *
 * Resource ID: Referenced by sÿst resources and missions
 *
 * Fields:
 *
 * name (STR#63): Name of this fleet (for reference only)
 *
 * leadShip (WORD): ID of shïp resource for the lead/flagship
 *
 * ships (4 WORDs): IDs of shïp resources for escort types. -1 for unused slots.
 *
 * min (4 WORDs): Minimum number of each escort ship type
 *
 * max (4 WORDs): Maximum number of each escort ship type
 *
 * govt (WORD): ID of gövt resource this fleet belongs to
 *
 * linkSystem (WORD): ID of sÿst where this fleet travels to (-1 for random,
 *   10000 for no travel)
 *
 * appearOn (STR#63): Stellar object to appear near (planet/station name)
 *
 * hailQuote (WORD): ID of STR# resource for hail response (0 for default)
 *
 * flags (WORD): Fleet behavior flags
 *
 * Usage:
 * - Escorts stay in formation around lead ship
 * - Fleet as a whole shares government and behavior
 * - Lead ship determines overall fleet AI
 *
 * Source: Escape Velocity Resource Bible, Page 8
 */

export type flet = {
	id: number;
	name: string;
	leadShip: number;
	ships: number[];
	min: number[];
	max: number[];
	govt: number;
	linkSystem: number;
	appearOn: string;
	hailQuote: number;
	flags: number;
};

const flet: flet[] = [
	{
			"id": 128,
			"name": "Escorted Confed BF",
			"leadShip": 130,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 3, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": 10000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 129,
			"name": "Small Confed Warfleet",
			"leadShip": 133,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 4, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 130,
			"name": "Large Confed Warfleet",
			"leadShip": 134,
			"ships": [ 133, 135, 135, 135 ],
			"min": [ 1, 2, 0, 0 ],
			"max": [ 2, 4, 0, 0 ],
			"govt": 128,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 131,
			"name": "Small Rebel Warfleet",
			"leadShip": 141,
			"ships": [ 144, 144, 144, 144 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 5, 0, 0, 0 ],
			"govt": 129,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 132,
			"name": "Large Rebel Warfleet",
			"leadShip": 142,
			"ships": [ 141, 144, 144, 144 ],
			"min": [ 2, 2, 0, 0 ],
			"max": [ 3, 5, 0, 0 ],
			"govt": 129,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 133,
			"name": "Large Pirate Fleet",
			"leadShip": 146,
			"ships": [ 136, 136, 137, 137 ],
			"min": [ 2, 0, 2, 0 ],
			"max": [ 3, 0, 3, 0 ],
			"govt": 130,
			"linkSystem": 20000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 134,
			"name": "Escorted Confed BF",
			"leadShip": 130,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 3, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": 10000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 135,
			"name": "Escorted Confed BF",
			"leadShip": 130,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 3, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": 10000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 136,
			"name": "Small Rebel Warfleet",
			"leadShip": 141,
			"ships": [ 144, 144, 144, 144 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 5, 0, 0, 0 ],
			"govt": 129,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 137,
			"name": "Small Rebel Warfleet",
			"leadShip": 141,
			"ships": [ 144, 144, 144, 144 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 5, 0, 0, 0 ],
			"govt": 129,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 138,
			"name": "Small Confed Warfleet",
			"leadShip": 133,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 4, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 139,
			"name": "Small Confed Warfleet",
			"leadShip": 133,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 4, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 140,
			"name": "Small Pirate Fleet",
			"leadShip": 136,
			"ships": [ 137, 137, 137, 137 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 2, 0, 0, 0 ],
			"govt": 130,
			"linkSystem": 20000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 141,
			"name": "Small Trader Convoy",
			"leadShip": 132,
			"ships": [ 132, 132, 132, 132 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 2, 0, 0, 0 ],
			"govt": -1,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 142,
			"name": "Large Trader Convoy",
			"leadShip": 132,
			"ships": [ 132, 132, 132, 138 ],
			"min": [ 2, 0, 0, 2 ],
			"max": [ 3, 0, 0, 3 ],
			"govt": -1,
			"linkSystem": -1,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 143,
			"name": "Escorted Confed ExT",
			"leadShip": 139,
			"ships": [ 135, 135, 135, 135 ],
			"min": [ 2, 0, 0, 0 ],
			"max": [ 2, 0, 0, 0 ],
			"govt": 128,
			"linkSystem": 10000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 144,
			"name": "Small Pirate Fleet",
			"leadShip": 132,
			"ships": [ 138, 138, 138, 138 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 4, 0, 0, 0 ],
			"govt": 130,
			"linkSystem": 20000,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 254,
			"name": "Small anti-escort fleet",
			"leadShip": 138,
			"ships": [ 138, 18, 138, 138 ],
			"min": [ 0, 0, 0, 0 ],
			"max": [ 2, 0, 0, 0 ],
			"govt": 130,
			"linkSystem": -6,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		},
		{
			"id": 255,
			"name": "Big anti-escort fleet",
			"leadShip": 136,
			"ships": [ 138, 137, 138, 138 ],
			"min": [ 1, 0, 0, 0 ],
			"max": [ 2, 2, 0, 0 ],
			"govt": 130,
			"linkSystem": -6,
			"appearOn": "",
			"hailQuote": 0,
			"flags": 0
		}
];

export default flet;
