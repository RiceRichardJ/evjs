// import Vector as Vector
define([], function(){

	/**
	 * VECTOR CLASS.
	 * @argument {int} degrees
	 * @argument {int} magnitude
	 */
	function Vector(degrees, magnitude) {
		this.degrees = degrees;
		this.magnitude = magnitude;
	}

	Vector.prototype.getX = function() {
		return this.magnitude * Math.cos(this.degrees * Math.PI / 180.0);
	};

	Vector.prototype.getY = function() {
		return this.magnitude * Math.sin(this.degrees * Math.PI / 180.0);
	};

	Vector.prototype.setXY = function(x, y) {
		this.magnitude = Math.sqrt( x * x + y * y );
		this.degrees = Math.atan2( -1 * x , y ) + (Math.PI / 2);
		this.degrees = this.degrees * 180 / Math.PI;
	};

	return Vector;
});