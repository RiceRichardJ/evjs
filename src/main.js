"use strict";

import Data  from './model/data';
import Input from './Input';
import Model from './Model';
import View  from './View';

var view  = new View(document.getElementById("gc"));
var model = new Model(view);
var input = new Input(model);

function setup() {
	// console.log("JSON LOAD TEST: \n" + JSON.stringify(
	// 	Data.ship[142-127]
	// ));
}

/**
 * Main Loop.
 */
function update() {
	// Don't update if we're landed.
	if ($('#modalSpaceport').hasClass('in')) { return; }

	// Read user input, draw output, run AI.
	input.poll();
	model.action();
	// view.render(); // model calls action...
}

$('#modalSpaceport').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
	model.player.landed = false;
});

setup();
setInterval(update, 1000 / (60 * (Data.speedModifier)));