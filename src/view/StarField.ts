"use strict";

export default class StarField {
	private xStar: number[] = [];
	private yStar: number[] = [];
	private nStar: number = 50;

	readonly w = 800;
	readonly h = 600;


	constructor(private ctx: CanvasRenderingContext2D) {
		this.init(0, 0);
	}

	/**
	 * Fill screen with stars.
	 * @param {*} px X Center of screen.
	 * @param {*} py Y Center of screen.
	 */
	private init(px, py) {
		for (var i = 0; i < this.nStar; i++) {
	 		this.xStar.push( (Math.random() * this.w) + px);
	 		this.yStar.push( (Math.random() * this.h) + py);
		}
	}

	public render(px, py, zoom = 1.0) {
		// Expand viewport based on zoom - when zoomed out, show more stars
		const viewportWidth = this.w / zoom;
		const viewportHeight = this.h / zoom;

		for (var i = 0; i < this.nStar; i++) {
			// Wrap stars around expanded viewport centered on player
			const offsetX = this.xStar[i] - px;
			const offsetY = this.yStar[i] - py;

			if (offsetX < -viewportWidth / 2)  { this.xStar[i] += viewportWidth; }
			if (offsetX > viewportWidth / 2)   { this.xStar[i] -= viewportWidth; }
			if (offsetY < -viewportHeight / 2) { this.yStar[i] += viewportHeight; }
			if (offsetY > viewportHeight / 2)  { this.yStar[i] -= viewportHeight; }

			// Render star at screen position - moves with player/camera
			const screenX = (this.xStar[i] - px) * zoom + (this.w - 150) / 2;
			const screenY = (this.yStar[i] - py) * zoom + this.h / 2;

			this.ctx.fillRect(screenX, screenY, 1, 1);
		}
	}
	
	// WRAP (temporary)
	/*var me = stage.actors[0];
	if (me.x < 0) { me.x = c.width; }
	if (me.y < 0) { me.y = c.height; }
	if (me.x > c.width) { me.x = 0; }
	if (me.y > c.height) { me.y = 0; }*/
	
}

