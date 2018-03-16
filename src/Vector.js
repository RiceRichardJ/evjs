"use strict";

import Actor from 'Actor';
import Data from 'data';


export default class Vector {

	/**
	 * Vector Constructor. (New)
	 */
	constructor(degrees, magnitude) {
		this.degrees = degrees;
		this.magnitude = magnitude;
	}
	
	/**
	 * Methods. (Per Instance)
	 */
	getX() {
		return this.magnitude * Math.cos(Vector.degToRad(this.degrees));
	};

	getY() {
		return this.magnitude * Math.sin(Vector.degToRad(this.degrees));
	};

	setXY(x, y) {
		this.magnitude = Math.sqrt( x * x + y * y );
		var rad = Math.atan2( -1 * x , y ) + (Math.PI / 2);
		this.degrees = Vector.radToDeg(rad);
	};
	
	/**
	 * Static Functions. (Namespace)
	 */
	static distance(x1, y1, x2, y2) {
		var a = x1 - x2;
		var b = y1 - y2;
		return Math.sqrt( a*a + b*b );
	}
	
	static fixDeg(deg) {
		deg = deg % 360;
		if (deg < 0) { deg += 360; }
		return deg;
	}
	
	static radToDeg(rad) {
		return Vector.fixDeg(rad * 180 / Math.PI);
	}
	
	static degToRad(deg) {
		return (deg * Math.PI / 180.0)
	}
	
	static angleBetween(ship, target) {
		var targetAngle = Vector.radToDeg( Math.atan2(ship.y - target.y, ship.x - target.x) );
			targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = Vector.fixDeg(ship.thrust.degrees);
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);// + 360) % 360;
		
		return targetAngle;
	}
	
	// static sum(v1, v2) {
	// 	console.log("v1x: " + v1.getX() +", v1y: " + v1.getY());
	// 	console.log("v2x: " + v2.getX() +", v2y: " + v2.getY());
	// 	var vn = new Vector(0,0);
	// 	vn.setXY(
	// 		v1.getX() + v2.getX(),
	// 		v1.getY() + v2.getY()
	// 	);
	// 	console.log("vnx: " + vn.getX() +", vny: " + vn.getY());
	// 	console.log("v1: " + JSON.stringify(v1));
	// 	console.log("v2: " + JSON.stringify(v2));
	// 	console.log("vn: " + JSON.stringify(vn));
	// 	return vn;
	// 	//var newDeg =   fixDeg(v1.degrees + v2.degrees);
	// 	//var newMag = v1.magnitude + v2.magnitude;
	// 	//return new Vector(newDeg, newMag);
	// }
	

	// My position and direction/speed of travel.
	// The speed of my projectile
	// Target's position and direction/speed of travel.
	// Projectile will inherit my position and travel + it's speed.
	// With or without inherit inertia?
	static intercept(me, projMag, target) {
		var points = this.internet(
			target.travel.getX(),
			target.travel.getY(),
			projMag,
			me.x,
			me.y,
			target.x,
			target.y
		);

		var targetAngle = Vector.radToDeg( Math.atan2(-1 * points[1], -1 * points[0]) );
		targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = Vector.fixDeg(me.thrust.degrees);
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);
		return targetAngle;
	}
	
	// http://danikgames.com/blog/how-to-intersect-a-moving-target-in-2d/
	// Given: ux, uy, vmag (projectile speed), Ax, Ay, Bx, By
	static internet(ux, uy, vMag, Ax, Ay, Bx, By) {

		// Find the vector AB
		var ABx = Bx - Ax; 
		var ABy = By - Ay;

		// Normalize it
		var ABmag = Math.sqrt(ABx * ABx + ABy * ABy);
		ABx /= ABmag;
		ABy /= ABmag;

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
	
}