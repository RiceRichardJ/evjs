// import Vector as Vector
define(['./Vector'], function(Vector){

	/**
	 * Any space object.
	 */
	function Actor(spob) {
		this.x = 0.0;
		this.y = 0.0;
		this.travel = new Vector(-90.0, 0.0);
		this.thrust = new Vector(-90.0, 0.0);
		this.speed  = 0.0;
		this.turn   = 0.0;
		this.sprite = new Image();
		this.born   = 0;
		this.lifespan = -1;
		this.className = 'Actor';
		if (spob) {
			this.sprite.src = spob.sprite;
			this.className = 'Spob';
		}
		
	}

	/**
	 * Apply Thrust.
	 */
	Actor.prototype.applyThrust = function() {

		// Travel Vect
		var xVel = this.travel.getX();
		var yVel = this.travel.getY();

		// Thrust Vect
		var xThrustVel = this.thrust.getX();
		var yThrustVel = this.thrust.getY();

		// Sum to find new travel vect.
		var xNewVect = xVel + xThrustVel;
		var yNewVect = yVel + yThrustVel;

		// Apply sum to our travel vect.
		this.travel.setXY(xNewVect, yNewVect);

		// Scale down the speed
		if (this.travel.magnitude > this.speed) {
			this.travel.magnitude = this.speed;
		}
	}

	/**
	 * Apply Travel.
	 */
	Actor.prototype.applyTravel = function() {
		this.x += this.travel.getX();
		this.y += this.travel.getY();
	}

	/**
	 * Act. This is called each frame, for each actor.
	 */
	Actor.prototype.act = function(actors) {
		if (this.lifespan > 0 &&
				(new Date()).getTime() > this.born.getTime() + this.lifespan) {
			console.log("[SUICIDE]");
			actors.splice( actors.indexOf(this), 1 );
			return;
		}
		this.applyTravel();
	}



	return Actor;
});