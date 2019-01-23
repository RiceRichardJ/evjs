"use strict";

import Actor     from './model/Actor';
import AI        from './model/AI';
import Data      from './model/Data'
import Player    from './model/Player'
import Ship      from './model/Ship';
import Vector    from './model/Vector';
import Weapon    from './model/Weapon';

/**
 * Model stores the current state of the game.
 */
export default class Model {
	/**
	 * Create a Model object.
	 */
	constructor() {
		this.data   = Data;//new Data();
		// this.player = new Player(this.data.rebelCruiser, this.data);
		this.player = null;//new Player(this.data.ships[141-127], this.data);
			// this.player.x = -200;
			// this.player.y = -200;
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
		if (actor.newProj.length > 0) {
			actor.newProj.map(proj => this.playSound(proj));
			this.projs = this.projs.concat(actor.newProj);
			actor.newProj = [];
		}
		if (actor.newShip.length > 0) {
			this.actors = this.actors.concat(actor.newShip);
			actor.newShip = [];
		}
	}

	playSound(proj) {
		var distance = Vector.distance(proj.x, proj.y, this.player.x, this.player.y);
		var fade = -0.001 * distance + 1;
		proj.sound.src = "sounds/" + this.data.snds[proj.type.sound];
		// console.log(proj.sound.src);
		proj.sound.volume = fade < 0.25 ? 0.25 : fade;
		// console.log(distance + " | " + proj.sound.volume);
		proj.sound.play();
	}
	
	/**
	 * Check for collisions between SHIPs and PROJs.
	 * TODO: Guided weapons hit only their targets.
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
		// var dude1  = new Ship(  this.data.rebelCruiser, 1, this.data);
		// var dude2  = new Ship(  this.data.rebelCruiser, 2, this.data);
		// var dude3  = new Ship(  this.data.rebelCruiser, 3, this.data);
		
		planet.x = 500;
		planet.y = 500;
		
		// dude1.x = 10;
		// dude1.y = 200;
		
		// dude2.y = -200;
		// dude3.x = 200;
		
		// dude1.travel.magnitude = 5;
		// dude2.travel.magnitude = 4;
		// dude3.travel.magnitude = 6;

		// dude1.ai.nav = planet;
		// dude2.ai.nav = planet;
		// dude3.ai.nav = planet;
		
		this.spobs.push(planet);
		this.spobs.push(planet2);
		// this.actors.push(dude1);
		// this.actors.push(dude2);
		// this.actors.push(dude3);

				// Load from SHIPS JSON & target images
				for (var ship of Data.ships.slice(1)) {
					ship.sprite = "images/sprites/" + ship.name + ".png"; //"content/RebelCruiserSprite.png";
					if (ship.id == "133" || ship.id == "134") { 
						ship.sprite = "images/sprites/" + ship.shortName + ".png";
					}
					if (ship.id == "153") {
						ship.sprite = "images/sprites/Bulk Freighter.png";
					}

					var newShip = new Ship(
						Object.assign(...this.data.ships[0], ship, this.data) // wtf is this
					);
					var angle = 360 * Math.random();
					var v = new Vector(angle, 1500 + (500 * Math.random()));
					newShip.x = v.getX();
					newShip.y = v.getY();
					newShip.thrust.degrees = angle + 180;
					newShip.targetImg = new Image();
					newShip.targetImg.src = ship.sprite.replace("sprite", "target").replace("png", "jpeg");

					this.actors.push(newShip);
					this.actors.slice(-1)[0].ai.nav = planet;
				}
				
		this.player = new Player(this.data.ships[141-127], this.data);
		this.player.x = -200;
		this.player.y = -200;
		this.player.ai.nav = planet;

	}

}