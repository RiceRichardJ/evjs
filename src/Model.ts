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

	public paused: boolean = false;

	private message: string;

	/**
	 * Create a Model object.
	 */
	constructor(
		public data = Data,
		public player: Player = null,
		public spobs: Actor[] = [],
		public actors: Ship[] = [],
		public projs: Proj[] = [],
		public mapView: boolean = false
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
		view.render(this.spobs, this.projs, this.actors, this.player, this.message);
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

		const currentSystem = new System(Data.systs[129]);

		this.spobs = currentSystem.spobs;
		this.actors = currentSystem.ships;

		// this.spobs = currentSystem.spobs;

		const planet = this.spobs[0];

		// let i = 0;

		// // Load from SHIPS JSON & target images
		// for (const [shipId, ship] of Object.entries(Data.ships)) {

		// 	const newShip = new Ship(ship);
		// 	const angle = 360 * Math.random();
		// 	const v = new Vector(angle, 1500 + (500 * Math.random()));
		// 	newShip.x = v.getX();
		// 	newShip.y = v.getY();
		// 	newShip.thrust.degrees = angle + 180;
		// 	// newShip.targetImg = new Image();
		// 	// newShip.targetImg.src = ship.sprite.replace("sprite", "target").replace("png", "jpeg");

		// 	this.actors.push(newShip);
		// 	this.actors.slice(-1)[0].ai.nav = planet;
		// }

		this.player = new Player(this.data.ships[141], this);
		this.player.x = -200;
		this.player.y = -200;
		this.player.ai.nav = planet;
		this.player.ai.govt = null;

	}

	scheduleMessage(newMessage: string) {
		this.message = newMessage;
		window.setTimeout(() => {
			this.message = null;
		}, 5000)
	}

	getMessage() {
		return this.message;
	}
}
