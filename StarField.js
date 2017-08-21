define([], function(){
	function Starfield(ctx) {
		this.xStar = [];
		this.yStar = [];
		this.nStar = 50;
		this.ctx = ctx;
	}

	Starfield.prototype.init = function(px, py) {
		for (var i = 0; i < this.nStar; i++) {
	 		this.xStar.push( (Math.random() * 800) + px);
	 		this.yStar.push( (Math.random() * 600) + py);
		}
	}

	Starfield.prototype.render = function(px, py) {
		for (var i = 0; i < this.nStar; i++) {
			if ( (this.xStar[i] - px) < 0)   { this.xStar[i] += 800; }
			if ( (this.xStar[i] - px) > 800) { this.xStar[i] -= 800; }
			if ( (this.yStar[i] - py) < 0)   { this.yStar[i] += 600; }
			if ( (this.yStar[i] - py) > 600) { this.yStar[i] -= 600; }

			this.ctx.fillRect(
				this.xStar[i] - px,
				this.yStar[i] - py,
				1, 1
			);
		}
	}

	return Starfield;
});

