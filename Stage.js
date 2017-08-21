define(['./Actor', './Sidebar', './StarField'], function(Actor, Sidebar, StarField){

	/**
	 * CLASS: Stage.
	 * Manages Actors(data), and renders them with Canvas.
	 */
	function Stage(canvas) {
		this.cnv    = canvas,
		this.ctx    = canvas.getContext("2d"),
		this.actors = [],
		this.hud    = new Sidebar(this.ctx);
		this.stars  = new StarField(this.ctx);

		/**
		 * Act out and render each Actor.
		 */
		this.action = function() {

			var player = this.actors[0];
			this.stars.render(player.x, player.y);

			for (var i = 1; i < this.actors.length; i++) {
				// does this mean suicide would skip the next actor?
				this.actors[i].act(this.actors);
				this.render(this.actors[i]);
			}
			// Player last = player on top.
			this.actors[0].act(this.actors);
			this.render(this.actors[0]);

			this.hud.render(this.actors);
		},

		/**
		 * Render a given Actor.
		 */
		this.render = function(actor) {
			var img = actor.sprite;
			if (!img.src) {
				console.log("NO IMAGE");
				this.ctx.fillStyle = '#0f0';
				this.ctx.fillRect(this.x-1, this.y-1, 3, 3);
				this.ctx.fillStyle = 'white';
				return;
			}

			var player = this.actors[0];

			this.ctx.save();
			this.ctx.setTransform(1,0,0,1,0,0);
			this.ctx.translate(
				actor.x - player.x + ((this.cnv.width - 150)  / 2),
				actor.y - player.y + ( this.cnv.height        / 2)
			);

			var rotation = actor.thrust.degrees + 90;
			var angleInRadians = rotation * Math.PI / 180;
			this.ctx.rotate(angleInRadians);

			this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
			this.ctx.restore();
		}
	};
	
	return Stage;
	
});