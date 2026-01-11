"use strict";

export default class StarField {
	xStar: number[] = [];
	yStar: number[] = [];
	nStar: number = 50;
	ctx: CanvasRenderingContext2D;

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;
		this.xStar = [];
		this.yStar = [];
		this.nStar = 50;
		this.init(0, 0);
	}

	/**
	 * Fill screen with stars.
	 * @param {*} px X Center of screen.
	 * @param {*} py Y Center of screen.
	 */
	init(px, py) {
		for (var i = 0; i < this.nStar; i++) {
	 		this.xStar.push( (Math.random() * 800) + px);
	 		this.yStar.push( (Math.random() * 600) + py);
		}
	}

	render(px, py, zoom = 1.0) {
		// Calculate visible area in game coordinates (expands when zoomed out)
		const viewportWidth = 800 / zoom;
		const viewportHeight = 600 / zoom;

		for (var i = 0; i < this.nStar; i++) {
			// Wrap stars at the edges of the visible viewport
			if ( (this.xStar[i] - px) < -viewportWidth / 2)  { this.xStar[i] += viewportWidth; }
			if ( (this.xStar[i] - px) > viewportWidth / 2)   { this.xStar[i] -= viewportWidth; }
			if ( (this.yStar[i] - py) < -viewportHeight / 2) { this.yStar[i] += viewportHeight; }
			if ( (this.yStar[i] - py) > viewportHeight / 2)  { this.yStar[i] -= viewportHeight; }

			// Render star at screen position (accounting for 150px sidebar)
			const screenX = (this.xStar[i] - px) * zoom + (800 - 150) / 2;
			const screenY = (this.yStar[i] - py) * zoom + 600 / 2;

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

