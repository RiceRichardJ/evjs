"use strict";

import Economy from '../model/Economy';

/**
 * SpaceportUI handles all spaceport modal interfaces (commodity exchange,
 * outfitter, shipyard, bar, refuel).
 */
export default class SpaceportUI {

	/**
	 * Initialize commodity exchange UI when modal is opened.
	 * @param {Player} player - Player object
	 * @param {object} spob - Current planet/station object
	 */
	static initCommodityExchange(player, spob) {
		// Update player info display
		this.updateCommodityInfo(player);

		// Get available commodities
		const commodities = Economy.getAvailableCommodities(spob);

		// Populate table
		const tbody = $('#commodityTableBody');
		tbody.empty();

		if (commodities.length === 0) {
			tbody.append('<tr><td colspan="5">No commodities available at this location.</td></tr>');
			return;
		}

		// Sort commodities by name
		commodities.sort((a, b) => a.commodity.localeCompare(b.commodity));

		for (const comm of commodities) {
			const inHold = player.cargo[comm.commodity] || 0;
			const priceClass = comm.priceLevel === 'high' ? 'text-danger' :
			                   comm.priceLevel === 'low' ? 'text-success' : '';

			const row = $(`
				<tr>
					<td><strong>${this.capitalizeFirst(comm.commodity)}</strong> <span class="${priceClass}">(${comm.priceLevel})</span></td>
					<td>${inHold} tons</td>
					<td>${comm.buyPrice} cr</td>
					<td>${comm.sellPrice} cr</td>
					<td>
						<button class="btn btn-xs btn-success commodity-buy" data-commodity="${comm.commodity}" data-price="${comm.buyPrice}">Buy</button>
						<button class="btn btn-xs btn-warning commodity-sell" data-commodity="${comm.commodity}" data-price="${comm.sellPrice}" ${inHold === 0 ? 'disabled' : ''}>Sell</button>
					</td>
				</tr>
			`);
			tbody.append(row);
		}

		// Wire up buy/sell buttons
		$('.commodity-buy').off('click').on('click', function() {
			const commodity = $(this).data('commodity');
			const price = $(this).data('price');
			SpaceportUI.handleBuy(player, commodity, price, spob);
		});

		$('.commodity-sell').off('click').on('click', function() {
			const commodity = $(this).data('commodity');
			const price = $(this).data('price');
			SpaceportUI.handleSell(player, commodity, price, spob);
		});
	}

	/**
	 * Handle buy transaction with quantity prompt.
	 */
	static handleBuy(player, commodity, price, spob) {
		const availableSpace = player.cargoSpace - player.cargoUsed;
		const maxAffordable = Math.floor(player.credits / price);
		const maxBuy = Math.min(availableSpace, maxAffordable);

		if (maxBuy === 0) {
			this.showMessage('Not enough credits or cargo space!', 'error');
			return;
		}

		const quantity = prompt(`Buy how many tons of ${commodity}?\nMax: ${maxBuy} tons`);
		if (quantity === null || quantity === '') return;

		const qty = parseInt(quantity);
		if (isNaN(qty) || qty <= 0) {
			this.showMessage('Invalid quantity!', 'error');
			return;
		}

		const result = Economy.buyCommodity(player, commodity, qty, price);
		this.showMessage(result.message, result.success ? 'success' : 'error');

		if (result.success) {
			this.initCommodityExchange(player, spob); // Refresh UI
		}
	}

	/**
	 * Handle sell transaction with quantity prompt.
	 */
	static handleSell(player, commodity, price, spob) {
		const inHold = player.cargo[commodity] || 0;
		if (inHold === 0) {
			this.showMessage(`No ${commodity} to sell!`, 'error');
			return;
		}

		const quantity = prompt(`Sell how many tons of ${commodity}?\nYou have: ${inHold} tons`);
		if (quantity === null || quantity === '') return;

		const qty = parseInt(quantity);
		if (isNaN(qty) || qty <= 0) {
			this.showMessage('Invalid quantity!', 'error');
			return;
		}

		const result = Economy.sellCommodity(player, commodity, qty, price);
		this.showMessage(result.message, result.success ? 'success' : 'error');

		if (result.success) {
			this.initCommodityExchange(player, spob); // Refresh UI
		}
	}

