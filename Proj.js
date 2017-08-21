// import Actor as Actor
define(['./Actor'], function(Actor){

	/**
	 * Projectile Class.
	 * Constructor and instance variables.
	 */
	function Proj(type, xPos, yPos, dir) {
		Actor.call(this);
		this.speed  = type.speed * speedModifier;
		this.turn   = type.turn  * speedModifier;
		//this.thrust.magnitude = type.accel * speedModifier;
		this.lifetime = type.lifetime;
		this.born = new Date();// + this.lifetime;
		this.x    = xPos;
		this.y    = yPos;
		this.thrust = new Vector(dir, type.accel * speedModifier);
		//this.thrust.degrees = dir;
		this.travel = new Vector(dir, 0);//this.travel.degress = dir;
		this.className = 'Proj';
	}

	/**
	 * Proj extends Actor.
	 */
	Proj.prototype = new Actor();
	Proj.prototype.constructor = Proj;

	return Proj;
});