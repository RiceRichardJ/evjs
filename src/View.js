"use strict";

import Sidebar   from './view/Sidebar';
import StarField from './view/StarField';
import Sound     from './view/Sound';

/**
 * Handles all rendering.
 */
export default class View {
	constructor(canvas) {
		this.cnv    = canvas;
		this.ctx    = canvas.getContext("2d");
		this.hud    = new Sidebar(this.ctx);
		this.stars  = new StarField(this.ctx);
		this.sound  = new Sound();
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
		this.hud.render(player, actors, spobs, this.cnv);
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
			// // this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
			// var dx = img.width  / actor.spin[0]; //-32;//(img.width / -2);
			// var dy = img.height / actor.spin[1]; //-32;//(img.height / -2);
			// var [sx, sy] = this.angleToSprite(rotation, actor);
			// //                 img, sx, sy, sw, sh, dx, dy, dw, dh
			// this.ctx.drawImage(img, sx, sy, 64, 64, dx, dy, 64, 64)
			
			////   S M O O T H   ////
			var degree = (rotation + 360) % 360;
			this.ctx.rotate( (degree % 10 - 0) * Math.PI / 180 );

			////   A E S T H E T I C   ////
			var xCount = actor.spin[0];
			var xWidth = img.width / xCount;
			var xCoord = Math.floor(degree / 10) % xCount * xWidth;
			var yCount = actor.spin[1];
			var yWidth = img.height / yCount;
			var yCoord = Math.floor(Math.floor(degree / 10) / yCount) * yWidth;

			this.ctx.drawImage(img, xCoord, yCoord, xWidth, yWidth, xWidth/-2, yWidth/-2, xWidth, yWidth);

		} else {
			this.ctx.fillStyle = actor.color;//'#0f0';
			this.ctx.fillRect(-1, -1, 3, 3);
			this.ctx.fillStyle = 'white';
		} 
		this.ctx.restore();

		// Draw booms.
		if (actor.dead) {
			if (actor.className == 'Ship') {
				this.boom(player, actor, actor.type.shield[0]);
			} else if (actor.className == 'Proj') {
				this.boom(player, actor, actor.type.damage[0]);
			}
		}
	}

	angleToSprite(degrees, actor) {
		console.log(degrees);
		degrees = (degrees + 360) % 360;
		var spriteIndex = Math.floor(degrees / 10);
		var sx = spriteIndex % actor.spin[0] * 64;
		var sy = Math.floor(spriteIndex / actor.spin[1]) * 64;
		return [sx, sy];
	}

	/**
	 * Draw an explosion.
	 * @param {Actor} player (camera relative)
	 * @param {Actor} actor (location to draw boom)
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