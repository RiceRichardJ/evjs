"use strict";

import Actor     from './model/Actor';
import AI        from './model/AI';
import Data      from './model/data'
import Player    from './model/Player'
import Ship      from './model/Ship';
import Vector    from './model/Vector';

/**
 * Model stores the current state of the game.
 */
export default class Model {
	/**
	 * Create a Model object.
	 * @param {*} view Rendering object.
	 */
	constructor(view) {
		this.view   = view;
		this.player = new Player();
		this.spobs  = [];
		this.actors = [];
		this.projs  = [];
		// this.loadJson();
		this.addTestData();
	}

	// loadJson() {
	// 	console.log("load json data");
	// 	$.getJSON("../json/ship.json", (data) => {
	// 		this.ships = data;
	// 		console.log(JSON.stringify(this.ships));
	// 	});
	// 	console.log(JSON.stringify(this.ships));
	// }

	/**
	 * Next step.
	 */
	action() {
		this.spobs.map( (spob) => {spob.act()} );
		this.projs.map( (proj) => {proj.act()} );
		this.actors.map((actor)=> {actor.act(); this.addProj(actor)} );
		this.player.act(); this.addProj(this.player);

		this.collision();
		AI.runAll(this.actors);
		this.view.render(this.spobs, this.projs, this.actors, this.player);
		this.pruneDead();
	}

	/**
	 * Ship is creating a new projectile.
	 * @param {*} actor 
	 */
	addProj(actor) {
		if (actor.newProj != null) {
			this.projs.push(actor.newProj);
			actor.newProj = null;
		}
	}
	
	/**
	 * Collisions between SHIPs and PROJs.
	 */
	collision() {
		for (var proj of this.projs) {
			for (var ship of this.actors.concat(this.player)) {
				if ( ship.className == 'Ship' && proj.sender !== ship) { // can't shoot self
					var dist = Vector.distance(proj.x, proj.y, ship.x, ship.y);
					if (dist < 20) {
						ship.hit(proj);
						proj.die();
					}
				}
			}
		}
	}
	
	/**
	 * Remove dead actors from stage.
	 */
	pruneDead() {
		for (var actor of this.actors) {
			if (! actor.dead) { continue; }
			// if (actor.className == 'Ship') {this.view.boom(actor.x, actor.y, actor.type.shields);}
			this.actors.splice( this.actors.indexOf(actor), 1 );
		}
		for (var proj of this.projs) {
			if (! proj.dead) { continue; }
			// this.view.boom(proj.x, proj.y, proj.type.damage);
			this.projs.splice( this.projs.indexOf(proj), 1 );
		}
	}









	addTestData() {
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

		dude1.ai.nav = planet;
		dude2.ai.nav = planet;
		dude3.ai.nav = planet;
		
		this.spobs.push(planet);
		this.actors.push(dude1);
		this.actors.push(dude2);
		this.actors.push(dude3);

		this.player.ai.nav = planet;
	}

}