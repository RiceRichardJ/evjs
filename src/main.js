"use strict";

import Actor     from 'Actor';
import AI        from 'AI';
import Data      from 'data';
import Proj      from 'Proj';
import Ship      from 'Ship';
import Vector    from 'Vector';
import Sidebar   from 'Sidebar';
import Stage     from 'Stage';

/**
 * Globals.
 */
var keyPressed = {};
var keyPrev = {};
var me;
var centerX = 100;
var centerY = 100;
var stage = new Stage(document.getElementById("gc"), centerX, centerY);

// ######################################################################### //
// ## TEST DATA ############################################################ //
// ######################################################################### //

function addTestData() {
	// Demo Populate.
	var planet = new Actor(Data.demoPlanet);
	var dude   = new Ship(Data.rebelCruiser, 1);
	var dude2  = new Ship(Data.rebelCruiser, 2);
	var dude3  = new Ship(Data.rebelCruiser, 3);
	
	planet.x = 0;
	planet.y = 0;
	
	dude.x = 10;
	dude.y = 200;
	
	dude2.y = -200;
	dude3.x = 200;
	
	dude.travel.magnitude = 5;
	dude2.travel.magnitude = 4;
	dude3.travel.magnitude = 6;

	dude.target = planet;
	dude2.target = planet;
	dude3.target = planet;
	
	stage.actors.push(planet);
	stage.actors.push(dude);
	stage.actors.push(dude2);
	stage.actors.push(dude3);
}

// ######################################################################### //
// ## MAIN ################################################################# //
// ######################################################################### //

/**
 * Register inputs. Create player's ship. Populate stage with NPCs.
 */
function setup() {
	registerKeyListeners();
	
	me = new Ship(Data.rebelCruiser, 0);
	// Center me.
	me.x = centerX; // stage.cnv.width / 2;
	me.y = centerY; // stage.cnv.height / 2;
	stage.actors.push(me);

	addTestData();
};

/**
 * Main Loop.
 */
function update() {
	// Don't update if we're landed.
	if ($('#modalSpaceport').hasClass('in')) { return; }

	// Read user input, draw output, run AI.
	pollInput();
	stage.action();
	AI.runAll(stage.actors.slice(2));
}

/**
 * Register Key Listeners.
 */
function registerKeyListeners() {
	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 9) { // [TAB]
			e.preventDefault();
			target();
		}
		keyPressed[e.keyCode] = true;
	}, false);

	document.addEventListener('keyup', function(e) {
		if (e.keyCode == 9) {
			e.preventDefault();
		}
		keyPressed[e.keyCode] = false;
	}, false);
}

/**
 * Controls: Key Listeners.
 */
function pollInput() {
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
		me.fire(stage.projs, stage.actors[targInd]);
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
	var dist = Vector.distance(stage.actors[0].x, stage.actors[0].y,
		stage.actors[1].x, stage.actors[1].y);

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
	stage.hud.target(stage.actors[targInd]);
}

$('#modalSpaceport').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
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


// ######################################################################### //
// ## RUN  ################################################################# //
// ######################################################################### //

// Run Setup.
setup();
// Main Loop & FPS.
setInterval(update, 1000 / (60 * (Data.speedModifier)));