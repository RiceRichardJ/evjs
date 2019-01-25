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
	render(player, actors, spobs, cnv) {
		this.chevrons(player, cnv);
		this.ctx.fillStyle = '#888';
		this.ctx.fillRect(650, 0, 150, 485);
		this.radar(player, actors, spobs);
		this.levels(player);
		this.nav(player);
		this.weap(player);
		this.target(player);
		this.cargo();
	}

	/**
	 * Minimap/Radar
	 */
	radar(player, actors, spobs) {
		this.ctx.fillStyle = '#000';
		this.ctx.fillRect(655, 5, 140, 140);

		// Draw all ship
		// for (var i = actors.length - 1; i >= 0; i--) {
		for (var blip of spobs.concat(actors)) {
			this.ctx.fillStyle = 'white';
			var mapX = (blip.x - player.x) / 50 + 725;
			var mapY = (blip.y - player.y) / 50 + 75;

			if (mapX < 655 || mapX > 655+140 ||
				mapY < 5   || mapY >   5+140) {
				continue;
			}

			if (blip.className == "Ship") {
				this.ctx.fillRect(mapX, mapY, 1, 1);
			}
			if (blip.className == "Spob") {
				//this.ctx.fillRect(mapX, mapY, 3, 3);
				this.ctx.beginPath();
				this.ctx.arc(mapX, mapY, 2, 0, 2 * Math.PI, false);
				this.ctx.lineWidth = 0.4;
				this.ctx.strokeStyle = 'white';
				this.ctx.stroke();
			}
		}

		// Draw Self
		this.ctx.fillStyle = '#aff';
		this.ctx.fillRect(724, 74, 1, 1);

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
	nav(player) {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 195, 140, 40);

		this.ctx.fillStyle = '#03900E';
		let nav = player.ai.nav;
		if (nav) {
			this.ctx.moveTo(655, 0);
			this.ctx.textAlign = 'center';
			this.ctx.fillText(nav.name, 655 + 70, 217);
		} else {
			this.ctx.fillText("Nav System Off", 687, 217);
		}
		this.ctx.textAlign = 'start';
	}

	// Secondaries
	weap(player) {
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 240, 140, 20);

		this.ctx.fillStyle = '#03900E';
		if (player.weapInd > -1) {
			var weapName = player.weapons[player.weapInd].type.name;
			var weapAmmo = player.weapons[player.weapInd].ammo;
			this.ctx.fillText(weapName + " - " + weapAmmo, 674, 253);
		} else {
			this.ctx.fillText("No Secondary Weapon", 674, 253);
		}
	}

	// Target
	target(player) {
		this.ctx.font='12px sans-serif';
		this.ctx.fillStyle = '#022101';
		this.ctx.fillRect(655, 265, 140, 120);

		this.ctx.fillStyle = '#03900E';
		if (player && player.ai.target && !player.ai.target.dead) {
			var target = player.ai.target;
			this.ctx.textAlign = "center"; 
			this.ctx.fillText( target.type.name, 725, 280);
			try {
				this.ctx.drawImage(target.targetImg, 661, 290);
			} catch (e) {
				console.log(e);
				console.log(player);
				console.log(target);
				console.log(target.targetImg);
			}
			this.ctx.textAlign = "left"; 
			if (target.disabled) {
				this.ctx.fillText("Disabled", 660, 380);
			} else if (target.shield < 1) {
				this.ctx.fillText("Armor: " + this.armorPercentage(target) + "%", 660, 380);
			} else {
				this.ctx.fillText("Shield: " + this.shieldPercentage(target) + "%", 660, 380);
			}
			this.ctx.fillText( target.ai.govt, 750, 380);
		} else {
			this.targetText = "No Target";
			this.ctx.fillText(this.targetText, 703, 320);
		}
		this.ctx.font='10px sans-serif';
	}

	shieldPercentage(actor) {
		return Math.round((actor.shield / actor.shieldMax) * 100);
	}
	armorPercentage(actor) {
		return Math.round((actor.armor / actor.armorMax) * 100);
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
	chevrons(player, cnv) {
		if (player.ai.target && !player.ai.target.dead) {
			this.box(cnv, player, player.ai.target, '#88f');
		}
		if (player.ai.nav) {
			this.box(cnv, player, player.ai.nav,    '#ff8');
		}
	}

	box(cnv, player, actor, color) {
		this.ctx.save();
		this.ctx.setTransform(1,0,0,1,0,0);
		this.ctx.translate(
			actor.x - player.x + ((cnv.width - 150)  / 2),
			actor.y - player.y + ( cnv.height        / 2)
		);
		
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = 2;
		this.ctx.strokeRect(-50, -50, 100, 100);
		
		this.ctx.restore();
	}
}
