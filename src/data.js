define([], function(){

	/**
	 * "Global" Constants.
	 */
	function Data() {
		this.sMod = 0.025;
		this.aMod = 0.0003;
		this.speedModifier = 0.7;

		// Ship Type.
		this.rebelCruiser = {
			name:    "Rebel Cruiser",
			speed:    200 * 2 * this.sMod,//5.0,
			accel:    280 * 3 * this.aMod,//0.2,
			turn:     3.0 * 1.5, //4.0,
			shields: 5000,
			armor:    800,
			space:    120,
			cargo:     60,
			fuel:     400,
			crew:     100,
			length:   100,
			mass:     100,
			guns:       6,
			turrets:    4,
			cost:   14000000,
			weapons: ["laserCannon", "protonCannon", "neutronCannon"],
			sprite: "content/RebelCruiserSprite.png"
		};

		this.laserCannon = {
			speed: 500  * this.sMod,//1313 * this.sMod,
			accel:  0,// 999000,
			lifespan: 600,
			turn:    0,
			damage: 10,
			delay: 100,
			spread: 10,
			color: '#0f0'
		};
		
		this.protonCannon = {
			speed: 500  * this.sMod,//1313 * this.sMod,
			accel:  0,// 999000,
			lifespan: 600,
			turn:    0,
			damage: 10,
			delay: 100,
			spread: 10,
			color: '#00f'
		};
		
		this.neutronCannon = {
			speed: 500  * this.sMod,//1313 * this.sMod,
			accel:  0,// 999000,
			lifespan: 600,
			turn:    0,
			damage: 10,
			delay: 100,
			spread: 10,
			color: '#f00'
		};

		this.demoPlanet = {
			name: "Demo Planet",
			x: 100,
			y: 100,
			sprite: "images/sprites/Spob 2000.png",
		}
	}

	var dataInstance = new Data();

	return dataInstance;
});