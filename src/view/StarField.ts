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

	public render(px, py) {
		for (var i = 0; i < this.nStar; i++) {
			if ( (this.xStar[i] - px) < 0)       { this.xStar[i] += this.w; }
			if ( (this.xStar[i] - px) > this.w)  { this.xStar[i] -= this.w; }
			if ( (this.yStar[i] - py) < 0)       { this.yStar[i] += this.h; }
			if ( (this.yStar[i] - py) > this.h)  { this.yStar[i] -= this.h; }

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

