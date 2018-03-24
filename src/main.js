"use strict";

import Actor   from 'Actor';
import Data    from 'data';
import Proj    from 'Proj';
import Ship    from 'Ship';
import Vector  from 'Vector';
import Sidebar from 'Sidebar';
import Stage   from 'Stage';

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
	var dude1  = new Ship(Data.rebelCruiser, 1);
	var dude2  = new Ship(Data.rebelCruiser, 2);
	var dude3  = new Ship(Data.rebelCruiser, 3);
	
	planet.x = 0;
	planet.y = 0;
	
	dude1.x = 10;
	dude1.y = 200;
	
	dude2.y = -200;
	dude3.x = 200;
	
	dude1.travel.magnitude = 5;
	dude2.travel.magnitude = 4;
	dude3.travel.magnitude = 6;

	dude1.ai.target = planet;
	dude2.ai.target = planet;
	dude3.ai.target = planet;
	
	stage.spobs.push(planet);
	stage.actors.push(dude1);
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
	// AI.runAll(stage.actors.slice(2));
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
		me.fire(stage.actors[targInd]);
	}
	if (keyPressed["76"]) { // [L]
		land();
	}
	if (keyPressed["65"]) { // [A]
		me.autoPilot(stage.actors[targInd]);
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
	var dist = Vector.distance(me.x, me.y,
		stage.actors[1].x, stage.actors[1].y);

	if (dist < 50 && !landed) {
		if (me.travel.magnitude > 0.5) {
			stage.ctx.font = "9pt Arial";
			stage.ctx.fillText("Moving too fast to land!",10,590);
			return;
		}
		landed = true;
		$("#landButton").click();
	}
}

/**
 * Cycle through targets.
 */
var targInd = 0;
function target() {
	targInd++;
	while(targInd < stage.actors.length && 
		(stage.actors[targInd] == me || stage.actors[targInd].className != 'Ship') ) {
		targInd++;
	}
	if (targInd >= stage.actors.length) { targInd = 0; }
	if (targInd == 0) {
		stage.hud.target(null);
	} else {
		stage.hud.target(stage.actors[targInd]);
	}
}

$('#modalSpaceport').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
	landed = false;
})

// ######################################################################### //
// ## RUN  ################################################################# //
// ######################################################################### //

// Run Setup.
setup();
// Main Loop & FPS.
setInterval(update, 1000 / (60 * (Data.speedModifier)));