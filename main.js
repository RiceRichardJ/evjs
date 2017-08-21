"use strict";


require(
	['./Actor', './data', './Proj', './Ship', './Vector', './Sidebar', './StarField'],
	function(Actor, Data, Proj, Ship, Vector, Sidebar, StarField) {

	/**
	 * Globals.
	 */
	var stage;
	var keyPressed = {};

	/**
	 * First thing that is run.
	 * Create Stage/Canvas. Set frames per second.
	 * Populate with demo actors.
	 */
	function setup() {//window.onload = function() {
		console.log("WINDOW.ONLOAD");

		var vect = new Vector(1,2,3);
		console.log(JSON.stringify(vect));
		console.log(JSON.stringify(vect.map));

		console.log(Data);
		console.log(Vector);
		console.log(JSON.stringify(Vector.map));
		console.log("REBEL CRUISER:" + JSON.stringify(Data.rebelCruiser));

		//console.log(Data);

		registerKeyListeners();
		stage = new Stage(document.getElementById("gc"));
		setInterval(update, 1000 / (60 * (Data.speedModifier)));

		// Demo Populate.
		var me = new Ship(Data.rebelCruiser);
		var other = new Actor(Data.demoPlanet);
		var dude = new Ship(Data.rebelCruiser);
		var dude2 = new Ship(Data.rebelCruiser);
		var dude3 = new Ship(Data.rebelCruiser);
		
		other.x = 0;
		other.y = 0;
		
		dude.x = 10;
		dude.y = 200;
		
		dude2.y = -200;
		dude3.x = 200;
		
		dude.travel.magnitude = 5;
		dude2.travel.magnitude = 4;
		dude3.travel.magnitude = 6;
		
		stage.actors.push(me);
		stage.actors.push(other);
		stage.actors.push(dude);
		stage.actors.push(dude2);
		stage.actors.push(dude3);

		// Center me.
		me.x = 100; //me.x = stage.cnv.width / 2;
		me.y = 100; //me.y = stage.cnv.height / 2;

		stage.stars.init(me.x, me.y);
	};

	/**
	 * Run Setup.
	 */
	setup();

	/**
	 * Main Loop.
	 * Read input. Draw output.
	 */
	var paused = false;
	function update() {

		// Don't update if we're landed.
		if ($('#modalSpaceport').hasClass('in')) { return; }

		// Refresh background.
		var c = stage.cnv;
		stage.ctx.fillStyle = 'black';
		stage.ctx.fillRect(0, 0, c.width, c.height);
		stage.ctx.fillStyle = 'white';

		// Read user input.
		controls();

		// Draw output.
		stage.action();

		// WRAP (temporary)
		/*var me = stage.actors[0];
		if (me.x < 0) { me.x = c.width; }
		if (me.y < 0) { me.y = c.height; }
		if (me.x > c.width) { me.x = 0; }
		if (me.y > c.height) { me.y = 0; }*/
		ai(stage.actors[2], stage.actors[1]);
		ai(stage.actors[3], stage.actors[1]);
		ai(stage.actors[4], stage.actors[1]);
	}

	/**
	 * CLASS: Stage.
	 * Manages Actors(data), and renders them with Canvas.
	 */
	function Stage(canvas) {
		this.cnv    = canvas,
		this.ctx    = canvas.getContext("2d"),
		this.actors = [],
		this.hud    = new Sidebar(this.ctx);
		this.stars  = new StarField(this.ctx);

		/**
		 * Act out and render each Actor.
		 */
		this.action = function() {

			var player = this.actors[0];
			this.stars.render(player.x, player.y);

			// renders in backwards order... (FIRST ITEM DRAWN ON TOP.)
			//for (var i = this.actors.length - 1; i >= 0; i--) {
			for (var i = 1; i < this.actors.length; i++) {
				// does this mean suicide would skip the next actor?
				this.actors[i].act(this.actors);
				this.render(this.actors[i]);
			}
			// Player last = player on top.
			this.actors[0].act(this.actors);
			this.render(this.actors[0]);

			this.hud.render(this.actors);
		},

		/**
		 * Render a given Actor.
		 */
		this.render = function(actor) {
			var img = actor.sprite;
			if (!img.src) {
				console.log("NO IMAGE");
				this.ctx.fillStyle = '#0f0';
				this.ctx.fillRect(this.x-1, this.y-1, 3, 3);
				this.ctx.fillStyle = 'white';
				return;
			}

			var player = this.actors[0];

			this.ctx.save();
			this.ctx.setTransform(1,0,0,1,0,0);
			//console.log(actor);
			//console.log(actor.x +":"+ actor.y);
			this.ctx.translate(
				actor.x - player.x + ((stage.cnv.width - 150)  / 2),
				actor.y - player.y + ( stage.cnv.height        / 2)
			);

			var rotation = actor.thrust.degrees + 90;
			//console.log(rotation);
			var angleInRadians = rotation * Math.PI / 180;
			this.ctx.rotate(angleInRadians);

			this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
			this.ctx.restore();
		}
	};

	/**
	 * Register Key Listeners.
	 */
	function registerKeyListeners() {

		document.addEventListener('keydown', function(e) {
				console.log(e.keyCode);
				if (e.keyCode == 9) {
					e.preventDefault();
				}
				keyPressed[e.keyCode] = true;
		}, false);

		document.addEventListener('keyup', function(e) {
			keyPressed[e.keyCode] = false;
		}, false);
	}
	
	/**
	 * AI : ARTIFICIAL INTELLIGENCE : AI : AI-PILOT
	 */
	var count = 0;
	function ai(ship, target) {
		//console.log(Math.round(ship.x) +","+ Math.round(ship.y) +" : "+ Math.round(target.x) +"," + Math.round(target.y));
		
		// given two points, find angle between them.
		/*var opp = ship.y - target.y;
		var adj = ship.x - target.x;
		var targetAngle  = radToDeg(Math.atan(opp/adj)) + 180;		// USE ATAN2!!!
		var currentAngle = fixDeg(ship.travel.degrees);*/

		var targetAngle = radToDeg( Math.atan2(ship.y - target.y, ship.x - target.x) );
			targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = fixDeg(ship.thrust.degrees);

		if (count < 300) {
			//console.log(Math.round(currentAngle) +"->"+ Math.round(targetAngle));
			count++;
		}
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);// + 360) % 360;
		currentAngle = currentAngle - currentAngle;
		
		if (count < 300) {
			//console.log(Math.round(targetAngle % 360));
		}
		
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {
				ship.turnRight();
			} else {
				ship.turnLeft();
			}
		}
		
		//ship.thrust.degrees = targetAngle; //270;
		var dist = distance(ship.x, ship.y, target.x, target.y);
		//console.log("DIST::::: " );
		if (dist < 300) {
			stop(ship);
			/*var rand = 300 * Math.random();
			if (rand < dist) {
				ship.applyThrust();
				console.log("THRUST: "+ dist);
			} else {
				console.log("DRIFT:  "+ dist);
			}*/
			if (dist < 50 && ship.travel.magnitude < 0.5) {
				ship.travel.magnitude = 0;
			}
			return;
		}
		ship.applyThrust();
	}
	
	/**
	 * STOP : STOP : STOP
	 */
	function stop(ship) {
		var targetAngle  = ((fixDeg(ship.travel.degrees) + 180) % 360);
		var currentAngle =   fixDeg(ship.thrust.degrees);
		//console.log("STOP: " + Math.round(currentAngle) +"->"+ Math.round(targetAngle));

		targetAngle  = (targetAngle - currentAngle);// + 360) % 360;
		currentAngle = currentAngle - currentAngle;

		if (Math.abs(targetAngle) > 2) {
			//console.log("TURN");
			if (targetAngle > 0) {
				ship.turnRight();
			} else {
				ship.turnLeft();
			}
			return;
		}
		if (ship.travel.magnitude > 0) {
			//console.log("THRUST");
			ship.applyThrust();
		} else {
			//console.log("DRIFT");
		}
	}

	function fixDeg(deg) {
		deg = deg % 360;
		if (deg < 0) { deg += 360; }
		return deg;
	}
	
	function radToDeg(rad) {
		return fixDeg(rad * 180 / Math.PI);
	}
	function degToRad(deg) {
		return (deg * Math.PI / 180.0)
	}

	/**
	 * Controls: Key Listeners.
	 */
	function controls() {
		var me = stage.actors[0];
		if (keyPressed["37"]) { // left
			me.turnLeft();
		}
		if (keyPressed["38"]) { // up
			me.applyThrust();
		}
		if (keyPressed["39"]) { // right
			me.turnRight();
		}
		if (keyPressed["40"]) { // down
			console.log($('#modalSpaceport').hasClass('in'));
			//if (velocity > 0) { velocity -= thrust; }
			//if (velocity < 0) { velocity = 0; }
		}
		if (keyPressed["32"]) { // spacebar
			me.fire(stage.actors);
		}
		if (keyPressed["76"]) { // [L]
			land();
		}
		if (keyPressed["9"]) { // [Tab]
			target();
		}
		if (keyPressed["65"]) { // [A]
			// Autopilot
		}
	}

	function target() {
		console.log("target...");
		for (var i = 0; i < stage.actors.length; i++) {
			console.log(JSON.stringify(stage.actors[i]));
			stage.hud.target(JSON.stringify(stage.actors[i]));
		}
	}
	
	var landed = false;
	function land() {
		var dist = distance(
			stage.actors[0].x,
			stage.actors[0].y,
			stage.actors[1].x,
			stage.actors[1].y);
		console.log("land: " + Math.round(dist * 100) / 100);

		console.log("speed: " + stage.actors[0].travel.magnitude);

		if (dist < 50 && !landed) {
			if (stage.actors[0].travel.magnitude > 0.5) {
				stage.ctx.font = "9pt Arial";
				stage.ctx.fillText("Moving too fast to land!",10,590);
				return;
			}
			landed = true;
			$("#landButton").click();
		}
	}

	function distance(x1, y1, x2, y2) {
		var a = x1 - x2;
		var b = y1 - y2;
		return Math.sqrt( a*a + b*b );
	}


	$('#modalSpaceport').on('hidden.bs.modal', function() {
		console.log("DEPART, modalSpaceport hidden ");
		// Reset Ship Position
		// Reset Shields, Armor. Refuel. Etc.
		landed = false;
	})

});
