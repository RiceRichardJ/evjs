"use strict";

import {Constants as C} from './model/Data';
import Input from './Input';
import Model from './Model';
import View  from './View';

var view  = new View(document.getElementById("gc"), $("#mapGc")[0]);
var model = new Model();
var input = new Input(model);

$('.modal').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
	model.player.paused = false;
});

/**
 * Main Loop. Each frame.
 */
setInterval(function update() {
	// Read user input
	input.poll();

	if (model.mapView) { view.mapRender() }

	// Don't update if we're landed.
	if ($('.modal').hasClass('in')) { return; }
	
	// Draw output, run AI.
	model.action(view);

	// 60fps
}, 1000 / (C.fps));
