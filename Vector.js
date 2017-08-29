define(['./Actor', './data'], function(Actor, Data){

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
	
	Vector.sum = function(v1, v2) {
		console.log("v1x: " + v1.getX() +", v1y: " + v1.getY());
		console.log("v2x: " + v2.getX() +", v2y: " + v2.getY());
		var vn = new Vector(0,0);
		vn.setXY(
			v1.getX() + v2.getX(),
			v1.getY() + v2.getY()
		);
		console.log("vnx: " + vn.getX() +", vny: " + vn.getY());
		console.log("v1: " + JSON.stringify(v1));
		console.log("v2: " + JSON.stringify(v2));
		console.log("vn: " + JSON.stringify(vn));
		return vn;
		//var newDeg =   fixDeg(v1.degrees + v2.degrees);
		//var newMag = v1.magnitude + v2.magnitude;
		//return new Vector(newDeg, newMag);
	}
	
//	Vector.intercept = function(myPos, myTrav, projMag, targPos, targTrav) {
	Vector.intercept = function(me, projMag, target) {
		// My position and direction/speed of travel.
		// The speed of my projectile
		// Target's position and direction/speed of travel.
		// Projectile will inherit my position and travel + it's speed.
		// With or without inherit inertia?
		
		//console.log("target travel magnitude : " + target.travel.magnitude);
		
		var points = this.internet(
			target.travel.getX(),
			target.travel.getY(),
			projMag,
			me.x,
			me.y,
			target.x,
			target.y
		);
		console.log("\nPOINTS: " + points + " | VS | targ: " + target.x +","+ target.y + " | VS | ME: " + me.x +","+ me.y);

		// What we're doing is finding the point to aim at relative to US.
		points[0] += me.x;
		points[1] += me.y;
		
		var targetAngle = Vector.radToDeg( Math.atan2(me.y - points[1], me.x - points[0]) );
			targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = Vector.fixDeg(me.thrust.degrees);
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);// + 360) % 360;
		
		return targetAngle;
		
	}
	
	//http://danikgames.com/blog/how-to-intersect-a-moving-target-in-2d/
	Vector.internet = function(ux, uy, vMag, Ax, Ay, Bx, By) {
		console.log("ux: " + ux);
		console.log("uy: " + uy);
		console.log("vMag: " + vMag);
		console.log("Ax: " + Ax);
		console.log("Ay: " + Ay);
		console.log("Bx: " + Bx);
		console.log("By: " + By);
		// Given: ux, uy, vmag (projectile speed), Ax, Ay, Bx, By

		// Find the vector AB
		var ABx = Bx - Ax; 
		var ABy = By - Ay;

		// Normalize it
		var ABmag = Math.sqrt(ABx * ABx + ABy * ABy);
		ABx /= ABmag;
		ABy /= ABmag;
		console.log("ABmag: " + ABmag);
		console.log("ABx: " + ABx + "ABy: " + ABy);

		// Project u onto AB
		var uDotAB = ABx * ux + ABy * uy;
		var ujx = uDotAB * ABx;
		var ujy = uDotAB * ABy;

		// Subtract uj from u to get ui
		var uix = ux - ujx;
		var uiy = uy - ujy;

		// Set vi to ui (for clarity)
		var vix = uix;
		var viy = uiy;

		// Calculate the magnitude of vj
		var viMag = Math.sqrt(vix * vix + viy * viy);
		var vjMag = Math.sqrt(vMag * vMag - viMag * viMag);

		// Get vj by multiplying it's magnitude with the unit vector AB
		var vjx = ABx * vjMag
		var vjy = ABy * vjMag

		// Add vj and vi to get v
		var vx = vjx + vix;
		var vy = vjy + viy;
		
		return [vx, vy];
	}
	
	return Vector;
});