// import Actor as Actor
define(['./Actor', './data'], function(Actor, Data){

	/**
	 * SHIP CLASS.
	 * @argument {ShipType} type
	 */
	function Ship(type, num) {
		Actor.call(this);
		this.className = 'Ship';
		this.name   = type.name + ":" + num;
		this.speed  = type.speed * Data.speedModifier;
		this.turn   = type.turn  * Data.speedModifier;
		this.thrust.magnitude = type.accel * Data.speedModifier;

			//this.thrust = new Vector(-90.0, type.accel * speedModifier);
		this.shields = 100;
		this.armor   = 100;
		this.mass    = 100;
		this.sprite.src = type.sprite;

		console.log("SPEED: " + this.speed);
	}

	/**
	 * Ship Class extends Actor.
	 */
	Ship.prototype = Actor.prototype;
	Ship.prototype.constructor = Ship;

	Ship.prototype.turnLeft = function() {
		this.thrust.degrees -= this.turn;
	};

	Ship.prototype.turnRight = function() {
		this.thrust.degrees += this.turn;
	};

	var lastFire = new Date().getTime();

	Ship.prototype.fire = function(actors) {
		if (new Date().getTime() > lastFire + 400) {
			lastFire = new Date().getTime();
			//console.log(this.x +","+ this.y +","+this.thrust.degrees);
			actors.push(new Proj(
				laserCannon, this.x, this.y, this.thrust.degrees
			));
			//console.log("[SHOOT]"+this.thrust.degrees);
		}
	};

	// var lastFire = new Date().getTime();
	// class Ship extends Actor {
		// constructor(type) {
			// this.speed  = type.speed * speedModifier;
			// this.turn   = type.turn  * speedModifier;
			// this.thrust.magnitude = type.accel * speedModifier;//this.thrust = new Vector(-90.0, type.accel * speedModifier);
			// this.shields = 100;
			// this.armor   = 100;
			// this.mass    = 100;
			// this.sprite.src = type.sprite;
		// }
		// turnLeft() {
			// this.thrust.degrees -= this.turn;
		// }
		// turnRight() {
			// this.thrust.degrees += this.turn;
		// }
		// fire(actors) {
			// if (new Date().getTime() > lastFire + 400) {
				// lastFire = new Date().getTime();
				// console.log(this.x +","+ this.y +","+this.thrust.degrees);
				// actors.push(new Proj(laserCannon, this.x, this.y, this.thrust.degrees));
				// console.log("[SHOOT]"+this.thrust.degrees);
			// }
		// }
	// }

	return Ship;
});