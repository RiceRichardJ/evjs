"use strict";

import Actor     from './model/Actor';
import AI        from './model/AI';
import Data      from './model/Data'
import Player    from './model/Player'
import Proj from './model/Proj';
import Ship      from './model/Ship';
import System from './model/System';
import Vector    from './model/Vector';
import Weapon    from './model/Weapon';
import View from './View';

/**
 * Model stores the current state of the game.
 * 
 * Unless you're doing something weird, there should only be one instance of this class.
 */
export default class Model {

	/**
	 * Create a Model object.
	 */
	constructor(
		public data = Data,
		public player: Player = null,
		public spobs: Actor[] = [],
		public actors: Ship[] = [],
		public projs: Proj[] = [],
		public mapView: boolean = false,
		private currentSystem: System
	) {
		this.addTestData();
	}

	/**
	 * Step through our state/model. Then render with view object.
	 * @param {*} view The rendering object.
	 */
	public action(view: View) {
		this.spobs.map( (spob) => { spob.act() } );
		this.projs.map( (proj) => { proj.act() } );
		this.actors.map((actor)=> { actor.act(); this.addProj(actor) } );
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
	private addProj(actor) {
		if (actor.newProj.length > 0) {
			actor.newProj.map(proj => this.playSound(proj));	// not ideal to have the projectile play the sound instead of the weapon.
			this.projs = this.projs.concat(actor.newProj);
			actor.newProj = [];
		}
		if (actor.newShip.length > 0) {
			this.actors = this.actors.concat(actor.newShip);
			actor.newShip = [];
		}
	}

	// TODO - shouldn't this be in "View.ts"? An output is not part of Model.
	private playSound(proj) {
		const distance = Vector.distance(proj.x, proj.y, this.player.x, this.player.y);
		const fade = (-0.001 * distance + 1) / 10;
		proj.sound.src = "sounds/" + this.data.snds[proj.type.sound];
		// console.log(proj.sound.src);
		proj.sound.volume = fade < 0.25 ? 0.25 : fade;
		// console.log(distance + " | " + proj.sound.volume);
		proj.sound.play();
	}
	
	/**
	 * Check for collisions between SHIPs and PROJs.
	 */
	private collision() {
		for (var proj of this.projs) {
			for (var ship of this.actors.concat(this.player)) {
				if (proj.type.type == "guided" && ship != proj.target) {
					continue;
				}
				if (proj.sender.ai.govt && ship.ai.govt
					&& proj.sender.ai.govt == ship.ai.govt) {
					continue;
				}
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








	/**
	 * new Ship() < ships < shipjson
	 */
	private addTestData() {

		// this.currentSystem = new System({
		// 	id: 0,
		// 	name: "Test System",
		// 	x: 0,
		// 	y: 0,
		// 	links: [],
		// 	spobs: [128, 129], // this.data.demoPlanet, this.data.demoPlanet2],
		// 	dudes: [],
		// 	avgShips: 4,
		// 	government: 0,
		// 	message: 0,
		// 	asteroids: 0,
		// 	interference: 0,
		// 	visbit: 0
		// });

		this.currentSystem = new System(Data.systs[129]);

		this.spobs = this.currentSystem.spobs;

		const planet = this.spobs[0];

		// // Demo Populate.
		// var planet  = new Actor(this.data.demoPlanet);
		// var planet2 = new Actor(this.data.demoPlanet2);
		// // var dude1  = new Ship(  this.data.rebelCruiser, 1, this.data);
		// // var dude2  = new Ship(  this.data.rebelCruiser, 2, this.data);
		// // var dude3  = new Ship(  this.data.rebelCruiser, 3, this.data);
		
		// planet.x = 500;
		// planet.y = 500;
		
		// // dude1.x = 10;
		// // dude1.y = 200;
		
		// // dude2.y = -200;
		// // dude3.x = 200;
		
		// // dude1.travel.magnitude = 5;
		// // dude2.travel.magnitude = 4;
		// // dude3.travel.magnitude = 6;

		// // dude1.ai.nav = planet;
		// // dude2.ai.nav = planet;
		// // dude3.ai.nav = planet;
		
		// this.spobs.push(planet);
		// this.spobs.push(planet2);
		// this.actors.push(dude1);
		// this.actors.push(dude2);
		// this.actors.push(dude3);

		let i = 0;

		// Load from SHIPS JSON & target images
		for (const ship of Data.ships.slice(1)) {

			// Set sprite paths

			ship.sprite = "images/sprites/" + ship.name + ".png"; //"content/RebelCruiserSprite.png";
			if (ship.id == 133 || ship.id == 134) { 
				ship.sprite = "images/sprites/" + ship.shortName + ".png";
			}
			if (ship.id == 153) {
				ship.sprite = "images/sprites/Bulk Freighter.png";
			}

			
			const newShip = new Ship(
				Object.assign({}, this.data.ships[0], ship), // merged ship type
			);
			const angle = 360 * Math.random();
			const v = new Vector(angle, 1500 + (500 * Math.random()));
			newShip.x = v.getX();
			newShip.y = v.getY();
			newShip.thrust.degrees = angle + 180;
			// newShip.targetImg = new Image();
			// newShip.targetImg.src = ship.sprite.replace("sprite", "target").replace("png", "jpeg");

			this.actors.push(newShip);
			this.actors.slice(-1)[0].ai.nav = planet;
		}

		this.player = new Player(this.data.ships[141-127], this.data);
		this.player.x = -200;
		this.player.y = -200;
		this.player.ai.nav = planet;
		this.player.ai.govt = null;

	}
}
