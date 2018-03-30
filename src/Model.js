"use strict";

import Actor     from './model/Actor';
import AI        from './model/AI';
import Data      from './model/Data'
import Player    from './model/Player'
import Ship      from './model/Ship';
import Vector    from './model/Vector';

/**
 * Model stores the current state of the game.
 */
export default class Model {
	/**
	 * Create a Model object.
	 */
	constructor() {
		this.data   = new Data();
		this.player = new Player(this.data.rebelCruiser, this.data);
		this.spobs  = [];
		this.actors = [];
		this.projs  = [];
		this.addTestData();
	}

	/**
	 * Step through our state/model. Then render with view object.
	 * @param {*} view The rendering object.
	 */
	action(view) {
		this.spobs.map( (spob) => {spob.act()} );
		this.projs.map( (proj) => {proj.act()} );
		this.actors.map((actor)=> {actor.act(); this.addProj(actor)} );
		this.player.act(); this.addProj(this.player);

		this.collision();
		AI.runAll(this.actors);
		view.render(this.spobs, this.projs, this.actors, this.player);
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
			// if (actor.className == 'Ship') {this.view.boom(actor.x, actor.y, actor.type.shield);}
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
		var planet  = new Actor(this.data.demoPlanet);
		var planet2 = new Actor(this.data.demoPlanet);
		var dude1  = new Ship(  this.data.rebelCruiser, 1, this.data);
		var dude2  = new Ship(  this.data.rebelCruiser, 2, this.data);
		var dude3  = new Ship(  this.data.rebelCruiser, 3, this.data);
		
		planet.x = 500;
		planet.y = 500;
		
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
		this.spobs.push(planet2);
		this.actors.push(dude1);
		this.actors.push(dude2);
		this.actors.push(dude3);

		this.player.ai.nav = planet;


		// for (var ship of this.data.ships.slice(1)) {
		// 	ship.sprite = "../images/sprites/" + ship.name + " Sprite.png"; //"content/RebelCruiserSprite.png";
		// 	if (ship.id == "133" || ship.id == "134") { 
		// 		ship.sprite = "../images/sprites/" + ship.shortName + " Sprite.png";
		// 	}
		// 	if (ship.id == "153") { 
		// 		ship.sprite = "../images/sprites/Bulk Freighter Sprite.png";
		// 	}
		// 	this.actors.push(
		// 		new Ship(
		// 			Object.assign(...this.data.ships[0], ship)
		// 		)
		// 	);
		// 	this.actors.slice(-1)[0].ai.nav = planet;
		// }


	}

}