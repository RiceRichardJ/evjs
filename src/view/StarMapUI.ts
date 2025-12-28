"use strict";

import Data from '../model/Data';
import Model from '../Model';

/**
 * StarMapUI handles the star map system information panel.
 * Updates the right panel and bottom section when a system is selected.
 */
export default class StarMapUI {

	/**
	 * Update system info panel when a system is selected.
	 * @param systemId - ID of the selected system
	 * @param model - Game model (for accessing player data if needed)
	 */
	static updateSystemInfo(systemId: number | null, model: Model) {
		const nameEl = document.getElementById('systemName');
		const govtEl = document.getElementById('systemGovernment');
		const legalEl = document.getElementById('systemLegalStatus');
		const goodsEl = document.getElementById('systemGoods');
		const servicesEl = document.getElementById('systemServices');
		const portsEl = document.getElementById('systemPorts');
		const hazardsEl = document.getElementById('systemHazards');

		if (!nameEl || !govtEl || !legalEl || !goodsEl || !servicesEl || !portsEl || !hazardsEl) {
			console.error("StarMapUI: Could not find required DOM elements");
			return;
		}

		// Clear if no system selected
		if (systemId === null) {
			nameEl.textContent = 'Select a system';
			govtEl.textContent = '';
			legalEl.textContent = '';
			goodsEl.textContent = '';
			servicesEl.textContent = '';
			portsEl.textContent = '';
			hazardsEl.textContent = '';
			return;
		}

		const syst = Data.systs[systemId];
		if (!syst) {
			console.error(`StarMapUI: System ${systemId} not found`);
			return;
		}

		// System name
		nameEl.textContent = syst.name;
		nameEl.style.margin = '0 0 10px 0';
		nameEl.style.color = '#fff';

		// Government
		let govtName = 'Independent';
		if (syst.government >= 0 && Data.govts[syst.government]) {
			govtName = Data.govts[syst.government].name || 'Unknown';
		}
		govtEl.innerHTML = `<strong>Government:</strong> ${govtName}`;
		govtEl.style.marginBottom = '8px';

		// Legal status (placeholder - TODO: integrate with player legal record system)
		legalEl.innerHTML = `<strong>Legal Status:</strong> <span style="color: #4a9ed6;">Clean Record</span>`;
		legalEl.style.marginBottom = '8px';

		// Get spobs in this system
		const systemSpobs = syst.spobs
			.filter(spobId => spobId !== -1)
			.map(spobId => Data.spobs[spobId])
			.filter(spob => spob);

		// Aggregate goods traded (commodities)
		const goodsSet = new Set<string>();
		for (const spob of systemSpobs) {
			if (spob.flagsDecoded?.commodities) {
				for (const [commodity, priceLevel] of Object.entries(spob.flagsDecoded.commodities)) {
					if (priceLevel !== 'none') {
						goodsSet.add(this.capitalizeFirst(commodity));
					}
				}
			}
		}
		if (goodsSet.size > 0) {
			goodsEl.innerHTML = `<strong>Goods Traded:</strong> ${Array.from(goodsSet).join(', ')}`;
		} else {
			goodsEl.innerHTML = `<strong>Goods Traded:</strong> <span style="color: #999;">None</span>`;
		}
		goodsEl.style.marginBottom = '8px';

		// Aggregate services offered (facilities)
		const servicesSet = new Set<string>();
		for (const spob of systemSpobs) {
			if (spob.flagsDecoded?.facilities) {
				const facilities = spob.flagsDecoded.facilities;
				if (facilities.hasCommodityExchange) servicesSet.add('Trading');
				if (facilities.canOutfit) servicesSet.add('Outfitting');
				if (facilities.canBuyShips) servicesSet.add('Shipyard');
				if (facilities.hasBar) servicesSet.add('Bar');
				if (facilities.hasMissionComputer) servicesSet.add('Missions');
			}
		}
		if (servicesSet.size > 0) {
			servicesEl.innerHTML = `<strong>Services:</strong> ${Array.from(servicesSet).join(', ')}`;
		} else {
			servicesEl.innerHTML = `<strong>Services:</strong> <span style="color: #999;">None</span>`;
		}
		servicesEl.style.marginBottom = '8px';

		// Ports (spobs)
		if (systemSpobs.length > 0) {
			const portNames = systemSpobs.map(spob => spob.name).join(', ');
			portsEl.innerHTML = `<strong>Ports:</strong> ${portNames}`;
		} else {
			portsEl.innerHTML = `<strong>Ports:</strong> <span style="color: #999;">None</span>`;
		}
		portsEl.style.marginBottom = '5px';

		// Navigation hazards
		const hazards: string[] = [];
		if (syst.asteroids > 0) {
			const asteroidTypes = {
				1: 'Small asteroids',
				2: 'Large asteroids',
				3: 'Small and large asteroids'
			};
			hazards.push(asteroidTypes[syst.asteroids] || 'Asteroids');
		}
		if (syst.interference > 0) {
			hazards.push(`Sensor interference (level ${syst.interference})`);
		}
		if (hazards.length > 0) {
			hazardsEl.innerHTML = `<strong>Navigation Hazards:</strong> <span style="color: #ff9933;">${hazards.join(', ')}</span>`;
		} else {
			hazardsEl.innerHTML = `<strong>Navigation Hazards:</strong> <span style="color: #999;">None</span>`;
		}
	}

	/**
	 * Capitalize first letter of a string.
	 */
	private static capitalizeFirst(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
