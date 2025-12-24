/**
 * spöb Resource - Stellar Object (Planet/Station) Definitions
 *
 * The spöb resource defines planets, stations, and other landable objects in EV.
 * Each spöb specifies available services, commodities, tech level, and government.
 *
 * Resource ID: Each planet/station (Earth=128, Stardock Alpha=129, etc.)
 *
 * Fields:
 *
 * name (STR#63): Planet/station name
 *
 * xPos (WORD): X position within system (-500 to 500)
 *
 * yPos (WORD): Y position within system (-500 to 500)
 *
 * type (WORD): Graphic type (0-25 = planets, 26+ = stations, corresponds to
 *   spin ID offsets for planet/station sprites)
 *
 * system (WORD): Parent sÿst ID where this spöb exists
 *
 * techLevel (WORD): Tech level (1-5+, determines available outfits/ships)
 *
 * specialTech1-3 (WORDs): Special outfit IDs available regardless of tech level
 *   (-1 = none)
 *
 * govt (WORD): Government ID controlling this spöb
 *
 * minCoolness (WORD): Minimum combat rating required to land (-3 = anyone can land)
 *
 * custPicID (WORD): Custom PICT resource ID for landing graphic (-1 = use default)
 *
 * custSndID (WORD): Custom sound ID for landing (-1 = use default)
 *
 * defDude (WORD): Düde ID for defense fleet (-1 = none)
 *
 * defCount (WORD): Number of defense ships (bit-packed: high byte = min, low byte = max)
 *
 * flags (HEXWORD): Complex flags controlling:
 *   - Facilities: Landing, bar, commodity exchange, outfitter, shipyard, mission computer
 *   - Commodities: Which goods are traded and at what price levels (low/med/high)
 *
 * Flag bits (in flagsDecoded):
 * - facilities: Object with boolean flags for each facility (canLand, hasCommodityExchange,
 *   canOutfit, canBuyShips, hasBar, hasMissionComputer)
 * - commodities: Object with price levels for each commodity (food, industrial, medical,
 *   luxury, metal, equipment) as "none", "low", "med", or "high"
 *
 * Usage:
 * - Player can land on spöbs to trade, refuel, get outfits, buy ships, get missions
 * - Tech level gates access to advanced equipment
 * - Commodity price levels determine trading profitability
 * - Defense fleet attacks player if legal record is too bad
 *
 * Source: Escape Velocity Resource Bible, Pages 30-32
 */
