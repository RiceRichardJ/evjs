/**
 * düde Resource - Ship Type Definitions for Random Generation
 *
 * The düde resource defines the characteristics of ships that appear randomly
 * in star systems. Each düde specifies a mix of ship types, their probabilities,
 * AI behavior, and associated government.
 *
 * Resource ID: Referenced by sÿst resources to populate star systems
 *
 * Fields:
 *
 * name (STR#63): Name of this dude type (for reference only)
 *
 * aiType (WORD): AI behavior type (1=merchant, 2=freighter, 3=warship, 4=interceptor)
 *
 * shipTypes (4 WORDs): IDs of shïp resources that can appear. First ship type
 *   is most common, last is rarest. Use -1 for unused slots.
 *
 * probability (4 WORDs): Relative probability for each ship type. Higher numbers
 *   mean more frequent appearance.
 *
 * government (WORD): ID of gövt resource this dude belongs to
 *
 * booty (HEXWORD): What goods this dude may be carrying (hex flags)
 *
 * infoTypes (WORD): What kinds of information this dude can provide at spaceport
 *   bar (links to STR# resources)
 *
 * Usage:
 * - Systems spawn ships based on their düde list and avgShips count
 * - Ship type is randomly selected weighted by probability values
 * - AI type determines combat behavior and trading patterns
 *
 * Source: Escape Velocity Resource Bible, Pages 6-7
 */

export type DudeId = number & { readonly __brand: "DudeId" };

export type Dude = {
	id: number,
	name: string,
	aiType: number,
	shipTypes: number[],
	probability: number[],
	government: number,
	booty: string,
	infoTypes: number,
};