	/**
	 * Update player info display (credits, cargo).
	 */
	static updateCommodityInfo(player) {
		$('#commodityCredits').text(player.credits.toLocaleString());
		$('#commodityCargo').text(player.cargoUsed);
		$('#commodityCargoMax').text(player.cargoSpace);
	}

	/**
	 * Show a message to the user.
	 */
	static showMessage(message, type = 'info') {
		const msgDiv = $('#commodityMessage');
		msgDiv.text(message);
		msgDiv.css('color', type === 'error' ? 'red' : type === 'success' ? 'green' : 'black');

		// Clear message after 3 seconds
		setTimeout(() => msgDiv.text(''), 3000);
	}

	/**
	 * Capitalize first letter of a string.
	 */
	static capitalizeFirst(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	/**
	 * Initialize refuel UI.
	 * @param {Player} player - Player object
	 */
	static initRefuel(player) {
		const fuelCost = 1; // 1 credit per fuel unit
		const fuelNeeded = player.fuelMax - player.fuel;
		const refuelCost = fuelNeeded * fuelCost;

		$('#refuelCurrent').text(Math.round(player.fuel));
		$('#refuelMax').text(player.fuelMax);
		$('#refuelCredits').text(player.credits.toLocaleString());
		$('#refuelCost').text(refuelCost.toLocaleString());

		// Clear previous message
		$('#refuelMessage').text('');

		// Disable button if already full or can't afford
		const $refuelButton = $('#refuelButton');
		if (fuelNeeded <= 0) {
			$refuelButton.prop('disabled', true);
			$('#refuelMessage').text('Fuel tank is full').css('color', 'green');
		} else if (player.credits < refuelCost) {
			$refuelButton.prop('disabled', true);
			$('#refuelMessage').text('Not enough credits!').css('color', 'red');
		} else {
			$refuelButton.prop('disabled', false);
		}

		// Wire up refuel button
		$refuelButton.off('click').on('click', function() {
			SpaceportUI.handleRefuel(player);
		});
	}

	/**
	 * Handle refuel transaction.
	 */
	static handleRefuel(player) {
		const fuelCost = 1;
		const fuelNeeded = player.fuelMax - player.fuel;
		const refuelCost = fuelNeeded * fuelCost;

		if (fuelNeeded <= 0) {
			$('#refuelMessage').text('Fuel tank is already full!').css('color', 'red');
			return;
		}

		if (player.credits < refuelCost) {
			$('#refuelMessage').text('Not enough credits!').css('color', 'red');
			return;
		}

		// Execute refuel
		player.credits -= refuelCost;
		player.fuel = player.fuelMax;

		$('#refuelMessage').text(`Refueled for ${refuelCost} credits`).css('color', 'green');

		// Refresh UI
		this.initRefuel(player);
	}

	/**
	 * Initialize landing modal with planet info.
	 * @param {Player} player - Player object
	 * @param {object} spob - Current planet/station object
	 * @param {object} descData - Description data
	 */
	static initLandingModal(player, spob, descData) {
		console.log("initLandingModal, descData =", descData)

		// Find description for this spob
		const desc = descData.find(d => d.id === spob.id);
		const description = desc ? desc.description : "A mysterious location in space.";

		// Update modal content
		const descEl = document.getElementById('spaceportDescription');
		console.log(`description =`, description);
		console.log(`descEl =`, descEl);
		if (descEl) {
			descEl.textContent = description;
		}

		// TODO: Update planet image based on spob.type
		// TODO: Show/hide facility buttons based on spob.flagsDecoded.facilities
	}
}
