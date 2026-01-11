"use strict";

export default class StarField {
	private xStar: number[] = [];
	private yStar: number[] = [];
	private nStar: number = 50;

	readonly viewportWidth = 800;
	readonly viewportHeight = 600;


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
	 		this.xStar.push( (Math.random() * this.viewportWidth) + px);
	 		this.yStar.push( (Math.random() * this.viewportHeight) + py);
		}
	}

	public render(px, py, zoom = 1.0) {
		// Calculate visible area in game coordinates (expands when zoomed out)

		for (var i = 0; i < this.nStar; i++) {
			// Wrap stars at the edges of the visible viewport
			if ( (this.xStar[i] - px) < 0)                    { this.xStar[i] += this.viewportWidth; }
			if ( (this.xStar[i] - px) > this.viewportWidth)   { this.xStar[i] -= this.viewportWidth; }
			if ( (this.yStar[i] - py) < 0)                    { this.yStar[i] += this.viewportHeight; }
			if ( (this.yStar[i] - py) > this.viewportHeight)  { this.yStar[i] -= this.viewportHeight; }

			// // Render star at screen position (accounting for 150px sidebar)
			// const screenX = (this.xStar[i] - px) * zoom + (800 - 150) / 2;
			// const screenY = (this.yStar[i] - py) * zoom + 600 / 2;

			// this.ctx.fillRect(screenX, screenY, 1, 1);

			this.ctx.fillRect(
				this.xStar[i] - px,
				this.yStar[i] - py,
				1, 1
			);
		}
	}
	
	// WRAP (temporary)
	/*var me = stage.actors[0];
	if (me.x < 0) { me.x = c.width; }
	if (me.y < 0) { me.y = c.height; }
	if (me.x > c.width) { me.x = 0; }
	if (me.y > c.height) { me.y = 0; }*/
	
}

