export default {
	"dude": [
		{
			"name" : "Loser Confed Merchants",
			"shipTypes"   : [128, 129, 130, 131],
			"probability" : [30, 40, 15, 15],
			"aiType"      : 1,
			"government"  : 128,
			"docile"      : false,
			"hailText"    : [true, false, false, false],
			"booty"       : [
				"food", "ind", "med", "lux", "met", "equ", "money"
			]
		}, {
			"name" : "Confed Warships",
			"shipTypes"   : [135, 147, 133, 134],
			"probability" : [35, 25, 30, 10],
			"aiType"      : 3,
			"government"  : 128,
			"docile"      : false,
			"hailText"    : [false, false, false, true],
			"booty"       : []
		}, {
			"name" : "Rebels",
			"shipTypes"   : [141, 142, 144, 144],
			"probability" : [35, 15, 25, 25],
			"aiType"      : 3,
			"government"  : 129,
			"docile"      : false,
			"hailText"    : [false, false, false, true],
			"booty"       : []
		}, {
			"name" : "Beefy Confed Merchants",
			"shipTypes"   : [132, 129, 129, 145],
			"probability" : [37, 19, 19, 25],
			"aiType"      : 2,
			"government"  : 128,
			"docile"      : false,
			"hailText"    : [false, true, false, false],
			"booty"       : [
				"food", "ind", "med", "lux", "met", "equ", "money"
			]
		}
	]
}
