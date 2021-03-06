export default {
	"ship" : [
		{
			"id" : 0,
			"name" : "defaults",
			"techLevel" : 1,
			"strength"  : 5,
			"weapons" : [],
			"ai" : 1,
			"deathDelay"  : 30,
			"initialBoom" : 131,
			"finalBoom"   : 132,
			"govt" : 0
		}, {
			"id" : 128,
			"name" : "Shuttlecraft",
			"longName"  : "Rendelli StarDrive 805R cargo shuttle",
			"shortName" : "Shuttlecraft",
			"commName"  : "Shuttlecraft",
			"subtitle"  : "",

			"speed"  : 413,
			"accel"  : 979,
			"turn"   : 60,
			"shield" : [180, 42],
			"armor"  : [100, 0],
			"fuel"   : [400, 0],
			"cost"   : 10000,
			"mass"   : 30,
			"length" : 8,
			"cargo" : 20,
			"space" : 15,
			"crew"  : 1,
			"techLevel" : 1,
			"strength"  : 5,
			"maxGun" : 3,
			"maxTurret" : 0,
			"weapons" : [],
			"ai" : 1,
			"deathDelay"  : 30,
			"initialBoom" : 131,
			"finalBoom"   : 132,
			"ionize" : [0, 0],
			
			"shipyardDesc" : "The Rendelli StarDrive Model 805R cargo shuttle is perhaps the least glamorous, but also the most versatile, of all starships. Its diminutive size and low cost make it popular with the smaller shipping firms and charter services, and it makes a good courier ship as well. Its boxy appearance belies its rugged and durable construction. This sturdy little vessel is found virtually everywhere in the galaxy.",
			"escortDesc" : "This tiny shuttlecraft seems speedy enough, and its captain is willing to work for relatively low wages - however, you wonder how much his ship’s small cargo capacity will add to your profits."
		}, {
			"id" : 129,
			"name" : "Light Freighter",
			"longName"  : "Allied Shipyards AS129 light freighter",
			"shortName" : "Light Freighter",
			"commName"  : "Lt. Freighter",
			"subtitle"  : "",
			"speed"  : 188,
			"accel"  : 428,
			"turn"   : 30,
			"shield" : [150, 15],
			"armor"  : [300, 0],
			"fuel"   : [300, 0],
			"cost"   : 280000,
			"mass"   : 200,
			"length" : 50,
			"cargo" : 150,
			"space" : 50,
			"crew"  : 19,
			"techLevel" : 1,
			"strength"  : 95,
			"maxGun" : 0,
			"maxTurret" : 1,
			"weapons" : [
				{ "id" : 133, "count": 1, "ammo" : 0 }
			],
			"ai" : 1,
			"deathDelay"  : 40,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 130,
			"name" : "Bulk Freighter",
			"longName"  : "Allied Shipyards AS1300 bulk freighter",
			"shortName" : "Bulk Freighter",
			"commName"  : "Bulk Freighter",
			"subtitle"  : "",
			"speed"  : 120,
			"accel"  : 281,
			"turn"   : 15,
			"shield" : [100, 6],
			"armor"  : [250, 0],
			"fuel"   : [1000, 0],
			"cost"   : 1200000,
			"mass"   : 800,
			"length" : 250,
			"cargo" : 500,
			"space" : 150,
			"crew"  : 32,
			"techLevel" : 9999,
			"strength"  : 160,
			"maxGun" : 0,
			"maxTurret" : 1,
			"weapons" : [
				{ "id" : 133, "count": 1, "ammo" : 0 }
			],
			"ai" : 1,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 131,
			"name" : "Courier",
			"longName"  : "Metroworks V7 courier",
			"shortName" : "Courier",
			"commName"  : "Courier",
			"subtitle"  : "",
			"speed"  : 375,
			"accel"  : 698,
			"turn"   : 60,
			"shield" : [150, 50],
			"armor"  : [250, 0],
			"fuel"   : [800, 0],
			"cost"   : 180000,
			"mass"   : 75,
			"length" : 15,
			"cargo" : 50,
			"space" : 30,
			"crew"  : 10,
			"techLevel" : 1,
			"strength"  : 50,
			"maxGun" : 2,
			"maxTurret" : 1,
			"weapons" : [
				{ "id" : 133, "count": 1, "ammo" : 0 }
			],
			"ai" : 1,
			"deathDelay"  : 33,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 132,
			"name" : "Argosy",
			"longName"  : "CDX Starworks Argosy",
			"shortName" : "Argosy",
			"commName"  : "Argosy",
			"subtitle"  : "",
			"speed"  : 300,
			"accel"  : 563,
			"turn"   : 45,
			"shield" : [350, 47],
			"armor"  : [400, 0],
			"fuel"   : [400, 0],
			"cost"   : 750000,
			"mass"   : 215,
			"length" : 52,
			"cargo" : 130,
			"space" : 60,
			"crew"  : 28,
			"techLevel" : 3,
			"strength"  : 140,
			"maxGun" : 3,
			"maxTurret" : 2,
			"weapons" : [
				{ "id" : 133, "count": 2, "ammo" : 0 }
			],
			"ai" : 2,
			"deathDelay"  : 60,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 133,
			"name" : "Confederate Frigate",
			"longName"  : "Terran Naval Yards FF-4237 frigate",
			"shortName" : "Confed Frigate",
			"commName"  : "Frigate",
			"subtitle"  : "",
			"speed"  : 225,
			"accel"  : 844,
			"turn"   : 30,
			"shield" : [2500, 156],
			"armor"  : [500, 0],
			"fuel"   : [300, 0],
			"cost"   : 5000000,
			"mass"   : 350,
			"length" : 80,
			"cargo"  : 50,
			"space"  : 60,
			"crew"   : 217,
			"techLevel" : 5001,
			"strength"  : 1085,
			"maxGun"    : 6,
			"maxTurret" : 2,
			"weapons"   : [
				{ "id" : 134, "count": 2, "ammo" : 0 },
				{ "id" : 139, "count": 1, "ammo" : 4 },
				{ "id" : 131, "count": 2, "ammo" : 6 },
				{ "id" : 132, "count": 2, "ammo" : 10 }
			],
			"ai" : 3,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 128
		}, {
			"id" : 134,
			"name" : "Confederate Cruiser",
			"longName"  : "Terran Naval Yards CR-1095 heavy cruiser",
			"shortName" : "Confed Cruiser",
			"commName"  : "Cruiser",
			"subtitle"  : "",
			"speed"  : 225,
			"accel"  : 428,
			"turn"   : 15,
			"shield" : [8000, 333],
			"armor"  : [1000, 0],
			"fuel"   : [400, 0],
			"cost"   : 20000000,
			"mass"   : 1000,
			"length" : 250,
			"cargo"  : 75,
			"space"  : 100,
			"crew"   : 1029,
			"techLevel" : 5001,
			"strength"  : 5145,
			"maxGun"    : 8,
			"maxTurret" : 4,
			"weapons"   : [
				{ "id" : 134, "count": 4, "ammo" : 0 },
				{ "id" : 131, "count": 2, "ammo" : 14 },
				{ "id" : 129, "count": 4, "ammo" : 0 },
				{ "id" : 136, "count": 1, "ammo" : 4 }
			],
			"ai" : 3,
			"deathDelay"  : 120,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 128
		}, {
			"id" : 135,
			"name" : "Confed Patrol Ship",
			"longName"  : "Terran Naval Yards P-361 patrol fighter",
			"shortName" : "Patrol Ship",
			"commName"  : "Patrol Ship",
			"subtitle"  : "",
			"speed"  : 525,
			"accel"  : 979,
			"turn"   : 60,
			"shield" : [200, 167],
			"armor"  : [1, 0],
			"fuel"   : [200, 0],
			"cost"   : 700000,
			"mass"   : 11,
			"length" : 10,
			"cargo"  : 5,
			"space"  : 5,
			"crew"   : 1,
			"techLevel" : 5001,
			"strength"  : 5,
			"maxGun"    : 4,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 130, "count": 4, "ammo" : 0 },
				{ "id" : 132, "count": 1, "ammo" : 2 }
			],
			"ai" : 4,
			"deathDelay"  : 30,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 128
		}, {
			"id" : 136,
			"name" : "Rapier",
			"longName"  : "CDX Starworks F/A-927E Rapier attack fighter",
			"shortName" : "Rapier",
			"commName"  : "Rapier",
			"subtitle"  : "",
			"speed"  : 450,
			"accel"  : 979,
			"turn"   : 60,
			"shield" : [350, 205],
			"armor"  : [150, 0],
			"fuel"   : [400, 0],
			"cost"   : 1200000,
			"mass"   : 15,
			"length" : 12,
			"cargo"  : 15,
			"space"  : 20,
			"crew"   : 2,
			"techLevel" : 3,
			"strength"  : 10,
			"maxGun"    : 4,
			"maxTurret" : 1,
			"weapons"   : [
				{ "id" : 130, "count": 4, "ammo" : -1 },
				{ "id" : 143, "count": 1, "ammo" : -1 },
				{ "id" : 131, "count": 1, "ammo" : 6 },
				{ "id" : 139, "count": 1, "ammo" : 6 }
			],
			"ai" : 4,
			"deathDelay"  : 39,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 137,
			"name" : "Lightning",
			"longName"  : "Blazitron Industries F-563 Lightning fighter-bomber",
			"shortName" : "Lightning",
			"commName"  : "Lightning",
			"subtitle"  : "",
			"speed"  : 525,
			"accel"  : 1406,
			"turn"   : 75,
			"shield" : [250, 167],
			"armor"  : [50, 0],
			"fuel"   : [500, 0],
			"cost"   : 1000000,
			"mass"   : 12,
			"length" : 10,
			"cargo"  : 5,
			"space"  : 15,
			"crew"   : 1,
			"techLevel" : 3,
			"strength"  : 5,
			"maxGun"    : 5,
			"maxTurret" : 1,
			"weapons"   : [
				{ "id" : 128, "count": 4, "ammo" : 0 },
				{ "id" : 139, "count": 1, "ammo" : 2 },
				{ "id" : 132, "count": 2, "ammo" : 4 },
				{ "id" : 141, "count": 1, "ammo" : 40 }
			],
			"ai" : 4,
			"deathDelay"  : 30,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 138,
			"name" : "Defender",
			"longName"  : "CDX Starworks I-287B Defender",
			"shortName" : "Defender",
			"commName"  : "Defender",
			"subtitle"  : "Interceptor",
			"speed"  : 750,
			"accel"  : 1688,
			"turn"   : 90,
			"shield" : [100, 167],
			"armor"  : [1, 0],
			"fuel"   : [300, 0],
			"cost"   : 100000,
			"mass"   : 9,
			"length" : 8,
			"cargo"  : 1,
			"space"  : 5,
			"crew"   : 1,
			"techLevel" : 2,
			"strength"  : 5,
			"maxGun"    : 3,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 128, "count": 3, "ammo" : -1 }
			],
			"ai" : 4,
			"deathDelay"  : 20,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 139,
			"name" : "Executive Transport",
			"longName"  : "Krydanti Systems Mk. VI executive transport",
			"shortName" : "Exec. Transport",
			"commName"  : "VIP Transport",
			"subtitle"  : "",
			"speed"  : 450,
			"accel"  : 698,
			"turn"   : 45,
			"shield" : [100, 60],
			"armor"  : [50, 0],
			"fuel"   : [300, 0],
			"cost"   : 90000,
			"mass"   : 35,
			"length" : 10,
			"cargo"  : 10,
			"space"  : 10,
			"crew"   : 2,
			"techLevel" : 1,
			"strength"  : 10,
			"maxGun"    : 0,
			"maxTurret" : 0,
			"weapons"   : [],
			"ai" : 1,
			"deathDelay"  : 30,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 140,
			"name" : "Luxury Liner",
			"longName"  : "Centauri Spacelines luxury liner",
			"shortName" : "Luxury Liner",
			"commName"  : "Liner",
			"subtitle"  : "",
			"speed"  : 225,
			"accel"  : 416,
			"turn"   : 15,
			"shield" : [300, 25],
			"armor"  : [200, 0],
			"fuel"   : [400, 0],
			"cost"   : 1000000,
			"mass"   : 300,
			"length" : 180,
			"cargo"  : 20,
			"space"  : 30,
			"crew"   : 65,
			"techLevel" : 9999,
			"strength"  : 325,
			"maxGun"    : 0,
			"maxTurret" : 2,
			"weapons"   : [
				{ "id" : 133, "count": 1, "ammo" : 0 }
			],
			"ai" : 1,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 141,
			"name" : "Rebel Destroyer",
			"longName"  : "Rebel Destroyer",
			"shortName" : "Rebel Destroyer",
			"commName"  : "Destroyer",
			"subtitle"  : "",
			"speed"  : 450,
			"accel"  : 1260,
			"turn"   : 45,
			"shield" : [2000, 300],
			"armor"  : [500, 0],
			"fuel"   : [400, 0],
			"cost"   : 2800000,
			"mass"   : 240,
			"length" : 52,
			"cargo"  : 30,
			"space"  : 80,
			"crew"   : 115,
			"techLevel" : 5000,
			"strength"  : 575,
			"maxGun"    : 5,
			"maxTurret" : 4,
			"weapons"   : [
				{ "id" : 134, "count": 2, "ammo" : 0 },
				{ "id" : 139, "count": 1, "ammo" : 6 },
				{ "id" : 131, "count": 2, "ammo" : 12 },
				{ "id" : 132, "count": 2, "ammo" : 10 }
			],
			"ai" : 3,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 129
		}, {
			"id" : 142,
			"name" : "Rebel Cruiser",
			"longName"  : "Rebel Cruiser",
			"shortName" : "Rebel Cruiser",
			"commName"  : "Cruiser",
			"subtitle"  : "",
			"speed"  : 300,
			"accel"  : 630,
			"turn"   : 30,
			"shield" : [5000, 417],
			"armor"  : [800, 0],
			"fuel"   : [500, 0],
			"cost"   : 14000000,
			"mass"   : 850,
			"length" : 280,
			"cargo"  : 60,
			"space"  : 120,
			"crew"   : 527,
			"techLevel" : 5000,
			"strength"  : 2635,
			"maxGun"    : 7,
			"maxTurret" : 4,
			"weapons"   : [
				{ "id" : 134, "count": 3, "ammo" : 0 },
				{ "id" : 139, "count": 1, "ammo" : 8 },
				{ "id" : 132, "count": 2, "ammo" : 20 },
				{ "id" : 137, "count": 1, "ammo" : 4 }
			],
			"ai" : 3,
			"deathDelay"  : 120,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 129
		}, {
			"id" : 143,
			"name" : "Kestrel",
			"longName"  : "Atinoda Kestrel escort frigate",
			"shortName" : "Kestrel",
			"commName"  : "Kestrel",
			"subtitle"  : "",
			"speed"  : 338,
			"accel"  : 844,
			"turn"   : 45,
			"shield" : [1300, 163],
			"armor"  : [500, 0],
			"fuel"   : [500, 0],
			"cost"   : 10000000,
			"mass"   : 230,
			"length" : 80,
			"cargo"  : 80,
			"space"  : 120,
			"crew"   : 196,
			"techLevel" : 5,
			"strength"  : 980,
			"maxGun"    : 6,
			"maxTurret" : 3,
			"weapons"   : [
				{ "id" : 131, "count": 1, "ammo" : 4 },
				{ "id" : 134, "count": 2, "ammo" : 0 },
				{ "id" : 132, "count": 2, "ammo" : 10 },
				{ "id" : 138, "count": 1, "ammo" : 2 }
			],
			"ai" : 3,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 144,
			"name" : "Manta",
			"longName"  : "Astrotech Space Industries Model 37B Manta light fighter",
			"shortName" : "Manta",
			"commName"  : "Manta",
			"subtitle"  : "",
			"speed"  : 638,
			"accel"  : 1406,
			"turn"   : 90,
			"shield" : [200, 167],
			"armor"  : [1, 0],
			"fuel"   : [200, 0],
			"cost"   : 180000,
			"mass"   : 9,
			"length" : 8,
			"cargo"  : 3,
			"space"  : 5,
			"crew"   : 1,
			"techLevel" : 5000,
			"strength"  : 5,
			"maxGun"    : 4,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 144, "count": 3, "ammo" : 0 },
				{ "id" : 132, "count": 1, "ammo" : 2 }
			],
			"ai" : 4,
			"deathDelay"  : 30,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 129
		}, {
			"id" : 145,
			"name" : "Scoutship",
			"longName"  : "Krydanti Systems Mk. XVII scoutship",
			"shortName" : "Scoutship",
			"commName"  : "Scoutship",
			"subtitle"  : "",
			"speed"  : 413,
			"accel"  : 844,
			"turn"   : 60,
			"shield" : [300, 125],
			"armor"  : [50, 0],
			"fuel"   : [900, 0],
			"cost"   : 80000,
			"mass"   : 50,
			"length" : 18,
			"cargo"  : 40,
			"space"  : 35,
			"crew"   : 2,
			"techLevel" : 1,
			"strength"  : 10,
			"maxGun"    : 4,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 128, "count": 2, "ammo" : 0 }
			],
			"ai" : 2,
			"deathDelay"  : 33,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 146,
			"name" : "Corvette",
			"longName"  : "Maskirovka IPV-1 Corvette",
			"shortName" : "Corvette",
			"commName"  : "Corvette",
			"subtitle"  : "",
			"speed"  : 450,
			"accel"  : 911,
			"turn"   : 45,
			"shield" : [700, 131],
			"armor"  : [300, 0],
			"fuel"   : [400, 0],
			"cost"   : 2500000,
			"mass"   : 135,
			"length" : 30,
			"cargo"  : 60,
			"space"  : 50,
			"crew"   : 37,
			"techLevel" : 4,
			"strength"  : 185,
			"maxGun"    : 5,
			"maxTurret" : 2,
			"weapons"   : [
				{ "id" : 141, "count": 1, "ammo" : 60 },
				{ "id" : 133, "count": 2, "ammo" : 0 },
				{ "id" : 132, "count": 2, "ammo" : 8 },
				{ "id" : 139, "count": 1, "ammo" : 4 }
			],
			"ai" : 3,
			"deathDelay"  : 60,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 147,
			"name" : "Confed Gunboat",
			"longName"  : "Terran Naval Yards G-564 missile gunboat",
			"shortName" : "Confed Gunboat",
			"commName"  : "Gunboat",
			"subtitle"  : "",
			"speed"  : 375,
			"accel"  : 979,
			"turn"   : 45,
			"shield" : [200, 125],
			"armor"  : [50, 0],
			"fuel"   : [300, 0],
			"cost"   : 900000,
			"mass"   : 15,
			"length" : 12,
			"cargo"  : 5,
			"space"  : 5,
			"crew"   : 2,
			"techLevel" : 5001,
			"strength"  : 10,
			"maxGun"    : 3,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 128, "count": 2, "ammo" : 0 },
				{ "id" : 132, "count": 1, "ammo" : 4 },
				{ "id" : 139, "count": 1, "ammo" : 2 }
			],
			"ai" : 4,
			"deathDelay"  : 37,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 128
		}, {
			"id" : 148,
			"name" : "Hawk",
			"longName"  : "Mastech F-5 Hawk light fighter",
			"shortName" : "Hawk",
			"commName"  : "Hawk",
			"subtitle"  : "",
			"speed"  : 525,
			"accel"  : 1260,
			"turn"   : 75,
			"shield" : [230, 167],
			"armor"  : [1, 0],
			"fuel"   : [100, 0],
			"cost"   : 0,
			"mass"   : 10,
			"length" : 9,
			"cargo"  : 3,
			"space"  : 10,
			"crew"   : 1,
			"techLevel" : 9999,
			"strength"  : 5,
			"maxGun"    : 4,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 128, "count": 4, "ammo" : 0 },
				{ "id" : 132, "count": 1, "ammo" : 2 }
			],
			"ai" : 4,
			"deathDelay"  : 30,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 149,
			"name" : "Alien Fighter",
			"longName"  : "alien fighter",
			"shortName" : "Alien Fighter",
			"commName"  : "Alien",
			"subtitle"  : "",
			"speed"  : 750,
			"accel"  : 2025,
			"turn"   : 90,
			"shield" : [5000, 3125],
			"armor"  : [1, 0],
			"fuel"   : [1000, 0],
			"cost"   : 0,
			"mass"   : 18,
			"length" : 15,
			"cargo"  : 10,
			"space"  : 10,
			"crew"   : 8,
			"techLevel" : 9999,
			"strength"  : 40,
			"maxGun"    : 8,
			"maxTurret" : 0,
			"weapons"   : [
				{ "id" : 147, "count": 1, "ammo" : 0 },
				{ "id" : 148, "count": 1, "ammo" : 2 }
			],
			"ai" : 4,
			"deathDelay"  : 40,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 140
		}, {
			"id" : 150,
			"name" : "Alien Cruiser",
			"longName"  : "alien cruiser",
			"shortName" : "Alien Cruiser",
			"commName"  : "Alien",
			"subtitle"  : "",
			"speed"  : 525,
			"accel"  : 1350,
			"turn"   : 30,
			"shield" : [3000, 938],//"shield" : [-3000, 938],
			"armor"  : [1, 0],
			"fuel"   : [2000, 0],
			"cost"   : 0,
			"mass"   : 600,
			"length" : 120,
			"cargo"  : 50,
			"space"  : 60,
			"crew"   : 650,
			"techLevel" : 9999,
			"strength"  : 3250,
			"maxGun"    : 12,
			"maxTurret" : 4,
			"weapons"   : [
				{ "id" : 151, "count": 1, "ammo" : 3 },
				{ "id" : 152, "count": 1, "ammo" : 0 },
				{ "id" : 148, "count": 4, "ammo" : 80 }
			],
			"ai" : 3,
			"deathDelay"  : 341,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 140
		}, {
			"id" : 151,
			"name" : "Clipper",
			"longName"  : "Aerostar C-35 Star Clipper Mk. IV",
			"shortName" : "Clipper",
			"commName"  : "Clipper",
			"subtitle"  : "",
			"speed"  : 450,
			"accel"  : 630,
			"turn"   : 45,
			"shield" : [300, 150],
			"armor"  : [200, 0],
			"fuel"   : [400, 0],
			"cost"   : 400000,
			"mass"   : 85,
			"length" : 18,
			"cargo"  : 35,
			"space"  : 25,
			"crew"   : 6,
			"techLevel" : 3,
			"strength"  : 30,
			"maxGun"    : 4,
			"maxTurret" : 1,
			"weapons"   : [
				{ "id" : 130, "count": 3, "ammo" : 0 },
				{ "id" : 141, "count": 1, "ammo" : 25 }
			],
			"ai" : 4,
			"deathDelay"  : 37,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 152,
			"name" : "Kestrel",
			"longName"  : "Atinoda Kestrel escort frigate",
			"shortName" : "Kestrel",
			"commName"  : "Kestrel",
			"subtitle"  : "",
			"speed"  : 338,
			"accel"  : 844,
			"turn"   : 45,
			"shield" : [1050, 125],
			"armor"  : [500, 0],
			"fuel"   : [500, 0],
			"cost"   : 7500000,
			"mass"   : 230,
			"length" : 80,
			"cargo"  : 80,
			"space"  : 120,
			"crew"   : 196,
			"techLevel" : 250,
			"strength"  : 980,
			"maxGun"    : 6,
			"maxTurret" : 3,
			"weapons"   : [
				{ "id" : 131, "count": 1, "ammo" : 4 },
				{ "id" : 134, "count": 2, "ammo" : 0 },
				{ "id" : 132, "count": 2, "ammo" : 6 },
				{ "id" : 138, "count": 1, "ammo" : 0 }
			],
			"ai" : 3,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}, {
			"id" : 153,
			"name" : "Escort Carrier",
			"longName"  : "Rebel Escort Carrier",
			"shortName" : "Escort Carrier",
			"commName"  : "Carrier",
			"subtitle"  : "",
			"speed"  : 173,
			"accel"  : 338,
			"turn"   : 15,
			"shield" : [850, 120],
			"armor"  : [500, 0],
			"fuel"   : [1000, 0],
			"cost"   : 5000000,
			"mass"   : 800,
			"length" : 250,
			"cargo"  : 20,
			"space"  : 10,
			"crew"   : 95,
			"techLevel" : 9999,
			"strength"  : 475,
			"maxGun"    : 0,
			"maxTurret" : 2,
			"weapons"   : [
				{ "id" : 134, "count": 2, "ammo" : 0 },
				{ "id" : 137, "count": 1, "ammo" : 4 }
			],
			"ai" : 3,
			"deathDelay"  : 80,
			"shipyardDesc" : "",
			"escortDesc" : "",
			"govt" : 129
		}, {
			"id" : 895,
			"name" : "Escape Pod",
			"longName"  : "escape pod",
			"shortName" : "Escape Pod",
			"commName"  : "Escape Pod",
			"subtitle"  : "",
			"speed"  : 450,
			"accel"  : 675,
			"turn"   : 0,
			"shield" : [0, 0],
			"armor"  : [1, 0],
			"fuel"   : [0, 0],
			"cost"   : 0,
			"mass"   : 1,
			"length" : 2,
			"cargo"  : 0,
			"space"  : 0,
			"crew"   : 1,
			"techLevel" : 9999,
			"strength"  : 5,
			"maxGun"    : 2,
			"maxTurret" : 0,
			"weapons"   : [],
			"ai" : 1,
			"deathDelay"  : 7,
			"shipyardDesc" : "",
			"escortDesc" : ""
		}
	]
}
