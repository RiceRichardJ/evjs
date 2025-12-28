"use strict";

import Sidebar   from './view/Sidebar';
import StarField from './view/StarField';
import Data      from './model/Data';
import Actor from './model/Actor';
import Player from './model/Player';

/**
 * Handles all rendering.
 */
export default class View {
	private ctx: CanvasRenderingContext2D;
	private mapCtx: CanvasRenderingContext2D;
	private hud: Sidebar;
	private stars: StarField;

	// Map view state
	public mapZoom: number = 2.0;
	public mapOffsetX: number = 200;
	public mapOffsetY: number = 100;
	private isDragging: boolean = false;
	private dragStartX: number = 0;
	private dragStartY: number = 0;
	public selectedSystemId: number | null = null;
	public currentSystemId: number = 129; // Default to Sol

	constructor(
		private cnv: HTMLCanvasElement,
		private mapCnv: HTMLCanvasElement,
	) {
		this.cnv = cnv;
		this.ctx = cnv.getContext("2d")!;
		this.hud = new Sidebar(this.ctx);
		this.stars = new StarField(this.ctx);
		this.mapCtx = mapCnv.getContext("2d");

		// Setup map canvas dragging
		this.setupMapDragging();
	}

	private setupMapDragging() {
		let mouseDownX = 0;
		let mouseDownY = 0;
		let mouseDownTime = 0;

		this.mapCnv.addEventListener('mousedown', (e: MouseEvent) => {
			this.isDragging = true;
			this.dragStartX = e.offsetX - this.mapOffsetX;
			this.dragStartY = e.offsetY - this.mapOffsetY;
			mouseDownX = e.offsetX;
			mouseDownY = e.offsetY;
			mouseDownTime = Date.now();
			this.mapCnv.style.cursor = 'grabbing';
		});

		this.mapCnv.addEventListener('mousemove', (e: MouseEvent) => {
			if (this.isDragging) {
				this.mapOffsetX = e.offsetX - this.dragStartX;
				this.mapOffsetY = e.offsetY - this.dragStartY;
			}
		});

		this.mapCnv.addEventListener('mouseup', (e: MouseEvent) => {
			const wasDragging = this.isDragging;
			this.isDragging = false;
			this.mapCnv.style.cursor = 'grab';

			// Detect click vs drag: if mouse didn't move much and time was short, it's a click
			const mouseMoved = Math.abs(e.offsetX - mouseDownX) > 5 || Math.abs(e.offsetY - mouseDownY) > 5;
			const timeSinceDown = Date.now() - mouseDownTime;

			if (wasDragging && !mouseMoved && timeSinceDown < 300) {
				// It's a click! Find which system was clicked
				this.handleSystemClick(e.offsetX, e.offsetY);
			}
		});

		this.mapCnv.addEventListener('mouseleave', () => {
			this.isDragging = false;
			this.mapCnv.style.cursor = 'grab';
		});

		// Mouse wheel zoom
		this.mapCnv.addEventListener('wheel', (e: WheelEvent) => {
			e.preventDefault();

			// Zoom in smaller increments for smoother scrolling
			const zoomFactor = 1.05; // Even slower for finer control
			const oldZoom = this.mapZoom;

			if (e.deltaY < 0) {
				// Scroll up = zoom in
				this.mapZoom = Math.min(this.mapZoom * zoomFactor, 10);
			} else {
				// Scroll down = zoom out
				this.mapZoom = Math.max(this.mapZoom / zoomFactor, 0.5);
			}

			// Zoom towards mouse cursor position
			const rect = this.mapCnv.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;

			// Adjust offset to zoom towards cursor
			const zoomRatio = this.mapZoom / oldZoom;
			this.mapOffsetX = mouseX - (mouseX - this.mapOffsetX) * zoomRatio;
			this.mapOffsetY = mouseY - (mouseY - this.mapOffsetY) * zoomRatio;
		});

		// Set initial cursor
		this.mapCnv.style.cursor = 'grab';
	}

	public zoomIn() {
		this.mapZoom = Math.min(this.mapZoom * 1.2, 10);
	}

	public zoomOut() {
		this.mapZoom = Math.max(this.mapZoom / 1.2, 0.5);
	}

	private handleSystemClick(clickX: number, clickY: number) {
		// Convert click coordinates to map space
		const mapX = (clickX - this.mapOffsetX) / this.mapZoom;
		const mapY = (clickY - this.mapOffsetY) / this.mapZoom;

		// Find nearest system within click threshold
		let nearestSystem: any = null;
		let nearestDistance = Infinity;
		const clickThreshold = 10 / this.mapZoom; // Scales with zoom

		for (let [systId, syst] of Object.entries(Data.systs)) {
			const dx = syst.x - mapX;
			const dy = syst.y - mapY;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < clickThreshold && distance < nearestDistance) {
				nearestDistance = distance;
				nearestSystem = syst;
			}
		}

