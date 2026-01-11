"use strict";

import Sidebar   from './view/Sidebar';
import StarField from './view/StarField';
import Data      from './model/Data';
import Actor from './model/Actor';
import Player from './model/Player';

/**
 * Handles all game rendering (not including star map).
 */
export default class View {
	private ctx: CanvasRenderingContext2D;
	private hud: Sidebar;
	private stars: StarField;
	private gameZoom: number = 1.0;

	constructor(
		private cnv: HTMLCanvasElement,
	) {
		this.cnv = cnv;
		this.ctx = cnv.getContext("2d")!;
		this.hud = new Sidebar(this.ctx);
		this.stars = new StarField(this.ctx);
	}

	/**
	 * Draw a frame.
	 * @param {Actor[]} spobs  List of all space objects to be drawn.
	 * @param {Actor[]} projs  List of all projectiles to be drawn.
	 * @param {Actor[]} actors List of all actors to be drawn.
	 * @param {Actor} player The player to be drawn.
	 */
	render(spobs: Actor[], projs: Actor[], actors: Actor[], player: Player, message: string) {
		this.renderBackground(player);
		spobs.map(  (spob)  => this.renderActor(player, spob)  );
		projs.map(  (proj)  => this.renderActor(player, proj)  );
		actors.map( (actor) => this.renderActor(player, actor) );
		this.renderActor(player, player);
		this.hud.render(player, actors, spobs, this.cnv, message, this.gameZoom);
	}

	/**
	 * Refresh black background and starfield.
	 */
	renderBackground(player: Player) {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
		this.ctx.fillStyle = 'white';
		this.stars.render(player.x, player.y, this.gameZoom);
	}

	/**
	 * Render a given Actor.
	 * @param {Actor} player Camera relative to player.
	 * @param {Actor} actor Actor to render.
	 */
	renderActor(player: Player, actor: Actor) {
		// Translate with zoom
		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);

		// Calculate camera center (accounting for 150px sidebar)
		const cameraCenterX = (this.cnv.width - 150) / 2;
		const cameraCenterY = this.cnv.height / 2;

		// Apply player-centered zoom: translate to center, scale, translate by offset
		this.ctx.translate(cameraCenterX, cameraCenterY);
		this.ctx.scale(this.gameZoom, this.gameZoom);
		this.ctx.translate(
			actor.x - player.x,
			actor.y - player.y
		);

		// Rotate
		var rotation = actor.thrust.degrees + 90;
		var angleInRadians = rotation * Math.PI / 180;
		//this.ctx.rotate(angleInRadians);

		// Draw
		var img = actor.sprite;
		if (img.src && img.complete && img.naturalHeight !== 0) {
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

	angleToSprite(degrees: number, actor: Actor) {
		console.log(degrees);
		degrees = (degrees + 360) % 360;
		var spriteIndex = Math.floor(degrees / 10);
		var sx = spriteIndex % actor.spin[0] * 64;
		var sy = Math.floor(spriteIndex / actor.spin[1]) * 64;
		return [sx, sy];
	}

	/**
	 * Draw an explosion & play sound.
	 * @param {Actor} player (camera relative)
	 * @param {Actor} actor (location to draw boom)
	 * @param {number} dmg Magnitude.
	 */
	boom(player: Player, actor: Actor, dmg: number) {
		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);

		// Calculate camera center (accounting for 150px sidebar)
		const cameraCenterX = (this.cnv.width - 150) / 2;
		const cameraCenterY = this.cnv.height / 2;

		// Apply player-centered zoom: translate to center, scale, translate by offset
		this.ctx.translate(cameraCenterX, cameraCenterY);
		this.ctx.scale(this.gameZoom, this.gameZoom);
		this.ctx.translate(
			actor.x - player.x,
			actor.y - player.y
		);

		this.ctx.beginPath();
		this.ctx.arc(0, 0, dmg, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = 'white';
		this.ctx.fill();

		this.ctx.restore();

		// Play sound.
		if (actor.className == 'Proj') {
			let sndFile = Data.snds[Data.booms[actor.type.explosion - 128].sound];
			sndFile ? new Audio("sounds/" + sndFile).play() :0;
		} else if (actor.className == 'Ship' && actor != player) {
			new Audio("sounds/ShipExplodes.mp3").play();
		}
	}

	/**
	 * Zoom control methods.
	 */
	public zoomIn() {
		this.gameZoom = Math.min(this.gameZoom * 1.05, 2.0);
	}

	public zoomOut() {
		this.gameZoom = Math.max(this.gameZoom / 1.05, 0.1);
	}

	public setZoom(zoom: number) {
		this.gameZoom = Math.max(0.1, Math.min(zoom, 2.0));
	}
}
