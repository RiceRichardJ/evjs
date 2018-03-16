"use strict";

import Actor from 'Actor';
import Sidebar from 'Sidebar';
import StarField from 'StarField';
import Vector from 'Vector';

/**
 * Manages Actors(data), and renders them with Canvas.
 */
export default class Stage {

	/**
	 * Create a Stage object.
	 * @param {*} canvas Canvas to draw on.
	 * @param {*} centerX X Center of screen (for StarField)
	 * @param {*} centerY Y Center of screen (for StarField)
	 */
	constructor(canvas, centerX, centerY) {
		this.cnv    = canvas;
		this.ctx    = canvas.getContext("2d");
		this.actors = [];
		this.projs  = [];
		this.hud    = new Sidebar(this.ctx);
		this.stars  = new StarField(this.ctx, centerX, centerY);
	}

	/** 
	 * Refresh black background and starfield.
	 */
	renderBackground() {
		var c = this.cnv;
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, c.width, c.height);
		this.ctx.fillStyle = 'white';

		var player = this.actors[0];
		this.stars.render(player.x, player.y);
	}

	/**
	 * Act out and render each Actor.
	 */
	action() {
		this.renderBackground();

		this.projs.map( (proj) => {this.render(proj); proj.act()} );
		for (var i = 1; i < this.actors.length; i++) {
			// Render then Act b/c Act can suicide. Can't render if not exist.
			this.render(this.actors[i]);
			this.actors[i].act();
		}
		// Player last = player on top.
		this.actors[0].act();
		this.render(this.actors[0]);

		this.hud.render(this.actors, this.cnv);
		this.collision();
		this.pruneDead();
	}

	// TODO: Make this take a function as a parameter (callback)
	// where that function renders, while this function simply
	// set's the coordinates properly.
	/**
	 * Render a given Actor.
	 * @param {Actor} actor Actor to render.
	 */
	render(actor) {
		var player = this.actors[0];

		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);
		this.ctx.translate(
			actor.x - player.x + ((this.cnv.width - 150)  / 2),
			actor.y - player.y + ( this.cnv.height        / 2)
		);

		var rotation = actor.thrust.degrees + 90;
		var angleInRadians = rotation * Math.PI / 180;
		this.ctx.rotate(angleInRadians);

		var img = actor.sprite;
		if (img.src) {
			this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
		} else {
			this.ctx.fillStyle = actor.color;//'#0f0';
			this.ctx.fillRect(-1, -1, 3, 3);
			this.ctx.fillStyle = 'white';
		} 
		
		this.ctx.restore();
	}
	
	/**
	 * Collisions between SHIPs and PROJs.
	 */
	collision() {
		for (var proj of this.projs) {
			for (var ship of this.actors) {
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
			if (actor.className == 'Ship') {this.boom(actor.x, actor.y, actor.type.shields);}
			this.hud.untarget(actor);
			this.actors.splice( this.actors.indexOf(actor), 1 );
		}
		for (var proj of this.projs) {
			if (! proj.dead) { continue; }
			this.boom(proj.x, proj.y, proj.type.damage);
			this.projs.splice( this.projs.indexOf(proj), 1 );
		}
	}
	
	/**
	 * Draw an explosion.
	 * @param {number} x X Location.
	 * @param {number} y Y Location.
	 * @param {number} dmg Magnitude.
	 */
	boom(x, y, dmg) {
		var player = this.actors[0];

		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);
		this.ctx.translate(
			x - player.x + ((this.cnv.width - 150)  / 2),
			y - player.y + ( this.cnv.height        / 2)
		);
		
		this.ctx.beginPath();
		this.ctx.arc(0, 0, dmg, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = 'white';
		this.ctx.fill();
		
		this.ctx.restore();
	}
}