		if (nearestSystem) {
			this.selectedSystemId = nearestSystem.id;
			console.log("Selected system:", nearestSystem.name);

			// Dispatch custom event for system selection
			const event = new CustomEvent('systemSelected', {
				detail: { systemId: nearestSystem.id }
			});
			window.dispatchEvent(event);
		}
	}

	/**
	 * Draw a frame.
	 * @param {Actor[]} spobs  List of all space objects to be drawn.
	 * @param {Actor[]} projs  List of all projectiles to be drawn.
	 * @param {Actor[]} actors List of all actors to be drawn.
	 * @param {Actor} player The player to be drawn.
	 */
	render(spobs: Actor[], projs: Actor[], actors: Actor[], player: Player) {
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
	renderBackground(player: Player) {
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
	renderActor(player: Player, actor: Actor) {
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
		this.ctx.translate(
			actor.x - player.x + ((this.cnv.width - 150)  / 2),
			actor.y - player.y + ( this.cnv.height        / 2)
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

	mapRender() {
		const ZOOM = this.mapZoom;
		const OFFSET_X = this.mapOffsetX;
		const OFFSET_Y = this.mapOffsetY;
		const RADIUS = Math.max(3, ZOOM * 2);

		// Clear background
		this.mapCtx.fillStyle = '#1a1a1a';
		this.mapCtx.fillRect(0, 0, this.mapCnv.width, this.mapCnv.height);

		// First pass: Draw all hyperspace links (edges)
		const drawnLinks = new Set<string>();
		for (let [systId, syst] of Object.entries(Data.systs)) {
			for (let link of syst.links) {
				if (link === -1) continue;

				const linkSyst = Data.systs[link];
				if (linkSyst) {
					// Create a unique key for this edge (sorted IDs to avoid duplicates)
					const edgeKey = [syst.id, linkSyst.id].sort().join('-');
					if (drawnLinks.has(edgeKey)) continue;
					drawnLinks.add(edgeKey);

					// Draw hyperspace link
					this.mapCtx.beginPath();
					this.mapCtx.moveTo(
						ZOOM * syst.x + OFFSET_X,
						ZOOM * syst.y + OFFSET_Y
					);
					this.mapCtx.lineTo(
						ZOOM * linkSyst.x + OFFSET_X,
						ZOOM * linkSyst.y + OFFSET_Y
					);
					this.mapCtx.strokeStyle = '#4a7c8a';
					this.mapCtx.lineWidth = Math.max(1, ZOOM * 0.3);
					this.mapCtx.stroke();
				}
			}
		}

		// Second pass: Draw all systems (nodes)
		for (let [systId, syst] of Object.entries(Data.systs)) {
			const centerX = ZOOM * syst.x + OFFSET_X;
			const centerY = ZOOM * syst.y + OFFSET_Y;
			const isCurrentSystem = syst.id === this.currentSystemId;
			const isSelectedSystem = syst.id === this.selectedSystemId;

			// Draw hollow dark blue circle
			this.mapCtx.beginPath();
			this.mapCtx.arc(centerX, centerY, RADIUS, 0, 2 * Math.PI);
			this.mapCtx.strokeStyle = '#2a5a7a';
			this.mapCtx.lineWidth = Math.max(1.5, ZOOM * 0.5);
			this.mapCtx.stroke();

			// Fill current system with light blue
			if (isCurrentSystem) {
				this.mapCtx.fillStyle = '#4a9ed6';
				this.mapCtx.fill();
			}

			// Draw green box around selected system
			if (isSelectedSystem) {
				const boxSize = RADIUS * 2.5;
				this.mapCtx.strokeStyle = '#00ff00';
				this.mapCtx.lineWidth = Math.max(2, ZOOM * 0.7);
				this.mapCtx.strokeRect(
					centerX - boxSize / 2,
					centerY - boxSize / 2,
					boxSize,
					boxSize
				);
			}

			// Draw system name
			this.mapCtx.fillStyle = '#fff';
			this.mapCtx.font = `${Math.max(8, ZOOM * 5)}px sans-serif`;
			this.mapCtx.fillText(
				syst.name,
				centerX + RADIUS + 2,
				centerY + RADIUS / 2
			);
		}
	}
}
