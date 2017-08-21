define([], function(){
	function Starfield(stage, ctx) {
		this.xStar = [];
		this.yStar = [];
		this.nStar = 500;
		this.stage = stage;
		this.ctx = ctx;
	}

	Starfield.prototype.init = function(px, py) {
		console.log(px +","+ py);
		for (var i = 0; i < this.nStar; i++) {
	 		this.xStar.push( (Math.random() * 800) + px - 400);
	 		this.yStar.push( (Math.random() * 600) + py - 300);

			console.log(this.xStar[i] +":"+ this.yStar[i]);
		}

		/*this.ctx.strokeStyle = '#800';
		this.ctx.lineWidth = 1;
		this.ctx.strokeRect(px - 400, py - 300, 800, 600);*/
	}

			// WRAP (temporary)
		/*var me = stage.actors[0];
		if (me.x < 0) { me.x = c.width; }
		if (me.y < 0) { me.y = c.height; }
		if (me.x > c.width) { me.x = 0; }
		if (me.y > c.height) { me.y = 0; }*/

	Starfield.prototype.boundStars = function(px, py) {
		this.stage.ctx.fillStyle = 'white';
		
		for (var i = 0; i < this.nStar; i++) {
			//console.log(this.xStar[i] +":"+ this.yStar[i]);
			/*this.stage.ctx.fillRect(
				this.xStar[i] - 0 + 0, //((stage.cnv.width - 150)  / 2),
				this.yStar[i] - 0 + 0, //( stage.cnv.height        / 2),
				3, 3);*/
			}

		//console.log(px +","+ py);
		var halfScrW = 400;// + ((this.stage.cnv.width - 150)  / 2);
		var halfScrH = 300;// +  (this.stage.cnv.height        / 2);

		/*this.stage.ctx.strokeStyle = '#800';
		this.stage.ctx.lineWidth = 1;
		this.stage.ctx.strokeRect(1, 1, 80, 60);	*/


		//console.log((px - halfScrW) +","+ (px + halfScrW) 
		//			+"|"+ (py - halfScrH) +","+ (py + halfScrH));
		for (var i = 0; i < this.nStar; i++) {
			//console.log(this.xStar[i] +"|"+ this.yStar[i]);
			if (this.xStar[i] < px - halfScrW) { console.log("LEFT"); this.xStar[i] += 800; }
			//if (this.xStar[i] > px + halfScrW) { this.xStar[i] -= 800; }

			//if (this.yStar[i] < py - halfScrH) { this.yStar[i] += 600; }
			//if (this.yStar[i] < py + halfScrH) { this.yStar[i] -= 600; }
		}
	}

	return Starfield;
});

// // import Vector as Vector
// define([], function(){

// 	/**
// 	 * StarField CLASS.
// 	 * @argument {int} degrees
// 	 * @argument {int} magnitude
// 	 */
// 	function Starfield(stage) {
// 		this.xStar = [];
// 		this.yStar = [];
// 		this.nStar = 500;
// 	}

// 	/**
// 	 *
// 	 */
// 	Starfield.prototype.init = function(px, py) {
// 		for (var i = 0; i < this.nStar; i++) {
// 			this.populateEdge(px, py);
// 		}
// 		for (var i = 0; i < this.nStar / 9; i++) {
// 			this.populateCenter(px, py);
// 		}
// 	}

// 	/**
// 	 *
// 	 */
// 	Starfield.prototype.boundStars = function(px, py) {
// 		var halfScrW = 800 * 3 / 2;//400 + ((stage.cnv.width - 150)  / 2);
// 		var halfScrH = 600 * 3 / 2;//300 +  (stage.cnv.height        / 2);
// 		for (var i = 0; i < this.nStar; i++) {
// 			if ( (this.xStar[i] < (px - halfScrW)) || ((px + halfScrW) < this.xStar[i]) ||
// 			     (this.yStar[i] < (py - halfScrH)) || ((py + halfScrH) < this.yStar[i]) ) {
// 				this.xStar.splice(i, 1);
// 				this.yStar.splice(i, 1);
// 				this.populateEdge(px, py);
// 				i--;
// 			}
// 		}
// 	}

// 	/**
// 	 *
// 	 */
// 	Starfield.prototype.populateCenter = function(px, py) {
// 		this.xStar.push( (Math.random() * 800) + px + 0);
// 		this.yStar.push( (Math.random() * 600) + py + 0);
// 	}

// 	/**
// 	 * 0 - 800 - 1600 - 2400		0 - 600 - 1200 - 1800
// 	 * 0 - 400 - 1200 - 1600		0 - 300 -  900 - 1200
// 	 */
// 	Starfield.prototype.populateEdge = function(px, py) {
// 		var newX = 1200;
// 		var newY = 900;
// 		while ( (800 < newX && newX < 1600) &&
// 		        (600 < newY && newY < 1200) ) {
// 			newX = Math.random() * 800 * 3;
// 			newY = Math.random() * 600 * 3;
// 		}

// 		this.xStar.push(newX + px - 800);
// 		this.yStar.push(newY + py - 600);
// 	}

// 	return Starfield;
// });