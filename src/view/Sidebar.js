"use strict";

/**
 * Sidebar.
 */
export default class Sidebar {
	constructor(CanvasRenderingContext2D) {
		this.ctx = CanvasRenderingContext2D;
		this.targetText = "No Target";
	}//879F85

	// Render
	render(player, actors, cnv) {
		this.chevrons(player, actors, cnv);
		this.ctx.fillStyle = '#888';
		this.ctx.fillRect(650, 0, 150, 485);
		this.radar(player, actors);
		this.levels(player);
		this.nav();
		this.weap();
		this.target(player);
		this.cargo();
	}

	// Minimap/Radar
	radar(player, actors) {
		this.ctx.fillStyle = '#000';
		this.ctx.fillRect(655, 5, 140, 140);

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
	levels(me) {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 150, 140, 40);

		this.ctx.fillStyle = '#03900E';

		var shPerc = me.shield / me.shieldMax;
		var shFull = 88;
		var shAmt  = shPerc * shFull;
		this.ctx.fillText("Shield: ", 660, 165);
		this.ctx.fillStyle = '#004C00';     // border
		this.ctx.fillRect(700, 158, 90, 8);
		this.ctx.fillStyle = '#022101';     // bg
		this.ctx.fillRect(701, 159, 88, 6);
		this.ctx.fillStyle = '#03900E';     // fill
		this.ctx.fillRect(701, 159, shAmt, 6);

		this.ctx.fillText("Fuel: ", 660, 180);
		this.ctx.fillStyle = '#004C00';
		this.ctx.fillRect(700, 174, 90, 8);
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(701, 175, 88, 6);
		this.ctx.fillStyle = '#03900E';
		this.ctx.fillRect(701, 175, 88, 6);
	}

	// Nav
	nav() {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 195, 140, 40);

		this.ctx.fillStyle = '#03900E';
		this.ctx.fillText("Nav System Off", 687, 217);
	}

	// Secondaries
	weap() {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 240, 140, 20);

		this.ctx.fillStyle = '#03900E';
		this.ctx.fillText("No Secondary Weapon", 674, 253);
	}

	// Target
	target(player) {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 265, 140, 120);

		this.ctx.fillStyle = '#03900E';
		if (player && player.ai.target && !player.ai.target.dead) {
			this.ctx.fillText(player.ai.target.name,    703, 320);
			this.ctx.fillText(this.shieldPercentage(player.ai.target) + "%", 760, 370);
		} else {
			this.targetText = "No Target";
			this.ctx.fillText(this.targetText, 703, 320);
		}
	}

	shieldPercentage(actor) {
		return Math.round((actor.shield / actor.shieldMax) * 100);
	}

	// Cargo
	cargo() {
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
	
	// Chevrons
	chevrons(player, actors, cnv) {
		if (!player.ai.target || player.ai.target.dead) { return; }

		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);
		this.ctx.translate(
			player.ai.target.x - player.x + ((cnv.width - 150)  / 2),
			player.ai.target.y - player.y + ( cnv.height        / 2)
		);
		
		this.ctx.strokeStyle = '#88f';
		this.ctx.lineWidth = 2;
		this.ctx.strokeRect(-50, -50, 100, 100);
		
		this.ctx.restore();
	}

}