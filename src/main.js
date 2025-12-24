"use strict";

import {Constants as C} from './model/Data';
import Data from './model/Data';
import Input from './Input';
import Model from './Model';
import View  from './View';
import SpaceportUI from './view/SpaceportUI';

var view  = new View(document.getElementById("gc"), $("#mapGc")[0]);
var model = new Model();
var input = new Input(model);

// Track currently landed spob
var currentSpob = null;

$('.modal').on('hidden.bs.modal', function() {
	console.log("DEPART, modalSpaceport hidden ");
	// Reset Ship Position // Reset Shields, Armor. Refuel. Etc.
	model.player.paused = false;
});

// Initialize spaceport modal when landing
$('#modalSpaceport').on('shown.bs.modal', function() {
	console.log("LANDED at spaceport");
	// Get the spob the player is near (their nav target)
	currentSpob = model.player.ai.nav;

	if (currentSpob && currentSpob.spobData) {
		SpaceportUI.initLandingModal(model.player, currentSpob.spobData, Data.descs);
	}
});

// Initialize commodity exchange when modal opens
$('#modalCommodity').on('shown.bs.modal', function() {
	console.log("OPENED commodity exchange", currentSpob);
	if (currentSpob && currentSpob.spobData) {
		SpaceportUI.initCommodityExchange(model.player, currentSpob.spobData);
	}
});

// Initialize refuel when modal opens
$('#refuel').on('shown.bs.modal', function() {
	console.log("OPENED refuel");
	SpaceportUI.initRefuel(model.player);
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
