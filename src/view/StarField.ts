"use strict";

export default class StarField {
	private xStar: number[] = [];
	private yStar: number[] = [];
	private baseStarCount: number = 50;
	private currentZoom: number = 1.0;

	readonly w = 800;
	readonly h = 600;


	constructor(private ctx: CanvasRenderingContext2D) {
		this.init(0, 0, 1.0);
	}

	/**
	 * Fill screen with stars based on viewport size.
	 * @param {*} px X Center of screen.
	 * @param {*} py Y Center of screen.
	 * @param {*} zoom Current zoom level.
	 */
	private init(px, py, zoom) {
		const viewportWidth = this.w / zoom;
		const viewportHeight = this.h / zoom;

		// Calculate stars needed to maintain density (scales with 1/zoom²)
		const starsNeeded = Math.floor(this.baseStarCount / (zoom * zoom));

		for (var i = 0; i < starsNeeded; i++) {
	 		this.xStar.push((Math.random() * viewportWidth) - viewportWidth / 2 + px);
	 		this.yStar.push((Math.random() * viewportHeight) - viewportHeight / 2 + py);
		}
	}

	/**
	 * Adjust star count based on zoom level.
	 */
	private adjustStarCount(px, py, zoom) {
		const viewportWidth = this.w / zoom;
		const viewportHeight = this.h / zoom;
		const starsNeeded = Math.floor(this.baseStarCount / (zoom * zoom));

		// Add stars if we need more
		while (this.xStar.length < starsNeeded) {
			this.xStar.push((Math.random() * viewportWidth) - viewportWidth / 2 + px);
			this.yStar.push((Math.random() * viewportHeight) - viewportHeight / 2 + py);
		}

		// Remove stars if we have too many
		if (this.xStar.length > starsNeeded) {
			this.xStar.length = starsNeeded;
			this.yStar.length = starsNeeded;
		}
	}

	public render(px, py, zoom = 1.0) {
		// Adjust star count if zoom changed
		if (zoom !== this.currentZoom) {
			this.adjustStarCount(px, py, zoom);
			this.currentZoom = zoom;
		}

		// Expand viewport based on zoom - when zoomed out, show more stars
		const viewportWidth = this.w / zoom;
		const viewportHeight = this.h / zoom;

		for (var i = 0; i < this.xStar.length; i++) {
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

