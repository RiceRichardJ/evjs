define(['./Actor', './Sidebar', './StarField', './Vector'], function(Actor, Sidebar, StarField, Vector){

	/**
	 * CLASS: Stage.
	 * Manages Actors(data), and renders them with Canvas.
	 */
	function Stage(canvas) {
		this.cnv    = canvas;
		this.ctx    = canvas.getContext("2d");
		this.actors = [];
		this.hud    = new Sidebar(this.ctx);
		this.stars  = new StarField(this.ctx);

		/**
		 * Act out and render each Actor.
		 */
		this.action = function() {
			var player = this.actors[0];
			this.stars.render(player.x, player.y);

			for (var i = 1; i < this.actors.length; i++) {
				// Render then Act b/c Act can suicide. Can't render if not exist.
				this.render(this.actors[i]);
				this.actors[i].act(this.actors);
			}
			// Player last = player on top.
			this.actors[0].act(this.actors);
			this.render(this.actors[0]);

			this.hud.render(this.actors, this.cnv);
			this.collision();
			this.pruneDead(this.actors);
		}

		/**
		 * Render a given Actor.
		 * TODO: Make this take a function as a parameter (callback)
		 * where that function renders, while this function simply
		 * set's the coordinates properly.
		 */
		this.render = function(actor) {
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

			var img = actor.sprite;
			if (img.src) {
				this.ctx.drawImage(img, (img.width / -2), (img.height / -2));
			} else {
				//console.log("NO IMAGE " + actor.x +","+ actor.y);
				this.ctx.fillStyle = '#0f0';
				this.ctx.fillRect(-1, -1, 3, 3);
				this.ctx.fillStyle = 'white';
			} 
			
			this.ctx.restore();
		}
		
		this.collision = function() {
			for (var i = 1; i < this.actors.length; i++) {
				if ( this.actors[i].className != 'Proj' ) { continue; }
				var proj = this.actors[i];
				
				for (var j = 1; j < this.actors.length; j++) {
					var ship = this.actors[j];
					
					if (this.actors[j].className == 'Ship') {
						var dist = Vector.distance(
							proj.x,
							proj.y,
							ship.x,
							ship.y);
						if (dist < 20) {
							ship.hit(proj);
							this.boom(ship.x, ship.y, proj.type.damage);
							proj.die(this.actors);
						}
					}
				}
			}
		}
		
		this.pruneDead = function(actors) {
			for (var i = 0; i < this.actors.length; i++) {
				var actor = this.actors[i];
				if (actor.remove) {
					this.boom(actor.x, actor.y, actor.type.shields);
					actors.splice( actors.indexOf(actor), 1 );
				}
			}
		}
		
		this.boom = function(x, y, dmg) {
			var player = this.actors[0];

			this.ctx.save();
			this.ctx.setTransform(1,0,0,1,0,0);
			this.ctx.translate(
				x - player.x + ((this.cnv.width - 150)  / 2),
				y - player.y + ( this.cnv.height        / 2)
			);
			
			this.ctx.beginPath();
			this.ctx.arc(0, 0, dmg, 0, 2 * Math.PI, false);
			this.ctx.fillStyle = 'white';
			this.ctx.fill();
			
			this.ctx.restore();
		}
	};
	
	return Stage;
	
});