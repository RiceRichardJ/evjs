"use strict";

import Input from './Input';
import Model from './Model';
import View  from './View';

var view  = new View($("#gc"));
var model = new Model(view, 0, 0);
var input = new Input(model);

/**
 * Main Loop.
 */
function update() {
	// Don't update if we're landed.
	if ($('#modalSpaceport').hasClass('in')) { return; }

	// Read user input, draw output, run AI.
	input.poll();
	model.action();
	view.render();
}

$('#modalSpaceport').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
	landed = false;
});

setup();
setInterval(update, 1000 / (60 * (Data.speedModifier)));