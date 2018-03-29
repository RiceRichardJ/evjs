"use strict";

import Sidebar   from './view/Sidebar';
import StarField from './view/StarField';

/**
 * Handles all rendering.
 */
export default class View {
	constructor(canvas) {
		this.cnv    = canvas;
		this.ctx    = canvas.getContext("2d");
		this.hud    = new Sidebar(this.ctx);
		this.stars  = new StarField(this.ctx);
	}

	/**
	 * Draw a frame.
	 * @param {Actor[]} spobs  List of all space objects to be drawn.
	 * @param {Actor[]} projs  List of all projectiles to be drawn.
	 * @param {Actor[]} actors List of all actors to be drawn.
	 * @param {Actor} player The player to be drawn.
	 */
	render(spobs, projs, actors, player) {
		this.renderBackground(player);
		spobs.map(  (spob)  => this.renderActor(player, spob)  );
		projs.map(  (proj)  => this.renderActor(player, proj)  );
		actors.map( (actor) => this.renderActor(player, actor) );
		this.renderActor(player, player);
		this.hud.render(player, actors, this.cnv);
	}

	/** 
	 * Refresh black background and starfield.
	 */
	renderBackground(player) {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
		this.ctx.fillStyle = 'white';
		this.stars.render(player.x, player.y);
	}
	

	/**
	 * Render a given Actor.
	 * @param {Actor} player Camera relative to player.
	 * @param {Actor} actor Actor to render.
	 */
	renderActor(player, actor) {
		// Translate
		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);
		this.ctx.translate(
			actor.x - player.x + ((this.cnv.width - 150)  / 2),
			actor.y - player.y + ( this.cnv.height        / 2)
		);

		// Rotate
		var rotation = actor.thrust.degrees + 90;
		var angleInRadians = rotation * Math.PI / 180;
		//this.ctx.rotate(angleInRadians);

		// Draw
		var img = actor.sprite;
		if (img.src) {
			// this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
			var dx = -32;//(img.width / -2);
			var dy = -32;//(img.height / -2);
			var [sx, sy] = this.angleToSprite(rotation);
			this.ctx.drawImage(img, sx, sy, 64, 64, dx, dy, 64, 64)
		} else {
			this.ctx.fillStyle = actor.color;//'#0f0';
			this.ctx.fillRect(-1, -1, 3, 3);
			this.ctx.fillStyle = 'white';
		} 
		this.ctx.restore();

		// Draw booms.
		if (actor.dead) {
			if (actor.className == 'Ship') {
				this.boom(player, actor, actor.type.shield);
			} else if (actor.className == 'Proj') {
				this.boom(player, actor, actor.type.damage);
			}
		}
	}

	angleToSprite(degrees) {
		console.log(degrees);
		degrees = (degrees + 360) % 360;
		var spriteIndex = Math.floor(degrees / 10);
		var sx = spriteIndex % 6 * 64;
		var sy = Math.floor(spriteIndex / 6) * 64;
		return [sx, sy];
	}

	/**
	 * Draw an explosion.
	 * @param {Actor} x Player (camera relative)
	 * @param {Actor} y Actor (location to draw boom)
	 * @param {number} dmg Magnitude.
	 */
	boom(player, actor, dmg) {
		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);
		this.ctx.translate(
			actor.x - player.x + ((this.cnv.width - 150)  / 2),
			actor.y - player.y + ( this.cnv.height        / 2)
		);
		
		this.ctx.beginPath();
		this.ctx.arc(0, 0, dmg, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = 'white';
		this.ctx.fill();
		
		this.ctx.restore();
	}
}