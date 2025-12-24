/**
 * öops Resource - News Definitions
 *
 * The öops resource defines news items that appear in spaceport bars. News
 * can be triggered by mission bits, affect commodity prices, and provide
 * world-building flavor.
 *
 * Resource ID: Each news item
 *
 * Fields:
 *
 * name (STR#63): Internal name for this news item (for reference only)
 *
 * stellar (WORD): Stellar ID where this news appears (-2 = all government worlds,
 *   -1 = all independent worlds, specific spöb ID for single location)
 *
 * commodity (WORD): Commodity affected by this news (-1 = none, 0-5 = standard goods,
 *   128+ = jünk ID)
 *
 * priceDelta (WORD): Price change for affected commodity (positive = increase,
 *   negative = decrease)
 *
 * duration (WORD): How many days this news lasts
 *
 * freq (WORD): Frequency/probability this news appears when conditions met
 *
 * missionBit (WORD): Mission bit that triggers this news (-1 = random appearance)
 *
 * Usage:
 * - News appears in spaceport bar's Holovid section
 * - Can create dynamic economy by affecting commodity prices
 * - Triggered by mission completion to reflect player actions
 * - Provides narrative feedback and world atmosphere
 *
 * Source: Escape Velocity Resource Bible, Page 20
 */
export default {
	"oops": [
		{
			"id": 128,
			"name": "Confed intermediate news",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": 45,
			"freq": 0,
			"missionBit": 42
		},
		{
			"id": 129,
			"name": "Rebel intermediate news",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": 45,
			"freq": 0,
			"missionBit": 37
		},
		{
			"id": 130,
			"name": "Confed alien news",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": 60,
			"freq": 0,
			"missionBit": 66
		},
		{
			"id": 131,
			"name": "Rebel alien news",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": 60,
			"freq": 0,
			"missionBit": 61
		},
		{
			"id": 132,
			"name": "Astex news",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": 45,
			"freq": 0,
			"missionBit": 28
		},
		{
			"id": 133,
			"name": "Unused",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": -1,
			"freq": 0,
			"missionBit": -1
		},
		{
			"id": 134,
			"name": "Unused",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": -1,
			"freq": 0,
			"missionBit": -1
		},
		{
			"id": 135,
			"name": "Unused",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": -1,
			"freq": 0,
			"missionBit": -1
		},
		{
			"id": 136,
			"name": "Unused",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": -1,
			"freq": 0,
			"missionBit": -1
		},
		{
			"id": 137,
			"name": "Unused",
			"stellar": -2,
			"commodity": -1,
			"priceDelta": 0,
			"duration": -1,
			"freq": 0,
			"missionBit": -1
		},
		{
			"id": 138,
			"name": "A wing-racing festival",
			"stellar": 146,
			"commodity": 0,
			"priceDelta": 100,
			"duration": 7,
			"freq": 2,
			"missionBit": -1
		},
		{
			"id": 139,
			"name": "A fuel spill",
			"stellar": 149,
			"commodity": 1,
			"priceDelta": 400,
			"duration": 7,
			"freq": 2,
			"missionBit": -1
		},
		{
			"id": 140,
			"name": "The discovery of a new ore deposit",
			"stellar": 151,
			"commodity": 4,
			"priceDelta": -400,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 141,
			"name": "A mining accident",
			"stellar": 154,
			"commodity": 2,
			"priceDelta": 400,
			"duration": 7,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 142,
			"name": "A newfound ore deposit",
			"stellar": 154,
			"commodity": 4,
			"priceDelta": -400,
			"duration": 7,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 143,
			"name": "A patrol ship breakdown",
			"stellar": 155,
			"commodity": 5,
			"priceDelta": 200,
			"duration": 5,
			"freq": 2,
			"missionBit": -1
		},
		{
			"id": 144,
			"name": "A large fire on a distant world",
			"stellar": 156,
			"commodity": 2,
			"priceDelta": 150,
			"duration": 7,
			"freq": 1,
			"missionBit": -1
		},
		{
			"id": 145,
			"name": "An enormous party",
			"stellar": 159,
			"commodity": 3,
			"priceDelta": 200,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 146,
			"name": "A new group of recruits",
			"stellar": 161,
			"commodity": 0,
			"priceDelta": 120,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 147,
			"name": "A food shortage",
			"stellar": 163,
			"commodity": 0,
			"priceDelta": 400,
			"duration": 28,
			"freq": 2,
			"missionBit": -1
		},
		{
			"id": 148,
			"name": "Increased demand",
			"stellar": 165,
			"commodity": 1,
			"priceDelta": 300,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 149,
			"name": "Decreased demand",
			"stellar": 165,
			"commodity": 5,
			"priceDelta": -200,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 150,
			"name": "An increase in tourist arrivals",
			"stellar": 171,
			"commodity": 3,
			"priceDelta": 400,
			"duration": 30,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 151,
			"name": "A cultural festival",
			"stellar": 173,
			"commodity": 0,
			"priceDelta": 100,
			"duration": 14,
			"freq": 2,
			"missionBit": -1
		},
		{
			"id": 152,
			"name": "A recession",
			"stellar": 174,
			"commodity": 1,
			"priceDelta": -350,
			"duration": 30,
			"freq": 1,
			"missionBit": -1
		},
		{
			"id": 153,
			"name": "A bumper crop of seaweed",
			"stellar": 176,
			"commodity": 0,
			"priceDelta": -325,
			"duration": 30,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 154,
			"name": "A rockslide",
			"stellar": 177,
			"commodity": 2,
			"priceDelta": 170,
			"duration": 7,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 155,
			"name": "A religious feast",
			"stellar": 0,
			"commodity": 3,
			"priceDelta": 250,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 156,
			"name": "Extreme crew boredom",
			"stellar": 187,
			"commodity": 3,
			"priceDelta": 180,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 157,
			"name": "A manufacturing surplus",
			"stellar": 187,
			"commodity": 1,
			"priceDelta": -500,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 158,
			"name": "A manufacturing surplus",
			"stellar": 192,
			"commodity": 5,
			"priceDelta": -500,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 159,
			"name": "A communicable animal disease",
			"stellar": 194,
			"commodity": 2,
			"priceDelta": 400,
			"duration": 30,
			"freq": 1,
			"missionBit": -1
		},
		{
			"id": 160,
			"name": "A volcanic eruption",
			"stellar": 199,
			"commodity": 2,
			"priceDelta": 300,
			"duration": 30,
			"freq": 1,
			"missionBit": -1
		},
		{
			"id": 161,
			"name": "The banderfrog breeding season",
			"stellar": 208,
			"commodity": 3,
			"priceDelta": -200,
			"duration": 30,
			"freq": 1,
			"missionBit": -1
		},
		{
			"id": 162,
			"name": "A manufacturing surplus",
			"stellar": 209,
			"commodity": 1,
			"priceDelta": -300,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 163,
			"name": "Increased demand",
			"stellar": 209,
			"commodity": 1,
			"priceDelta": 150,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 164,
			"name": "Decreased demand",
			"stellar": 209,
			"commodity": 5,
			"priceDelta": -150,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 165,
			"name": "A manufacturing surplus",
			"stellar": 210,
			"commodity": 1,
			"priceDelta": -400,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 166,
			"name": "Increased demand",
			"stellar": 210,
			"commodity": 1,
			"priceDelta": 200,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 167,
			"name": "Decreased demand",
			"stellar": 210,
			"commodity": 5,
			"priceDelta": -200,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 168,
			"name": "A grain surplus",
			"stellar": 212,
			"commodity": 0,
			"priceDelta": -300,
			"duration": 14,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 169,
			"name": "A Lethean air raid",
			"stellar": 213,
			"commodity": 2,
			"priceDelta": 500,
			"duration": 5,
			"freq": 10,
			"missionBit": -1
		},
		{
			"id": 170,
			"name": "Cydonian orbital bombardment",
			"stellar": 214,
			"commodity": 2,
			"priceDelta": 500,
			"duration": 5,
			"freq": 10,
			"missionBit": -1
		},
		{
			"id": 171,
			"name": "A new product line",
			"stellar": 144,
			"commodity": 1,
			"priceDelta": 150,
			"duration": 14,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 172,
			"name": "A parts shortage",
			"stellar": 129,
			"commodity": 5,
			"priceDelta": 300,
			"duration": 5,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 173,
			"name": "A dome pressurization accident",
			"stellar": 130,
			"commodity": 2,
			"priceDelta": 150,
			"duration": 3,
			"freq": 2,
			"missionBit": -1
		},
		{
			"id": 174,
			"name": "A special sale",
			"stellar": 131,
			"commodity": 1,
			"priceDelta": -100,
			"duration": 7,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 175,
			"name": "A new warship constuction order",
			"stellar": 132,
			"commodity": 5,
			"priceDelta": 100,
			"duration": 5,
			"freq": 5,
			"missionBit": -1
		},
		{
			"id": 176,
			"name": "A record fish harvest",
			"stellar": 133,
			"commodity": 0,
			"priceDelta": -300,
			"duration": 14,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 177,
			"name": "An increase in tourist visitations",
			"stellar": 135,
			"commodity": 3,
			"priceDelta": 400,
			"duration": 30,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 178,
			"name": "A mining accident",
			"stellar": 137,
			"commodity": 2,
			"priceDelta": 300,
			"duration": 5,
			"freq": 3,
			"missionBit": -1
		},
		{
			"id": 179,
			"name": "The discovery of a new vein of uridium",
			"stellar": 137,
			"commodity": 4,
			"priceDelta": -325,
			"duration": 14,
			"freq": 2,
			"missionBit": -1
		}
	]
}
