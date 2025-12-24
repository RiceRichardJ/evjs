/**
 * dësc Resource - Description Text
 *
 * The dësc resource contains text descriptions used throughout EV, including
 * planet landing descriptions, mission briefings, and various interface messages.
 *
 * Resource ID: Assigned per usage (planets start at 128, missions vary)
 *
 * Fields:
 *
 * description (STR#255): The text string, which may contain limited text styling
 *   commands. Maximum 255 characters.
 *
 * name (STR#63): Optional name/title field. Maximum 63 characters.
 *
 * Usage:
 * - Planet landing descriptions use IDs matching their spöb resource IDs
 * - Mission briefings are specified in the mïsn resource
 * - Some desc resources contain multiple paragraphs of text
 *
 * Source: Escape Velocity Resource Bible, Page 5
 */
export type desc = {
	id: number,
	name: string,
	description: string,
};

const desc: desc[] = [
	{
		"id": 128,
		"name": "",
		"description": "As every schoolkid knows, Earth is the homeworld of the human race. It is also the capital of the Confederation."
	},
	{
		"id": 129,
		"name": "",
		"description": "Stardock Alpha is the Confederation Navy’s primary spacedock and ship refitting complex."
	},
	{
		"id": 130,
		"name": "",
		"description": "Mars is the human race’s second-oldest colony world. It was first settled in the middle of the 21st century, and is now home to nearly a billion inhabitants."
	},
	{
		"id": 131,
		"name": "",
		"description": "Landfall was the first extrasolar planet settled by colony ships from Earth. Today it is a booming industrial world."
	},
	{
		"id": 132,
		"name": "",
		"description": "Luna is Earth’s only moon. Terran Naval yards has its main shipyard facilities here, as Luna’s low gravity and near-perfect vacuum are ideal for heavy warship construction."
	},
	{
		"id": 133,
		"name": "",
		"description": "Levo is an independent world that has resisted joining the Confederation. Anyone is welcome at the tiny but neutral Levo Spaceport, located on the island of Locanda in Levo’s southern ocean."
	},
	{
		"id": 134,
		"name": "",
		"description": "New Britain is a populous island world, and one of the first worlds settled during the Great Expansion. Much of New Britain’s exports are food products, as its oceans are teeming with plant and animal life. "
	},
	{
		"id": 135,
		"name": "",
		"description": "Capella is a lush, beautiful planet that attracts many tourists. Hundreds of Centauri Spacelines ships visit Capella each year."
	},
	{
		"id": 136,
		"name": "",
		"description": "Dune is a parched desert world. The few people who live on this planet say they do so for the solitude."
	},
	{
		"id": 137,
		"name": "",
		"description": "Spica is a world shrouded by toxic clouds and a choking atmosphere. The uridium miners who work here have the highest fatality rate of any in the galaxy, as even a brief accidental exposure to Spica’s atmosphere is instantly fatal."
	},
	{
		"id": 138,
		"name": "",
		"description": "Maxwell’s Purchase is a peaceful, independent world dedicated mainly to farming and some light manufacturing. The delicious junga root is grown primarily on  this planet."
	},
	{
		"id": 139,
		"name": "",
		"description": "Hodgson’s World is home to some of the best lobster in the galaxy."
	},
	{
		"id": 140,
		"name": "",
		"description": "The nighttime sky of Northstar is truly a sight to behold. The luminescent rings that circle the planet carve a glimmering arc across the sky each night, providing a spectacular show for natives and visitors alike. "
	},
	{
		"id": 141,
		"name": "",
		"description": "Master’s Planet is a strange world with few known inhabitants. The occasional visitor has been known to disappear on Master’s Planet, though so far no explanation has been found for these occurrances."
	},
	{
		"id": 142,
		"name": "",
		"description": "Many of the inhabitants of Torgo Prime are carriers of the awful Torgo virus, which causes extreme swelling of the joints and degradation of the speech centers of the brain. In its later stages, the Torgo virus renders its victims incapable of functioning in normal society. No cure is known, so the relief ships keep coming here, delivering medical supplies to fight off the disease."
	},
	{
		"id": 143,
		"name": "",
		"description": "Sirius III - a gas giant."
	},
	{
		"id": 144,
		"name": "",
		"description": "Sirius Station is the main operating base of the Sirius Cybernetics Corporation, makers of fine cybernetic products."
	},
	{
		"id": 145,
		"name": "",
		"description": "Tau Ceti IV was first visited by the colony ship Marathon."
	},
	{
		"id": 146,
		"name": "",
		"description": "Merlin is the largest moon of Tau Ceti IV. Its size is sufficent to hold an atmosphere, and conditions on Merlin are quite Earthlike, save for the somewhat lower gravity. The inhabitants of Merlin hold human-powered air races several times a year."
	},
	{
		"id": 147,
		"name": "",
		"description": "Tabletop is a planet almost completely devoid of trees. Raw timber and wood products fetch a high price in Tabletop’s commodity exchange. There is even a flourishing black market, which provides Tabletop’s residents with expensive, imported wood products."
	},
	{
		"id": 148,
		"name": "",
		"description": "Enyo’s World"
	},
	{
		"id": 149,
		"name": "",
		"description": "The Enyo Orbital Fuel Refinery is one of the largest producers of processed fuel products in the galaxy. It makes fuel for everything from starships to ground vehicles. The boredom of life on a space station makes the refinery’s crew eager for diversion brought by visiting ships."
	},
	{
		"id": 150,
		"name": "",
		"description": "New Sahara is a hot, dry, flat, and highly uninteresting planet. Its main feature is its resemblance to Earth’s Sahara desert. The planet has only a few nomadic inhabitants."
	},
	{
		"id": 151,
		"name": "",
		"description": "Samson’s Planet is a grim and uninteresting ball of dirty ice. However, underneath the glaciers are large deposits of valuable metal ore."
	},
	{
		"id": 152,
		"name": "",
		"description": "Plateau is a planet composed entirely of mesa-like islands. All the land is flat, and where it isn’t, it’s underwater. Plateau’s inhabitants live in isolated island communities, claiming they find life on this planet peaceful."
	},
	{
		"id": 153,
		"name": "",
		"description": "The colony on Hikeeba was founded by a group of Japanese Haikebo experts intent on establishing a place free of distraction where they could teach martial arts. Pity it’s such a dump, though."
	},
	{
		"id": 154,
		"name": "",
		"description": "New Providence is a peaceful world, founded long ago during the Great Expansion. During the Great War, the Confederation converted the once-agrarian colony into a huge mining operation, run by the Confederation-loyal Astex Mining Corporation."
	},
	{
		"id": 155,
		"name": "",
		"description": "Due to the postwar rise in commercial traffic in the vicinity of the Antares system, the Confederation has constructed this small orbital garrison. It serves as a refuelling base for Confederation patrol ships, as well as a vanguard against possible Rebel incursions against the mines of New Providence."
	},
	{
		"id": 156,
		"name": "",
		"description": "New Istanbul is a major source of prosthetic SynthFlesh and other medical goods, as Flood Medical Technologies has its main factory here."
	},
	{
		"id": 157,
		"name": "",
		"description": "George’s World is perodically rocked by violent earthquakes, and a deep rumbling can be heard at all times, all over the planet. No one has yet postulated an explanation for this phenomenon, but settlers are reluctant to emigrate to George’s World until the mystery is solved."
	},
	{
		"id": 158,
		"name": "",
		"description": "P-8457 is a Marslike desert world with a thin atmosphere and low temperatures. It is uninhabited."
	},
	{
		"id": 159,
		"name": "",
		"description": "Beeblebrox is a wild world, a world of wild parties and wild people. If you have two heads, three arms, and an ego problem, don’t travel to Beeblebrox; you will be laughed at and considered boring and unoriginal."
	},
	{
		"id": 160,
		"name": "",
		"description": "Turin V is an arid, barren world, characterized by freezing temperatures and fierce winds. The colony ship Sojourner II was the first ship to reach this planet, and was forced to crash-land in the desert when its propulsion and life support systems were destroyed by a meteorite."
	},
	{
		"id": 161,
		"name": "",
		"description": "Palshife is a beautiful world of rocky islands and gorgeous skies. It was one of the galaxy’s more popular vacation spots, before the Great War. Now, it is home to the Rebel High Command and the Rebellion’s main troop-training center and shipyard."
	},
	{
		"id": 162,
		"name": "",
		"description": "Alkaid"
	},
	{
		"id": 163,
		"name": "",
		"description": "Alkaidion is the second moon of Alkaid, and the only one capable of supporting life. Its businesses make a huge profit each year through the export of advanced quasiconductor devices constructed in the colony’s high-tech factories - a very valuable source of funds for the Rebellion. However, the moon’s soil has an extremely low concentration of nutrients, forcing the inhabitants of Alkaidion to import much of their food."
	},
	{
		"id": 164,
		"name": "",
		"description": "Regulus II is a Confederation penal colony. Some of the most outspoken opponents of Confederation rule were shipped here after the Great War, and none have been heard from since."
	},
	{
		"id": 165,
		"name": "",
		"description": "Zaxted Starport is a bustling center of trade and commerce."
	},
	{
		"id": 166,
		"name": "",
		"description": "Zaxted"
	},
	{
		"id": 167,
		"name": "",
		"description": "Clotho Prime is often visited by Rebel warships, as the Rebellion maintains a repair and refuelling base on the surface of the planet."
	},
	{
		"id": 168,
		"name": "",
		"description": "Clotho II is a dismal world, wreathed by perpetual storm clouds. The planet was colonized so that the Delahanty plant, a spicy delicacy that grows only on this world, could be harvested."
	},
	{
		"id": 169,
		"name": "",
		"description": "Orion"
	},
	{
		"id": 170,
		"name": "",
		"description": "Hunter is home to the famous Orion Trouser Snake."
	},
	{
		"id": 171,
		"name": "",
		"description": "Atropos features some of the best hoverskiing in the galaxy. Just watch out for the perpetual avalanches."
	},
	{
		"id": 172,
		"name": "",
		"description": "Propus VII"
	},
	{
		"id": 173,
		"name": "",
		"description": "New Scotland’s motto is “It’s Our Bloody Moon, We Can Play The Bagpipes And Eat Haggis All We Want!”"
	},
	{
		"id": 174,
		"name": "",
		"description": "New Scotland’s sister moon, New Ireland, was terraformed during the Great Expansion. Now, its capital city of New Belfast is a model of industrial society."
	},
	{
		"id": 175,
		"name": "",
		"description": "New France was colonized during the Great Expansion as a center of culture, learning, and enlightenment. Now, it has the highest number of gift shops and burger bars per capita of any known planet."
	},
	{
		"id": 176,
		"name": "",
		"description": "Diphidia II is a major exporter of fish and ocean products. Diphidia seaweed, which grows only in Diphidia’s oceans, is renowned for its remarkable strength and durability; no synthetic fiber has yet matched its tensile strength."
	},
	{
		"id": 177,
		"name": "",
		"description": "New Columbia’s rugged terrain forces its inhabitants to live mostly around the port city of New Seattle. Much of the planet is still unexplored."
	},
	{
		"id": 178,
		"name": "",
		"description": "Quake is a world continually shaken by seismic tremors. Anyone who lands here immediately blasts off again and heads for Opal, Quake’s sister world and a far more calming place. Of course, anyone with any sense at all wouldn’t come to Quake in the first place."
	},
	{
		"id": 179,
		"name": "",
		"description": "Armstrong has a large number of shipyards and repair facilities, and the planet also has the most extensive museum of space history in the galaxy."
	},
	{
		"id": 180,
		"name": "",
		"description": "Persephone IX"
	},
	{
		"id": 181,
		"name": "",
		"description": "Rupert is a small moon that is home to a colony of religous fanatics, followers of the Order of the Holy Mac."
	},
	{
		"id": 182,
		"name": "",
		"description": "Darven"
	},
	{
		"id": 183,
		"name": "",
		"description": "Blackthorne is an extremely dangerous place for a law-abiding citizen to hang out. If you don’t actually get your cargo stolen, you’ll at least get your pocket picked. Still, Blackthorne is the place to come if you’re looking for any of the “special” items available here."
	},
	{
		"id": 184,
		"name": "",
		"description": "Pollux VI"
	},
	{
		"id": 185,
		"name": "",
		"description": "New Japan is a peaceful island world, and a well-established colony."
	},
	{
		"id": 186,
		"name": "",
		"description": "Thanos IV"
	},
	{
		"id": 187,
		"name": "",
		"description": "The Syntex Refinery makes most of the coolant fluids for the engines of the galaxy’s starships. Crew members on this remote station lead a boring life, and welcome any diversion brought by passing ships."
	},
	{
		"id": 188,
		"name": "",
		"description": "Ursa Minor Beta is a luxury world, full of tourists and wealthy citizens. Their membership in the Rebellion is more a matter of location than of political sympathies."
	},
	{
		"id": 189,
		"name": "",
		"description": "Perseus II is a hot but pleasant world. Persean Bug Juice is distilled here, and exported to planets across the galaxy."
	},
	{
		"id": 190,
		"name": "",
		"description": "Pegasus is a small mining and research colony on a moon orbiting Perseus II."
	},
	{
		"id": 191,
		"name": "",
		"description": "Sauron is the only inhabited world in this small region of space, as it is convienently located to serve as a refuelling and outfitting base for passing ships."
	},
	{
		"id": 192,
		"name": "",
		"description": "Darkstar’s sun, Nemesis, is a massive red giant - a star which has nearly exhausted its supply of nuclear fuel. At night on the planet, the beautiful Serpens Nebula can be seen drifting across the sky. The people of Darkstar are expert metalworkers, able to turn piles of raw sheet metal into a myriad of useful industrial equipment."
	},
	{
		"id": 193,
		"name": "",
		"description": "New Bavaria is a lovely planet, and its inhabitants are proud of their Germanic heritage. This is one of the few planets in the galaxy where Galactic Standard is not the first language."
	},
	{
		"id": 194,
		"name": "",
		"description": "Many species of animals, both Terran and alien, range free on Palomino’s open grasslands. Part of the planet is a huge nature preserve, and part is a vast breeding ground and stable for work animals, which are still useful on many worlds."
	},
	{
		"id": 195,
		"name": "",
		"description": "Tiber II"
	},
	{
		"id": 196,
		"name": "",
		"description": "Port Oread is a stopover point for passing freighters of many governments and corporations."
	},
	{
		"id": 197,
		"name": "",
		"description": "The religion of the people of Akio is most peculiar - they believe that, some day, a giant turtle will descend from the heavens and deliver them from evil."
	},
	{
		"id": 198,
		"name": "",
		"description": "Lauralee is a beautiful world, with many exotic plant and animal species visible from the spaceport windows."
	},
	{
		"id": 199,
		"name": "",
		"description": "Murphy's World is a planet of terrible luck. Most of the islands on this ocean world are of volcanic origin, with many still active.  Forecasting the frequent eruptions is a huge task, and many people are caught off guard — in the wrong place at the wrong time — when one of the volcanoes unexpectedly erupts."
	},
	{
		"id": 200,
		"name": "",
		"description": "Much of the pre-War industry of Adhara was occupied with producing luxury goods for wealthy planets. As a result, the freedom-loving people of Adhara have been able to contribute substantial revenue to the Rebellion’s war efforts."
	},
	{
		"id": 201,
		"name": "",
		"description": "Sentinel Station used to serve as a base for the patrol ships that escorted bulk freighters full of luxury goods out of the Adhara system - now it functions as the Rebellion’s primary staging platform in this region of space."
	},
	{
		"id": 202,
		"name": "",
		"description": "Zeus is a large planet with high gravity. Violent thunderstorms jolt the desert bluffs with lightning during Zeus’s monsoon season."
	},
	{
		"id": 203,
		"name": "",
		"description": "In sharp contrast with neighboring Zeus, Hera is a lush garden spot. The inhabitants of Hera are extremely involved in nature, and their forestry and conservation skills are legendary. Professional environmentalists and terraformers from Hera are in great demand throughout the galaxy. "
	},
	{
		"id": 204,
		"name": "",
		"description": "Osiris II"
	},
	{
		"id": 205,
		"name": "",
		"description": "Endor is a small moon with low gravity. As a result, the trees that cover this forest world grow to incredible heights."
	},
	{
		"id": 206,
		"name": "",
		"description": "Topaz II"
	},
	{
		"id": 207,
		"name": "",
		"description": "Emerald, the third and largest moon of Topaz II, is home to the Emerald buzzbird. These charming birds produce a sound that has a calming effect on humans, and many are exported to other, less relaxed, planets. During Emerald’s spring, however, the inhabitants must stay indoors and refrain from operating heavy machinery, as the sound made by thousands of flocking buzzbirds can put anyone to sleep in an instant."
	},
	{
		"id": 208,
		"name": "",
		"description": "Virgo is almost all swamp, so the inhabitants are forced to live in the sparsely-dotted mountain ranges. Virgo’s main export is the Virgo Banderfrog, whose hide is highly valued for its toughness and beauty."
	},
	{
		"id": 209,
		"name": "",
		"description": "Sirgil is a major industrial world, dotted with metropolitan cities and manufacturing centers."
	},
	{
		"id": 210,
		"name": "",
		"description": "Sirgil Starport is an orbital market, established as a commodity exchange for the products produced by the planet below."
	},
	{
		"id": 211,
		"name": "",
		"description": "Scorpio has the largest number of crab species in the known galaxy."
	},
	{
		"id": 212,
		"name": "",
		"description": "Deneb III is a major agricultural world, specializing in the production of grain and fruit."
	},
	{
		"id": 213,
		"name": "",
		"description": "New Cydonia was founded by natives of the Mars Colony, who claimed that Mars was too civilized and terraformed for their tastes. The Aries system is currently at war with its neighboring system, Lethe, over water rights."
	},
	{
		"id": 214,
		"name": "",
		"description": "Lethe Prime’s fields and forests feed much of this sector. The major exports are vegetables and processed grain products. Lethe is currently at war with New Cydonia over water rights."
	},
	{
		"id": 215,
		"name": "",
		"description": "Opal is a tranquil island world, much preferable to neighboring Quake."
	},
	{
		"id": 216,
		"name": "",
		"description": "Nexus Outpost serves as a monitoring station for traffic passing through the Nexus system."
	},
	{
		"id": 217,
		"name": "",
		"description": "A strangely-lit and little-understood world."
	},
	{
		"id": 218,
		"name": "",
		"description": "Pirate’s Cove is a haven for privateers, bucaneers, brigands, and others from the scum of the galaxy."
	},
	{
		"id": 219,
		"name": "",
		"description": "Astrodyne Outpost is an abandoned research base that was once used as a weapons testing facility by the Confederation. When a mysterious accident killed the entire crew of the station, the Confederation covered up the incident and left this station, stripped of all classified material, to drift through space."
	},
	{
		"id": 220,
		"name": "",
		"description": "P-6564 is a planet shrouded by a corrosive atmosphere. Better not stay too long, or your ship might melt."
	},
	{
		"id": 221,
		"name": "",
		"description": "Ruby is completely red: red ground, red sky, red planet in the background. This moon is a testing ground for many new Confederation weapons."
	},
	{
		"id": 222,
		"name": "",
		"description": "Listening Post 94 was set up to monitor communications traffic from pirates and suspected rebels."
	},
	{
		"id": 223,
		"name": "",
		"description": "Listening Post 95 was set up to monitor communications traffic from pirates and suspected rebels."
	},
	{
		"id": 224,
		"name": "",
		"description": "A cold, desolate, and unremarkable planet."
	},
	{
		"id": 225,
		"name": "",
		"description": "A squalid and depressing station that hosts the worst evildoers in the galaxy. Truly a wretched hive of scum and villainy."
	},
	{
		"id": 226,
		"name": "",
		"description": "A depressingly dark and barren world."
	},
	{
		"id": 227,
		"name": "",
		"description": "A forbidding world of high winds and little else."
	},
	{
		"id": 228,
		"name": "",
		"description": "A world choked by a sheath of sulphuric acid."
	},
	{
		"id": 229,
		"name": "",
		"description": "Evildrome is a pirate’s favorite stopover, not so much for the wide selection of illegal goods to be found here as for the Evildrome Boozarama, ostensibly the best bar in the galaxy."
	},
	{
		"id": 230,
		"name": "",
		"description": "A grim, snowy world."
	},
	{
		"id": 231,
		"name": "",
		"description": "This planet is an arid wasteland."
	},
	{
		"id": 232,
		"name": "",
		"description": "This strange-looking planet has some of the oddest plant life in the galaxy."
	},
	{
		"id": 233,
		"name": "",
		"description": "New Antigua was founded in the spirit of Earth’s Caribbean islands. Like their predecessors, the islands of New Antigua are home to some of the most evil pirates around."
	},
	{
		"id": 234,
		"name": "",
		"description": "Liberty Station was constructed to serve as an ore processing center and a refuelling base for the ships that mine valuable ores from the floating debris of the Trugati asteroid belt, a region of the galaxy thick with spaceborne rocks of all sizes."
	},
	{
		"id": 2000,
		"name": "",
		"description": "The Rendelli StarDrive Model 805R cargo shuttle is perhaps the least glamorous, but also the most versatile, of all starships. Its diminutive size and low cost make it popular with the smaller shipping firms and charter services, and it makes a good courier ship as well. Its boxy appearance belies its rugged and durable construction. This sturdy little vessel is found virtually everywhere in the galaxy."
	},
	{
		"id": 2001,
		"name": "",
		"description": "Allied Shipyards’ stalwart Model AS129 light freighter has been one of the most popular cargo ships on the market for the last decade. Its speed and maneuverability aren’t the best, and its survivability in combat is questionable, but it can still haul more goods than its closest rival, the CDX Argosy."
	},
	{
		"id": 2002,
		"name": "",
		"description": "The Allied Shipyards AS1300 is the best - indeed, the only - bulk freighter available. Their high cost and weak defenses preclude their use in the frontier systems, but further in, these huge ships carry the majority of commerce between the Core Worlds."
	},
	{
		"id": 2003,
		"name": "",
		"description": "If you’re looking to get your large cargo to its destination as quickly as possible, look no further than the Metroworks V7 courier. It is essentially nothing more than a triad of large engines with a cargo bay and a life-support pod attached. A testament to this ship’s high speed, long range, and great reliability is the fact that Starbound Express uses them for nearly 95% of its domestic cargo routes."
	},
	{
		"id": 2004,
		"name": "",
		"description": "CDX Starworks is a relatively new player in the cargo-ship market, having previously established its reputation building fighters. Its Argosy-class light freighter has already become quite popular with shipping companies operating near the edge of Confederation space, because of its advantages over the AS129 in the areas of speed, maneuverability, and firepower. Its only real liabilities are its higher price and slightly smaller cargo capacity."
	},
	{
		"id": 2005,
		"name": "",
		"description": "Terran Naval Yards builds the FF-4237 frigate exclusively for the Confederation Navy. It is a rugged and flexible design, more than a match for the puny Atonida Kestrel and any other escort ships. The use of this glorious ship as the backbone of the Navy’s task forces will surely be sufficent to crush the Rebellion’s pitiful space fleets."
	},
	{
		"id": 2006,
		"name": "",
		"description": "The Terran Naval Yards CR-1095 heavy cruiser is a natural outgrowth of the FF-4237 frigate, and indeed it resembles it closely, except for size. These glorious ships, with their complement of four patrol ships each, will surely bring the Rebellion to its knees."
	},
	{
		"id": 2007,
		"name": "",
		"description": "The P-361 patrol fighter, manufactured by the Terran Naval Yards, is the best starfighter ever designed. No other small ship can beat it in a dogfight - at least, such an occurance has never been publically reported…"
	},
	{
		"id": 2008,
		"name": "",
		"description": "CDX Starworks’s most popular offering, the F/A-927E Rapier attack fighter, is the heaviest-armed starfighter on the market. It has both missile racks and a torpedo launcher, and it is equipped with a laser turret for self-defense as well. However, all this firepower comes at the expense of speed and maneuverability, making the Rapier the clumsiest starfighter around. Still, it is popular with bounty hunters, corporate governments, and anyone needing a little more punch than is offered by other fighters."
	},
	{
		"id": 2009,
		"name": "",
		"description": "Blazitron Industries’ new F-563 Lightning fighter-bomber recently won the Shelton Award for Extreme Cleverness, and it’s easy to see why. The Lightning mixes high speed and good maneuverability with excellent firepower, resulting in an unbeatable combination. In addition, the design is so adaptable that a modified version, the F-563N, has been produced for shipboard operations."
	},
	{
		"id": 2010,
		"name": "",
		"description": "The CDX Starworks I-287B Defender is used primarily by corporations and small governments who wish to protect their spheres of influence. Although the Defender is the fastest and most maneuverable fighter in production, its light armament, weak shielding, and abysmal fuel capacity relegate it to the role of an in-system interceptor, not a strike fighter. This latest version, the Defender Mk. II, has been retrofitted with larger fuel tanks to address this concern, but it is still limited in range."
	},
	{
		"id": 2011,
		"name": "",
		"description": "Forward-thinking executives of the galaxy’s top corporations use the Krydanti Systems Mk. VI executive transport for their business needs. It enables its wealthy passengers to travel quickly in style and comfort, though admittedly without any defensive armament."
	},
	{
		"id": 2012,
		"name": "",
		"description": "Centauri Spacelines operates its custom-built luxury liners between all of the Core Worlds. For the price of a ticket, which is literally astronomical, you get six days and nights of blissful relaxation aboard what has been called “the most decadent thing ever to leave drydock.” A gourmet chef and an eager crew are always at your disposal, and, if you’re a member of the aristocracy, so are the pretty young flight attendants who see to the wealthy’s “special” desires."
	},
	{
		"id": 2013,
		"name": "",
		"description": "When a team of defecting engineers from CDX Starworks approached the Rebel High Command with a unique proposal, the Rebel destroyer was born. Because of the fact that it is essentially a CDX Argosy with extra armor, uprated engines, and gun turrets, the destroyer is cheap to mass-produce. However, because it is still a freighter at heart, its performance is not up to the level of the Confederate frigate or the Atinoda Kestrel. Still, it remains an important part of the Rebel fleet."
	},
	{
		"id": 2014,
		"name": "",
		"description": "Operating in secret and in the worst of conditions from bases on primitive backwater planets, the shipwrights of the Rebellion have crafted one of the most beautiful and lethal fighting ships in existence. The Rebel cruiser’s circular engine-support pylons double as an external docking rack for its complement of Manta fighters; this unique arrangement allows the ship to launch its entire squadron of fighters almost simultaneously, giving it a great advantage in combat."
	},
	{
		"id": 2015,
		"name": "",
		"description": "The Atinoda Kestrel is the most powerful ship available to civilians. In addition to its already formidable complement of weaponry, this sleek, black vessel carries a pair of Lightning fighter-bombers; this combination is the reason the Kestrel is classified as an escort frigate. Of course, Atinoda only sells this kind of firepower to the most reputable of private customers, but rumor has it that a freighter full of Kestrel subassemblies recently disappeared near the edge of Confederation space… "
	},
	{
		"id": 2016,
		"name": "",
		"description": "When Astrotech Space Industries went bankrupt seven years ago, their remaining inventory of Model F-37B Manta light fighters was quietly bought up by an anonymous party. The Manta, heavily used by the Confederation during the early days of the Great War, has fallen out of favor with modern combateers due to its light armament. Recently, though, a Confederate freighter captain reported being attacked by several “triangular space fighters,” suggesting that the Rebellion may be using these outdated but highly maneuverable ships to further its cause."
	},
	{
		"id": 2017,
		"name": "",
		"description": "Krydanti Systems’ Mk. XVII scoutship is used primarily by mining corporations and entrepreneurs to seek out new mineral deposits. It is also a fairly decent courier ship, though its light armament poses a serious disadvantage in a fight. Its main selling point is its extremely long range."
	},
	{
		"id": 2018,
		"name": "",
		"description": "The Maskirovka IPV-1 Corvette is a hard ship to classify - its maneuverability and acceleration make it perform like a heavy fighter, but it is armed like a light capital ship. Maskirovka builds the Corvette to fill the gap in the commercial starship market between the classical starfighters and the super-powerful Atinoda Kestrel. The Corvette has been popular with corporate governments who need to police their space, as it makes an excellent customs and patrol vessel."
	},
	{
		"id": 2019,
		"name": "",
		"description": "The Terran Naval Yards G-564 missile gunboat is essentially a stretched model of its cousin, the P-361 patrol fighter. As an outgrowth of the earlier P-361 design program, the gunboat’s designers were able to keep high the parts commonality between the two ships; for example, the gunboat’ unique tri-mounted wings are identical to the assemblies used by the patrol ship. The forwarded-mounted strakes along the fuselage sides hold missile racks and rocket launchers."
	},
	{
		"id": 2023,
		"name": "",
		"description": "Aerostar Space Industries’ assembly lines are mainly devoted to producing starship subassemblies for other manufacturers, but their C-35 Star Clipper Mk. IV is their most widely-recognized product. This sleek, delta-winged ship is a combination courier vessel and light warship, and excels in both roles. Its offensive and defensive capabilities are quite good for a ship of its size, and it has ample room for expansion that allows it to be turned into either a top-flight cargo hauler or an outstanding heavy fighter."
	},
	{
		"id": 2024,
		"name": "",
		"description": "The Atinoda Kestrel is the most powerful ship available to civilians. In addition to its already formidable complement of weaponry, this sleek, black vessel carries a pair of Lightning fighter-bombers; this combination is the reason the Kestrel is classified as an escort frigate. Kestrels are manufactured here from subassemblies captured from a disabled freighter, and are discounted twenty percent off the regular price. Unfortunately, they aren’t quite up to the Atinoda specs..."
	},
	{
		"id": 2100,
		"name": "",
		"description": "This tiny shuttlecraft seems speedy enough, and its captain is willing to work for relatively low wages - however, you wonder how much his ship’s small cargo capacity will add to your profits."
	},
	{
		"id": 2101,
		"name": "",
		"description": "The captain of this light freighter informs you that he can help you add to your profits by trading in goods as your fleet makes its way between planets, as long as there’s no combat involved."
	},
	{
		"id": 2102,
		"name": "",
		"description": "Talking to the captain of a bulk freighter."
	},
	{
		"id": 2103,
		"name": "",
		"description": "This courier ship appears to be in good condition, and its cargo hold seems spacious enough to help you earn a small amount of profit."
	},
	{
		"id": 2104,
		"name": "",
		"description": "The boastful captain of this Argosy informs you that his ship is a first-rate vessel, and - more importantly - he’s not afraid of a little firefight now and then."
	},
	{
		"id": 2105,
		"name": "",
		"description": "Due to your outstanding services, the Confederation has made available a limited number of its frigates for your fleet - for a small fee, of course."
	},
	{
		"id": 2106,
		"name": "",
		"description": "The Confederation is not above making a bit of money on the side, so it has agreed to hire out a number of its heavy cruisers to you, assuming you can afford the fee."
	},
	{
		"id": 2107,
		"name": "",
		"description": "This Confederation patrol ship would make a fine addition to your fleet, provided you are willing to pay the Confederation Navy to make up for the ship’s absence."
	},
	{
		"id": 2108,
		"name": "",
		"description": "The pilot of this Rapier informs you that his ship would make a fine defensive addition to your fleet."
	},
	{
		"id": 2109,
		"name": "",
		"description": "This pilot, while somewhat full of bravado, would nonetheless make a good addition to your fleet: his Lightning fighter is a top-notch defensive ship."
	},
	{
		"id": 2110,
		"name": "",
		"description": "This Defender pilot doesn’t claim to be able to stop all who would attack you, but his asking price is low enough."
	},
	{
		"id": 2111,
		"name": "",
		"description": "Talking to the captain of an executive transport."
	},
	{
		"id": 2112,
		"name": "",
		"description": "Talking to the captain of a liner."
	},
	{
		"id": 2113,
		"name": "",
		"description": "This Rebel destroyer captain is willing to escort you, as long as you don’t mind making a “contribution” to the Rebellion first."
	},
	{
		"id": 2114,
		"name": "",
		"description": "Rebel cruisers are powerful fleet vessels, and the fee to convince the Rebel High Command to loan you one is consequently a large one."
	},
	{
		"id": 2115,
		"name": "",
		"description": "“My ship is a Kestrel,” says this starship captain. “What else do you need to know?”"
	},
	{
		"id": 2116,
		"name": "",
		"description": "Manta light fighters were commonly used as escort vessels during the Great War. This one can be loaned to you by the Rebellion for a small fee."
	},
	{
		"id": 2117,
		"name": "",
		"description": "This scoutship pilot and his first mate tell you that their ship is fast and their cargo bay large. You still wonder about their claim that they would be able to defend themselves from attack, though."
	},
	{
		"id": 2118,
		"name": "",
		"description": "This corvette’s captain and crew promise to defend you against all attacks - for a price."
	},
	{
		"id": 2123,
		"name": "",
		"description": "Clipper ships like these are known for their speed and durability. You think of this as you consider hiring one to add to your freighter fleet."
	},
	{
		"id": 2124,
		"name": "",
		"description": "“My ship is a Kestrel,” says this starship captain. “What else do you need to know?”"
	},
	{
		"id": 2900,
		"name": "",
		"description": "Bosses don't like you?  Trapped in space and forced to watch cheesy movies?  Have to keep your sanity with the help of your robot friends?  Then this ship is for you.  Only one has been made to date.  This “Satellite of Love” features a full theater in the forward section and living quarters below deck.  Deep 13 not included.  If you're wondering how you’ll eat and breathe and other science facts, then repeat to yourself, “It's just a game,  I should really just relax.”"
	},
	{
		"id": 3000,
		"name": "",
		"description": "The Centauri Munitions laser cannon has been the standard defensive weapon for freighters and patrol craft for the last fifty years."
	},
	{
		"id": 3001,
		"name": "",
		"description": "The neutron blaster is the most powerful energy weapon available on the open market. Its short range is offset by its very high damage rating."
	},
	{
		"id": 3002,
		"name": "",
		"description": "Proton bolt cannons use coaxial magnetic accelerators to boost charged particles to incredible velocities. As a result, proton bolts have a long range and good accuracy, though they don’t do as much damage as neutron rounds."
	},
	{
		"id": 3003,
		"name": "",
		"description": "Torpedo launchers are used to load, arm, and fire homing torpedoes."
	},
	{
		"id": 3004,
		"name": "",
		"description": "Homing torpedoes are relatively cheap, long-range weapons. Their guidance systems are primitive, however, and they are much slower than missiles. The electromagnetic fields used to separate the components of the torpedo’s matter/antimatter warhead cause it to glow in flight. This same electromagnetic field, when combined with excessive interference, can sometimes confuse the torpedo’s guidance systems."
	},
	{
		"id": 3005,
		"name": "",
		"description": "Missile racks are used to carry and fire guided missiles."
	},
	{
		"id": 3006,
		"name": "",
		"description": "Very few things can a shake Consolidated Arms Mk. 83 guided missile once it has acquired its target. However, its targeting sensor array does have a manufacturing flaw that occasionally causes it to become distracted by other objects moving across its flight path."
	},
	{
		"id": 3007,
		"name": "",
		"description": "This auxilliary cargo hold attaches to the hull of your ship and increases your cargo capacity by 10 tons."
	},
	{
		"id": 3008,
		"name": "",
		"description": "The turreted version of Centauri Munitions’ laser cannon combines the original’s long range and decent punch with a computer-guided omnidirectional targeting platform, which provides the dual-mounted laser turret with a 360° field of fire."
	},
	{
		"id": 3009,
		"name": "",
		"description": "The proton bolt turret, like the standard proton bolt cannon, excels at damaging both shields and armor. This model features triple proton bolt cannons mounted on a computer-guided swivel platform, for accurate tracking at all angles."
	},
	{
		"id": 3010,
		"name": "",
		"description": "The Mastech corporation struck gold with its F-5 Hawk light fighters and their associated launching bay. Previously, shipborne fighters had been the playthings of the rich and the military. Mastech’s idea was to market a low-cost starfighter that the average starship captain could afford to add to his ship. This self-contained launching bay includes all the equipment needed to launch, recover, repair, and rearm a pair of Hawks."
	},
	{
		"id": 3011,
		"name": "",
		"description": "Mastech’s F-5 Hawk light fighter provides an excellent defense for all types of starships. This specialized fighter was designed to operate only from the launch bays of other ships, and the resulting design compromises mean that its manuverability and speed aren’t the greatest, and it is only armed with a set of laser cannons and a pair of missiles. Still, the fact that any large ship can mount the Hawk’s launch bay makes it an attractive aftermarket addition to any space captain’s arsenal."
	},
	{
		"id": 3012,
		"name": "",
		"description": "By sacrificing fifteen tons of cargo capacity, this modification to your ship’s structure allows you to carry ten tons more of weapons and upgrades."
	},
	{
		"id": 3013,
		"name": "",
		"description": "The P-361 patrol fighter, manufactured by the Terran Naval Yards, is the best starfighter ever designed. No other small ship can beat it in a dogfight - at least, such an occurance has never been publically reported…"
	},
	{
		"id": 3014,
		"name": "",
		"description": "When Astrotech Space Industries went bankrupt seven years ago, their remaining inventory of Model F-37B Manta light fighters was quietly bought up by an anonymous party. The Manta, heavily used by the Confederation during the early days of the Great War, has fallen out of favor with modern combateers due to its light armament. Recently, though, a Confederate freighter captain reported being attacked by several “triangular space fighters,” suggesting that the Rebellion may be using these outdated but highly maneuverable ships to further its cause."
	},
	{
		"id": 3015,
		"name": "",
		"description": "The navalized version of Blazitron’s popular Lightning fighter-bomber has a strengthened main keel and special fittings for landing aboard other starships. Currently, the only ship capable of carrying it is the Atonida Kestrel."
	},
	{
		"id": 3016,
		"name": "",
		"description": "Old technologies never die, they just get new names. The mass driver is the modern-day equivalent of the ancient gatling gun; it uses electromagnets to accelerate small metallic slugs - usually made of depleted uranium - to reasonably high velocities. Because of their composition, mass driver slugs do much more damage to armor than to shields."
	},
	{
		"id": 3017,
		"name": "",
		"description": "Shield capacitors are pure tantalum energy storage modules that can increase the maximum shield capacity of any ship by 15 terawatts."
	},
	{
		"id": 3018,
		"name": "",
		"description": "A shield booster is a dangerous and highly illegal ship upgrade, available only on seedier planets. It routes drive plasma directly from a ship’s engine core to its shield generator, increasing the rate of shield regeneration."
	},
	{
		"id": 3019,
		"name": "",
		"description": "DoPunt’s #3019 Armaplast is a hybrid material, combining the lightness of Sup-R-Kevlar or TuffSheath with reasonably good strength."
	},
	{
		"id": 3020,
		"name": "",
		"description": "Durasteel armor is made of a denser material than Armaplast, resulting in a higher strength rating. Most warships’ hulls are composed of durasteel, and add-on plating kits like this one are popular as well."
	},
	{
		"id": 3021,
		"name": "",
		"description": "This newest creation from the labs of Terran MetalWorks is one of the strongest metals known to man. The Confederation Navy has requisitioned all supplies of tritanium for use in its Cruiser Upgrade Program, and tritanium armor plating kits like this are only available on the black market."
	},
	{
		"id": 3022,
		"name": "",
		"description": "Give a skilled technician a few hours with your engine and a wrench, and he can work miracles. By tweaking the fuel flow to the engine core, this upgrade actually increases your ship’s available acceleration."
	},
	{
		"id": 3023,
		"name": "",
		"description": "Various add-on devices have been manufactured with the intent of increasing a ship’s speed, but none have been as effective as this simple tune-up. A talented mechanic who performs this operation on your ship’s propulsion system can boost your ship’s top speed by 150 AU/h."
	},
	{
		"id": 3024,
		"name": "",
		"description": "Those looking for a little extra maneuverability should look into this upgrade. Gifted shipwrights refit your vessel with improved, platinum-plated ducting between the engine core and the reaction control systems, resulting in increased plasma flow. This modification can increase your ship’s turn rate by 30°/sec. "
	},
	{
		"id": 3025,
		"name": "",
		"description": "This fuel tank attaches to the hull of your ship and increases your fuel capacity by 100 units, enough for one additional hyperspace jump before refuelling."
	},
	{
		"id": 3026,
		"name": "",
		"description": "No pilot should fly without the trusty and reliable Markin-Bater escape pod. It allows a pilot to eject from his stricken ship and survive for up to a week. Granted, the included rations aren’t all that tasty, but it beats breathing vacuum."
	},
	{
		"id": 3027,
		"name": "",
		"description": "This device is able to detect the approximate mass of any ship within range of your ship’s scanners, allowing you to differentiate between large and small ships on your radar display."
	},
	{
		"id": 3028,
		"name": "",
		"description": "This piece of equipment inserts into your scanner’s upgrade port and provides realtime interrogation of subspace transponders. This allows your scanner to color-code your radar display, based on your legal standing with other ships and planets."
	},
	{
		"id": 3029,
		"name": "",
		"description": "No privateer should be without this handy add-on. By dumping raw fuel directly into your engine’s exhaust stream, the afterburner dramatically increases both your thrust and your top speed for short periods of time. However, it consumes fuel at a prodigious rate."
	},
	{
		"id": 3030,
		"name": "",
		"description": "This advanced electronic countermeasures device broadcasts subspace interference waves that confuse the seeker heads of incoming missiles, causing them to track less accurately. Be forewarned, though, that torpedoes seem unaffected by such jamming."
	},
	{
		"id": 3031,
		"name": "",
		"description": "Rocket launchers are used to load, arm, and fire unguided heavy rockets."
	},
	{
		"id": 3032,
		"name": "",
		"description": "The heavy rocket is a primitive but devastating weapon. After it is launched, its engine propels it along a straight course until its proximity detector senses a nearby ship and detonates its high-explosive warhead. Though simple, the heavy rocket packs quite a wallop."
	},
	{
		"id": 3033,
		"name": "",
		"description": "Bomb racks are used to carry gravitic space bombs."
	},
	{
		"id": 3034,
		"name": "",
		"description": "Gravitic space bombs are probably the most difficult-to-deliver type of weapon, but they are also the highest-yield munitions available. They simply drift through space until their sensitive gravitic detectors register the mass shadow of an approaching ship. The titanic energy waves released by an exploding space bomb are enough to knock an asteroid from its orbit. "
	},
	{
		"id": 3035,
		"name": "",
		"description": "This externally-mounted weapons pod holds Javelin rockets and fires them through the exit ports mounted on its front surface."
	},
	{
		"id": 3036,
		"name": "",
		"description": "Fulcrum Munitions’ Javelin hypervelocity rocket is the high-tech equivalent of the bow and arrow. These tiny but incredibly fast powered projectiles inflict great damage to small targets, due to the hardened alloys used in the construction of their reinforced, armor-piercing nose cones. Javelins work best when fired by fighters and patrol craft, as  their high speed and lack of guidance necessitate an agile firing platform."
	},
	{
		"id": 3037,
		"name": "",
		"description": "This map will automatically update your ship’s computer with information about surrounding systems up to two jumps away."
	},
	{
		"id": 3038,
		"name": "",
		"description": "Particle Beam"
	},
	{
		"id": 3039,
		"name": "",
		"description": "Cloaking Device"
	},
	{
		"id": 3040,
		"name": "",
		"description": "The Meizner ramscoop uses high-energy magnetoscopic fields to extract charged hydrogen ions from the solar wind. It can slowly regenerate your fuel supply while in flight."
	},
	{
		"id": 3041,
		"name": "",
		"description": "This handy device automatically contacts spaceport computers and arranges for them to refuel your ship, saving you the worry. Of course, it still costs the same to top off your tanks."
	},
	{
		"id": 3046,
		"name": "",
		"description": "Flare launchers are used to drop missile-foiling decoy flares."
	},
	{
		"id": 3047,
		"name": "",
		"description": "The Hall Munitions Company’s decoy flares are a popular after-market add on among starship captains who prefer to run rather than fight. The shape of the magnisite-impregnated flare is designed to afford the maximum possible radiation of energy in all directions. As a result, they excel at luring away guided missiles."
	},
	{
		"id": 3052,
		"name": "",
		"description": "These highly illegal false identification papers will effectively eliminate your criminal record in Confederation systems."
	},
	{
		"id": 3053,
		"name": "",
		"description": "This auto-ejection system will save you the worry of manually bailing out of your ship should it be destroyed in combat — assuming you already have an escape pod installed, that is."
	},
	{
		"id": 4000,
		"name": "",
		"description": "A group of travellers needs to get to <DST> in the <DSY> system. They will pay 10,000 credits."
	},
	{
		"id": 4001,
		"name": "",
		"description": "A group of people ask to be taken to <DST> in the <DSY> system, in return for 10,000 credits."
	},
	{
		"id": 4002,
		"name": "",
		"description": "A group of travellers offers you 10,000 credits to take them to <DST> in the <DSY> system."
	},
	{
		"id": 4003,
		"name": "",
		"description": "A shady-looking character approaches you. His clothing is ripped, his face is bruised and cut, and he keeps glancing about warily. “I’ve heard that the <PSN> is a fast ship,” he says. “I’ll pay you 75,000 credits if you can take me to <DST> in the <DSY> system, with no questions asked.” Do you accept?"
	},
	{
		"id": 4004,
		"name": "",
		"description": "A pirate with a cybernetic implant in one eye approaches your table and offers you a hundred thousand credits for what he describes as “a piece o’ cake mission.”"
	},
	{
		"id": 4005,
		"name": "",
		"description": "An Astex Mining Industries representative approaches you. “You’re <PN>, aren’t you? Astex is interested in samples of the subsurface mineral content of <DST> in the <DSY> system. We’ll pay you 35,000 credits to retreive a core sample of the planet. Are you interested?”"
	},
	{
		"id": 4006,
		"name": "",
		"description": "A cloaked figure approaches you and motions for you to follow him. “You could help the Rebellion with our cause,” he says, “by capturing a shipment of munitions and smuggling it out of this system.” Do you accept his invitation?"
	},
	{
		"id": 4007,
		"name": "",
		"description": "<DST> needs a rush shipment of <CQ> tons of <CT>. Pay is 25,000 credits."
	},
	{
		"id": 4008,
		"name": "",
		"description": "<DST> needs a rush shipment of <CQ> tons of <CT>. Pay is 25,000 credits."
	},
	{
		"id": 4009,
		"name": "",
		"description": "<DST> needs a rush shipment of <CQ> tons of <CT>. Pay is 25,000 credits."
	},
	{
		"id": 4010,
		"name": "",
		"description": "<DST> needs a rush shipment of <CQ> tons of <CT>. Pay is 25,000 credits."
	},
	{
		"id": 4011,
		"name": "",
		"description": "<DST> needs a rush shipment of <CQ> tons of <CT>. Pay is 25,000 credits."
	},
	{
		"id": 4012,
		"name": "",
		"description": "<DST> needs a special shipment of <CQ> tons of <CT>. Pay is 10,000 credits."
	},
	{
		"id": 4013,
		"name": "",
		"description": "<DST> needs a special shipment of <CQ> tons of <CT>. Pay is 10,000 credits."
	},
	{
		"id": 4014,
		"name": "",
		"description": "<DST> needs a special shipment of <CQ> tons of <CT>. Pay is 10,000 credits."
	},
	{
		"id": 4015,
		"name": "",
		"description": "<DST> needs a special shipment of <CQ> tons of <CT>. Pay is 10,000 credits."
	},
	{
		"id": 4016,
		"name": "",
		"description": "<DST> needs a special shipment of <CQ> tons of <CT>. Pay is 10,000 credits."
	},
	{
		"id": 4017,
		"name": "",
		"description": "A local official inquires as to whether you would be willing to eliminate a pirate that has been plundering ships in and around the <RSY> system."
	},
	{
		"id": 4018,
		"name": "",
		"description": "A man who looks to be a Rebel operative hints that a Confederation official will be travelling through this region soon. “It would be most unfortunate,” he says, “if he were to meet with an... accident.” Do you take him up on his offer?"
	},
	{
		"id": 4019,
		"name": "",
		"description": "A representative of the <RST> government bursts into the bar. “This system is under attack by pirates!” he shouts. “The local government will pay a princely sum to whoever can eliminate the pirate menace!” Will you help?"
	},
	{
		"id": 4020,
		"name": "",
		"description": "The Rebel officer sitting next to you receives a communication on his wristphone, listens for a second, and then looks aghast. He stands up and addresses the crowd. “<RST> has fallen under surprise attack by Confederation warships!” he shouts. Will you help the Rebels?"
	},
	{
		"id": 4021,
		"name": "",
		"description": "A local official sits down next to you, and whispers a greeting that you can barely hear over the music. “A Confederation transport has hit a mine and is adrift in a nearby system,” he says. “Their engines and life support systems are damaged and they are in need of assistance, but we don’t have any rescue ships available. Are you interested in a little search-and-rescue mission?”"
	},
	{
		"id": 4022,
		"name": "",
		"description": "You hear on the news report that a convoy of ore freighters travelling through the <RSY> system ran into an ion storm which disabled their engines yesterday. The guy sitting next to you is watching, too - “The crew were rescued safely, but the ore is still out there,” he says. “I hear there’s a reward for whoever salvages the cargo.” Sound like an interesting mission?"
	},
	{
		"id": 4023,
		"name": "",
		"description": "“Hey, you’re the captain of the <PSN>, aren’t you?” says the woman sitting next to you at the bar. Judging by her uniform, she’s a merchant freighter captain. “My convoy is shipping out to <RST> in a few hours,” she says. “We’d sure like to have you flying with us along the way. Interested in some escort work?”"
	},
	{
		"id": 4024,
		"name": "",
		"description": "You are approached by a person whom you recognize as an official of the Diphidian government. “Diphidia II is threatened with ecological disaster,” he tells you, “due to the actions of a person or persons which have secretly been dumping toxic waste in the oceans. Diphidia’s government needs someone to investigate. Will you help us?”"
	},
	{
		"id": 4025,
		"name": "",
		"description": "Your government contact greets you. “The Astex freighter you observed leaving here on your last mission has been tracked to the Astex mining facility on New Providence,” he says. “We need you to go to the Antares system and do a little reconassiance for us.” Ready to go?"
	},
	{
		"id": 4026,
		"name": "",
		"description": "“Something suspicious is going on in the Antares system,” says your contact, “something Astex doesn’t want us to find out about. We have detected another Astex freighter entering the Diphidia system; your mission will be to disable it and capture a sample of the ore in its cargo bays. Are you ready for this assignment?”"
	},
	{
		"id": 4027,
		"name": "",
		"description": "“The ore sample you retreived for us has the same toxic chemicals in it that are being dumped in our oceans,” says the Diphidian governer’s representative. “Now that we know Astex is behind this, we need to send them a clear message: your mission is the destruction of one of their freighter convoys. Are you up to it?”"
	},
	{
		"id": 4028,
		"name": "",
		"description": "“The data you have gathered for us will be the downfall of the Astex Mining Corporation’s very profitable operations in this region of space,” says your contact. “For safety, we need to send a complete copy of this data to friendly agents in the <RSY> system.” Ready to undertake this mission?"
	},
	{
		"id": 4029,
		"name": "",
		"description": "“You’re <PN>, aren’t you?” says a man sitting at the bar. “I’ve got a little job I need done - the citizens of <DST> can’t get enough wood products to meet their needs; they’re willing to pay tremendous sums for even one shipload of trees. All you have to do is take <CQ> tons of <CT> there, and we’ll both make a bundle. Are you interested?”"
	},
	{
		"id": 4030,
		"name": "",
		"description": "“I’m from GreenSpace,” says a woman sitting at the bar. “The government of <DST> has requested that a survey team of environmental engineers from Hera come and check their climatic balance. We’re looking for a starship captain willing to take us there.” Are you interested?"
	},
	{
		"id": 4031,
		"name": "",
		"description": "The tavern is in an uproar - <RST> is about to come under attack by Lethean ships! The Cydonian government will pay 80,000 credits to whoever can defend the planet. Will you help?"
	},
	{
		"id": 4032,
		"name": "",
		"description": "The bar is in an uproar - Cydonian warships are approaching <RST>! The Lethean government will pay 90,000 credits to whoever can defend the planet. Will you help?"
	},
	{
		"id": 4033,
		"name": "",
		"description": "A Confederation officer sits down next to you and speaks quietly to you. “Confed Intel has received reports that the Rebellion is massing its forces in preparation for renewed attacks on the Confederation,” he says. “A good pilot who won’t ask questions is needed to help locate their fleet. Are you interested?”"
	},
	{
		"id": 4034,
		"name": "",
		"description": "“A Confederation convoy will be passing through this system soon,” says a voice in your ear. You turn around - a cloaked Rebel operative is standing behind you. “The Rebellion would be willing to reward the pilot who causes the convoy to meet with an ‘unfortunate accident.’ Are you interested?”"
	},
	{
		"id": 4035,
		"name": "",
		"description": "A man wearing a Rebel commander’s uniform approaches you and inquires as to whether you are interested in “a little special operations work for the Rebellion.”"
	},
	{
		"id": 4036,
		"name": "",
		"description": "“The special-ops team is in place aboard your ship, and the cloaking device is almost installed,” says the garrison commander. “As soon as you’re ready to leave, the secret mission can begin. Are you all set?”"
	},
	{
		"id": 4037,
		"name": "",
		"description": "You see Major Davies and his men sitting at a table in the back of the bar. He motions for you to come over. Do you approach his table?"
	},
	{
		"id": 4038,
		"name": "",
		"description": "A Confederation officer in the bar recognizes you as the captain of the <PSN> and invites you to his table. “Confed Intel is looking for a pilot who can fly a basic reconnaissance mission without asking too many questions,” he says. “Are you interested?”"
	},
	{
		"id": 4039,
		"name": "",
		"description": "“The Rebels have fled from the NGC-6564 system with the stolen prototype,” says the base commander as you sit down. He takes a sip from his Jynnian Tonnyx, grimaces, and continues. “Our last sighting report from our patrol ships places them on a course to <RST>. Your mission will be to proceed there and investigate.”"
	},
	{
		"id": 4040,
		"name": "",
		"description": "All these Confed officers are starting to look the same to you. “The Rebels have eluded us again,” this one says, “but we know roughly where they’re heading. Advance scouts have located them heading towards the <RSY> system, which means they’re probably planning on transferring the stolen weapon prototype to another ship at <RST> station. Follow them there to investigate, but watch out for Rebel defenders - the cruiser R.S.S. Renegade has recently been sighted in the area.”"
	},
	{
		"id": 4041,
		"name": "",
		"description": "“Once more the Rebel traitors have escaped, but thanks to your efforts we’re closing in on them,” says your contact. “The <RSY> system, a longtime Rebel stronghold, is the thieves’ current destination. Because of the high numbers of Rebel warships in the area, we are dispatching a squadron of patrol ships to assist you - backtrack into the Farazon system to rendezvous with them. Your mission is to somehow get onto <RST> and contact another of our agents there.”"
	},
	{
		"id": 4042,
		"name": "",
		"description": "“We have traced the Rebel thieves to their final destination,” says the Confederation spy who is again waiting for you in the bar. “They intend to transfer the stolen particle beam to their research facility on Palshife, in the Satori system. You must recover the weapon before their freighter gets to Palshife, and then bring it immediately to our nearest garrison, on Hodgson’s World.”"
	},
	{
		"id": 4043,
		"name": "",
		"description": "A man wearing a military uniform sits down at your table. “Captain <PN>, right?” he asks by way of greeting. “I’m with the Confederation Supply Bureau. Occasionally we have need of the services of merchant captains like yourself - are you interested in a little courier mission?”"
	},
	{
		"id": 4044,
		"name": "",
		"description": "A woman wearing a military uniform sits down at your table. “Captain <PN>, right?” she asks by way of greeting. “I’m with the Rebellion’s supply staff. We often call upon merchant captains like yourself to bolster our small courier fleet. Are you interested in a little courier mission?”"
	},
	{
		"id": 4045,
		"name": "",
		"description": "Two men at the next table are arguing. “I’m telling ya, Jenkins,” one of them is saying, “We don’t have the capacity to run this excess today!” The other one notices you staring at them. “Hey, you’re the captain of the <PSN>, aren’t you?” he asks. “Interested in an easy 10,000 credits?”"
	},
	{
		"id": 4046,
		"name": "",
		"description": "Snatches of conversation drift over from the table next to you. “...rush job... pirates... lucrative...” One of the table’s occupants - a Starbound Shipping officer, you realize - glances in your direction. “Hey look, there’s <PN>,” she says to her partner. “Remember that job a while back? Hey captain, you want another job?”"
	},
	{
		"id": 4047,
		"name": "",
		"description": "A Starbound Shipping representative sits down next to you. “Hello, captain,” he greets you. “Twice in the past you’ve helped my company. Now, we have a rather dangerous mission for you. Are you interested?”"
	},
	{
		"id": 4048,
		"name": "",
		"description": "A Starbound Shipping rep approaches you. “Ah look, it’s <PN>,” he says. “We have another - potentially dangerous - mission for you. Are you interested?”"
	},
	{
		"id": 4049,
		"name": "",
		"description": "A man wearing a Starbound Shipping uniform approaches your table. “Captain, we need your help again,” he says. “We have a dangerous mission coming up, and we’d like you to fly it. Are you interested?”"
	},
	{
		"id": 4050,
		"name": "",
		"description": "A crowd of what appear to be engineers is gathered in the bar. “Hey, there’s a likely-looking one,” shouts someone as he notices you. “We need to get to <RST> - will you take us there?”"
	},
	{
		"id": 4051,
		"name": "",
		"description": "The Turin terraforming project foreman is relaxing in the bar when you walk in. “Ah, you must be <PN>,” he says by way of greeting. “I think we have some more work for you - one last load of equipment for the project needs to be shipped in from <DST>. Are you interested in the job?”"
	},
	{
		"id": 4052,
		"name": "",
		"description": "“Greetings again, captain,” says the terraforming project foreman as you sit down at the bar. “We have another job for you - a group of volunteer colonists needs to be transported here from <DST>. Interested?”"
	},
	{
		"id": 4053,
		"name": "",
		"description": "“Hey, there’s <PN>,” says the Turin terraforming project foreman as he notices you sitting at the bar. “Just the starship captain I need to see. One of our atmospheric converters has broken down, and we need to get a replacement unit from <DST>. Will you help us?”"
	},
	{
		"id": 4054,
		"name": "",
		"description": "“Greetings,” says the Turin project foreman as he sits down at your table. “The terraforming project needs a resupply shipment of <CT> from <DST>. Will you go there and retreive it for us?”"
	},
	{
		"id": 4055,
		"name": "",
		"description": "“<PN>, thank Newton you’re here!” shouts the Turin project foreman as a commotion erupts in the bar. “This system is under attack by pirates! Will you help us defend our colony?”"
	},
	{
		"id": 4056,
		"name": "",
		"description": "A Rebel officer sitting across the room keeps making eye contact with you. As he gets up to leave, he drops a cocktail napkin on your table. Scrawled on it are the words “DB94 in 1 hr.” Do you follow a hunch and go to docking bay 94?"
	},
	{
		"id": 4057,
		"name": "",
		"description": "“Hello again, captain,” says the Rebel officer you met earlier. “Our new plan is to send a squadron of Manta fighters on a sweep through the sector of space around the Nexus system - you will lead this patrol”"
	},
	{
		"id": 4058,
		"name": "",
		"description": "“Captain, your next mission will be a tough one. We’ve had a spy in the Confederation government for a couple of years now. In order to determine whether or not this is some sort of Confederation trick, we need to extract him from Confed space and find out what he’s learned. Feel up to it?”"
	},
	{
		"id": 4059,
		"name": "",
		"description": "“<PN>!” booms a familiar voice from across the room. “Never thought I’d see you again.” Your recognize the man speaking your name as Major Davies - it’s now Admiral Davies, judging by his rank insignia - the leader of the special operations team you help insert onto Luna. “We’ve got trouble, my friend,” he says. “And if I’m right, it’s going to be a real life-or-death fight. Are you willing to join us?”"
	},
	{
		"id": 4060,
		"name": "",
		"description": "Admiral Davies is waiting for you in the bar, “It’s worse than I feared,” he says. “It’s time for another patrol mission.”"
	},
	{
		"id": 4061,
		"name": "",
		"description": "Admiral Davies meets you in the spaceport bar. “We’ve managed to assemble a small fleet of escorts for you,” he says, “but destroying this alien battlecruiser will still be a virtual suicide mission. Are you ready for this?”"
	},
	{
		"id": 4062,
		"name": "",
		"description": "As a man at the bar stands up to leave, he drops a datacrystal in your uniform pocket and gives you a significant look. You quietly slip the crystal into your reader, and find the message “Tunnel seven in one hour.” Do you follow the instructions and go to tunnel seven?"
	},
	{
		"id": 4063,
		"name": "",
		"description": "Your Confed contact is waiting for you in the bar. “Your next mission will be to escort a Confederation freighter convoy through the Risa system,” he says."
	},
	{
		"id": 4064,
		"name": "",
		"description": "You access the bar’s comm panel and read the encrypted message waiting for you: “From Adm Sykes, CSN / To Capt <PN> / Your help requested for a mission of utmost importance. Mission is an excursion deep into enemy territory to extract an operative of the Intelligence Bureau. Successful completion of this mission is vital repeat vital to the future of the Confederation.”"
	},
	{
		"id": 4065,
		"name": "",
		"description": "A Confederation Navy yeoman comes looking for you. “Captain <PN>? Admiral Sykes will see you now.” Do you go with him?"
	},
	{
		"id": 4066,
		"name": "",
		"description": "Admiral Sykes looks a bit out of place in the spaceport bar. “Captain, you’re not a Navy officer, so I can’t order you to accept this mission. However, you’re the best hope we’ve got, so I’m asking you... will you help us eliminate the aliens?”"
	},
	{
		"id": 4067,
		"name": "",
		"description": "As your suit helmet’s lamp casts eerie shadows across the walls of the derelict ship’s bridge, you keep glancing over your shoulder - something doesn’t seem right here. There are no crew aboard, and the emergency beacon seems to be running on automatic. Suddenly, you receive a panicked signal from the <PSN> - sensors detect pirates jumping in! It’s a trap!"
	},
	{
		"id": 4068,
		"name": "",
		"description": "You cycle through the disabled ship’s main airlock and emerge in the amidships companionway. The corridor is dark, deserted, and quiet - a little too quiet, in fact. You make your way to the bridge and discover that the ship is running on automatics, apparently without a single crew member aboard. Suddenly, you receive a frantic message from the <PSN> - pirate fighters are jumping in from hyperspace! It’s a trap!"
	},
	{
		"id": 4069,
		"name": "",
		"description": "The captain of the <OSN> appears on the viewscreen. “Greetings, captain,” he says. “I have some passengers aboard that need to get to <DST>, but I have another delivery to make first and I need someone else to take them there. Are you interested?”"
	},
	{
		"id": 4070,
		"name": "",
		"description": "“Greetings,” says the captain of the <OSN>. “I have an extra <CQ> tons of <CT> aboard that need to get to <DST>, but I have a passenger delivery to make first and I need someone else to take them there. Are you interested?”"
	},
	{
		"id": 4071,
		"name": "",
		"description": "The merchant captain appears on your viewscreen. “Greetings, <PN>,” he says. “I’ve got a shipment of expensive cargo bound for <RST>, and I’d sure feel safer if you were along with me for protection. I’ll pay you 25,000 credits to be my escort to <RST> - interested?”"
	},
	{
		"id": 4072,
		"name": "",
		"description": "Suddenly, a platoon of Rebel marines bursts into the spaceport bar! Their squad leader searhces the crowd for a moment, and then points to you. “There he is, men!” he shouts. “Grab him!” With no chance to escape from the crowded barroom, the marines quickly sieze you and drag you off to the port governer’s office..."
	},
	{
		"id": 4073,
		"name": "",
		"description": "As your crew spreads out to explore the expanses of this ship, they discover that the aft cargo hold is filled with dozens upon dozens of large crates that bear “Top Secret” stencils and are labelled with the Atinoda Space Industries logo. Opening up the crates, you discover that they are filled with Kestrel subassemblies. This is a golden opportunity... do you want to load the parts onto your ship?"
	},
	{
		"id": 4074,
		"name": "",
		"description": "“Thank goodness you responded!” the captain of the <OSN> says over the comlink. “A band of pirates has been chasing me for the last ten light years - I think they want my cargo of <CT>. Look, I’ll give you fifteen thousand credits to take my cargo to <RST>. Do we have a deal?”"
	},
	{
		"id": 4075,
		"name": "",
		"description": "A scruffy individual with a large scar on his cheek approaches you quickly.  Glancing nervously over his shoulder, he asks if you'd be interested in running a quick search and retrieval mission.  Interested?"
	},
	{
		"id": 4076,
		"name": "",
		"description": "A dockworker, dressed in dirty gray overalls, approaches you in the bar.  “<PN>?  Good.  We need to get some of these weapons off this planet.”  He glances at his clipboard quickly.  “Here, this one needs to go to <DST>...  You know, in the <DSY> system...  You interested?”"
	},
	{
		"id": 4077,
		"name": "",
		"description": "Excess waste materials need to be transported to <DST> for dumping.  Pay is 20,000 credits."
	},
	{
		"id": 4078,
		"name": "",
		"description": "<DST> has had a brush with Sajack’s plague and requires a rush shipment of emergency medical supplies within the next three weeks."
	},
	{
		"id": 4079,
		"name": "",
		"description": "<DST> is expecting a Rebel attack within two months, and the Confederation requires aid in evacuating civilians to <RST>."
	},
	{
		"id": 4080,
		"name": "",
		"description": "<DST> is expecting a Confed attack within two months, and the Rebellion requires aid in evacuating civilians to <RST>."
	},
	{
		"id": 4081,
		"name": "",
		"description": "A small, wiry man wearing a blue uniform stumbles into the bar, dripping with sweat.  He hurriedly sits down at the table behind you.  Suddenly, a group of three pirates, snarling and bristling with malicious delight, burst into the bar and walk over to you, asking for the whereabouts of a man in a blue uniform.  Do you tell them he already left?"
	},
	{
		"id": 4082,
		"name": "",
		"description": "As you enter the bar, you recognize a man wearing a United Galactic Express uniform.  Remembering your recommendation, you figure you could probably get a job here. Do you approach the man?"
	},
	{
		"id": 4083,
		"name": "",
		"description": "United Galactic Express needs to deliver <CQ> tons of <CT> to <DST> in the <DSY> system by <DL>.  As usual, expect Consolidated Express interference.  Pay is 85,000 credits."
	},
	{
		"id": 4084,
		"name": "",
		"description": "United Galactic Express needs to deliver <CQ> tons of <CT> to <DST> in the <DSY> system by <DL>.  As usual, expect Consolidated Express interference.  Pay is 105,000 credits."
	},
	{
		"id": 4085,
		"name": "",
		"description": "United Galactic Express needs to deliver <CQ> tons of <CT> to <DST> in the <DSY> system by <DL>.  As usual, expect Consolidated Express interference.  Pay is 90,000 credits."
	},
	{
		"id": 4086,
		"name": "",
		"description": "United Galactic Express needs to deliver <CQ> tons of <CT> to <DST> in the <DSY> system by <DL>.  As usual, expect Consolidated Express interference.  Pay is 100,000 credits."
	},
	{
		"id": 4087,
		"name": "",
		"description": "United Galactic Express needs to deliver <CQ> tons of <CT> to <DST> in the <DSY> system by <DL>.  As usual, expect Consolidated Express interference.  Pay is 95,000 credits."
	},
	{
		"id": 4088,
		"name": "",
		"description": "United Galactic Express needs to deliver <CQ> tons of <CT> to <DST> in the <DSY> system by <DL>.  As usual, expect Consolidated Express interference.  Pay is 120,000 credits."
	},
	{
		"id": 4089,
		"name": "",
		"description": "As you walk into the bar, you notice some UGE uniforms at a table in the back.  As you approach, you recognize Benedict Strauss, your old UGE friend.  He says, “Ah, <PN>, just the pilot I need to talk to.  Listen, you interested in making a few extra bucks offa UGE?”  He gives you a quick wink, and the other man at the table looks around nervously.  “So...  You in?”"
	},
	{
		"id": 4090,
		"name": "",
		"description": "As you walk into the bar, you notice some UGE uniforms at a table in the back.  As you approach, you recognize Benedict Strauss, your old UGE friend.  He says, “Ah, <PN>, just the pilot I need to talk to.  Listen, you interested in making a few extra bucks offa UGE?”  He gives you a quick wink, and the other man at the table looks around nervously.  “So...  You in?”"
	},
	{
		"id": 4091,
		"name": "",
		"description": "As you enter the bar, you are shocked to see Chris Richards himself, seated at a bar right before you.  He looks up, recognizes you, and to your surprise gives a faint smile.  Ask for your job back?"
	},
	{
		"id": 4092,
		"name": "",
		"description": "As you sit at a rickety table in the back of the bar, two Confederation officials attempt to enlist your help in escorting a Confed spy from Rebel territory and returning him safely to this station.  Will you accept their offer?"
	},
	{
		"id": 4093,
		"name": "",
		"description": "You meet a Confed officer at the bar's entrance.  “We need your help in transporting sensitive data collected by our spies.  You want to help out again?”"
	},
	{
		"id": 4094,
		"name": "",
		"description": "A familiar Confederation officer approaches you as you enter the bar.  “We’ve determined the route of the Jericon Corporation’s secret shipping lanes, and we want to intercept one of their convoys.”  Will you help them?"
	},
	{
		"id": 4095,
		"name": "",
		"description": "A familiar Confederation officer approaches you as you enter the bar.  “We’ve determined the route of the another Jericon Corporation shipping lane, and we want you to intercept another convoys.”  Will you help them?"
	},
	{
		"id": 4096,
		"name": "",
		"description": "MST Industries needs to transport hazardous materials to another Confederate planet for disposal."
	},
	{
		"id": 4097,
		"name": "",
		"description": "MST Industries has a shipment of refined toxins that needs to be transported to a manufacturer on <DST>."
	},
	{
		"id": 4098,
		"name": "",
		"description": "A Confederate officer approaches you as you enter the bar.  “Hey, Captain <PN>!  You’ve helped us out quite a bit with your various shipping missions.  The truth is, we’ve used the chemicals to develop biological weapons that need to be delivered to the battle front.  Are you interested in transporting this cargo?”"
	},
	{
		"id": 4099,
		"name": "",
		"description": "A short, stocky Rebel officer approaches you as you sit down at the bar.  He asks you if you are interested in doing some reconnaissance work for the Rebellion.  “So, what do you say?”"
	},
	{
		"id": 4100,
		"name": "",
		"description": "A clean-shaven man who looks to be an out-of-uniform Confederation naval officer sits down next to you. “Captain <PN>?” he says by way of greeting. “Confed High command has a problem that can’t be dealt with through normal military channels. We think you’re just the mercenary captain for the job. It may be a dangerous assignment... are you interested?”"
	},
	{
		"id": 4101,
		"name": "",
		"description": "A Confederation officer sits down next to you. “Captain <PN>, isn’t it?” he asks. “We have another job for you. This time the mission involves striking a Rebel freighter convoy. Are you interested?”"
	},
	{
		"id": 4102,
		"name": "",
		"description": "A Rebel officer approaches you. “Captain... we need your help,” he says. “Are you willing to do a little ‘pickup’ for us?”"
	},
	{
		"id": 4103,
		"name": "",
		"description": "The Rebel officer shakes your hand. “I see we didn’t scare you off with the first mission,” he laughs. “We need to get a Rebel SEAL team to Port Oread. Will you take the mission?”"
	},
	{
		"id": 4104,
		"name": "",
		"description": "The SEAL team leader approaches you in the bar. “You need to get to Ruby. We’re not going with you for this portion of the mission, but it should be a simple pickup. Can you do it?”"
	},
	{
		"id": 4105,
		"name": "",
		"description": "The SEAL team leader meets you in the bar and asks, “Are you ready to go?”"
	},
	{
		"id": 4106,
		"name": "",
		"description": "The Rebel officer from the Astrodyne Outpost missions is in the bar. He waves you over to his table and asks if you’re willing to accept another job. Interested?"
	},
	{
		"id": 4107,
		"name": "",
		"description": "The Rebel officer from the Astrodyne Outpost missions approaches you in the bar. “We have one more mission for you,” he says. “Are you willing to help us one more time?”"
	},
	{
		"id": 4108,
		"name": "",
		"description": "An old man in tattered clothes approaches you.  “Greetings, my friend,” he says. “My name is Lucas. I need safe passage to <RST> in the <RSY> system.  I will reward you well when we land.  Are you interested?”"
	},
	{
		"id": 4109,
		"name": "",
		"description": "Remembering your strange passenger, you ask the bartender if Lucas is around. He doesn’t know what you are talking about, but a dark haired man in flowing robes approaches you. “We were told by Lucas that you would come here, <PN>,” he says. “We need someone to pick up some documents. Are you interested?”"
	},
	{
		"id": 4110,
		"name": "",
		"description": "You recognize the man sitting at a dark booth on the other side of the bar as Lucas. As you approach him, you notice that he is reading a handheld display with an expression of great concern. Without looking up he says, “So, <PN>, we meet again. My agents have informed me of your help with the retreival of certain vital documents. We have another problem, though. Are you willing to accept another job from the Artemis Group?\""
	},
	{
		"id": 4111,
		"name": "",
		"description": "As you enter the bar you see Lucas and his son Joseph talking quietly.  They motion you over. “On his last spy mission Joseph determined that the new pirate leader Nar Akasi is uniting the pirates for a major offensive,” Lucas informs you. “They aim to smash interstellar trade, loot every world they find, and destroy Confederation outposts in an attempt to tip the outcome of the civil war. It looks like they will have the ships and pilots to do it too. <PN>, we need your help again. Will you take Joseph to <DST>?”"
	},
	{
		"id": 4112,
		"name": "",
		"description": "“We have one last chance,” Lucas tells you as you sit down. “The Rebels and militias won’t help us, but I know someone else who might. Will you take me to <DST>?”"
	},
	{
		"id": 4113,
		"name": "",
		"description": "Joseph buys you a synthale.  “The time has come for a preemptive strike to prevent the pirates from carrying out their plans. We have located a staging point in the <DSY> system. Will you fly there and fight with us?”"
	},
	{
		"id": 4114,
		"name": "",
		"description": "As you sit sipping a Samarian Sunset, a Confederation miltary officer sits down next to you. “Captain <PN>,” he says, “we have a slight problem with the Rebellion that we think you may be able to take care of for us. The Rebels are attempting to field a new type of warship, and  we can’t allow them to go through with their plans. Are you interested in the mission?”"
	},
	{
		"id": 4115,
		"name": "",
		"description": "A Confederation officer approaches you. “Captain <PN>, we have another job for you,” he says. “Another Rebel escort carrier has been sighted near the <RSY> system, and has been disrupting Confederation shipping in this region of space for the last week. We need this escort carrier eliminated so that the normal flow of supplies can be reestablished - interested in the job?”"
	},
	{
		"id": 5001,
		"name": "",
		"description": "“Look, here’s the deal,” the man says, his eyes never lingering in the same place for too long. “The Confederation wants me dead. I need to get to <DST> without any... shall we say, ‘entanglements.’”"
	},
	{
		"id": 5004,
		"name": "",
		"description": "“Arr, here’s the deal,” the crusty old pirate. “Yer mission is to take <CQ> tons of the ‘good stuff’ - heh heh - to <DST>. Me mates’ll pay you a hearty sum when you get there. Oh, and watch out for those sissy-boy Confed patrols.”"
	},
	{
		"id": 5005,
		"name": "",
		"description": "A team of Astex technicians installs a core-drilling rig on your ship and gives you your instructions: “You must go to the <DSY> system and land on <DST>. This drilling rig will then automatically extract <CQ> tons of <CT> and load them into your cargo bay. When you are finished, return here for payment. By the way, watch out for pirates!”"
	},
	{
		"id": 5006,
		"name": "",
		"description": "The shadowy figure gives you your assignment: “A small convoy of Confederation freighters will be passing through this system soon. Ambush them and steal the munitions they have on board, then take them to <DST> in the <DSY> system. I guarantee we’ll make it worth your while.”"
	},
	{
		"id": 5017,
		"name": "",
		"description": "“The pirate ship <SN> has been plundering and destroying freighters in this system for the past week,” the official informs you. “We know it’s hiding nearby - your mission is to locate and destroy this pirate. You should also be aware that the <SN>’s fighter escorts have been patrolling the area, and will probably attempt to hinder your search.”"
	},
	{
		"id": 5018,
		"name": "",
		"description": "“A member of the Confederation Senate will be travelling in a passenger ship through this region in a few hours,” the Rebel informs you. “If you succeed in destroying his ship, the Rebellion will pay you... most handsomely.”"
	},
	{
		"id": 5021,
		"name": "",
		"description": "The man leads you to his office. “The Confederation passenger ship <SN> has hit a gravitic mine in a nearby system and is adrift in space,” he says. “We’re not sure exactly where the ship is, but judging by the strength of the distress beacon, it’s close by. Your mission is to rescue the passengers of the <SN> and bring them safely back to <RST>. Be advised that the ship’s life support systems will only hold out for another month.”"
	},
	{
		"id": 5023,
		"name": "",
		"description": "“Great!” the freighter captain says. “The rest of my convoy will arrive soon - protect us from pirates on the way to <RST> and we’ll make it worth your while.”"
	},
	{
		"id": 5024,
		"name": "",
		"description": "“For years, our seas have been clean and bountiful,” says the high-ranking representative of Diphidia’s government. “But now, someone is illegally dumping toxic wastes into our oceans. We are a peaceful planet; we have no military forces with which to combat this threat to our ecosystem. Nevertheless, it is imperative that we discover who is behind this - your mission is to scout out our system and report back with what you find.”"
	},
	{
		"id": 5025,
		"name": "",
		"description": "“The freighter you observed on your last mission has been traced to the Astex mining facilities on New Providence,” the official informs you. “So that we may learn if Astex has anything to do with our environmental problems, we need you to go to the Antares system and report back with what you find.”"
	},
	{
		"id": 5026,
		"name": "",
		"description": "“All signs so far indicate that Astex is behind the toxic chemical dumping,” says the official, “However, we must be sure. We require of you the unusual and extreme task of disabling a passing Astex freighter and confiscating a sample of the ore in its cargo bays. We can then analyze it to determine if it matches the chemicals being dumped into our oceans.”"
	},
	{
		"id": 5027,
		"name": "",
		"description": "“Thanks to your brave work,” says the Diphidian official, “we have determined that Astex is indeed responsible for dumping these toxic wastes into the oceans of our nearby planet. Now that we know, we need to send Astex a clear message. We need you to destroy a freighter convoy that is approaching our planet.”"
	},
	{
		"id": 5028,
		"name": "",
		"description": "“We have Astex where we want them now!” gloats your contact. “The data we have will put them out of business in this region of space, and expose the Confederation conspiracy. However, we still have to get that data to the rest of the galaxy. We have contacts waiting for you on <RST> who will pay you a sizable sum in exchange for these files. Be careful, as Astex will stop at nothing to keep that data from reaching the public!”"
	},
	{
		"id": 5029,
		"name": "",
		"description": "“Great,” says the man. “I’ll have the lumber loaded aboard your ship... the <PSN>, right?” He turns to leave, then stops. “Oh, and one other thing - I think the local pirates are on to our little business, and they may want a piece of the pie. I’d be on the lookout.”"
	},
	{
		"id": 5030,
		"name": "",
		"description": "“We’ll load our gear aboard your ship and be ready to depart at 1800 hours,” the GreenSpace rep says. “All you have to do is take us to <DST>.”"
	},
	{
		"id": 5033,
		"name": "",
		"description": "“Our listening posts have picked up increased FTL comm traffic on Rebel command frequencies in the past week,” the officer continues. “We think this indicates that the Rebels are amassing a fleet in some secret location and preparing for a strike on one of the Core Worlds. Your mission is to find Rebel <SN> and report back here with its location. However, do not attempt engage the Rebels, for we estimate they have at least a half-dozen cruisers and destroyers assembled already!”"
	},
	{
		"id": 5035,
		"name": "",
		"description": "“We need more intelligence on Confederation warship construction plans if we are to secure our hold on the Fringe regions,” says the Rebel. “To gather this data, we have decided to insert a commando team onto the Earth’s moon and have them infiltrate the Terran Naval Yards research facility there. To do this without attracting attention, we need to transport the commando team to Luna in a harmless-looking civilian ship. Your first mission will be to take these orders to <RST> and pick up the special-ops team.” The commander chuckles. “I hear the wireheads on <RST> have cooked up a new toy for you to play with.”"
	},
	{
		"id": 5036,
		"name": "",
		"description": "“The cloaking device has been installed,” the garrison commander informs you. “It will render you invisible on all known scanners for short periods of time, but there have been some problems with the power consumption of the degenerator matrix. While in use, the cloak will draw power from your shield and weapon systems, as well as siphoning fuel from your tanks to feed the subspace vortex compensators. Use it wisely, but just get the commandos onto <DST>!”"
	},
	{
		"id": 5037,
		"name": "",
		"description": "“We got the data we needed,” whispers Major Davies as you sit down. “And we got off Luna all right, but I think they may be onto our trail. Let’s hurry up and get into your ship before we’re spotted. The nearest freeport is <DST>, so I’ve arranged for someone to meet us there.”"
	},
	{
		"id": 5038,
		"name": "",
		"description": "“Three days ago,” the officer tells you, “a Rebel raiding party breached the Confederation’s patrol network and infiltrated our high-security weapons research facility on <RST>, in the <RSY> system. Nothing has been heard from the facility since, though we have reason to believe that it is still intact. Your mission is to proceed to <RST> and investigate.”"
	},
	{
		"id": 5043,
		"name": "",
		"description": "“Excellent,” says the Confederation officer. “I’ll have someone load the cargo - a set of records and documents - aboard your ship. The shipment is bound for <RST>, in the <RSY> system. Watch out for pirates along the way,” he chuckles as he turns to go."
	},
	{
		"id": 5044,
		"name": "",
		"description": "“Great,” says the Rebel officer. “I’ll have someone load the cargo - small packages, mostly, along with some documents - aboard your ship. The shipment is bound for <RST>, in the <RSY> system. Watch out for pirates along the way,” she chuckles as she turns to go."
	},
	{
		"id": 5045,
		"name": "",
		"description": "“Great,” says the first man. “We’re with the operations department of Starbound Shipping. We have some extra packages that need to get to <RST>, but all of our courier ships are out on other assignments. We’ll load the cargo into your ship, and all you have to do it take it to <RST> for an easy ten thousand.”"
	},
	{
		"id": 5046,
		"name": "",
		"description": "“Today’s been a real nightmare,” says the Starbound Shipping rep. “One of our couriers is down for engine repairs, and suddenly we have this set of documents that needs to get to the <RSY> system, ASAP. We’ll load them aboard your ship, and all you have to do it get them to <RST> by <DL>.”"
	},
	{
		"id": 5047,
		"name": "",
		"description": "“Excellent,” smiles the man. “There’s a shipment of uridium waiting for pickup on <DST>. It needs to get to the <RSY> system. However, our chief rival, Consolidated Express, will most likely try to stop you from making the delivery, so that we will not receive the profits from this lucrative job. Your mission is to go to <DST> and pick up the uridium, then deliver it safely to <RST>. Good luck!”"
	},
	{
		"id": 5048,
		"name": "",
		"description": "“<SN> will be arriving in this system soon,” says the man. “Your job will be to escort this courier ship to its destination on <RST>. Unfortunately, our rivals at Consolidated Express want to make sure this ship never reaches <RST>. Protect the ship at all costs!”"
	},
	{
		"id": 5049,
		"name": "",
		"description": "“Okay, here’s the story,” says the Starbound rep. “A small convoy of couriers belonging to our rivals, Consolidated Express, has been operating in the <RSY> system lately. That’s Starbound territory, and ConEx knows it - they’re just getting greedy. Your mission will be to destroy this convoy, to send a message to ConEx to stay out of our sphere of influence. Beware, those couriers might have an armed escort. We’ll have someone waiting for you on <RST> with your payment.”"
	},
	{
		"id": 5056,
		"name": "",
		"description": "Docking Bay 94 is dimly-lit and seemingly deserted. It takes you a few seconds to notice that the Rebel officer is standing in the shadows, waiting for you. “Thank Zarquon,” he says. “I was beginning to think you wouldn’t come. We have a very special and delicate mission, captain, and your outstanding record in the past prompted us to call upon you. We’ve been losing ships in the Nexus system for the past four months, and we want to know why. Go there and find out any information you can, then go to <RST> for further orders.”"
	},
	{
		"id": 5057,
		"name": "",
		"description": "“Good,” he says. “Make a pass through Nexus and the surrounding systems. You will jump into each system first, and Red squadron will drop in just behind you to provide cover. Come back here when you’re finished.”"
	},
	{
		"id": 5058,
		"name": "",
		"description": "“You wouldn’t have been so quick to volunteer if I’d have told you all the details,” he says. “Talmadge Renyolds had orders to close down his intelligence operation and get back to Rebel space. He stowed away on a Confed transport... and that’s the last we heard of him. Our last report from him said that he had been discovered while the transport was in the Barnard system, and that he had managed to disable the ship and subdue the flight crew. We assume he is still alive, so your mission is to rescue him and carry him safely to Rebel HQ on <RST>. The Confeds will surely be hot on your trail. Good luck!”"
	},
	{
		"id": 5059,
		"name": "",
		"description": "Admiral Davies leads you to his office. “My friend, the aliens are back,” he tells you bluntly. “There’s no other explanation for it. The data Talmadge Renyolds brought back to us indicates that the Confeds have had no unusual warship activity in the Nexus system in the past year, and pirate activity alone couldn’t account for the number of ship’s we’ve lost. High Command agrees with me, and I’ve been authorized to send you to <DST> to retreive information from the archives there. Return back here as fast as you can!”"
	},
	{
		"id": 5060,
		"name": "",
		"description": "“Are you up on your Great War history?” the Admiral asks. “During the War, we thought all alien ships had been accounted for. Well, it turns out that an alien battlecruiser that was listed as ‘missing, presumed destroyed’ was only missing after all. We think it’s been hiding out deep in the Serpens nebula all these years, and now it’s decided to strike. It’s moving away from the nebula now, probably toward the Trugati asteroid belt. I’m sending a Manta squadron along with you for escort - locate the aliens, but don’t engage them! Report back here on the double when you’ve pinpointed their position.”"
	},
	{
		"id": 5061,
		"name": "",
		"description": "“Good,” the Admiral says. “The cruisers Hyperion and Fearless  will accompany you for this mission. We think the alien battlecruiser has moved somewhat since you sighted one of its fighter escorts; it seems to prefer sticking to uninhabited systems until it strikes. Find the aliens, engage them, and leave none alive! I sure wish I were going with you - hopefully you’ll make it back here in one piece. Good luck and Godspeed!”"
	},
	{
		"id": 5062,
		"name": "",
		"description": "After wandering around for almost a full hour trying to find it, you finally chance upon maintenance access tunnel 7. The man from the bar is waiting for you inside. “Greetings, captain,” he says as he shows you his Confed Intelligence Bureau credentials. “I’ll get right to the point - we’ve been losing ships in the Risa system for the past five months. You’ve been chosen for this mission because of your outstanding record. Go to the Risa system, gather what information you can, and proceed to <RST> for further orders.”"
	},
	{
		"id": 5063,
		"name": "",
		"description": "“A convoy of three Confed light freighters carrying industrial goods to the <RSY> system will be passing through this sector this week,” your contact tells you, “and we don’t want them to fall victim to whatever has been making ships disappear in the Risa system. Rendezvous with the convoy in the Kathoon system, and escort them safely to <RST>.”"
	},
	{
		"id": 5064,
		"name": "",
		"description": "Your interest piqued, you continue reading: “CBI special agent Sheridan has implemented a successful infiltration of the Rebel high command for the last year. The data he has collected is now of the utmost importance to the Confederation. Fight your way through Rebel patrols to <DST> to rescue agent Sheridan, then proceed ASAP to a briefing before the Confed Joint Chiefs on <RST>. Good luck, captain! / Signed Adm Sykes, CSN.”"
	},
	{
		"id": 5065,
		"name": "",
		"description": "“Ah, <PN>, at last we meet,” says Admiral Sykes as you’re ushered into his office. “I’ve heard quite a bit about your career - especially that Ruby affair.” He pauses for a second. “The aliens are back, captain. The Rebels have been tracking an alien warship - one that was presumed destroyed in the Great War - moving through the Fringe systems. Your mission is to pinpont the aliens’ location for us; we think they’re on the move toward the Trugati asteroid belt. Find the aliens - do not engage them - and return here immediately.”"
	},
	{
		"id": 5066,
		"name": "",
		"description": "“Outstanding, I knew you’d do it,” the admiral says. “We’ve managed to free up a cruiser, the U.S.S. Agamemnon, from deepspace patrol duty to act as a military escort for you. Long-range probes indicate that the aliens have moved from where you spotted them - possibly toward the Trugati Asteroid Belt. Dozens of ships like these laid waste to entire planets during the Great War - I’m sure I don’t need to tell you the threat that this one represents to the human race. Locate the alien battlecruiser, and terminate with extreme prejudice. Good luck!”"
	},
	{
		"id": 5069,
		"name": "",
		"description": "“Great,” says the freighter captain, “I’ll have them sent over in a shuttlepod. When you get to <DST>, they’ll give you your payment.”"
	},
	{
		"id": 5070,
		"name": "",
		"description": "“Great,” says the freighter captain, “I’ll have the <CT> sent over in a shuttlepod. When you get to <DST>, they’ll give you your payment.”"
	},
	{
		"id": 5072,
		"name": "",
		"description": "“So, if it isn’t <PN>, the infamous Confederation dupe,” snarls the port governor, his contempt clearly audible. “Here’s the deal. The Confeds trust you - that’s why you’re going to be our ace in the hole. Word is that the Confed frigate <SN> is going to be making a sweep through this sector soon. Your job will be to destroy it and then come back to <RST>. Oh, and don’t even think of backing out on this one - we’ll be watching your every move.”"
	},
	{
		"id": 5073,
		"name": "",
		"description": "As soon as all of the precious technology is loaded on to your ship, you cut your link to the other vessel, letting it drift away into space.  Your executive officer offers some advice:  “Captain, let’s take these parts to <RST>.  They have both the need for these parts and the technology and facilities to assemble them.”  It sounds tempting - however, your conscience tells you to abort the mission to try to score points with the Confeds..."
	},
	{
		"id": 5074,
		"name": "",
		"description": "“Excellent,” he says. “I’ll have the <CT> sent over in workpods. You’d better watch out for those pirates on your way to <RST>... they’ll be after you now. Good luck!”"
	},
	{
		"id": 5075,
		"name": "",
		"description": "“Ay, here’s the deal. The Confederates have stumbled on one of our weapons outposts on an uninhabited planet near one of their new manufacturing outposts. They’re tryin’ to retrieve the weapons, and we need you to retrieve whatever you can salvage and relocate it before the Confeds confiscate all of it.  Pick up the goods in the <DSY> system and deliver them to <RST> in the <RSY> system. Make sure you have at least 20 tons of free space in your cargo bay. Oh, and expect Confederate resistance.”"
	},
	{
		"id": 5076,
		"name": "",
		"description": "“Good. Thanks.” He makes a mark on his clipboard. “We’ve got a lot of bases needing these supplies. We’ll load a few tons of cargo back onto your ship, and you can take them to <DST>.  The Confeds have started to crack down on our supply lines, so you should expect resistance.  The amount of Confed opposition varies from week to week, but just to be safe, we’ll be sending a small Manta escort along with you.  I’ll tell <DST> you’ll be there by <DL>.  Thanks again, and don’t forget to return when you’re done - we could always use more help!”"
	},
	{
		"id": 5081,
		"name": "",
		"description": "The man in the uniform turns to you, still shaking.  “Thanks, pal.  You just saved my life.  Look, I need your help.”  You quickly agree.  “I’m working for United Galactic Express,’ he says, “and I’m shipping a valuable load of luxury goods through these parts.  Those thugs pummeled my ship, but I managed to land here and hide my cargo.  I’m sure they’ll be scanning every ship that leaves, and I’m history if I eat another missile.  I need you to carry my cargo through their trap.  I’ll take off behind you, and we’ll rendezvous at <DST> by <DL>.  Thanks again, pal.”"
	},
	{
		"id": 5082,
		"name": "",
		"description": "“Oh, hello.  So you’re interested in a job, eh?  I’ll take you to the boss.”  He leads you to a large, tidy office on the opposite side of the landing area.  “I've heard good things about you, <PN>,” says the UGE boss, who introduces himself as Chris Richards.  “I’d love to have you on our UGE staff.  In fact, I’ve got your first assignment ready now.  We have a shipment that needs to go to <DST> by <DL>.  It’s not as tight a schedule as most of our other shipments, so you should be able to make it.  One or two lost shipments won’t matter, but just keep in mind that we pride ourselves on timeliness and speed.  I’ll contact you about further missions through our connection with mission computers across the galaxy.”"
	},
	{
		"id": 5089,
		"name": "",
		"description": "“All right, I thought so,” says Benedict.  You sit down at the small table as the other two UGE employees lean in toward you.  “Did you know that UGE makes almost 400,000 credits on every shipment we make?  Well, I’ve got a way to get some more of what we deserve.  UGE doesn’t care if we lose a shipment to pirates, so I suggest we fly the <CT> I have in my holds to pirate system <DSY> to pawn off the the goods.  We’ll make at least 750,000 credits, which is enough for 250,000 credits each.  <PN>, you take the shipment to the pirates by <DL>.  As soon as we have the money in our hands, the two of us will blast each others’ ships a bit and then tell UGE we were all attacked by pirates.”"
	},
	{
		"id": 5091,
		"name": "",
		"description": "“Your job back, eh?  I’ll have to think about that one,” says Richards.  “Come by my office in a few hours.”  You sit down to the bar to pass time after Richards departs.  After an hour, you meet him in his office.  “Yes, I'll restore your commission,” he says, “if you can deliver this 25 ton shipment to pirate system <DSY> by <DL>.  I'll only pay you 50,000 credits.  None of our other pilots are crazy enough to actually undertake this mission and I’m desperate for help here, so I’ll give the mission to you and then put you back on our payroll if you can complete it.”"
	},
	{
		"id": 5092,
		"name": "",
		"description": "The leader steps forward and says, “Thank you for accepting this dangerous mission.  You are to proceed to <DST> in the <DSY> system to retrieve one of our covert operations specialists.  You will then return to this station to drop off the spy and claim your reward.  Be forewarned:  Rebel forces have been alerted to the spy’s presence and will be expecting you.  Also, you must return to this outpost by <DL> if the spy’s information is to be of any use to us whatsoever.”"
	},
	{
		"id": 5093,
		"name": "",
		"description": "“The data retrieved by the spy you escorted shows several peculiar readings.  We have distributed this information along secured Confed lines, but we still can’t make heads or tails of the readings.  We require your assistance in transporting this data and to the <DSY> system, where one of our pirate contacts will aid you.  We have also given you a small load of tritanium ore to be used as payment for our pirate contact.  You must return the pirate’s analysis to <RST> in the <RSY> system by <DL>.”"
	},
	{
		"id": 5094,
		"name": "",
		"description": "“There is another delivery scheduled by the Jericon Corporation within the next month.  It should be leaving from Ruby, where the Jericon Corporation is based.  Search the area for the Rebel Cruiser that is transporting the munitions, and disable it.  Retrieve the munitions onboard, and return to <RST> in the <RSY> system.  Be sure to avoid destroying the ship until you have retrieved the cargo!”"
	},
	{
		"id": 5095,
		"name": "",
		"description": "“There is another delivery scheduled by the Jericon Corporation within the next month, and it should be leaving from Arrakis.  Search the area for the Rebel Cruiser that is transporting the munitions, and disable it.  Retrieve the munitions onboard, and return to <RST> in the <RSY> system.  Be sure to avoid destroying the ship until you have retrieved the cargo!”"
	},
	{
		"id": 5096,
		"name": "",
		"description": "Your mission contact explains that this planet’s industries, like most in the Confederation, produce more waste than they know what to do with.  So, they have decided to hire individuals like yourself who are willing to provide transportation for a small portion of this toxic waste to a specialized refinery.  The officer promises that the job will pay well.  You must deliver the cargo to <DST> in the <DSY> system, but you only have one month to complete your assignment before you must jettison the cargo."
	},
	{
		"id": 5097,
		"name": "",
		"description": "A corporate executive meets you over lunch.  “Some of the industrial byproducts that are refined at our plant are used to produce biological weaponry.  We would like to enlist your help in transporting these goods to <DST> in the <DSY> system for the final stages of manufacturing.”"
	},
	{
		"id": 5098,
		"name": "",
		"description": "“Just yesterday, we received reports of a Rebel attack on <DST>.  They’re requesting huge amounts of supplies;  we need you to deliver these munitions to <DST> within a month.  Watch out for Rebel resistance, especially near the <DSY> system.  Remember, you need to be there by <DL>.  Good luck, <PN>.  Oh, and don’t forget to return to this station if you’d like to run more of these missions for us in the future.”"
	},
	{
		"id": 5099,
		"name": "",
		"description": "“Thanks for volunteering,” says the Rebel officer.  “We’ve heard rumors of a fleet of Confed warships amassing near this system, probably to demonstrate the Confed Navy’s power to frighten us into submission. We need your help locating them.  If our sources are reliable, you’ll find the Confederate ships nearby.  You need not engage them;  just scan them and return to this location.  Oh, and you only have about fifteen days before their scheduled time of attack...”"
	},
	{
		"id": 5100,
		"name": "",
		"description": "“Here’s the situation, captain,” says the Confed officer quietly. “The frigate <SN>, which was on patrol near the <RSY> system, was supposed to put into port yesterday, but is overdue. Confed intelligence gives us reason to believe that the officers and at least some of the ship’s crew are intending to defect to the Rebellion. Your mission is to locate and destroy the <SN>... leave no survivors, so that we may send a clear message to others considering this traitorous course of action!”"
	},
	{
		"id": 5101,
		"name": "",
		"description": "“Good,” says the officer. “Here’s the situation: a small convoy of Rebel freighters will be passing through the <RSY> system in a few days - the destruction of this convoy will hamper the Rebellion’s military efforts for the next several weeks. We have received word through our spies that the convoy is being accompanied by one of the Rebels’ new escort carriers. Your mission is to completely destroy the convoy, and then meet one of our operatives on <RST> for payment.”"
	},
	{
		"id": 5102,
		"name": "",
		"description": "The Rebel Commander gives you your briefing. “We’ve got a spy on Earth that we need to get out. We think her cover may have been blown and she’s got information that’s just dangerous and important enough that she can’t transmit it over sub-space. Go to Earth and pickup the spy, and then return her to Palshife. We may have further instructions for you if you’re willing.”"
	},
	{
		"id": 5103,
		"name": "",
		"description": "“Our spy has informed us that there is a scientist on Ruby that wishes to defect,” the Rebel officer says. “Sources say that the scientist has a great deal of useful information, including something very juicy regarding the abandoned Astrodyne Outpost. We’ve got a SEAL team ready to go. Their equipment is en route. Take them to Port Oread in the Tiber system. Meet the SEAL commander in the bar a day or two later if you wish to continue the mission.”"
	},
	{
		"id": 5104,
		"name": "",
		"description": "“OK... here’s the story,” the SEAL commander begins. “There’s a scientist on Ruby disillusioned by the Confederation’s promises of peaceful intents. He’s got information on the Astrodyne Outpost. We thought the outpost had been completely ‘wiped’ when the ’Feds deserted it. Aparently, this may not be the case. That facility could hold a bulk freighter’s worth of information about weapons research. Go to Ruby, get the scientist out, and return here. We’ve still got maybe a week’s worth of work to do on our equipment. Damn ‘common carriers’ knocked the hell out of our stuff! Anyway...get the scientist and get back here ASAP.”"
	},
	{
		"id": 5105,
		"name": "",
		"description": "The SEAL commander looks worried. “Alright. This is it,” he says. “I quickly spoke with the scientist. He’s got codes to the computer core on the Outpost. It was supposed to have been destroyed, but, apparently, the virus they put into their own computer system was disabled by a latent virus protection program that no one knew was there. Until now. Much of the data on the facility was destroyed, but some still remains. My superiors want that data at all costs. We need to get the outpost and back to Palshife with any of the data we can recover. This is not going to be fun. The Confeds know we’re coming. The good news is that we should be able to get in and out quickly.”"
	},
	{
		"id": 5106,
		"name": "",
		"description": "The officer welcomes you back to Rebel space and begins the briefing. “We’ve recovered some very important information from the data you helped us obtain. That data suggested a Confederation secret weapons testing facility exists on an uninhabited world, P-0805. We sent our SEAL team in again, but have lost contact with them and their vessel. We think they’re still alive on a surface but they must be on the run or in hiding. The system is heavily patrolled. We need you to land on P-0805 and rendezvous with the SEAL team. Then, get them home to Palshife. We’ll try to have some ships meet you in the system for cover so that you can land and get out again.”"
	},
	{
		"id": 5107,
		"name": "",
		"description": "“It seems that the explosions on P-0805 didn't destroy the whole facility,” the Rebel officer begins. “They crippled it, but didn’t destroy all the data. More importantly, one of the weapon prototypes has survived. A spy has informed us that the Confederation plans to move the prototype to Ruby. They’re shipping it on an executive transport in an attempt to make the transfer with as little fanfare as possible. The transport will probably be guarded, but we’re not sure. Search the systems near Ruby. Find the transport. Board it and recover the weapon, then return here.”"
	},
	{
		"id": 5108,
		"name": "",
		"description": "“There are some pirates who do not want me to get to <RST>,” the old man tells you. “I have heard that you are just the pilot to get me there, though.  I am entrusting my life to you.”  Your passenger enters your ship and straps himself in, then falls asleep."
	},
	{
		"id": 5109,
		"name": "",
		"description": "The man in the robe takes you into a back room before continuing. “I am a member of a secret organization known as The Artemis Group. Our mission is one of peacekeeping and neutrality. We are paid by large corporations, and use behind-the-scenes methods to make sure that all of the various factions in the galaxy stay roughly equal. Right now I need you to retreive some secret documents from our agent on <DST>.  Once you have them, return here and we will pay you for your services.”"
	},
	{
		"id": 5110,
		"name": "",
		"description": "“Your assistance is appreciated,” Lucas says. “A ship in the <RSY> system has been disabled by pirates. Luckily the pirates didn’t realize that one of my agents was on board. He can’t hide forever, though, and the pirates will most likely return to finish the job. I need you to go get that agent off the ship as soon as you can. I will meet you on <RST> as soon as you have rescued him.”"
	},
	{
		"id": 5111,
		"name": "",
		"description": "Joseph continues the briefing: “We need to gather our forces together. Our most experienced pilots - a mercenary group called the Hunters - are on <DST>. I need to go there to brief them and rally them for battle. This won’t be an easy mission. The pirates know who you are now, and they will be looking for us. When we get to <DST>, the Hunters will help us, but until then we will be on our own.” Joseph quickly says goodbye to his father and leaves to board the <PSN>."
	},
	{
		"id": 5112,
		"name": "",
		"description": "Lucas quietly tells you that this will not be an easy mission. The pirates, it seems, will be doing everything they can to stop you and the Artemis Group."
	},
	{
		"id": 5113,
		"name": "",
		"description": "“Glad to have you on board one last time,” Joseph says. “Many of our mercenaries work as escort pilots for United Galactic Express when they aren’t working for the Artemis Group. My father, with the help of the Hunters, has convinced UGE to help us out this time. Normally, UGE doesn’t consider us an ally, ever since we thwarted their hostile takeover plans at the battle of New Wessex... but this time, old animosities have been cast aside. Now we fight for the same goals. If we both survive, I’ll buy you a drink on <DST>. Good luck.”"
	},
	{
		"id": 5114,
		"name": "",
		"description": "“Due to our continued success at disrupting their supply lines,” the officer tells you, “the Rebels are rushing into production a new type of warship, which they call an escort carrier. Our intelligence is sketchy at the moment, but we do know that they are some sort of converted freighter, like the Rebel destroyer, but they are also capable of carrying starfighters. The prototype, the <SN>, was sighted near the <RSY> system three days ago. Your mission is to locate and terminate this ship, and then return to <RST>.”"
	},
	{
		"id": 5115,
		"name": "",
		"description": "“Good,” the officer says. “Your target is the Rebel escort carrier <SN>. Locate and destroy this ship, then return to <RST> for your payment.”"
	},
	{
		"id": 6000,
		"name": "",
		"description": "These passengers need to get to <DST> in the <DSY> system."
	},
	{
		"id": 6001,
		"name": "",
		"description": "Get this criminal to <DST> in the <DSY> system. Watch out for Confederation patrols."
	},
	{
		"id": 6002,
		"name": "",
		"description": "Get these drugs to <DST> in the <DSY> system, and watch out for Confederation patrols."
	},
	{
		"id": 6005,
		"name": "",
		"description": "Land on <DST> in the <DSY> system and return to <RST> with ore samples."
	},
	{
		"id": 6006,
		"name": "",
		"description": "Ambush a Confederation military convoy and take the stolen munitions to <DST> in the <DSY> system."
	},
	{
		"id": 6007,
		"name": "",
		"description": "Get this shipment of <CT> to <DST> in the <DSY> system before <DL>."
	},
	{
		"id": 6008,
		"name": "",
		"description": "Get this shipment of <CT> to <DST> in the <DSY> system."
	},
	{
		"id": 6017,
		"name": "",
		"description": "Destroy the pirate ship <SN> (it should be somewhere near the <RSY> system) and then return to <RST>."
	},
	{
		"id": 6018,
		"name": "",
		"description": "Destroy a Confederation consular ship as it passes through a system near the <RSY> system, and then return to <RST> for payment."
	},
	{
		"id": 6019,
		"name": "",
		"description": "Destroy or drive off all pirates in the <RSY> system."
	},
	{
		"id": 6020,
		"name": "",
		"description": "Destroy or drive off all Confederation warships in the <RSY> system."
	},
	{
		"id": 6021,
		"name": "",
		"description": "Rescue the passengers of the <SN>, which is adrift near <RSY>, and return them to <RST> before <DL>."
	},
	{
		"id": 6022,
		"name": "",
		"description": "Salvage the ore from a convoy of freighters that are adrift in the <RSY> system and bring it back to <RST>."
	},
	{
		"id": 6023,
		"name": "",
		"description": "Escort a merchant freighter convoy to <RST> in the <RSY> system."
	},
	{
		"id": 6024,
		"name": "",
		"description": "Look for any suspicious ships entering or leaving the <RSY> system, then return to <RST>."
	},
	{
		"id": 6025,
		"name": "",
		"description": "Go to the Antares system and report back to <RST> with what you see there."
	},
	{
		"id": 6026,
		"name": "",
		"description": "Disable an Astex freighter and bring a sample of ore from its hold back to <RST>."
	},
	{
		"id": 6027,
		"name": "",
		"description": "Destroy an Astex freighter convoy headed toward <RST>."
	},
	{
		"id": 6028,
		"name": "",
		"description": "Escape Astex mercenaries as you convey the pivotal data to agents on <RST>."
	},
	{
		"id": 6029,
		"name": "",
		"description": "Take a black-market shipment of <CT> to <DST>. Watch out for pirates who may be trying to stop your shipment."
	},
	{
		"id": 6030,
		"name": "",
		"description": "This environmental survey team is needed on <DST> in the <DSY> system."
	},
	{
		"id": 6031,
		"name": "",
		"description": "Destroy or drive off all enemy ships in the <RSY> system."
	},
	{
		"id": 6033,
		"name": "",
		"description": "Locate a secret Rebel fleet and return to <RST> to report the fleet’s location."
	},
	{
		"id": 6034,
		"name": "",
		"description": "Destroy a Confederation convoy passing through the <RSY> system, then return to <RST> for payment."
	},
	{
		"id": 6035,
		"name": "",
		"description": "Proceed to <RST> to pick up a Rebel commando team."
	},
	{
		"id": 6036,
		"name": "",
		"description": "Take a Rebel special-operations team to the <DSY> system and insert them onto <DST>. Use your cloaking device to avoid detection by the Confederation. Meet them again on <RST>."
	},
	{
		"id": 6037,
		"name": "",
		"description": "Take the Rebel commandos and their data to <RST> and meet with a Rebel liason there."
	},
	{
		"id": 6038,
		"name": "",
		"description": "Go to <RST> and investigate a Rebel raid there."
	},
	{
		"id": 6039,
		"name": "",
		"description": "Pursue the Rebels to <RST> and investigate the stolen weapon prototype."
	},
	{
		"id": 6040,
		"name": "",
		"description": "Follow the Rebel theives to a pirate base in the <RSY> system, and watch out in case you encounter a Rebel cruiser that’s been sighted in the area."
	},
	{
		"id": 6041,
		"name": "",
		"description": "With the help of a squadron of patrol ships, follow the Rebel theives to the <RSY> system and somehow land on <RST>."
	},
	{
		"id": 6042,
		"name": "",
		"description": "Retreive the stolen particle beam from a Rebel freighter en route to Palshife in the Satori system, and then return in to the Confederation garrison on <RST>."
	},
	{
		"id": 6043,
		"name": "",
		"description": "Transport Confederation documents to <RST> in the <RSY> system."
	},
	{
		"id": 6044,
		"name": "",
		"description": "Transport Rebel parcels to <RST> in the <RSY> system."
	},
	{
		"id": 6045,
		"name": "",
		"description": "Take these parcels from Starbound Shipping to <RST> in the <RSY> system."
	},
	{
		"id": 6046,
		"name": "",
		"description": "Get these documents to <RST> by <DL>."
	},
	{
		"id": 6047,
		"name": "",
		"description": "Go to <DST> and pick up a shipment of uridium, then take it to <RST> - watch out for mercenaries hired by Consolidated Express."
	},
	{
		"id": 6048,
		"name": "",
		"description": "Protect <SN> from Consolidated Express attacks as you make your way to <RST>."
	},
	{
		"id": 6049,
		"name": "",
		"description": "Destroy a Consolidated Express convoy in the <RSY> system, and then go to <RST> for payment."
	},
	{
		"id": 6050,
		"name": "",
		"description": "Take these engineers to <RST>."
	},
	{
		"id": 6051,
		"name": "",
		"description": "Go to <DST> and pick up some terraforming equipment, then bring it back to <RST>."
	},
	{
		"id": 6052,
		"name": "",
		"description": "Go to <DST> and pick up some volunteer colonists, then bring them back to <RST>."
	},
	{
		"id": 6054,
		"name": "",
		"description": "Go to <DST> and pick up a resupply shipment of <CT>, then bring it back to <RST>."
	},
	{
		"id": 6055,
		"name": "",
		"description": "Destroy or chase off all pirates in the <RSY> system."
	},
	{
		"id": 6056,
		"name": "",
		"description": "Investigate a series of mysterious disappearances in the Nexus system, then go to <RST> for further orders."
	},
	{
		"id": 6057,
		"name": "",
		"description": "Lead a Rebel patrol through the Nexus system and all adjacent systems."
	},
	{
		"id": 6058,
		"name": "",
		"description": "Rescue the Rebel spy Talmadge Renyolds from a Confed transport in the Barnard system, then take him safely to <RST>."
	},
	{
		"id": 6059,
		"name": "",
		"description": "Go to <DST> and get vital records from the Great War, and bring them back to <RST>."
	},
	{
		"id": 6060,
		"name": "",
		"description": "Locate a renegade alien fleet somewhere near the Trugati asteroid belt, and report back to <RST> with its location."
	},
	{
		"id": 6061,
		"name": "",
		"description": "Destroy the aliens and return to <RST>."
	},
	{
		"id": 6062,
		"name": "",
		"description": "Investigate a series of mysterious ship disappearances in the Risa system, then go to <RST> for further orders."
	},
	{
		"id": 6063,
		"name": "",
		"description": "Rendezvous with a Confed freighter convoy in the Kathoon system, and escort them to <RST> in the <RSY> system."
	},
	{
		"id": 6064,
		"name": "",
		"description": "Rescue a Confed intelligence agent from <DST>, then proceed to a military briefing on <RST>."
	},
	{
		"id": 6065,
		"name": "",
		"description": "Locate a renegade alien fleet somewhere near the Trugati asteroid belt, and report back to <RST> with its location."
	},
	{
		"id": 6066,
		"name": "",
		"description": "Destroy the aliens and return to <RST>."
	},
	{
		"id": 6071,
		"name": "",
		"description": "Escort a merchant courier to <RST> in the <RSY> system."
	},
	{
		"id": 6072,
		"name": "",
		"description": "Betray the Confederation by destroying the <SN>!"
	},
	{
		"id": 6073,
		"name": "",
		"description": "Deliver the stolen Kestrel subassemblies to <RST> in the <RSY> system. Or, if you want to be a do-gooder, just abort the mission."
	},
	{
		"id": 6075,
		"name": "",
		"description": "Pick up weapons from <DSY> and deliver them to <RST> in the <RSY> system."
	},
	{
		"id": 6076,
		"name": "",
		"description": "Transport munitions to <DST> in the <DSY> system, avoiding Confed resistance, by <DL>."
	},
	{
		"id": 6077,
		"name": "",
		"description": "Transport waste materials to <DST> in the <DSY> system."
	},
	{
		"id": 6078,
		"name": "",
		"description": "Deliver medical supplies to <DST> in the <DSY> system by <DL>."
	},
	{
		"id": 6079,
		"name": "",
		"description": "Transport civilians from <DST> in the <DSY> system to <RST> in the <RSY> system by <DL>."
	},
	{
		"id": 6080,
		"name": "",
		"description": "Transport civilians from <DST> in the <DSY> system to <RST> in the <RSY> system by <DL>."
	},
	{
		"id": 6081,
		"name": "",
		"description": "Deliver UGE <CT> shipment to <DST> in <DSY> by <DL>."
	},
	{
		"id": 6082,
		"name": "",
		"description": "Deliver UGE shipment to <DST> in the <DSY> system by <DL>."
	},
	{
		"id": 6083,
		"name": "",
		"description": "This United Galactic Express must be delivered <CT> to <DST> in the <DSY> system by <DL>."
	},
	{
		"id": 6089,
		"name": "",
		"description": "Smuggle a UGE shipment of <CT> to <DST> in the <DSY> system and pawn the goods before <DL>."
	},
	{
		"id": 6092,
		"name": "",
		"description": "Retrieve a spy from <DST> in the <DSY> system and return him to <RST> in the <RSY> system before <DL>."
	},
	{
		"id": 6093,
		"name": "",
		"description": "Go to <DST> in the <DSY> system to have data analyzed.  Return the report to <RST> in the <RSY> system by <DL>."
	},
	{
		"id": 6094,
		"name": "",
		"description": "Search the systems near Ruby and retrieve munitions from the Rebel Cruiser.  Drop munitions in the <RSY> system."
	},
	{
		"id": 6095,
		"name": "",
		"description": "Search the systems near Arrakis and retrieve munitions from the Rebel Cruiser.  Drop munitions in the <RSY> system."
	},
	{
		"id": 6096,
		"name": "",
		"description": "Deliver industrial toxins to <DST> in the <DSY> system before <DL>."
	},
	{
		"id": 6097,
		"name": "",
		"description": "Deliver refined chemicals to <DST> in the <DSY> system."
	},
	{
		"id": 6098,
		"name": "",
		"description": "Deliver biological weapons to <DST> in the <DSY> system by <DL>.  Expect Rebel resistance."
	},
	{
		"id": 6099,
		"name": "",
		"description": "Locate and scan a Confederate fleet near the <RSY> system and report back to <RST> by <DL>."
	},
	{
		"id": 6100,
		"name": "",
		"description": "Locate and destroy the defecting Confederation frigate <SN>, then return to <RST>."
	},
	{
		"id": 6101,
		"name": "",
		"description": "Destroy a Rebel convoy in the <RSY> system, then land on <RST> for payment."
	},
	{
		"id": 6102,
		"name": "",
		"description": "Go to Earth and pickup the Rebel spy. Return her to Palshife."
	},
	{
		"id": 6103,
		"name": "",
		"description": "Take the SEAL team to Port Oread in the Tiber system."
	},
	{
		"id": 6104,
		"name": "",
		"description": "Pick up the Confed scientist on Ruby and return to Port Oread."
	},
	{
		"id": 6105,
		"name": "",
		"description": "Get the SEAL team to Astrodyne Outpost and then back to Palshife in the Satori system."
	},
	{
		"id": 6106,
		"name": "",
		"description": "Pickup the SEAL team on P-0805 and get them back to Palshife."
	},
	{
		"id": 6107,
		"name": "",
		"description": "Find the Confed transport, board it, recover the weapon prototype, and return to Palshife."
	},
	{
		"id": 6108,
		"name": "",
		"description": "Deliver a passenger to <RST> in the <RSY> system."
	},
	{
		"id": 6109,
		"name": "",
		"description": "Get documents from <DST> in the <DSY> system, and return to <RST>."
	},
	{
		"id": 6110,
		"name": "",
		"description": "Rescue an Artemis agent from a disabled ship in the <RSY> system, then meet Lucas on <RST>."
	},
	{
		"id": 6111,
		"name": "",
		"description": "Take Joseph to Sauron to meet with the Hunters."
	},
	{
		"id": 6112,
		"name": "",
		"description": "Take Lucas to <DST> in the <DSY> system, and then proceed to <RST>."
	},
	{
		"id": 6113,
		"name": "",
		"description": "Get to <DSY> and destroy the pirate fleet, then land on <DST> for payment."
	},
	{
		"id": 6114,
		"name": "",
		"description": "Locate and destroy the prototype escort carrier <SN>, which has been sighted near the <RSY> system, and then return to <RST>."
	},
	{
		"id": 6115,
		"name": "",
		"description": "Locate and destroy the Rebel escort carrier <SN>, and then return to <RST>."
	},
	{
		"id": 7000,
		"name": "",
		"description": "The passengers exit your ship after paying you the fee of 10,000 credits."
	},
	{
		"id": 7001,
		"name": "",
		"description": "The criminal exits your ship after paying you the fee of 75,000 credits. Unfortunately, by helping this evildoer you have made the Confederation very angry!"
	},
	{
		"id": 7002,
		"name": "",
		"description": "A group of shifty-looking dockhands appear out of nowhere and offload the illegal cargo from your ship before paying you your fee."
	},
	{
		"id": 7005,
		"name": "",
		"description": "After unloading the core-drilling rig and the precious ore samples, the Astex representative congratulates you and hands you a credit chip with 35,000 credits on it. "
	},
	{
		"id": 7006,
		"name": "",
		"description": "A small band of Rebels unload the munitions from your ship. “Thank you, friend,” says their leader, “you have done the Rebellion a great service, one which we will not soon forget.”"
	},
	{
		"id": 7007,
		"name": "",
		"description": "A group of dockworkers unloads the shipment of <CT> from your cargo bay."
	},
	{
		"id": 7017,
		"name": "",
		"description": "A representative of the government of <RST> thanks you for eliminating the pirate menace, and pays you a healthy sum."
	},
	{
		"id": 7018,
		"name": "",
		"description": "“Well done!” says your Rebel contact. “We will certainly remember this in the future; we may have further use for your services.”"
	},
	{
		"id": 7019,
		"name": "",
		"description": "“Thank you, thank you!” says the local spaceport official. “You have saved our system from domination by pirates. Consider these credits a token of our good will.” "
	},
	{
		"id": 7020,
		"name": "",
		"description": "A Rebel officer thanks you heartily. “My friend, you have done us a great service today, one which we will not soon forget. We could use more pilots like you!”"
	},
	{
		"id": 7021,
		"name": "",
		"description": "The passengers of the ill-fated <SN> bid you farewell as they exit your ship... after paying you a substantial reward, of course."
	},
	{
		"id": 7022,
		"name": "",
		"description": "You are paid a small fee for salvaging the ore from the disabled convoy."
	},
	{
		"id": 7023,
		"name": "",
		"description": "“Thanks for the escort,” says the freighter captain. “The <RST> dockmaster will give you your payment.”"
	},
	{
		"id": 7024,
		"name": "",
		"description": "“Most interesting,” says your contact. “Your sensor logs report that you detected an Astex Mining Industries freighter passing through our space. We will soon call on you again, once we have more fully analyzed your sensor data. Meet me in the spaceport bar when you are ready.”"
	},
	{
		"id": 7025,
		"name": "",
		"description": "“Welcome back!” the official greets you. “We are all glad you made it back in one piece. The fact that Astex is so heavily guarding an ordinary mining colony indicates that there is something going on there that they don’t want us to find out about. We are also confused as to why the Astex interceptor pilots were flying Confederation patrol ships! Please meet me in the spaceport bar for the details of your next assignment.”"
	},
	{
		"id": 7026,
		"name": "",
		"description": "A crew of workers unloads the ore samples from your ship’s cargo bay. “Excellent work,” says your contact. “When we are finished analyzing these samples, we will call on you again. Meet me in the spaceport bar for further instructions.”"
	},
	{
		"id": 7027,
		"name": "",
		"description": "“Astex knows we know about their operation now,” says the official. “We have also finished analyzing the elements in the ore samples you brought back for us. It appears that the waste materials are the byproducts of a weapons manufacturing process, as there are several exotic compounds in the mixture. One of them is trioctonethaleneium, a material used only in the booster stages of Confederation solid-fuel missiles. We surmise that, somewhere deep within the mines of New Providence, the Confederation is operating a secret weapons lab. Please meet me in the bar for your final assignment.”"
	},
	{
		"id": 7028,
		"name": "",
		"description": "A trio of Diphidian agents takes the priceless data files from you. They also pay you an astronomical sum for your loyalty and courage!"
	},
	{
		"id": 7029,
		"name": "",
		"description": "You boost your ship on a suborbital trajectory to a prearranged meeting place on the farside of <DST>. There, a group of shady characters unloads the <CT> from your cargo bay. You collect your payment and return to the spaceport."
	},
	{
		"id": 7030,
		"name": "",
		"description": "The environmental engineers exit your ship after paying you the fee of 12,000 credits."
	},
	{
		"id": 7031,
		"name": "",
		"description": "“Thank you, thank you!” says the local spaceport official. “Consider these credits a token of our good will.” "
	},
	{
		"id": 7033,
		"name": "",
		"description": "“Well done!” says the Confederation spymaster. “Now that we know where the Rebels are building their forces, we can mount a preemptive strike and foil their efforts.” He pays you a hefty reward and leaves to catch the next military shuttle to Navy Central. "
	},
	{
		"id": 7034,
		"name": "",
		"description": "A woman approaches you and hands you a package. “Thank you, friend,” she says before leaving. It is only after you open the package and find the payment for your interdiction mission hidden inside do you realize that the woman was another Rebel operative. They seem to be everywhere these days..."
	},
	{
		"id": 7035,
		"name": "",
		"description": "“In the past few years,” continues the garrison commander, “our scientists have made great strides in subspace interference technology, and recently we completed construction of our first prototype cloaking device. Given the sensitive and extremely important nature of this mission, we’ve decided to install it in your ship. It should be ready to go by the time you’re ready to depart on the next leg of your mission. Meet me in the spaceport bar when you’re all set to leave.”"
	},
	{
		"id": 7037,
		"name": "",
		"description": "Major Davies and his men exit your ship after thanking you for safe passage to and from Sol. The Rebel liason, after carefully safeguarding the stolen data, informs you of your payment: “In addition to the small fortune that we’ve put into your bank account, we’ve decided to let you keep the prototype cloaking device. We hope you will continue to use it in a manner which will aid the Rebellion in its fight against the Confederation.”"
	},
	{
		"id": 7038,
		"name": "",
		"description": "“Ah, finally someone has arrived to check up on us,” says the head of the <RST> research facility as he approaches you in the base’s hangar. “The Rebels knocked out our primary communications array, and we’ve been unable to make reports to the Confederation. Unfortunately, the Rebels got away with a prototype of a new weapon and all of our data on it. We’ll have more information for you soon - meet me in the bar when you’re finished in the hangar.” He hurries off to oversee repairs of the facility."
	},
	{
		"id": 7039,
		"name": "",
		"description": "There’s a message from your Confederation contact waiting for you in the spaceport’s comm center. “The bounty hunters you encountered were probably sent by the Rebellion to prevent you from following the stolen weapons convoy,” his image says. “It seems to have worked, as they have escaped, for now. We are working on locating them again - there should be an operative waiting for you in the spaceport bar.”"
	},
	{
		"id": 7040,
		"name": "",
		"description": "“Thankfully you eluded the cruiser Renegade,” says the Confederation operative who meets you in the bar. “But the Rebels have used the opportunity to escape our grasp yet again. Soon we will have a fix on their current location - meet me here again soon.”"
	},
	{
		"id": 7041,
		"name": "",
		"description": "“Greetings,” says the Confederation’s agent on <RST>, after identifying himself with the proper password. “I have been authorized to tell you a little bit more about the weapon you’re pursuing - it’s called a particle beam cannon, and it has the potential to turn the tide in the war against the Rebellion. Its recovery is of the utmost importance to Confederation High Command. Meet me here again soon for further instructions.”"
	},
	{
		"id": 7042,
		"name": "",
		"description": "“Well done!” the Confederation garrison commander of <RST> tells you. “You have returned the stolen particle beam to the Confederation. As a token of our gratitude, we wish for you to have the prototype. Your ship can be our first operational test of this new weapon. Meanwhile, our shipwrights will begin work on a new class of heavy cruisers that will be armed with this weapon.”"
	},
	{
		"id": 7043,
		"name": "",
		"description": "A Confederation officer accepts the documents you brought to <RST>. “The Confederation thanks you, captain,” he says. “This service will not go unnoticed by my superiors - we may have additional work for you in the future.”"
	},
	{
		"id": 7044,
		"name": "",
		"description": "A Rebel officer accepts the parcels you brought to <RST>. “The Rebellion thanks you, captain,” he says. “This service will not go unnoticed by my superiors - we will certainly have additional work for you in the future.”"
	},
	{
		"id": 7045,
		"name": "",
		"description": "A couple of Starbound Shipping employees unload the parcels from your ship’s cargo bay. “Thanks for the help,” one of them says. “We’ll probably have work like this for you to do in the future, so keep your ears open, okay?”"
	},
	{
		"id": 7046,
		"name": "",
		"description": "The Starbound rep on hand to meet you at the <RST> spaceport looks relieved to see that you managed to get the documents to their destination on time. “That’s twice you’ve saved us from financial loss,” he says. “We’ll definitely be calling on your services in the future.”"
	},
	{
		"id": 7047,
		"name": "",
		"description": "The Starbound Shipping dockworkers are glad to see you as they unload the shipment of uridium from your cargo bay. “Any time you need a job,” says one of them, “don’t hesitate to come looking for a Starbound rep!”"
	},
	{
		"id": 7048,
		"name": "",
		"description": "The captain of <SN> approaches you as you exit your ship. “Thanks for the escort, captain,” he says. “Without you, those ConEx boys would have turned me into space dust.”"
	},
	{
		"id": 7049,
		"name": "",
		"description": "You are given your payment with gratitude. “Hopefully ConEx will take this as a warning to stay out of the <RSY> system!” you are told."
	},
	{
		"id": 7050,
		"name": "",
		"description": "“Thanks for the ride,” says one of the engineers as the group steps off your ship and into the small, dingy spaceport. “In case you’re wondering, we’re environmental engineers, and we’re planning on terraforming this planet. I think the project foreman has need for another merchant captain - he’s probably in the bar right now.”"
	},
	{
		"id": 7051,
		"name": "",
		"description": "“Thanks for the cargo run,” says the project foreman as he hands you a fresh creditchip. “I’ll look for you in the bar if we have more work for you to do.”"
	},
	{
		"id": 7052,
		"name": "",
		"description": "“We appreciate the help you’ve given us with our operation,” says the terraforming project foreman as he gives you another payment. “If we ever need your help again, I’ll look for you in the Turin spaceport bar, all right?”"
	},
	{
		"id": 7056,
		"name": "",
		"description": "“Greetings, captain,” says the Rebel officer who meets you at <RST>’s planetside spaceport. “We’re disappointed that you didn’t solve the mystery of the disappearing ships, but we weren’t really expecting to have the answer this soon. We’ve got another plan - meet me in the bar in a couple hours and I’ll give you your next assignment.”"
	},
	{
		"id": 7057,
		"name": "",
		"description": "“Welcome back,” says your Rebel briefier. “That’s two patrols now you’ve done for us in that sector of space, and twice you’ve come up empty. Aside from the usual pirate and Confed activity, that sector is as quiet as usual... it’s very strange. We have an idea, though - meet me in the bar in a few hours and I’ll tell you all about it.”"
	},
	{
		"id": 7058,
		"name": "",
		"description": "Talmadge Renyolds thanks you personally as he exits your ship. “Without you,” he says, “I would not be able to convey my important information to the High Command. Thank you, captain. Someone will meet you in the bar with further orders.”"
	},
	{
		"id": 7059,
		"name": "",
		"description": "Admiral Davies himself is waiting for you at the spaceport. “If this data confirms my hunch,” he says, “then we’re in deep trouble.” I’ll meet you in the bar when I and my staff have had a chance to go over the information.”"
	},
	{
		"id": 7060,
		"name": "",
		"description": "“I’ve got some good news for once,” says Admiral Davies as you land. “Now that we’ve located the aliens, we can cut them off before they can reach one of the outer colonies or Fringe worlds. Meet me in the bar in one hour - I think I’ll have some help scraped up for you by then.”"
	},
	{
		"id": 7061,
		"name": "",
		"description": "The scene at the <RST> spaceport is one of jubulation and wild celebration. “You did it!” shouts Admiral Davies. “Captain, we don’t know how to thank you enough. However...” he winks, “I have managed to persuade High Command to divert 10 million credits into your bank account. And if that’s not enough, they’re also willing to let you purchase ships from our shipyard facility here on <RST> - you’ll be the only merchant captain with your own Rebel cruiser!” he chuckles. “Again, on behalf of the Rebellion and the human race, you have my sincerest thanks.”"
	},
	{
		"id": 7062,
		"name": "",
		"description": "“Welcome to <RST>,” says your contact at the Confed naval base there. “Obviously, you didn’t solve the mystery of the disappearing ships, but I’m sure we’ll figure out the cause soon. We have another mission for you coming up - meet me in the spaceport bar for further orders.”"
	},
	{
		"id": 7063,
		"name": "",
		"description": "“There seems to be something important going on,” says the anonymous Confederation communications officer who meets you in the landing bay. “There’s a priority-one message waiting for you in the spaceport bar.”"
	},
	{
		"id": 7064,
		"name": "",
		"description": "“Thanks for saving my bacon on <DST>, friend,” agent Sheridan tells you. “Another minute and I’d have been space toast. I need to give a briefing for the Joint Chiefs in a minute, but I’m sure they’ll want to talk to you next. Just wait in the bar and I’ll make sure someone comes to get you.”"
	},
	{
		"id": 7065,
		"name": "",
		"description": "“Well done!” Admiral Sykes greets you as you exit your ship. “We now know what we’re dealing with - an alien battlecruiser that was missing and presumed destroyed, which we think has been hiding out on the edge of explored space since the end of the War. We’re throwing together whatever ships we can to fight this alien menace - I’ll meet you in the bar when I know more.”"
	},
	{
		"id": 7066,
		"name": "",
		"description": "The entire spaceport is buzzing with the news of your victory. Admiral Sykes makes sure to congratulate you. “We can’t thank you enough, captain!” he shouts, shaking your hand warmly. “However, I will personally see to it that you receive adequate compensation for your valiant efforts, as well as the services of the Terran Naval Shipyards on Luna; I’ll make sure you’ll be able to purchase your own Confed warships. Again, on behalf of the entire Confederation, I thank you!”"
	},
	{
		"id": 7071,
		"name": "",
		"description": "The courier captain thanks you for the escort, and pays you the 25,000 credits as promised."
	},
	{
		"id": 7072,
		"name": "",
		"description": "“Very well done,” says the <RST> port governor as you are once more dragged to his office. “The Confeds didn’t know what hit ’em. I still don’t trust you, but at least you’ve renounced your loyalty to the Confederation. For that, we’re going to erase your criminal record in all Rebel systems.” There is a long pause. “Welcome to the Rebellion, <PN>...”"
	},
	{
		"id": 7073,
		"name": "",
		"description": "You guide your ship into port and quickly offload your cargo.  You meander into the local shipyard facility and lay down the facts. The foreman of the ship construction yard, gleeful at your discovery, offers to buy the contents of your holds for one million credits.  Furthermore, he assures you that if you ever need one of his manufactured Kestrels, he’ll knock over 20% off the Confeds’ regular price.  With a quick handshake and a knowing smile, you depart from his office."
	},
	{
		"id": 7075,
		"name": "",
		"description": "Rebel dockworkers quickly unload your precious cargo, stowing them in a nearby warehouse.  Their supervisor approaches you to inform you that if you are interested in helping to relocate the weapons, you should meet his superior in the bar."
	},
	{
		"id": 7076,
		"name": "",
		"description": "The weapons are offloaded from your ship as soon as you touch down at the <DST> starport.  A Rebel officer delivers your pay and reminds you that Clotho Prime still has plenty of weapons to distribute around the galaxy."
	},
	{
		"id": 7077,
		"name": "",
		"description": "You maneuver your ship low over the uninhabited plains of <DST> and unceremoniously dump your cargo.  As you bring your ship to a standstill several kilometers away, you reflect upon the wonderful stench that now fills your cargo holds..."
	},
	{
		"id": 7078,
		"name": "",
		"description": "Crowds of the sick and wounded burst forth from their homes in a desperate attempt to find their place in line as your ship descends from the atmosphere.  Medical workers offload your cargo and begin distributing remedies immediately, and <DST>’s leader personally thanks you for your efforts as he presents you with a handsome sum of 50,000 credits."
	},
	{
		"id": 7079,
		"name": "",
		"description": "The civilians’ appointed leader thanks you profusely as he disembarks. “The Confederation will remember your services,” he says, while handing you a credit chip worth 50,000 credits."
	},
	{
		"id": 7080,
		"name": "",
		"description": "The civilians disembark hurriedly.  Their leader approaches you slowly.  “The Rebellion will remember your services,” he says, while handing you a credit chip with 50,000 credits on it.  He departs quickly, giving you a quick pat on the back, leaving you to explore the planet on your own."
	},
	{
		"id": 7081,
		"name": "",
		"description": "Your friend deftly maneuvers his starship into port near you.  He disembarks with a grin on his face.  “That worked wonderfully.  I even had time to get the mechanics at Darkstar to work on my ship.  Look, pal, you've saved my life and my job.  Here...”  He hands you a credit chip worth 70,000 credits.  “That’s all I have on me right now.  Believe me, I’d give you millions if I had the money.  Look, I’ll put in a recommendation for you at United Galactic headquarters out at Tabletop.  They’ve got some well-paying courier jobs to offer, if that’s the kind of thing you like.”"
	},
	{
		"id": 7082,
		"name": "",
		"description": "“Wonderful!  You’re off to a great start with our company.  Whenever we need your help, we’ll contact you through our network of mission computers.”  You are soon approached by another UGE employee who introduces himself as Benedict Strauss.  He offers some advice:  “Remember to check your map before accepting a mission, as you may be too far away from your destination to meet the short deadlines, and many customers can hold grudges against our employees.  Again, one or two lost shipments doesn’t matter;  it’s a fact of space travel.  Oh, and you can pick up a UGE uniform downstairs.”"
	},
	{
		"id": 7083,
		"name": "",
		"description": "Dockworkers dressed in United Galactic uniforms promptly arrive at the landing pad to unload your cargo.  They disappear into a dock warehouse with a quick nod, and you stroll over to the UGE offices to collect your pay."
	},
	{
		"id": 7089,
		"name": "",
		"description": "As soon as your ship comes to a standstill at the dock, you begin to offload your cargo.  As soon as you announce the sale, you are immediately surrounded by at least a dozen interested parties.  After a quick round of auctioning and a few minor brawls, you sell the goods for 800,000 credits.  After giving the port authorities 50,000 credits to keep their mouths shut, you go to the nearest subspace vidphone to contact Strauss.  “Good work,” he says.  “The rest is up to us.  That wasn’t so bad, was it?”  With a quick grin, he terminates the connection, leaving you to find your way out of one of the less attractive areas of the <DST> spaceport."
	},
	{
		"id": 7090,
		"name": "",
		"description": "As you pull your ship into the docking area, you are immediately besieged by United Galactic officials.  Four blasters are pointed at your head, and you raise your hands in surrender.  Chris Richards himself steps forward.  “I’m disappointed in you, <PN>.  I put my trust in you based on a good recommendation, but it appears that it was unfounded.  You are hereby relieved of your duties as an employee of United Galactic Express.  As for your partners in crime, they resisted arrest by Confed police and were... dealt with.  As for you, just don’t even think about showing your face around our offices again.”"
	},
	{
		"id": 7091,
		"name": "",
		"description": "You dock at the port, deliver your cargo, and accept your payment.  The UGE office presents a message to you from Chris Richards:  “Thanks again for your services, and welcome aboard.  Glad to have you back.”"
	},
	{
		"id": 7092,
		"name": "",
		"description": "The Confederation commander commends your valiant efforts as the spy is delivered into the hands of the Confeds.  The officer, obviously pleased, thanks you for your service to the confederation and rewards you with a handsome sum of 40,000 credits.  He says, “Meet me in the bar in half an hour if you are interested in further missions.”"
	},
	{
		"id": 7093,
		"name": "",
		"description": "The Confederation officer is duly impressed.  “This report will be most helpful in the coming days.  The Jericon Corporation, an independent manufacturer that supplies the Confederation, has been secretly supporting the Rebellion via a large number of interconnected trade routes.  The anomalous readings detected by our spies were the result of an attempt on the part of the Jericon Corporation to mask the lidar signature of their fleet.  We plan to intercept as many of these shipments as possible in an effort to cut off Rebel supplies and punish the Jericon Corporation.  Be sure to stop by Confederation planets frequently to find out where, when, and how you can help us.”"
	},
	{
		"id": 7094,
		"name": "",
		"description": "“Thank you for your efforts on our behalf,” says the admiral who personally visits you as you disembark.  “Your skills as a pilot have done the Confederation a great service today.  Be sure to check back with us often, <PN>, as I’m sure there are many more convoys for you to track down.”"
	},
	{
		"id": 7096,
		"name": "",
		"description": "You breathe a sigh of relief as the containers of industrial toxins are carefully offloaded from your ship.  You proceed to the company vault, where you are paid a handsome sum of 35,000 credits."
	},
	{
		"id": 7097,
		"name": "",
		"description": "Once again, the chemicals are offloaded from your ship. “Just in time,” says the man in charge of the team of workmen. “The Confederation has just been hit hard by Rebel forces, and many weapons manufacturers around the galaxy are shipping their weapons. If we need your services we will call on you again.”"
	},
	{
		"id": 7098,
		"name": "",
		"description": "Orbital bombardments cause the landing pad to buckle as you offload your cargo.  With a quick nod and the promised compensation, the workers recede into the port warehouses with their supplies, leaving you to fend for yourself."
	},
	{
		"id": 7099,
		"name": "",
		"description": "You are greeted by the Rebel officer and a tall assistant as you maneuver your starship onto <RST>’s landing pad.  “Thanks, <PN>,” says the assisant as he downloads your sensor data.  “I’m sure we’ll be calling on your services again in the future.”"
	},
	{
		"id": 7100,
		"name": "",
		"description": "“Well done!” says your Confederation contact. “The destruction of the traitors on the <SN> will send a clear message to others who are being seduced by the Rebellion. With the help of brave patriots like you, <PN>, we will soon root out these subversives!”"
	},
	{
		"id": 7101,
		"name": "",
		"description": "A Confederation operative meets you at the spaceport. “Excellent work, captain,” she says. “The loss of that convoy will mean severe parts and fuel shortages for the Rebellion in the next week or two - congratulations, you have done the Confederation a great service today.” She hands you a credit chip and walks away."
	},
	{
		"id": 7102,
		"name": "",
		"description": "“Thank you, Captain,” the Rebel officer says. “The <PSN> will always be welcome in this system. The spy had even more sensitive information than we first thought. If you’re willing to continue working for us, meet me in the bar.”"
	},
	{
		"id": 7103,
		"name": "",
		"description": "“Thanks for the ride, Captain,” the SEAL commander says. “Meet me in the bar if you wish to continue this little adventure. The rest of the mission will probably be dangerous, but I’m sure the <PSN> can handle it.”"
	},
	{
		"id": 7104,
		"name": "",
		"description": "“I’m sorry about the 'Feds, Captain,” apologizes the SEAL commander. “I had no idea that this scientist knew so much. They’re on to us now, though. I hope that <PSN> is as fast as you say she is. You better have your laser sights aligned, too. The rest of this mission is going to be a hell of a ride. I’d like to debrief this scientist first, but it’s obvious the ’Feds know we're on to them. We’ll have to get to the Outpost first and hope they don’t blow it to bits while we’re still on board. We’ll meet you in the bar.”"
	},
	{
		"id": 7105,
		"name": "",
		"description": "“Captain... I don’t know what to say,” the Rebel officer says. “The story of your bravery and that of the crew of the <PSN> will be told for many years. The data that you helped us recover is still being analyzed, but we may have hit the jackpot. There are preliminary plans for several new weapon systems that the Confederation has been working on. These should help us to even the playing field a little. I’m sure you’ll find your reward suitable. Thank you, again. Don't forget to look us up if ever you need more work.”"
	},
	{
		"id": 7106,
		"name": "",
		"description": "“We owe you again, Captain,” the Rebel officer says. “Not only did we get confirmation of the facility, but the SEAL team was able to set delayed activation charges at the facility.” He shows you a small transmitter device and inputs a command to the device. The officer smiles, “I just set off the devices via a coded, subspace transmission. That should set the Confederation back a few years.” He calls over the servbot and orders another round of drinks."
	},
	{
		"id": 7107,
		"name": "",
		"description": "“We're getting in the habit of thanking you, Captain,” the Rebel officer says with a smile. “The ‘weapon’ turned out to be a modified, longer-range version of a standard space tug’s tractor beam. We’re not sure why the Confeds were considering it an offensive weapon, so we’re going to let you perform an operational evaluation of it for us. We’ll install it on your ship - maybe you’ll find a suitable combat use for it.”"
	},
	{
		"id": 7108,
		"name": "",
		"description": "Lucas wakes up and strides off your ship. Even in his tattered robes you realize he looks like a leader. “Thank you for the safe trip, my friend,” he says. “You are indeed the excellent pilot we were told you were.  My group could use your services.  Next time you are in the Sirius system stop by the bar on Sirius Station. One of my group is always there.  Just ask for me.”  Then Lucas slips into the crowd and disappears."
	},
	{
		"id": 7109,
		"name": "",
		"description": "The dark haired man in the robes meets you at the docking facility. He takes the card, puts it in a reader, and quickly scans it. “It’t just as we feared,” he says. “The pirates are starting to unite under a new leader.” He shows you the screen, with a photo of a man and a short bio displayed on it. “We’ve known for a few weeks that the pirates are preparing for something big. I will relay this information to Lucas...  He may need your help on this. He is on Dune in the Arrakis system right now.”"
	},
	{
		"id": 7110,
		"name": "",
		"description": "Lucas meets you as you open the hatch to your ship. The young man that you rescued, who you learned on the short trip to <RST> was Lucas’s son Joseph, shakes his father’s hand warmly.  “I thought I went to rescue an agent of yours,” you exclaim with anger in your voice. Calmly Lucas answers you, “You did. I wouldn’t ask any of my agents to do things that I and my family wouldn’t do as well. You see, we are all members of the Artemis Group, my family and I. Meet me again in the bar on New Istanbul in a few days.”"
	},
	{
		"id": 7111,
		"name": "",
		"description": "As you land, Lucas steps from the crowd and greets you. After letting him know that his son arrived safely at <DST>, he tells you about his meeting with a group of representatives from the militias of many of the nearby systems. “It did not go well at all, my friend,” he says. “No one believes the pirates can unite, and even if they do they would not be seen as a critical threat. I am afraid they are wrong.” Lucas invites you to the bar to discuss his new plan."
	},
	{
		"id": 7112,
		"name": "",
		"description": "As you dock, Joseph approaches you. You give him his father’s message. “Good,” he says. “We have determined that the pirates are not ready for a fight quite yet. They are not coordinated as a group, so this is the time to strike. Come on into the bar and let me buy you one last drink before we go into battle.”"
	},
	{
		"id": 7113,
		"name": "",
		"description": "Back in the bar, Joseph and Lucas buy you one last synthale. “It looks like Nar Akasi was somewhere in that fleet of pirates,” Lucas informs you, “so our immediate work here is done. But we will be back again, my friend, whenever the fragile balance of powers in this galaxy is threatened. Until we meet again, <PN>...” They hand you a credit chip and walk out of the bar, disappearing quickly into the crowd."
	},
	{
		"id": 7114,
		"name": "",
		"description": "The Confederation officer is waiting for you at the landing platform. “Excellent work!” he says, as he hands you your payment. “The Rebels’ laughable attempt to convert a bulk freighter into a viable escort vessel has failed miserably today. We will contact you again if we have any need for your services in the future.”"
	},
	{
		"id": 7115,
		"name": "",
		"description": "“Excellent work,” says your contact. “Confederation freighters can now be routed through the <RSY> system with no fear of Rebel incursions.” He hands you a credit chip and then leaves."
	},
	{
		"id": 8026,
		"name": "",
		"description": "You securely dock your ship to the stricken freighter’s airlock, cut your way through the hull, fight your way to the cargo bay, and retreive the ore samples from this ship. Mission accomplished! Return to <RST> for further instructions."
	},
	{
		"id": 8035,
		"name": "",
		"description": "The commander of the Rebel garrison on <RST> greets you at the spaceport. “We’re loading the special-ops team’s gear onto your ship, and they should be ready to leave immediately” he says. “Because Confederation security in the Sol system is so tight, we’ve also decided to give you a very special addition for your ship.”"
	},
	{
		"id": 8036,
		"name": "",
		"description": "Major Davies, the leader of the special-ops team, bids you farewell as his men exit your ship. “We’ve arranged passage, with the help of some forged identification, on the next supply shuttle to Mars, but we can’t get out of the Sol system without your help. We’ll meet you in the Aerobrake Bar on Mars in two days. Trust me, when we get back to Rebel space, your payoff will be well worth the risk.” He steps out of your ship and seems to melt into the shadows of the spaceport hangar."
	},
	{
		"id": 8042,
		"name": "",
		"description": "“We’re all very disappointed,” says the commander of the Confederation garrison. “The recovery of the particle beam would have meant the end of the Rebellion. As it is, they may have transmitted enough data to their research facility for them to be able to build their own particle beams in a few years, which would be most unfortunate indeed.”"
	},
	{
		"id": 8047,
		"name": "",
		"description": "The uridium ore is quickly loaded into your ship."
	},
	{
		"id": 8051,
		"name": "",
		"description": "A group of dockworkers loads the terraforming equipment onto your ship."
	},
	{
		"id": 8052,
		"name": "",
		"description": "The volunteer colonists file into your ship, ready for the journey to <RST>."
	},
	{
		"id": 8054,
		"name": "",
		"description": "A group of dockworkers loads the <CT> onto your ship."
	},
	{
		"id": 8059,
		"name": "",
		"description": "The curator of the Great War archives division of the <DST> space museum personally transfers the requested information to your ship’s data banks. “Good luck, my friend,” he says, “I hope this information proves to be of some use on <RST>.”"
	},
	{
		"id": 8064,
		"name": "",
		"description": "A running firefight is taking place on the spacport landing pad. A man with a laser pistol - presumably agent Sheridan - escapes his pursuers’ fire and dives into your ship’s entry port. “Let’s go!” he shouts. “We don’t have any time to waste!”"
	},
	{
		"id": 8075,
		"name": "",
		"description": "Using directions provided by the Rebellion, you quickly locate the weapons cache.  A small Confed transport shuttle is currently loading weapons from the site. Wielding your blaster and spacesuit to protect you from the harsh atmosphere, you run toward the shuttle, quickly disarming the two workers in the shuttle. Without further delay, the rest of the weapons are loaded into your ship, and you breathe a sigh of relief as you return to your ship without any of the infamous acid burns on your skin."
	},
	{
		"id": 8079,
		"name": "",
		"description": "A large crowd of civilians files into your ship, some even filling the cargo holds, as soon as your ship touches down.  Their leader reminds you that they are expected at <RST> by <DL>."
	},
	{
		"id": 8080,
		"name": "",
		"description": "Civilians quickly scramble into your ship, filling your living spaces and some of your more comfortable cargo holds.  Their leader reminds you that they are expected at <RST> by <DL>."
	},
	{
		"id": 8092,
		"name": "",
		"description": "As you bring your ship to a halt on the landing grounds, a wiry man approaches you and says under his breath, “Good to see you, finally.  I’ll wait on your ship while you visit the station.  You are safe for the moment, but don’t dally.  The Rebels will catch up with us soon enough.”"
	},
	{
		"id": 8093,
		"name": "",
		"description": "A rotund, unkempt individual approaches you as you arrive in the landing area.  “Rrrm...  I see yer havin’ some data I should be lookin’ at.  Thank ye...  I’ll send ye me findins before yer leavin’ this port.”"
	},
	{
		"id": 8102,
		"name": "",
		"description": "The Rebel spy screams as soon as she’s on board, “Get me back to Palshife... FAST!!!”"
	},
	{
		"id": 8104,
		"name": "",
		"description": "You find and sneak the scientist past the Ruby security forces. “No time for small talk,” the scientist says. “Get me the hell out of here, and I’ll tell you anything you want to know.”"
	},
	{
		"id": 8105,
		"name": "",
		"description": "“GO! GO! GO!,” the SEAL commander screams. “We’ve got the data, now get us the hell out of here!”"
	},
	{
		"id": 8106,
		"name": "",
		"description": "You land on the planet and trasmit the coded message given to you on Palshife with your current coordinates. After several hours, you hear a knock on the hull. “Boy, are we glad to see you,” the SEAL commander says. “We only had about a week’s worth of supplies and oxygen left. It seems I owe you my life this time, Captain. We got the data. Get us back to Palshife.”"
	},
	{
		"id": 8107,
		"name": "",
		"description": "Your boarding party quickly recovers the prototype weapon and returns to stow the device in your hold."
	},
	{
		"id": 8109,
		"name": "",
		"description": "As you land a ragged looking woman approaches you. She hands you a single plastic card with a gold chip embedded in it. “Keep it safe...” is all she says as she walks on by and fades into the mass of people in this gritty docking area."
	},
	{
		"id": 8110,
		"name": "",
		"description": "As you board the ship everyone is glad to see you.  You yell out asking if there are any friends of Lucas on board.  A young man fights through the throng of people and presents himself to you. “I have important information for Lucas.  You have to get me to him immediately.” The two of you board the <PSN>, ignoring the rest of the passengers and crew."
	},
	{
		"id": 8111,
		"name": "",
		"description": "As Joseph leaves your ship he gives you new directions: “My father has traveled to <RST> and is meeting with Rebel leaders to try to secure help against the pirates. Proceed there and meet him - he will give you your payment. In the meantime, I will talk to the Hunters.\""
	},
	{
		"id": 8112,
		"name": "",
		"description": "As Lucas leaves your ship he says, “Thank you for the lift, my friend. Please go to <RST> and tell my son that all is nearly ready. If the militias and Rebels won’t help, then perhaps I will find another here who will.”"
	},
	{
		"id": 9005,
		"name": "",
		"description": "You activate the core-drilling rig and extract <CQ> tons of core samples from the crust of <DST>."
	},
	{
		"id": 9107,
		"name": "",
		"description": "“Unfortunately, you destroyed the weapon, Captain,” the Rebel officer says, shaking his head. “However, at least the ’Feds didn’t get it. Without the weapon, we can’t pay you, though. Thank you for all your assistance.”"
	},
	{
		"id": 10002,
		"name": "",
		"description": "The sign above the door to this spaceport cantina is made of a piece of the heatshield of a 21st-century reentry vehicle. It reads “The Aerobrake.”"
	},
	{
		"id": 10004,
		"name": "",
		"description": "Welcome to The Bunker - the most heavily shielded bar in the Sol system!"
	},
	{
		"id": 10005,
		"name": "",
		"description": "Welcome to the Levo Bar & Grill - home of the best plastiburgers this side of the Gamma Quadrant!"
	},
	{
		"id": 10006,
		"name": "",
		"description": "The sign on the window of the spaceport bar advertises “Real, Old-Fashioned Guinesses.”"
	},
	{
		"id": 10008,
		"name": "",
		"description": "Welcome to The Sandblast, Dune’s local spacebort tavern."
	},
	{
		"id": 10009,
		"name": "",
		"description": "The sign outside the door reads “Welcome to Cloud Nine.”"
	},
	{
		"id": 10010,
		"name": "",
		"description": "Welcome to The Max - Gamorrean Starbursts are only 5 credits on Thursdays!"
	},
	{
		"id": 10011,
		"name": "",
		"description": "Welcome to The Jump Point."
	},
	{
		"id": 10012,
		"name": "",
		"description": "Welcome to the Northstar bar & grill."
	},
	{
		"id": 10016,
		"name": "",
		"description": "Welcome to Pat’s Airlock - Home of the finest chips in the galaxy."
	},
	{
		"id": 10019,
		"name": "",
		"description": "This bar is called The Flatlands. Somehow, you don’t find yourself wondering why."
	},
	{
		"id": 10021,
		"name": "",
		"description": "Welcome to The Refinery - We specialize in petroleum, deuterium, and alcohol, of course!"
	},
	{
		"id": 10022,
		"name": "",
		"description": "Ironically, the bar in New Sahara’s spaceport is named Ocean Breeze."
	},
	{
		"id": 10023,
		"name": "",
		"description": "Welcome to The Drop Zone. Care to try our 2-for-1 special on synthobeer?"
	},
	{
		"id": 10024,
		"name": "",
		"description": "If this tavern is any indication, you can plainly see that while Plateau may be flat, it certainly isn’t boring. Sights and sounds from across the galaxy assault your senses from all directions."
	},
	{
		"id": 10028,
		"name": "",
		"description": "This is your average spaceport bar - dark and dingy, but with the touch of class that comes with serving the pilots of ships that travel to the stars."
	},
	{
		"id": 10031,
		"name": "",
		"description": "This is surely an unremarkable tavern for a planet that’s practically covered with them."
	},
	{
		"id": 10032,
		"name": "",
		"description": "The floors of the Sandstorm Bar & Grill have been polished smooth by the abrasive sand that spacers track in from outside, on the landing pads."
	},
	{
		"id": 10033,
		"name": "",
		"description": "At the Palshife Spaceport Bar, it’s a tradition to raise a glass to friends and aquaintances who have died in combat with the Confederation tyrants."
	},
	{
		"id": 10035,
		"name": "",
		"description": "This spaceport bar is mounted near the top of the air-traffic control tower, providing a spectacular view of the spaceport and the countryside beyond."
	},
	{
		"id": 10036,
		"name": "",
		"description": "The walls of this bar are fairly covered with the residue of all the tall tales that have been told in here."
	},
	{
		"id": 10037,
		"name": "",
		"description": "The bartender at the Zaxted Pub will serve you any drink you want, as long as it’s not synthetic."
	},
	{
		"id": 10039,
		"name": "",
		"description": "This is just another unremarkable bar, on an unremarkable planet. The only thing that’s different is the logo on the napkins. That, and the pretzels are slightly saltier here."
	},
	{
		"id": 10043,
		"name": "",
		"description": "The proprietor, a war veteran, has covered the walls of this bar with old news printouts from the Great War."
	},
	{
		"id": 10045,
		"name": "",
		"description": "The slightly inebriated customers of this spaceport pub invite you in to play Caber Tag... “A real man’s game!”"
	},
	{
		"id": 10046,
		"name": "",
		"description": "The Pot O’ Gold Tavern is covered with pictures of Old Ireland."
	},
	{
		"id": 10048,
		"name": "",
		"description": "Diphidia’s spaceport bar is decorated in a maritime theme, reflecting the planet’s heavy emphasis on ocean-based industry and trade."
	},
	{
		"id": 10049,
		"name": "",
		"description": "This bar is festooned with mountain-climbing paraphernalia; rock-climbing is a popular sport among the cliffs of New Columbia."
	},
	{
		"id": 10053,
		"name": "",
		"description": "This bar is perplexingly decorated with examples of primitive computer technology, though you can’t fathom the reason why."
	},
	{
		"id": 10055,
		"name": "",
		"description": "The Blackthorne Cantina is generally not a good place to bring the kids."
	},
	{
		"id": 10059,
		"name": "",
		"description": "This hole-in-the-wall of a bar is where the bored and tired crewmembers who work for the refinery come after a long shift in the fluid processing facility."
	},
	{
		"id": 10060,
		"name": "",
		"description": "Welcome to the Ursa Minor Bar. Our drink of the day is the Samarium Cobalt Sunset."
	},
	{
		"id": 10062,
		"name": "",
		"description": "The miners and engineers of the Pegasus colony often come here to the Unicorn Tavern to relax after a long shift."
	},
	{
		"id": 10063,
		"name": "",
		"description": "This is a lonely bar on a lonely world. The bartender is glad for the company: the few people who do stop in here each day usually would rather be in a spaceport bar in a more exciting star system... anywhere but Sauron."
	},
	{
		"id": 10064,
		"name": "",
		"description": "The Total Eclipse Bar is, surprisingly, extremely bright inside. You wonder if the powerful halogen lighting in the establishment is a subconscious response to the pervasive darkness outside."
	},
	{
		"id": 10065,
		"name": "",
		"description": "This pub is the spaceport’s premier authentic-German beverage-vending establishment."
	},
	{
		"id": 10068,
		"name": "",
		"description": "The Jayock Tavern is decorated with pictures of strange, mythical creatures from many different planets."
	},
	{
		"id": 10071,
		"name": "",
		"description": "The sign outside originally read “Murphy Spaceport Bar,” but some wag has changed it to read “The School Of Hard Knocks.”"
	},
	{
		"id": 10075,
		"name": "",
		"description": "Welcome to the Tree Hugger Juice Bar. Today’s special is fresh-squeezed alfalfa juice, produced by union labor and poured into\rnon-polluting handcrafted earthenware mugs."
	},
	{
		"id": 10079,
		"name": "",
		"description": "The Buzzbird Bar is a great place to relax, what with all the humming peepers they keep in cages all over the barroom. The employees of the bar wear special earplugs to keep from being lulled into peaceful catatonia while on the job."
	},
	{
		"id": 10080,
		"name": "",
		"description": "The entire 10-meter length of this bar is covered with the hide of a single Banderfrog. Your admire the designers for picking such a durable material with which to decorate this establishment; however, you question their choice of colors."
	},
	{
		"id": 10081,
		"name": "",
		"description": "The spaceport bar on Sirgil III is very quiet... all the action seems to be taking place up in orbit at the Sirgil Starport."
	},
	{
		"id": 10082,
		"name": "",
		"description": "This bar is packed with people. Apparently, business is booming for the shopowners and entrepreneurs of Sirgil Starport, because people from all over the galaxy come here to trade their wares."
	},
	{
		"id": 10084,
		"name": "",
		"description": "This is just another unremarkable spaceport bar, much like all the others you’ve seen in your travels. However, they do seem to mix an especially good vodka and plinkberry juice here."
	},
	{
		"id": 10085,
		"name": "",
		"description": "The dimly lit “Bottom O’ The Bucket” is filled with starborne mercenaries and other remnants of the Lethe-Cydonia war. The bartender looks nervously at you, always keeping one eye on the entrance."
	},
	{
		"id": 10086,
		"name": "",
		"description": "The holovid in the corner of the Lethe spaceport bar is perpetually tuned to one of the Lethe news services, so that the patrons can keep up to date on the progress of the war."
	},
	{
		"id": 10090,
		"name": "",
		"description": "The Eyepatch Tavern is definitely not a place you want to insult drunken pirates in. Or sober ones, for that matter."
	},
	{
		"id": 10093,
		"name": "",
		"description": "The spaceport bar on Ruby is frequented by scientists, engineers, and technicians from the various research facilities housed in nearby structures."
	},
	{
		"id": 10097,
		"name": "",
		"description": "Each member of the insipid band that is attempting to entertain the drunken patrons of this bar seems to be playing his part in a different key from everyone else."
	},
	{
		"id": 10101,
		"name": "",
		"description": "Ah, the Evildrome Boozarama. Built out of the remains of a crashed freighter, this bar is frequented by some of the roughest characters in the galaxy. A starship captain can be shot on sight just for parking his ship on some pirate’s favorite landing pad."
	},
	{
		"id": 10105,
		"name": "",
		"description": "The guy at the next table looks so nasty that you wouldn’t be surprised if he had a wooden leg and an eyepatch. As you glance about uneasily, you become aware of how easy it would be for you to have your throat slit in this place."
	}
];
