// import ? as ?
define([], function(){

	/**
	 * Sidebar.
	 */
	function Sidebar(CanvasRenderingContext2D) {
		this.ctx = CanvasRenderingContext2D;
		this.targetText = "No Target";
	}//879F85

	// Render
	Sidebar.prototype.render = function(actors) {
		this.ctx.fillStyle = '#888';
		this.ctx.fillRect(650, 0, 150, 485);
		this.radar(actors);
		this.levels();
		this.nav();
		this.weap();
		this.target();
		this.cargo();
		
		
	}

	// Minimap/Radar
	Sidebar.prototype.radar = function(actors) {
		this.ctx.fillStyle = '#000';
		this.ctx.fillRect(655, 5, 140, 140);

		var player = actors[0];
		for (var i = actors.length - 1; i >= 0; i--) {
			this.ctx.fillStyle = 'white';
			var mapX = (actors[i].x - player.x) / 50 + 725;
			var mapY = (actors[i].y - player.y) / 50 + 75;

			if (mapX < 655 || mapX > 655+140 ||
				mapY < 5   || mapY >   5+140) {
				continue;
			}

			if (actors[i].className == "Ship") {
				this.ctx.fillRect(mapX, mapY, 1, 1);
			}
			if (actors[i].className == "Spob") {
				//this.ctx.fillRect(mapX, mapY, 3, 3);
				this.ctx.beginPath();
				this.ctx.arc(mapX, mapY, 2, 0, 2 * Math.PI, false);
				this.ctx.lineWidth = 0.3;
				this.ctx.strokeStyle = 'white';
				this.ctx.stroke();
			}
		}

		// Prevents radar objects from drawing over-top of the border.
		//this.ctx.strokeStyle = 'rgba(255,0,0,0.5)';
		this.ctx.strokeStyle = '#888';
		this.ctx.lineWidth = 5;
		this.ctx.strokeRect(652.5, 2.5, 145, 145);
	}

	// Levels
	Sidebar.prototype.levels = function() {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 150, 140, 40);

		this.ctx.fillStyle = '#03900E';

		this.ctx.fillText("Shield: ", 660, 165);
		this.ctx.fillStyle = '#004C00';
		this.ctx.fillRect(700, 158, 90, 8);
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(701, 159, 88, 6);
		this.ctx.fillStyle = '#03900E';
		this.ctx.fillRect(701, 159, 88, 6);

		this.ctx.fillText("Fuel: ", 660, 180);
		this.ctx.fillStyle = '#004C00';
		this.ctx.fillRect(700, 174, 90, 8);
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(701, 175, 88, 6);
		this.ctx.fillStyle = '#03900E';
		this.ctx.fillRect(701, 175, 88, 6);
	}

	// Nav
	Sidebar.prototype.nav = function() {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 195, 140, 40);

		this.ctx.fillStyle = '#03900E';
		this.ctx.fillText("Nav System Off", 687, 217);
	}

	// Secondaries
	Sidebar.prototype.weap = function() {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 240, 140, 20);

		this.ctx.fillStyle = '#03900E';
		this.ctx.fillText("No Secondary Weapon", 674, 253);
	}

	// Target
	Sidebar.prototype.target = function(str) {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 265, 140, 120);

		this.ctx.fillStyle = '#03900E';
		if (str) {
			this.targetText = str;
		}
		this.ctx.fillText(this.targetText, 703, 320);
	}

	// Cargo
	Sidebar.prototype.cargo = function() {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 390, 140, 90);

		this.ctx.fillStyle = '#07811C';
		this.ctx.fillText("Free: ", 725, 405);
		this.ctx.fillStyle = '#49DD31';
		this.ctx.fillText("10", 750, 405);
		this.ctx.fillStyle = '#07811C';
		this.ctx.fillText("Credits:", 725, 460);
		this.ctx.fillStyle = '#49DD31';
		this.ctx.fillText("10,000", 735, 473);
	}

	return Sidebar;
});