export default {
	"spob": [
		{
			"id": 128,
			"name": "Earth",
			"xPos": 0,
			"yPos": 0,
			"type": 0,
			"system": 129,
			"techLevel": 5,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 157,
			"defCount": 32765,
			"flags": "0x4414440F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "high",
					"luxury": "high",
					"medical": "low",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 129,
			"name": "Stardock Alpha",
			"xPos": -75,
			"yPos": -75,
			"type": 26,
			"system": 129,
			"techLevel": 5,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": 11000,
			"custSndID": -1,
			"defDude": 157,
			"defCount": 32765,
			"flags": "0x4414441D",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "high",
					"luxury": "high",
					"medical": "low",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 130,
			"name": "Mars",
			"xPos": -1010,
			"yPos": 1000,
			"type": 20,
			"system": 129,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 32765,
			"flags": "0x44144447",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "high",
					"luxury": "high",
					"medical": "low",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 131,
			"name": "Landfall",
			"xPos": 0,
			"yPos": 0,
			"type": 11,
			"system": 130,
			"techLevel": 4,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 157,
			"defCount": 2004,
			"flags": "0x4202000F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"luxury": "med",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 132,
			"name": "Luna",
			"xPos": 210,
			"yPos": 160,
			"type": 28,
			"system": 129,
			"techLevel": 0,
			"specialTech1": 5001,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": 10022,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 32765,
			"flags": "0x4414444F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "high",
					"luxury": "high",
					"medical": "low",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 133,
			"name": "Levo",
			"xPos": 0,
			"yPos": 0,
			"type": 6,
			"system": 128,
			"techLevel": 1,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -32000,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1324,
			"flags": "0x21201243",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"medical": "med",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 134,
			"name": "New Britain",
			"xPos": 0,
			"yPos": 0,
			"type": 8,
			"system": 136,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1605,
			"flags": "0x1214024F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"luxury": "high",
					"medical": "low",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 135,
			"name": "Capella",
			"xPos": 0,
			"yPos": 0,
			"type": 2,
			"system": 137,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1093,
			"flags": "0x2124210F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "med",
					"luxury": "high",
					"medical": "med",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 136,
			"name": "Dune",
			"xPos": 0,
			"yPos": 0,
			"type": 10,
			"system": 156,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1284,
			"flags": "0x22202243",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "med",
					"medical": "med",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 137,
			"name": "Spica",
			"xPos": 0,
			"yPos": 0,
			"type": 18,
			"system": 174,
			"techLevel": 4,
			"specialTech1": 200,
			"specialTech2": 500,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": 10000,
			"defDude": 158,
			"defCount": 1284,
			"flags": "0x20401247",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"medical": "high",
					"food": "med"
				}
			}
		},
		{
			"id": 138,
			"name": "Maxwell's Purchase",
			"xPos": 0,
			"yPos": 0,
			"type": 3,
			"system": 165,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1455,
			"flags": "0x12020043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"luxury": "med",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 139,
			"name": "Hodgson's World",
			"xPos": 0,
			"yPos": 0,
			"type": 5,
			"system": 151,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1124,
			"flags": "0x22044043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "high",
					"luxury": "high",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 140,
			"name": "Northstar",
			"xPos": 0,
			"yPos": 0,
			"type": 23,
			"system": 144,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1284,
			"flags": "0x22244047",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "high",
					"luxury": "high",
					"medical": "med",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 141,
			"name": "Master's Planet",
			"xPos": 0,
			"yPos": 0,
			"type": 15,
			"system": 180,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1305,
			"flags": "0x00000001",
			"flagsDecoded": {
				"facilities": {
					"canLand": true
				}
			}
		},
		{
			"id": 142,
			"name": "Torgo Prime",
			"xPos": 0,
			"yPos": 0,
			"type": 21,
			"system": 179,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1255,
			"flags": "0x00400003",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"medical": "high"
				}
			}
		},
		{
			"id": 143,
			"name": "Sirius III",
			"xPos": 0,
			"yPos": 0,
			"type": 17,
			"system": 135,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1324,
			"flags": "0x04401000",
			"flagsDecoded": {
				"commodities": {
					"metal": "low",
					"medical": "high",
					"industrial": "high"
				}
			}
		},
		{
			"id": 144,
			"name": "Sirius Station",
			"xPos": -100,
			"yPos": -110,
			"type": 25,
			"system": 135,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -10,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1384,
			"flags": "0x44202157",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "med",
					"medical": "med",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 145,
			"name": "Tau Ceti IV",
			"xPos": 0,
			"yPos": 0,
			"type": 19,
			"system": 131,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 0,
			"flags": "0x40400421",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"equipment": "high",
					"medical": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 146,
			"name": "Merlin",
			"xPos": -70,
			"yPos": 80,
			"type": 32,
			"system": 131,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1164,
			"flags": "0x01002003",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"metal": "med",
					"industrial": "low"
				}
			}
		},
		{
			"id": 147,
			"name": "Tabletop",
			"xPos": 0,
			"yPos": 0,
			"type": 3,
			"system": 132,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1244,
			"flags": "0x01040143",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"luxury": "high",
					"industrial": "low"
				}
			}
		},
		{
			"id": 148,
			"name": "Enyo's World",
			"xPos": 0,
			"yPos": 0,
			"type": 17,
			"system": 134,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1164,
			"flags": "0x00424200",
			"flagsDecoded": {
				"commodities": {
					"equipment": "med",
					"metal": "high",
					"luxury": "med",
					"medical": "high"
				}
			}
		},
		{
			"id": 149,
			"name": "Enyo Fuel Refinery",
			"xPos": 100,
			"yPos": 100,
			"type": 27,
			"system": 134,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1183,
			"flags": "0x41041253",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"luxury": "high",
					"industrial": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 150,
			"name": "New Sahara",
			"xPos": 0,
			"yPos": 0,
			"type": 10,
			"system": 133,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1244,
			"flags": "0x00000041",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasBar": true
				}
			}
		},
		{
			"id": 151,
			"name": "Samson's Planet",
			"xPos": 0,
			"yPos": 0,
			"type": 13,
			"system": 176,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1255,
			"flags": "0x44201443",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "low",
					"medical": "med",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 152,
			"name": "Plateau",
			"xPos": 0,
			"yPos": 0,
			"type": 9,
			"system": 197,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1244,
			"flags": "0x20012043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "med",
					"luxury": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 153,
			"name": "Hikeeba",
			"xPos": 0,
			"yPos": 0,
			"type": 19,
			"system": 198,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1204,
			"flags": "0x22111203",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"luxury": "low",
					"medical": "low",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 154,
			"name": "New Providence",
			"xPos": 0,
			"yPos": 0,
			"type": 1,
			"system": 139,
			"techLevel": 4,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1705,
			"flags": "0x1210120F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"medical": "low",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 155,
			"name": "Antares Station",
			"xPos": -70,
			"yPos": -90,
			"type": 24,
			"system": 139,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1155,
			"flags": "0x40140411",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"isStation": true
				},
				"commodities": {
					"equipment": "high",
					"luxury": "high",
					"medical": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 156,
			"name": "New Istanbul",
			"xPos": 0,
			"yPos": 0,
			"type": 4,
			"system": 155,
			"techLevel": 5,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1804,
			"flags": "0x2410044B",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"medical": "low",
					"industrial": "high",
					"food": "med"
				}
			}
		},
		{
			"id": 157,
			"name": "George's World",
			"xPos": 0,
			"yPos": 0,
			"type": 1,
			"system": 200,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x00242021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"metal": "med",
					"luxury": "high",
					"medical": "med"
				}
			}
		},
		{
			"id": 158,
			"name": "P-8457",
			"xPos": 0,
			"yPos": 0,
			"type": 20,
			"system": 202,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 5,
			"flags": "0x00041021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"metal": "low",
					"luxury": "high"
				}
			}
		},
		{
			"id": 159,
			"name": "Beeblebrox",
			"xPos": 0,
			"yPos": 0,
			"type": 5,
			"system": 168,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1155,
			"flags": "0x22040043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"luxury": "high",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 160,
			"name": "Turin V",
			"xPos": 0,
			"yPos": 0,
			"type": 20,
			"system": 169,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1405,
			"flags": "0x4200244F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "med",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 161,
			"name": "Palshife",
			"xPos": 0,
			"yPos": 0,
			"type": 8,
			"system": 196,
			"techLevel": 3,
			"specialTech1": 300,
			"specialTech2": 400,
			"specialTech3": 5000,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 158,
			"defCount": 1284,
			"flags": "0x4220024F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"medical": "med",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 162,
			"name": "Alkaid",
			"xPos": 0,
			"yPos": 0,
			"type": 21,
			"system": 177,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x24000000",
			"flagsDecoded": {
				"commodities": {
					"industrial": "high",
					"food": "med"
				}
			}
		},
		{
			"id": 163,
			"name": "Alkaidion",
			"xPos": -80,
			"yPos": 50,
			"type": 30,
			"system": 177,
			"techLevel": 3,
			"specialTech1": 200,
			"specialTech2": 300,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 158,
			"defCount": 1062,
			"flags": "0x4402414F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "high",
					"luxury": "med",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 164,
			"name": "Regulus II",
			"xPos": 0,
			"yPos": 0,
			"type": 20,
			"system": 143,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1204,
			"flags": "0x00040140",
			"flagsDecoded": {
				"facilities": {
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"luxury": "high"
				}
			}
		},
		{
			"id": 165,
			"name": "Zaxted Starport",
			"xPos": 100,
			"yPos": -70,
			"type": 25,
			"system": 150,
			"techLevel": 4,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1284,
			"flags": "0x2424115F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "low",
					"luxury": "high",
					"medical": "med",
					"industrial": "high",
					"food": "med"
				}
			}
		},
		{
			"id": 166,
			"name": "Zaxted",
			"xPos": 0,
			"yPos": 0,
			"type": 18,
			"system": 150,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 5,
			"flags": "0x02400000",
			"flagsDecoded": {
				"commodities": {
					"medical": "high",
					"industrial": "med"
				}
			}
		},
		{
			"id": 167,
			"name": "Clotho Prime",
			"xPos": 490,
			"yPos": -710,
			"type": 11,
			"system": 192,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1355,
			"flags": "0x21020249",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"luxury": "med",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 168,
			"name": "Clotho II",
			"xPos": -740,
			"yPos": 550,
			"type": 17,
			"system": 192,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": 10000,
			"defDude": 138,
			"defCount": 1062,
			"flags": "0x12400403",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "high",
					"medical": "high",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 169,
			"name": "Orion",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 188,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 0,
			"flags": "0x21404000",
			"flagsDecoded": {
				"commodities": {
					"metal": "high",
					"medical": "high",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 170,
			"name": "Hunter",
			"xPos": -80,
			"yPos": 70,
			"type": 31,
			"system": 188,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1284,
			"flags": "0x20020403",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "high",
					"luxury": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 171,
			"name": "Atropos",
			"xPos": 0,
			"yPos": 0,
			"type": 12,
			"system": 191,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 158,
			"defCount": 1061,
			"flags": "0x2104444B",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "high",
					"luxury": "high",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 172,
			"name": "Propus VII",
			"xPos": 0,
			"yPos": 0,
			"type": 21,
			"system": 153,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x20240000",
			"flagsDecoded": {
				"commodities": {
					"luxury": "high",
					"medical": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 173,
			"name": "New Scotland",
			"xPos": 50,
			"yPos": 100,
			"type": 29,
			"system": 153,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1305,
			"flags": "0x41244247",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "high",
					"luxury": "high",
					"medical": "med",
					"industrial": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 174,
			"name": "New Ireland",
			"xPos": -160,
			"yPos": 40,
			"type": 30,
			"system": 153,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1284,
			"flags": "0x4124424B",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "high",
					"luxury": "high",
					"medical": "med",
					"industrial": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 175,
			"name": "New France",
			"xPos": -70,
			"yPos": -90,
			"type": 32,
			"system": 143,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1324,
			"flags": "0x4024000F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"luxury": "high",
					"medical": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 176,
			"name": "Diphidia II",
			"xPos": 0,
			"yPos": 0,
			"type": 6,
			"system": 149,
			"techLevel": 1,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1255,
			"flags": "0x1120224F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "med",
					"medical": "med",
					"industrial": "low",
					"food": "low"
				}
			}
		},
		{
			"id": 177,
			"name": "New Columbia",
			"xPos": -920,
			"yPos": -800,
			"type": 2,
			"system": 131,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1255,
			"flags": "0x01002043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "med",
					"industrial": "low"
				}
			}
		},
		{
			"id": 178,
			"name": "Quake",
			"xPos": -80,
			"yPos": 80,
			"type": 11,
			"system": 152,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x40014021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"metal": "high",
					"luxury": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 179,
			"name": "Armstrong",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 189,
			"techLevel": 4,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 158,
			"defCount": 1102,
			"flags": "0x0004400F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"metal": "high",
					"luxury": "high"
				}
			}
		},
		{
			"id": 180,
			"name": "Persephone IX",
			"xPos": 0,
			"yPos": 0,
			"type": 21,
			"system": 187,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x00422000",
			"flagsDecoded": {
				"commodities": {
					"metal": "med",
					"luxury": "med",
					"medical": "high"
				}
			}
		},
		{
			"id": 181,
			"name": "Rupert",
			"xPos": -80,
			"yPos": -80,
			"type": 30,
			"system": 187,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1255,
			"flags": "0x12120243",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"luxury": "med",
					"medical": "low",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 182,
			"name": "Darven",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 167,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x40012000",
			"flagsDecoded": {
				"commodities": {
					"metal": "med",
					"luxury": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 183,
			"name": "Blackthorne",
			"xPos": -150,
			"yPos": -100,
			"type": 24,
			"system": 167,
			"techLevel": 3,
			"specialTech1": 200,
			"specialTech2": 250,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1093,
			"flags": "0x1010425F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "high",
					"medical": "low",
					"food": "low"
				}
			}
		},
		{
			"id": 184,
			"name": "Pollux VI",
			"xPos": 0,
			"yPos": 0,
			"type": 19,
			"system": 140,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x40001000",
			"flagsDecoded": {
				"commodities": {
					"metal": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 185,
			"name": "New Japan",
			"xPos": 60,
			"yPos": -60,
			"type": 32,
			"system": 140,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 128,
			"minCoolness": -3,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 1405,
			"flags": "0x1214200F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"metal": "med",
					"luxury": "high",
					"medical": "low",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 186,
			"name": "Thanos IV",
			"xPos": 0,
			"yPos": 0,
			"type": 23,
			"system": 166,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x41400000",
			"flagsDecoded": {
				"commodities": {
					"medical": "high",
					"industrial": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 187,
			"name": "Syntex Refinery",
			"xPos": -70,
			"yPos": -110,
			"type": 27,
			"system": 166,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1255,
			"flags": "0x41242253",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "med",
					"luxury": "high",
					"medical": "med",
					"industrial": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 188,
			"name": "Ursa Minor Beta",
			"xPos": 0,
			"yPos": 0,
			"type": 5,
			"system": 159,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": 10001,
			"defDude": 138,
			"defCount": 1255,
			"flags": "0x40042043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "med",
					"luxury": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 189,
			"name": "Perseus II",
			"xPos": 0,
			"yPos": 0,
			"type": 11,
			"system": 185,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x00000000"
		},
		{
			"id": 190,
			"name": "Pegasus",
			"xPos": -75,
			"yPos": -75,
			"type": 33,
			"system": 185,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1355,
			"flags": "0x4420144F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "low",
					"medical": "med",
					"industrial": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 191,
			"name": "Sauron",
			"xPos": 0,
			"yPos": 0,
			"type": 10,
			"system": 160,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1324,
			"flags": "0x21002447",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "med",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 192,
			"name": "Darkstar",
			"xPos": 0,
			"yPos": 0,
			"type": 11,
			"system": 157,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -50,
			"custPicID": 11001,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1164,
			"flags": "0x2421414F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "high",
					"luxury": "low",
					"medical": "med",
					"industrial": "high",
					"food": "med"
				}
			}
		},
		{
			"id": 193,
			"name": "New Bavaria",
			"xPos": 0,
			"yPos": 0,
			"type": 12,
			"system": 163,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1355,
			"flags": "0x2212004F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"luxury": "med",
					"medical": "low",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 194,
			"name": "Palomino",
			"xPos": 0,
			"yPos": 0,
			"type": 0,
			"system": 178,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1255,
			"flags": "0x22002403",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "med",
					"industrial": "med",
					"food": "med"
				}
			}
		},
		{
			"id": 195,
			"name": "Tiber II",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 171,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x01224000",
			"flagsDecoded": {
				"commodities": {
					"metal": "high",
					"luxury": "med",
					"medical": "med",
					"industrial": "low"
				}
			}
		},
		{
			"id": 196,
			"name": "Port Oread",
			"xPos": 60,
			"yPos": -90,
			"type": 25,
			"system": 171,
			"techLevel": 3,
			"specialTech1": 200,
			"specialTech2": 300,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1355,
			"flags": "0x4220245F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "med",
					"medical": "med",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 197,
			"name": "Akio",
			"xPos": 0,
			"yPos": 0,
			"type": 13,
			"system": 182,
			"techLevel": 5,
			"specialTech1": 200,
			"specialTech2": 400,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1124,
			"flags": "0x0201020F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true
				},
				"commodities": {
					"equipment": "med",
					"luxury": "low",
					"industrial": "med"
				}
			}
		},
		{
			"id": 198,
			"name": "Lauralee",
			"xPos": 0,
			"yPos": 0,
			"type": 2,
			"system": 183,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1255,
			"flags": "0x20100203",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "med",
					"medical": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 199,
			"name": "Murphy's World",
			"xPos": 0,
			"yPos": 0,
			"type": 7,
			"system": 173,
			"techLevel": 3,
			"specialTech1": 400,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1405,
			"flags": "0x21400047",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"medical": "high",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 200,
			"name": "Adhara",
			"xPos": 0,
			"yPos": 0,
			"type": 0,
			"system": 175,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1102,
			"flags": "0x14114403",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "high",
					"luxury": "low",
					"medical": "low",
					"industrial": "high",
					"food": "low"
				}
			}
		},
		{
			"id": 201,
			"name": "Sentinel Station",
			"xPos": -280,
			"yPos": -210,
			"type": 26,
			"system": 175,
			"techLevel": 1,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1405,
			"flags": "0x42040215",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"isStation": true
				},
				"commodities": {
					"equipment": "med",
					"luxury": "high",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 202,
			"name": "Zeus",
			"xPos": -670,
			"yPos": -750,
			"type": 11,
			"system": 190,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1305,
			"flags": "0x00000001",
			"flagsDecoded": {
				"facilities": {
					"canLand": true
				}
			}
		},
		{
			"id": 203,
			"name": "Hera",
			"xPos": 730,
			"yPos": 450,
			"type": 1,
			"system": 190,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1153,
			"flags": "0x12022043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "med",
					"luxury": "med",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 204,
			"name": "Osiris II",
			"xPos": 0,
			"yPos": 0,
			"type": 21,
			"system": 184,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1284,
			"flags": "0x04201000",
			"flagsDecoded": {
				"commodities": {
					"metal": "low",
					"medical": "med",
					"industrial": "high"
				}
			}
		},
		{
			"id": 205,
			"name": "Endor",
			"xPos": 120,
			"yPos": -70,
			"type": 31,
			"system": 184,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1155,
			"flags": "0x00000001",
			"flagsDecoded": {
				"facilities": {
					"canLand": true
				}
			}
		},
		{
			"id": 206,
			"name": "Topaz II",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 195,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 3,
			"flags": "0x04040000",
			"flagsDecoded": {
				"commodities": {
					"luxury": "high",
					"industrial": "high"
				}
			}
		},
		{
			"id": 207,
			"name": "Emerald",
			"xPos": -110,
			"yPos": -100,
			"type": 29,
			"system": 195,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": 10002,
			"defDude": 138,
			"defCount": 1355,
			"flags": "0x40004147",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "high",
					"food": "high"
				}
			}
		},
		{
			"id": 208,
			"name": "Virgo",
			"xPos": 0,
			"yPos": 0,
			"type": 3,
			"system": 194,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1305,
			"flags": "0x40210043",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"hasBar": true
				},
				"commodities": {
					"luxury": "low",
					"medical": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 209,
			"name": "Sirgil III",
			"xPos": 0,
			"yPos": 0,
			"type": 2,
			"system": 170,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1255,
			"flags": "0x00000041",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasBar": true
				}
			}
		},
		{
			"id": 210,
			"name": "Sirgil Starport",
			"xPos": -90,
			"yPos": -90,
			"type": 25,
			"system": 170,
			"techLevel": 4,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 158,
			"defCount": 11005,
			"flags": "0x2104415F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "high",
					"luxury": "high",
					"industrial": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 211,
			"name": "Scorpio",
			"xPos": 0,
			"yPos": 0,
			"type": 8,
			"system": 186,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 129,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 138,
			"defCount": 1355,
			"flags": "0x02001403",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "low",
					"industrial": "med"
				}
			}
		},
		{
			"id": 212,
			"name": "Deneb III",
			"xPos": 0,
			"yPos": 0,
			"type": 0,
			"system": 142,
			"techLevel": 1,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1093,
			"flags": "0x1002024F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"equipment": "med",
					"luxury": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 213,
			"name": "New Cydonia",
			"xPos": 0,
			"yPos": 0,
			"type": 20,
			"system": 158,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 131,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 135,
			"defCount": 1505,
			"flags": "0x42401047",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "low",
					"medical": "high",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 214,
			"name": "Lethe Prime",
			"xPos": 0,
			"yPos": 0,
			"type": 0,
			"system": 193,
			"techLevel": 3,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 132,
			"minCoolness": -5,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 136,
			"defCount": 1655,
			"flags": "0x1244204F",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "med",
					"luxury": "high",
					"medical": "high",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 215,
			"name": "Opal",
			"xPos": 80,
			"yPos": -80,
			"type": 6,
			"system": 152,
			"techLevel": 2,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": 10001,
			"defDude": 155,
			"defCount": 1355,
			"flags": "0x12020107",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"hasCommodityExchange": true,
					"canOutfit": true
				},
				"commodities": {
					"equipment": "low",
					"luxury": "med",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 216,
			"name": "Nexus Outpost",
			"xPos": 0,
			"yPos": 0,
			"type": 24,
			"system": 235,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1244,
			"flags": "0x20001411",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"isStation": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 217,
			"name": "P-4812",
			"xPos": 0,
			"yPos": 0,
			"type": 14,
			"system": 205,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x20001221",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"food": "med"
				}
			}
		},
		{
			"id": 218,
			"name": "Pirate's Cove",
			"xPos": -100,
			"yPos": -100,
			"type": 24,
			"system": 205,
			"techLevel": 3,
			"specialTech1": 200,
			"specialTech2": 400,
			"specialTech3": 500,
			"govt": 130,
			"minCoolness": 10,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1324,
			"flags": "0x0000005D",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true,
					"hasBar": true
				}
			}
		},
		{
			"id": 219,
			"name": "Astrodyne Outpost",
			"xPos": 0,
			"yPos": 0,
			"type": 25,
			"system": 206,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -32000,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x12201031",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"isStation": true,
					"uninhabited": true
				},
				"commodities": {
					"metal": "low",
					"medical": "med",
					"industrial": "med",
					"food": "low"
				}
			}
		},
		{
			"id": 220,
			"name": "P-6564",
			"xPos": 0,
			"yPos": 0,
			"type": 16,
			"system": 208,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x41000021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"industrial": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 221,
			"name": "Ruby",
			"xPos": -70,
			"yPos": -90,
			"type": 33,
			"system": 208,
			"techLevel": 3,
			"specialTech1": 300,
			"specialTech2": 400,
			"specialTech3": 500,
			"govt": 128,
			"minCoolness": 10,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 137,
			"defCount": 32765,
			"flags": "0x42202045",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"hasBar": true
				},
				"commodities": {
					"metal": "med",
					"medical": "med",
					"industrial": "med",
					"food": "high"
				}
			}
		},
		{
			"id": 222,
			"name": "Listening Post 94",
			"xPos": 0,
			"yPos": 0,
			"type": 24,
			"system": 232,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x02100031",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"isStation": true,
					"uninhabited": true
				},
				"commodities": {
					"medical": "low",
					"industrial": "med"
				}
			}
		},
		{
			"id": 223,
			"name": "Listening Post 95",
			"xPos": 0,
			"yPos": 0,
			"type": 24,
			"system": 226,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x02002131",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"isStation": true,
					"uninhabited": true
				},
				"commodities": {
					"equipment": "low",
					"metal": "med",
					"industrial": "med"
				}
			}
		},
		{
			"id": 224,
			"name": "P-1896",
			"xPos": 0,
			"yPos": 0,
			"type": 21,
			"system": 229,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x04401021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"metal": "low",
					"medical": "high",
					"industrial": "high"
				}
			}
		},
		{
			"id": 225,
			"name": "Privateer's Haven",
			"xPos": -80,
			"yPos": -80,
			"type": 24,
			"system": 229,
			"techLevel": 1,
			"specialTech1": 5,
			"specialTech2": 400,
			"specialTech3": 597,
			"govt": 130,
			"minCoolness": 10,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1605,
			"flags": "0x0044005D",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"canBuyShips": true,
					"isStation": true,
					"hasBar": true
				},
				"commodities": {
					"luxury": "high",
					"medical": "high"
				}
			}
		},
		{
			"id": 226,
			"name": "P-0805",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 213,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x10012421",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"equipment": "high",
					"metal": "med",
					"luxury": "low",
					"food": "low"
				}
			}
		},
		{
			"id": 227,
			"name": "P-2143",
			"xPos": 0,
			"yPos": 0,
			"type": 19,
			"system": 214,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x00100421",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"equipment": "high",
					"medical": "low"
				}
			}
		},
		{
			"id": 228,
			"name": "P-0595",
			"xPos": 0,
			"yPos": 0,
			"type": 22,
			"system": 218,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x10011200",
			"flagsDecoded": {
				"commodities": {
					"equipment": "med",
					"metal": "low",
					"luxury": "low",
					"food": "low"
				}
			}
		},
		{
			"id": 229,
			"name": "Evildrome",
			"xPos": -105,
			"yPos": -105,
			"type": 31,
			"system": 218,
			"techLevel": 5,
			"specialTech1": 200,
			"specialTech2": 300,
			"specialTech3": 400,
			"govt": 130,
			"minCoolness": 10,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1655,
			"flags": "0x0000004D",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				}
			}
		},
		{
			"id": 230,
			"name": "P-1249",
			"xPos": 0,
			"yPos": 0,
			"type": 13,
			"system": 219,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x01044021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"metal": "high",
					"luxury": "high",
					"industrial": "low"
				}
			}
		},
		{
			"id": 231,
			"name": "P-8724",
			"xPos": 0,
			"yPos": 0,
			"type": 10,
			"system": 221,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x00000021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				}
			}
		},
		{
			"id": 232,
			"name": "P-1027",
			"xPos": 0,
			"yPos": 0,
			"type": 19,
			"system": 223,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": 134,
			"minCoolness": 0,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 128,
			"defCount": 0,
			"flags": "0x40100021",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"uninhabited": true
				},
				"commodities": {
					"medical": "low",
					"food": "high"
				}
			}
		},
		{
			"id": 233,
			"name": "New Antigua",
			"xPos": -100,
			"yPos": -120,
			"type": 32,
			"system": 223,
			"techLevel": 1,
			"specialTech1": 5,
			"specialTech2": 400,
			"specialTech3": 500,
			"govt": 130,
			"minCoolness": 10,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 156,
			"defCount": 1284,
			"flags": "0x0000004D",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"canOutfit": true,
					"canBuyShips": true,
					"hasBar": true
				}
			}
		},
		{
			"id": 234,
			"name": "Liberty Station",
			"xPos": 0,
			"yPos": 0,
			"type": 25,
			"system": 230,
			"techLevel": 0,
			"specialTech1": -1,
			"specialTech2": -1,
			"specialTech3": -1,
			"govt": -1,
			"minCoolness": -50,
			"custPicID": -1,
			"custSndID": -1,
			"defDude": 155,
			"defCount": 1324,
			"flags": "0x40140411",
			"flagsDecoded": {
				"facilities": {
					"canLand": true,
					"isStation": true
				},
				"commodities": {
					"equipment": "high",
					"luxury": "high",
					"medical": "low",
					"food": "high"
				}
			}
		}
	]
}
