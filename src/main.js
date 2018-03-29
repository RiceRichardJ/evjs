"use strict";

import {Constants as C} from './model/Data';
import Input from './Input';
import Model from './Model';
import View  from './View';

var view  = new View(document.getElementById("gc"));
var model = new Model();
var input = new Input(model);

$('#modalSpaceport').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
	model.player.landed = false;
});

/**
 * Main Loop. Each frame.
 */
setInterval(function update() {
	// Don't update if we're landed.
	if ($('#modalSpaceport').hasClass('in')) { return; }

	// Read user input, draw output, run AI.
	input.poll();
	model.action(view);

	// 60fps
}, 1000 / (C.fps));