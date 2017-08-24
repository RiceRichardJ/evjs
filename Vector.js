define([], function(){

	/**
	 * Vector Constructor. (New)
	 */
	function Vector(degrees, magnitude) {
		this.degrees = degrees;
		this.magnitude = magnitude;
	}
	
	
	/**
	 * Methods. (Per Instance)
	 */
	Vector.prototype.getX = function() {
		return this.magnitude * Math.cos(Vector.degToRad(this.degrees));
	};

	Vector.prototype.getY = function() {
		return this.magnitude * Math.sin(Vector.degToRad(this.degrees));
	};

	Vector.prototype.setXY = function(x, y) {
		this.magnitude = Math.sqrt( x * x + y * y );
		var rad = Math.atan2( -1 * x , y ) + (Math.PI / 2);
		this.degrees = Vector.radToDeg(rad);
	};
	
	
	/**
	 * Static Functions. (Namespace)
	 */
	Vector.distance = function(x1, y1, x2, y2) {
		var a = x1 - x2;
		var b = y1 - y2;
		return Math.sqrt( a*a + b*b );
	}
	
	Vector.fixDeg = function(deg) {
		deg = deg % 360;
		if (deg < 0) { deg += 360; }
		return deg;
	}
	
	Vector.radToDeg = function(rad) {
		return Vector.fixDeg(rad * 180 / Math.PI);
	}
	
	Vector.degToRad = function(deg) {
		return (deg * Math.PI / 180.0)
	}
	
	Vector.angleBetween = function(ship, target) {
		var targetAngle = Vector.radToDeg( Math.atan2(ship.y - target.y, ship.x - target.x) );
			targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = Vector.fixDeg(ship.thrust.degrees);
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);// + 360) % 360;
		
		return targetAngle;
	}
	
	Vector.intercept = function(myPos, myTrav, projMag, targPos, targTrav) {
		// My position and direction/speed of travel.
		// The speed of my projectile
		// Target's position and direction/speed of travel.
		// Projectile will inherit my position and travel + it's speed.
		// With or without inherit inertia?
	}
	
	return Vector;
});