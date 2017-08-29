// import Actor as Actor
define(['./Actor', './data', './Vector'], function(Actor, Data, Vector){

	/**
	 * Projectile Class.
	 * Constructor and instance variables.
	 */
	function Proj(type, xPos, yPos, dir) {
		Actor.call(this);
		this.speed  = type.speed * Data.speedModifier;
		this.turn   = type.turn  * Data.speedModifier;
		//this.thrust.magnitude = type.accel * speedModifier;
		this.lifespan = type.lifespan;
		this.born = new Date();// + this.lifetime;
		this.x    = xPos;
		this.y    = yPos;
		this.thrust = new Vector(dir, type.accel * Data.speedModifier);
		//this.thrust.degrees = dir;
		this.travel = new Vector(dir, type.speed);//this.travel.degress = dir;
		this.className = 'Proj';
		this.type = type;
		this.color = type.color;
	}

	/**
	 * Proj extends Actor.
	 */
	Proj.prototype = new Actor();
	Proj.prototype.constructor = Proj;

	return Proj;
});