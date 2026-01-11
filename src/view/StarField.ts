"use strict";

export default class StarField {
	private xStar: number[] = [];
	private yStar: number[] = [];

	readonly w = 800;
	readonly h = 600;

	// Maximum viewport size (at 0.1x zoom)
	readonly maxViewportW = 8000;
	readonly maxViewportH = 6000;

	constructor(private ctx: CanvasRenderingContext2D) {
		this.init(0, 0);
	}

	/**
	 * Pre-generate all stars for maximum viewport (8000x6000).
	 * @param {*} px X Center of screen.
	 * @param {*} py Y Center of screen.
	 */
	private init(px, py) {
		// Generate enough stars for the full 8000x6000 area
		// Using same density as original: 50 stars per 800x600 = 0.104 stars per 1000 sq units
		// For 8000x6000 = 48M sq units, we need ~5000 stars
		const starCount = 5000;

		for (var i = 0; i < starCount; i++) {
	 		this.xStar.push((Math.random() * this.maxViewportW) - this.maxViewportW / 2 + px);
	 		this.yStar.push((Math.random() * this.maxViewportH) - this.maxViewportH / 2 + py);
		}
	}

	public render(px, py, zoom = 1.0) {
		// Wrap stars around the maximum viewport (8000x6000) centered on player
		for (var i = 0; i < this.xStar.length; i++) {
			const offsetX = this.xStar[i] - px;
			const offsetY = this.yStar[i] - py;

			// Wrap at 8000x6000 boundaries
			if (offsetX < -this.maxViewportW / 2)  { this.xStar[i] += this.maxViewportW; }
			if (offsetX > this.maxViewportW / 2)   { this.xStar[i] -= this.maxViewportW; }
			if (offsetY < -this.maxViewportH / 2) { this.yStar[i] += this.maxViewportH; }
			if (offsetY > this.maxViewportH / 2)  { this.yStar[i] -= this.maxViewportH; }

			// Calculate screen position
			const screenX = (this.xStar[i] - px) * zoom + (this.w - 150) / 2;
			const screenY = (this.yStar[i] - py) * zoom + this.h / 2;

			// Only render if on screen
			if (screenX >= 0 && screenX < this.w - 150 && screenY >= 0 && screenY < this.h) {
				this.ctx.fillRect(screenX, screenY, 1, 1);
			}
		}
	}

	// WRAP (temporary)
	/*var me = stage.actors[0];
	if (me.x < 0) { me.x = c.width; }
	if (me.y < 0) { me.y = c.height; }
	if (me.x > c.width) { me.x = 0; }
	if (me.y > c.height) { me.y = 0; }*/

}
