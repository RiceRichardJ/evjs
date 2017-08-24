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
				console.log(e.keyCode);
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
			me.fire(stage.actors, targInd);
		}
		if (keyPressed["76"]) { // [L]
			land();
		}
		if (keyPressed["65"]) { // [A]
			autoPilot();
		}
		if (keyPressed["82"]) { // [R]
			//closestEnemy();
		}	
		if (keyPressed["87"]) { // [W]
			//switchSecondary();
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
	
	/**
	 * Target.
	 */
	var targInd = 0;
	function target() {
		targInd++;
		targInd = targInd % stage.actors.length;
		
		console.log("target..." + targInd +":"+ stage.actors.length);
		console.log(targInd % stage.actors.length);
		stage.hud.target(stage.actors[targInd]);
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
		
		var targetAngle = Vector.angleBetween(ship, target);
		
		if (Math.abs(targetAngle) > 2) {
			if (targetAngle > 0) {
				ship.turnRight();
			} else {
				ship.turnLeft();
			}
		}
	}
	
});
