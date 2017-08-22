"use strict";
require(
	['./Actor', './AI', './data', './Proj', './Ship', './Vector', './Sidebar', './Stage', './StarField'],
	function(Actor, AI, Data, Proj, Ship, Vector, Sidebar, Stage, StarField) {

	/**
	 * Globals.
	 */
	var stage;
	var keyPressed = {};
	var keyPrev = {};

	/**
	 * First thing that is run.
	 * Create Stage/Canvas. Set frames per second.
	 * Populate with demo actors.
	 */
	function setup() {
		registerKeyListeners();
		stage = new Stage(document.getElementById("gc"));
		setInterval(update, 1000 / (60 * (Data.speedModifier)));

		// Demo Populate.
		var me    = new Ship(Data.rebelCruiser, 0);
		var planet = new Actor(Data.demoPlanet);
		var dude  = new Ship(Data.rebelCruiser, 1);
		var dude2 = new Ship(Data.rebelCruiser, 2);
		var dude3 = new Ship(Data.rebelCruiser, 3);
		
		planet.x = 0;
		planet.y = 0;
		
		dude.x = 10;
		dude.y = 200;
		
		dude2.y = -200;
		dude3.x = 200;
		
		dude.travel.magnitude = 5;
		dude2.travel.magnitude = 4;
		dude3.travel.magnitude = 6;
		
		stage.actors.push(me);
		stage.actors.push(planet);
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
		
		// Run AI
		for (var i = 2; i < stage.actors.length; i++) {
			AI.go(stage.actors[i], stage.actors[1]);
		}
	}

	/**
	 * Register Key Listeners.
	 */
	function registerKeyListeners() {
		document.addEventListener('keydown', function(e) {
				//console.log(e.keyCode);
				if (e.keyCode == 9) {
					e.preventDefault();
					target();
				}
				//keyPrev[e.keyCode] = keyPressed[e.keyCode];
				keyPressed[e.keyCode] = true;
				
				//console.log("[DOWN] PREV: " + keyPrev[e.keyCode] + ", PRESS: " + keyPressed[e.keyCode]);
		}, false);

		document.addEventListener('keyup', function(e) {
			if (e.keyCode == 9) {
				e.preventDefault();
			}
			//keyPrev[e.keyCode] = keyPressed[e.keyCode];
			keyPressed[e.keyCode] = false;
			//console.log("[UP]   PREV: " + keyPrev[e.keyCode] + ", PRESS: " + keyPressed[e.keyCode]);
		}, false);
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
		if (keyPressed["9"] && !keyPrev["9"]) { // [Tab]
			//keyPrev[e.keyCode] = keyPressed[e.keyCode];
			//target();
		} else {
			
		}
		if (keyPressed["65"]) { // [A]
			autoPilot();
		}
	}
	
	var landed = false;
	function land() {
		var dist = Vector.distance(
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
	
	var targInd = 0;
	function target() {
		targInd = targInd % stage.actors.length;
		console.log("target..." + targInd + stage.actors.length);
		console.log(targInd % stage.actors.length);
		stage.hud.target(stage.actors[targInd]);
		targInd++;
		// for (var i = 0; i < stage.actors.length; i++) {
			// console.log(JSON.stringify(stage.actors[i]));
			// //stage.hud.target(JSON.stringify(stage.actors[i]));
			// stage.hud.target(
				// stage.actors[i].name + "\n" +
				// stage.actors[i].shields
			// );
		// }
	}
	
	$('#modalSpaceport').on('hidden.bs.modal', function() {
		console.log("DEPART, modalSpaceport hidden ");
		// Reset Ship Position
		// Reset Shields, Armor. Refuel. Etc.
		landed = false;
	})
	
	function autoPilot() {
		var ship = stage.actors[0];
		var target = stage.actors[targInd];
		
		var targetAngle = Vector.radToDeg( Math.atan2(ship.y - target.y, ship.x - target.x) );
			targetAngle = ((targetAngle + 180) % 360);
		var currentAngle = Vector.fixDeg(ship.thrust.degrees);
		
		// Normalize angles against ship angle.
		targetAngle  =  (targetAngle - currentAngle);// + 360) % 360;
		currentAngle = currentAngle - currentAngle;
		
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {
				ship.turnRight();
			} else {
				ship.turnLeft();
			}
		}
	}
	
	
	
	
		// /**
	 // * CLASS: Stage.
	 // * Manages Actors(data), and renders them with Canvas.
	 // */
	// function Stage(canvas) {
		// this.cnv    = canvas,
		// this.ctx    = canvas.getContext("2d"),
		// this.actors = [],
		// this.hud    = new Sidebar(this.ctx);
		// this.stars  = new StarField(this.ctx);

		// /**
		 // * Act out and render each Actor.
		 // */
		// this.action = function() {

			// var player = this.actors[0];
			// this.stars.render(player.x, player.y);

			// // renders in backwards order... (FIRST ITEM DRAWN ON TOP.)
			// //for (var i = this.actors.length - 1; i >= 0; i--) {
			// for (var i = 1; i < this.actors.length; i++) {
				// // does this mean suicide would skip the next actor?
				// this.actors[i].act(this.actors);
				// this.render(this.actors[i]);
			// }
			// // Player last = player on top.
			// this.actors[0].act(this.actors);
			// this.render(this.actors[0]);

			// this.hud.render(this.actors);
		// },

		// /**
		 // * Render a given Actor.
		 // */
		// this.render = function(actor) {
			// var img = actor.sprite;
			// if (!img.src) {
				// console.log("NO IMAGE");
				// this.ctx.fillStyle = '#0f0';
				// this.ctx.fillRect(this.x-1, this.y-1, 3, 3);
				// this.ctx.fillStyle = 'white';
				// return;
			// }

			// var player = this.actors[0];

			// this.ctx.save();
			// this.ctx.setTransform(1,0,0,1,0,0);
			// //console.log(actor);
			// //console.log(actor.x +":"+ actor.y);
			// this.ctx.translate(
				// actor.x - player.x + ((stage.cnv.width - 150)  / 2),
				// actor.y - player.y + ( stage.cnv.height        / 2)
			// );

			// var rotation = actor.thrust.degrees + 90;
			// //console.log(rotation);
			// var angleInRadians = rotation * Math.PI / 180;
			// this.ctx.rotate(angleInRadians);

			// this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
			// this.ctx.restore();
		// }
	// };
	
});