const dude: Record<DudeId, Dude> = {
	[128 as DudeId]: {
		"id": 128 as DudeId,
		"name": "Loser Confed Merchants",
		"aiType": 1,
		"shipTypes": [ 128, 129, 130, 131 ],
		"probability": [ 30, 40, 15, 15 ],
		"government": 128,
		"booty": "0x007F",
		"infoTypes": 1000
	},
	[129 as DudeId]: {
		"id": 129 as DudeId,
		"name": "Confed Warships",
		"aiType": 3,
		"shipTypes": [ 135, 147, 133, 134 ],
		"probability": [ 35, 25, 30, 10 ],
		"government": 128,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[130 as DudeId]: {
		"id": 130 as DudeId,
		"name": "Rebels",
		"aiType": 3,
		"shipTypes": [ 141, 142, 144, 144 ],
		"probability": [ 35, 15, 25, 25 ],
		"government": 129,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[131 as DudeId]: {
		"id": 131 as DudeId,
		"name": "Beefy Confed Merchants",
		"aiType": 2,
		"shipTypes": [ 132, 129, 129, 145 ],
		"probability": [ 37, 19, 19, 25 ],
		"government": 128,
		"booty": "0x007F",
		"infoTypes": 2000
	},
	[132 as DudeId]: {
		"id": 132 as DudeId,
		"name": "Militia Interceptors",
		"aiType": 4,
		"shipTypes": [ 138, 138, 138, 146 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 133,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[133 as DudeId]: {
		"id": 133 as DudeId,
		"name": "Ind. Beefy Merchants",
		"aiType": 2,
		"shipTypes": [ 131, 151, 132, 145 ],
		"probability": [ 15, 20, 55, 10 ],
		"government": -1,
		"booty": "0x007F",
		"infoTypes": 7000
	},
	[134 as DudeId]: {
		"id": 134 as DudeId,
		"name": "Pirates",
		"aiType": 3,
		"shipTypes": [ 132, 146, 151, 143 ],
		"probability": [ 40, 15, 40, 5 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[135 as DudeId]: {
		"id": 135 as DudeId,
		"name": "Cydonian Misc.",
		"aiType": 3,
		"shipTypes": [ 146, 132, 138, 137 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 131,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[136 as DudeId]: {
		"id": 136 as DudeId,
		"name": "Lethean Misc.",
		"aiType": 3,
		"shipTypes": [ 136, 132, 138, 146 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 132,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[137 as DudeId]: {
		"id": 137 as DudeId,
		"name": "Confed Interceptors",
		"aiType": 4,
		"shipTypes": [ 135, 135, 147, 147 ],
		"probability": [ 30, 30, 20, 20 ],
		"government": 128,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[138 as DudeId]: {
		"id": 138 as DudeId,
		"name": "Rebel Interceptors",
		"aiType": 4,
		"shipTypes": [ 144, 144, 144, 144 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[139 as DudeId]: {
		"id": 139 as DudeId,
		"name": "Rich Confed Dudes",
		"aiType": 1,
		"shipTypes": [ 139, 139, 140, 140 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x0048",
		"infoTypes": 0
	},
	[140 as DudeId]: {
		"id": 140 as DudeId,
		"name": "4 Liner - 1 ExecTrans",
		"aiType": 1,
		"shipTypes": [ 140, 140, 140, 139 ],
		"probability": [ 25, 25, 35, 15 ],
		"government": 128,
		"booty": "0x0048",
		"infoTypes": 0
	},
	[141 as DudeId]: {
		"id": 141 as DudeId,
		"name": "Confed ExecTrans Only",
		"aiType": 1,
		"shipTypes": [ 139, 139, 139, 139 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x0048",
		"infoTypes": 0
	},
	[142 as DudeId]: {
		"id": 142 as DudeId,
		"name": "Confed Convoy Dude",
		"aiType": 1,
		"shipTypes": [ 129, 129, 129, 129 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[143 as DudeId]: {
		"id": 143 as DudeId,
		"name": "Confed PS & FRG",
		"aiType": 3,
		"shipTypes": [ 135, 135, 135, 133 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[144 as DudeId]: {
		"id": 144 as DudeId,
		"name": "Ind. Argosies",
		"aiType": 2,
		"shipTypes": [ 132, 132, 132, 132 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": -1,
		"booty": "0x007F",
		"infoTypes": 7000
	},
	[145 as DudeId]: {
		"id": 145 as DudeId,
		"name": "Confed BFs",
		"aiType": 1,
		"shipTypes": [ 130, 130, 130, 130 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[146 as DudeId]: {
		"id": 146 as DudeId,
		"name": "Astex Freighters",
		"aiType": 1,
		"shipTypes": [ 130, 130, 130, 130 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 135,
		"booty": "0x0012",
		"infoTypes": 0
	},
	[147 as DudeId]: {
		"id": 147 as DudeId,
		"name": "Astex Interceptors",
		"aiType": 4,
		"shipTypes": [ 135, 135, 135, 135 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 135,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[148 as DudeId]: {
		"id": 148 as DudeId,
		"name": "Rebel Fleet Assembly",
		"aiType": 4,
		"shipTypes": [ 141, 141, 142, 142 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[149 as DudeId]: {
		"id": 149 as DudeId,
		"name": "Confed PS Escorts",
		"aiType": 3,
		"shipTypes": [ 135, 135, 135, 135 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[150 as DudeId]: {
		"id": 150 as DudeId,
		"name": "Cydonian Invaders",
		"aiType": 4,
		"shipTypes": [ 146, 132, 138, 137 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 131,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[151 as DudeId]: {
		"id": 151 as DudeId,
		"name": "Lethean Invaders",
		"aiType": 4,
		"shipTypes": [ 136, 132, 138, 146 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 132,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[152 as DudeId]: {
		"id": 152 as DudeId,
		"name": "Bounty Hunters",
		"aiType": 3,
		"shipTypes": [ 136, 136, 137, 137 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 137,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[153 as DudeId]: {
		"id": 153 as DudeId,
		"name": "Rebel Cruiser Only",
		"aiType": 3,
		"shipTypes": [ 142, 142, 142, 142 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[154 as DudeId]: {
		"id": 154 as DudeId,
		"name": "Rebel BFs",
		"aiType": 1,
		"shipTypes": [ 130, 130, 130, 130 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[155 as DudeId]: {
		"id": 155 as DudeId,
		"name": "Defender Interceptors",
		"aiType": 4,
		"shipTypes": [ 138, 138, 138, 138 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": -1,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[156 as DudeId]: {
		"id": 156 as DudeId,
		"name": "Rapier Interceptors",
		"aiType": 4,
		"shipTypes": [ 136, 136, 136, 136 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": -1,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[157 as DudeId]: {
		"id": 157 as DudeId,
		"name": "Frigate Interceptors",
		"aiType": 4,
		"shipTypes": [ 133, 133, 133, 133 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[158 as DudeId]: {
		"id": 158 as DudeId,
		"name": "Destroyer Interceptors",
		"aiType": 4,
		"shipTypes": [ 141, 141, 141, 141 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[159 as DudeId]: {
		"id": 159 as DudeId,
		"name": "Pirate Corvettes",
		"aiType": 3,
		"shipTypes": [ 146, 146, 146, 146 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[160 as DudeId]: {
		"id": 160 as DudeId,
		"name": "Confed LFs",
		"aiType": 1,
		"shipTypes": [ 129, 129, 129, 129 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[161 as DudeId]: {
		"id": 161 as DudeId,
		"name": "Pirate Kestrels",
		"aiType": 3,
		"shipTypes": [ 143, 143, 143, 143 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[162 as DudeId]: {
		"id": 162 as DudeId,
		"name": "Pirate Fighters",
		"aiType": 3,
		"shipTypes": [ 136, 136, 137, 137 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[163 as DudeId]: {
		"id": 163 as DudeId,
		"name": "Confed ExecTrans",
		"aiType": 1,
		"shipTypes": [ 139, 139, 139, 139 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 128,
		"booty": "0x0048",
		"infoTypes": 0
	},
	[164 as DudeId]: {
		"id": 164 as DudeId,
		"name": "Pirate Argosies",
		"aiType": 3,
		"shipTypes": [ 132, 132, 132, 132 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[165 as DudeId]: {
		"id": 165 as DudeId,
		"name": "Wimpy Pirate Fighters",
		"aiType": 3,
		"shipTypes": [ 137, 137, 138, 145 ],
		"probability": [ 15, 15, 35, 35 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[166 as DudeId]: {
		"id": 166 as DudeId,
		"name": "Starbound Couriers",
		"aiType": 2,
		"shipTypes": [ 131, 131, 131, 131 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 138,
		"booty": "0x007F",
		"infoTypes": -1
	},
	[167 as DudeId]: {
		"id": 167 as DudeId,
		"name": "ConEx Couriers",
		"aiType": 2,
		"shipTypes": [ 131, 131, 131, 131 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 139,
		"booty": "0x007F",
		"infoTypes": -1
	},
	[168 as DudeId]: {
		"id": 168 as DudeId,
		"name": "ConEx Fighters",
		"aiType": 3,
		"shipTypes": [ 131, 138, 138, 145 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 139,
		"booty": "0x0000",
		"infoTypes": -1
	},
	[169 as DudeId]: {
		"id": 169 as DudeId,
		"name": "ConEx Defenders",
		"aiType": 4,
		"shipTypes": [ 138, 138, 138, 138 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 139,
		"booty": "0x0000",
		"infoTypes": -1
	},
	[170 as DudeId]: {
		"id": 170 as DudeId,
		"name": "Alien Fighters",
		"aiType": 4,
		"shipTypes": [ 149, 149, 149, 149 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 140,
		"booty": "0x0000",
		"infoTypes": -1
	},
	[171 as DudeId]: {
		"id": 171 as DudeId,
		"name": "Rebel Destroyer Only",
		"aiType": 3,
		"shipTypes": [ 141, 141, 141, 141 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[172 as DudeId]: {
		"id": 172 as DudeId,
		"name": "Alien Cruiser",
		"aiType": 4,
		"shipTypes": [ 150, 150, 150, 150 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 140,
		"booty": "0x0000",
		"infoTypes": -1
	},
	[173 as DudeId]: {
		"id": 173 as DudeId,
		"name": "Pirate Lightnings",
		"aiType": 3,
		"shipTypes": [ 137, 137, 137, 137 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 130,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[174 as DudeId]: {
		"id": 174 as DudeId,
		"name": "Psycho Rebel Mantas",
		"aiType": 3,
		"shipTypes": [ 144, 144, 144, 144 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 146,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[175 as DudeId]: {
		"id": 175 as DudeId,
		"name": "Psycho Rebels",
		"aiType": 3,
		"shipTypes": [ 141, 142, 144, 144 ],
		"probability": [ 35, 15, 25, 25 ],
		"government": 146,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[176 as DudeId]: {
		"id": 176 as DudeId,
		"name": "Psycho Confed Frigates",
		"aiType": 3,
		"shipTypes": [ 133, 133, 133, 133 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 143,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[177 as DudeId]: {
		"id": 177 as DudeId,
		"name": "Rebel Destroyer Escort",
		"aiType": 3,
		"shipTypes": [ 141, 141, 141, 141 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 144,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[178 as DudeId]: {
		"id": 178 as DudeId,
		"name": "Rebel Cruiser Escort",
		"aiType": 3,
		"shipTypes": [ 142, 142, 142, 142 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 144,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[179 as DudeId]: {
		"id": 179 as DudeId,
		"name": "Confed interceptor escorts",
		"aiType": 3,
		"shipTypes": [ 135, 135, 147, 147 ],
		"probability": [ 30, 30, 20, 20 ],
		"government": 145,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[180 as DudeId]: {
		"id": 180 as DudeId,
		"name": "Confed cruiser escorts",
		"aiType": 3,
		"shipTypes": [ 134, 134, 134, 134 ],
		"probability": [ 30, 30, 20, 20 ],
		"government": 145,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[181 as DudeId]: {
		"id": 181 as DudeId,
		"name": "Merchant couriers",
		"aiType": 2,
		"shipTypes": [ 131, 131, 131, 131 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 136,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[182 as DudeId]: {
		"id": 182 as DudeId,
		"name": "UGE Corvette/Kestrel",
		"aiType": 4,
		"shipTypes": [ 143, 143, 146, 146 ],
		"probability": [ 15, 15, 35, 35 ],
		"government": 142,
		"booty": "0x0085",
		"infoTypes": 1000
	},
	[183 as DudeId]: {
		"id": 183 as DudeId,
		"name": "ConEx Corvette/Kestrel",
		"aiType": 4,
		"shipTypes": [ 143, 143, 146, 146 ],
		"probability": [ 15, 15, 35, 35 ],
		"government": 139,
		"booty": "0x0000",
		"infoTypes": -1
	},
	[184 as DudeId]: {
		"id": 184 as DudeId,
		"name": "Rebel Manta Escort",
		"aiType": 3,
		"shipTypes": [ 144, 144, 144, 144 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 144,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[185 as DudeId]: {
		"id": 185 as DudeId,
		"name": "Psycho Manta/Destroyer",
		"aiType": 3,
		"shipTypes": [ 144, 144, 144, 141 ],
		"probability": [ 21, 21, 21, 37 ],
		"government": 146,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[186 as DudeId]: {
		"id": 186 as DudeId,
		"name": "Psycho ConEx Fighters",
		"aiType": 3,
		"shipTypes": [ 131, 138, 138, 145 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 139,
		"booty": "0x0000",
		"infoTypes": -1
	},
	[187 as DudeId]: {
		"id": 187 as DudeId,
		"name": "Psycho Confed Frg/Crs",
		"aiType": 3,
		"shipTypes": [ 133, 133, 134, 134 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 143,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[188 as DudeId]: {
		"id": 188 as DudeId,
		"name": "Psycho Rebel Dst/Crs",
		"aiType": 3,
		"shipTypes": [ 141, 141, 142, 142 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 146,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[189 as DudeId]: {
		"id": 189 as DudeId,
		"name": "Psycho Astex PS's",
		"aiType": 3,
		"shipTypes": [ 135, 135, 135, 135 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 148,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[190 as DudeId]: {
		"id": 190 as DudeId,
		"name": "Defective Confed Frg",
		"aiType": 2,
		"shipTypes": [ 133, 133, 133, 133 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 149,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[191 as DudeId]: {
		"id": 191 as DudeId,
		"name": "Merchant LFs",
		"aiType": 1,
		"shipTypes": [ 129, 129, 129, 129 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 136,
		"booty": "0x007F",
		"infoTypes": 0
	},
	[192 as DudeId]: {
		"id": 192 as DudeId,
		"name": "Hunter Rapiers",
		"aiType": 3,
		"shipTypes": [ 136, 136, 136, 136 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 152,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[193 as DudeId]: {
		"id": 193 as DudeId,
		"name": "Psycho Escort Carrier",
		"aiType": 3,
		"shipTypes": [ 153, 153, 153, 153 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 146,
		"booty": "0x0000",
		"infoTypes": 0
	},
	[194 as DudeId]: {
		"id": 194 as DudeId,
		"name": "Rebel LFs",
		"aiType": 1,
		"shipTypes": [ 129, 129, 129, 129 ],
		"probability": [ 25, 25, 25, 25 ],
		"government": 129,
		"booty": "0x007F",
		"infoTypes": 0
	}
};

export default dude;
