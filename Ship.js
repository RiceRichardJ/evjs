// import Actor as Actor
define(['./Actor', './data'], function(Actor, Data){

	/**
	 * SHIP CLASS.
	 * @argument {ShipType} type
	 */
	function Ship(type) {
		Actor.call(this);
		this.className = 'Ship';
		/*this.sup = new Actor();
		this.x = this.sup.x;
		this.y = this.sup.y;
		this.travel = this.sup.travel;
		this.thrust = this.sup.thrust;
		this.speed = this.sup.speed;
		this.turn = this.sup.turn;
		this.sprite = this.sup.sprite;
		this.born = this.sup.born;
		this.lifespan = this.sup.lifespan;*/

		console.log("NEW SHIP!: " + JSON.stringify(this.travel)
			+ JSON.stringify(this.thrust));////////
		//console.log(this.prototype.Actor);


		console.log("BEFORE: " + this.speed);
		this.speed  = type.speed * Data.speedModifier;
		console.log("AFTER: " + this.speed);

		this.turn   = type.turn  * Data.speedModifier;

		console.log("thrust.magnitude.BEFORE: "
			+ this.thrust.magnitude
			+ "," + this.thrust.name);
		this.thrust.magnitude = type.accel * Data.speedModifier;
		console.log("thrust.magnitude.AFTER: "
			+ this.thrust.magnitude
			+ "," + this.thrust.name);

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
	//Ship.prototype = new Actor(); /// THIS IS THE REASON:
	/* The PROTOTYPE (or class definition) of SHIP is being defined with
	a new INSTANCE of ACTOR. In other words, AN INSTANCE IS DEFINING A CLASS
	WHEN A CLASS SHOULD BE DEFINING A CLASS
	AND AN INSTANCE DEFINING AN INSTANCE
	Therefore to fix this...
	Ship.prototype = Actor.prototype;
	But how to create instance variables of super-Actor when sub-Ship is created?
	Call new Actor() inside of the SHIP CONSTRUCTOR!!!!!
	*/
	Ship.prototype.constructor = Ship;

	Ship.prototype.turnLeft = function() {
		this.thrust.degrees -= this.turn;
		//console.log();
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