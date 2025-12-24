"use strict";

/**
 * Economy class handles commodity pricing and trading.
 */
export default class Economy {

	/**
	 * Base prices for commodities (in credits per ton)
	 */
	static BASE_PRICES = {
		food: 100,
		industrial: 200,
		medical: 500,
		luxury: 400,
		metal: 150,
		equipment: 300
	};

	/**
	 * Price multipliers for each price level
	 */
	static PRICE_MODIFIERS = {
		none: 0,      // Not traded
		low: 0.75,    // Cheap (planet produces this)
		med: 1.0,     // Normal price
		high: 1.5     // Expensive (planet needs this)
	};

	/**
	 * Calculate the buy price for a commodity at a specific planet.
	 * @param {string} commodity - Commodity name (food, industrial, etc.)
	 * @param {object} spob - Planet/station object with flagsDecoded.commodities
	 * @returns {number} Price per ton, or 0 if not available
	 */
	static getBuyPrice(commodity, spob) {
		if (!spob.flagsDecoded || !spob.flagsDecoded.commodities) {
			return 0;
		}

		const priceLevel = spob.flagsDecoded.commodities[commodity];
		if (!priceLevel || priceLevel === 'none') {
			return 0;
		}

		const basePrice = this.BASE_PRICES[commodity] || 0;
		const modifier = this.PRICE_MODIFIERS[priceLevel] || 1.0;
		return Math.round(basePrice * modifier);
	}

	/**
	 * Calculate the sell price for a commodity (75% of buy price).
	 * @param {string} commodity - Commodity name
	 * @param {object} spob - Planet/station object
	 * @returns {number} Sell price per ton, or 0 if not available
	 */
	static getSellPrice(commodity, spob) {
		const buyPrice = this.getBuyPrice(commodity, spob);
		return Math.round(buyPrice * 0.75);
	}

	/**
	 * Get all available commodities at a planet with their prices.
	 * @param {object} spob - Planet/station object
	 * @returns {Array} Array of {commodity, priceLevel, buyPrice, sellPrice}
	 */
	static getAvailableCommodities(spob) {
		if (!spob.flagsDecoded || !spob.flagsDecoded.commodities) {
			return [];
		}

		const commodities = [];
		const commodityData = spob.flagsDecoded.commodities;

		for (const [commodity, priceLevel] of Object.entries(commodityData)) {
			if (priceLevel && priceLevel !== 'none') {
				commodities.push({
					commodity: commodity,
					priceLevel: priceLevel,
					buyPrice: this.getBuyPrice(commodity, spob),
					sellPrice: this.getSellPrice(commodity, spob)
				});
			}
		}

		return commodities;
	}

	/**
	 * Execute a buy transaction.
	 * @param {Player} player - Player object
	 * @param {string} commodity - Commodity to buy
	 * @param {number} quantity - Tons to buy
	 * @param {number} price - Price per ton
	 * @returns {object} {success: boolean, message: string}
	 */
	static buyCommodity(player, commodity, quantity, price) {
		const totalCost = quantity * price;
		const availableSpace = player.cargoSpace - player.cargoUsed;

		// Validation
		if (quantity <= 0) {
			return { success: false, message: "Invalid quantity" };
		}
		if (quantity > availableSpace) {
			return { success: false, message: `Not enough cargo space (${availableSpace} tons available)` };
		}
		if (totalCost > player.credits) {
			return { success: false, message: `Not enough credits (need ${totalCost} cr)` };
		}

		// Execute transaction
		player.credits -= totalCost;
		player.cargo[commodity] += quantity;
		player.cargoUsed += quantity;

		return {
			success: true,
			message: `Bought ${quantity} tons of ${commodity} for ${totalCost} credits`
		};
	}

	/**
	 * Execute a sell transaction.
	 * @param {Player} player - Player object
	 * @param {string} commodity - Commodity to sell
	 * @param {number} quantity - Tons to sell
	 * @param {number} price - Price per ton
	 * @returns {object} {success: boolean, message: string}
	 */
	static sellCommodity(player, commodity, quantity, price) {
		const totalEarnings = quantity * price;

		// Validation
		if (quantity <= 0) {
			return { success: false, message: "Invalid quantity" };
		}
		if (quantity > player.cargo[commodity]) {
			return { success: false, message: `Not enough ${commodity} in hold` };
		}

		// Execute transaction
		player.credits += totalEarnings;
		player.cargo[commodity] -= quantity;
		player.cargoUsed -= quantity;

		return {
			success: true,
			message: `Sold ${quantity} tons of ${commodity} for ${totalEarnings} credits`
		};
	}
}
