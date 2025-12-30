"use strict";

import Data from '../model/Data';
import Model from '../Model';
import Player from '../model/Player';

/**
 * StarMapUI handles the entire star map interface including:
 * - Map canvas rendering
 * - System selection and navigation
 * - Mouse/keyboard interaction
 * - System information panel
 *
 * See modals.html
 */
export default class StarMapUI {
	private mapCtx: CanvasRenderingContext2D;
	private mapCnv: HTMLCanvasElement;

	// Map view state
	public mapZoom: number = 2.0;
	public mapOffsetX: number = 200;
	public mapOffsetY: number = 100;
	private isDragging: boolean = false;
	private dragStartX: number = 0;
	private dragStartY: number = 0;
	public selectedSystemId: number | null = null;
	public currentSystemId: number = 129; // Default to Sol
	private selectedLinkIndex: number = -1; // Index of selected linked system for Tab cycling
	private playerRef: Player | null = null; // Reference to player for map navigation
	private model: Model;

	constructor(mapCnv: HTMLCanvasElement, model: Model) {
		this.mapCnv = mapCnv;
		this.mapCtx = mapCnv.getContext("2d")!;
		this.model = model;

		// Setup map canvas interaction
		this.setupMapInteraction();
	}

	private setupMapInteraction() {
		let mouseDownX = 0;
		let mouseDownY = 0;
		let mouseDownTime = 0;

		this.mapCnv.addEventListener('mousedown', (e: MouseEvent) => {
			this.isDragging = true;
			this.dragStartX = e.offsetX - this.mapOffsetX;
			this.dragStartY = e.offsetY - this.mapOffsetY;
			mouseDownX = e.offsetX;
			mouseDownY = e.offsetY;
			mouseDownTime = Date.now();
			this.mapCnv.style.cursor = 'grabbing';
		});

		this.mapCnv.addEventListener('mousemove', (e: MouseEvent) => {
			if (this.isDragging) {
				this.mapOffsetX = e.offsetX - this.dragStartX;
				this.mapOffsetY = e.offsetY - this.dragStartY;
			}
		});

		this.mapCnv.addEventListener('mouseup', (e: MouseEvent) => {
			const wasDragging = this.isDragging;
			this.isDragging = false;
			this.mapCnv.style.cursor = 'grab';

			// Detect click vs drag: if mouse didn't move much and time was short, it's a click
			const mouseMoved = Math.abs(e.offsetX - mouseDownX) > 5 || Math.abs(e.offsetY - mouseDownY) > 5;
			const timeSinceDown = Date.now() - mouseDownTime;

			if (wasDragging && !mouseMoved && timeSinceDown < 300) {
				// It's a click! Find which system was clicked
				this.handleSystemClick(e.offsetX, e.offsetY, e.shiftKey, this.playerRef || undefined);
			}
		});

		this.mapCnv.addEventListener('mouseleave', () => {
			this.isDragging = false;
			this.mapCnv.style.cursor = 'grab';
		});

		// Mouse wheel zoom
		this.mapCnv.addEventListener('wheel', (e: WheelEvent) => {
			e.preventDefault();

			// Zoom in smaller increments for smoother scrolling
			const zoomFactor = 1.05; // Even slower for finer control
			const oldZoom = this.mapZoom;

			if (e.deltaY < 0) {
				// Scroll up = zoom in
				this.mapZoom = Math.min(this.mapZoom * zoomFactor, 10);
			} else {
				// Scroll down = zoom out
				this.mapZoom = Math.max(this.mapZoom / zoomFactor, 0.5);
			}

			// Zoom towards mouse cursor position
			const rect = this.mapCnv.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;

			// Adjust offset to zoom towards cursor
			const zoomRatio = this.mapZoom / oldZoom;
			this.mapOffsetX = mouseX - (mouseX - this.mapOffsetX) * zoomRatio;
			this.mapOffsetY = mouseY - (mouseY - this.mapOffsetY) * zoomRatio;
		});

		// Set initial cursor
		this.mapCnv.style.cursor = 'grab';
	}

	public zoomIn() {
		this.mapZoom = Math.min(this.mapZoom * 1.2, 10);
	}

	public zoomOut() {
		this.mapZoom = Math.max(this.mapZoom / 1.2, 0.5);
	}

	public cycleLinkedSystem() {
		const currentSyst = Data.systs[this.currentSystemId];
		if (!currentSyst || currentSyst.links.length === 0) {
			return;
		}

		// Filter out -1 (unused) links
		const validLinks = currentSyst.links.filter(link => link !== -1);
		if (validLinks.length === 0) {
			return;
		}

		// Cycle to next valid link
		this.selectedLinkIndex = (this.selectedLinkIndex + 1) % validLinks.length;
		const selectedSystemId = validLinks[this.selectedLinkIndex];

		// Update selected system
		this.selectedSystemId = selectedSystemId;

		// Dispatch custom event for system selection
		const event = new CustomEvent('systemSelected', {
			detail: { systemId: selectedSystemId }
		});
		window.dispatchEvent(event);

		// Also dispatch a custom event for linked system selection (to add to hyperNav)
		const linkedEvent = new CustomEvent('linkedSystemSelected', {
			detail: { systemId: selectedSystemId }
		});
		window.dispatchEvent(linkedEvent);
	}

	public resetMapSelection() {
		this.selectedLinkIndex = -1;
		this.selectedSystemId = null;
	}

	public setPlayer(player: Player) {
		this.playerRef = player;
	}

	private handleSystemClick(clickX: number, clickY: number, shiftKey: boolean, player?: Player) {
		// Convert click coordinates to map space
		const mapX = (clickX - this.mapOffsetX) / this.mapZoom;
		const mapY = (clickY - this.mapOffsetY) / this.mapZoom;

		// Find nearest system within click threshold
		let nearestSystem: any = null;
		let nearestDistance = Infinity;
		const clickThreshold = 10 / this.mapZoom; // Scales with zoom

		for (let [systId, syst] of Object.entries(Data.systs)) {
			const dx = syst.x - mapX;
			const dy = syst.y - mapY;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < clickThreshold && distance < nearestDistance) {
				nearestDistance = distance;
				nearestSystem = syst;
			}
		}

		if (nearestSystem) {
			this.selectedSystemId = nearestSystem.id;
			console.log("Selected system:", nearestSystem.name, shiftKey ? "(shift-click)" : "");

			// Dispatch custom event for system selection
			const event = new CustomEvent('systemSelected', {
				detail: { systemId: nearestSystem.id }
			});
			window.dispatchEvent(event);

			// Determine which system we need to check linkage against
			let checkAgainstSystemId = this.currentSystemId;
			if (shiftKey && player) {
				const hyperNav = player.getHyperNav();
				if (hyperNav.length > 0) {
					// Check against the last system in the planned path
					checkAgainstSystemId = hyperNav[hyperNav.length - 1];
				}
			}

			// Check if this system is linked to the reference system
			const refSyst = Data.systs[checkAgainstSystemId];
			const isLinked = refSyst && refSyst.links.includes(nearestSystem.id);

			if (shiftKey) {
				// For shift-click, ONLY allow if linked
				if (isLinked) {
					const linkedEvent = new CustomEvent('linkedSystemSelected', {
						detail: {
							systemId: nearestSystem.id,
							shiftKey: true
						}
					});
					window.dispatchEvent(linkedEvent);
				} else {
					console.log("Cannot add to path: system is not linked");
				}
			} else if (isLinked) {
				// Regular click on linked system: replace path
				const linkedEvent = new CustomEvent('linkedSystemSelected', {
					detail: {
						systemId: nearestSystem.id,
						shiftKey: false
					}
				});
				window.dispatchEvent(linkedEvent);
			}
		}
	}

	public render(player?: Player) {
		const ZOOM = this.mapZoom;
		const OFFSET_X = this.mapOffsetX;
		const OFFSET_Y = this.mapOffsetY;
		const RADIUS = Math.max(3, ZOOM * 2);

		// TODO - this whole menu menu system is jacked up
		this.currentSystemId = this.model.currentSystem.syst.id;

		// Clear background
		this.mapCtx.fillStyle = '#1a1a1a';
		this.mapCtx.fillRect(0, 0, this.mapCnv.width, this.mapCnv.height);

		// First pass: Draw all hyperspace links (edges)
		const drawnLinks = new Set<string>();
		for (let [systId, syst] of Object.entries(Data.systs)) {
			for (let link of syst.links) {
				if (link === -1) continue;

				const linkSyst = Data.systs[link];
				if (linkSyst) {
					// Create a unique key for this edge (sorted IDs to avoid duplicates)
					const edgeKey = [syst.id, linkSyst.id].sort().join('-');
					if (drawnLinks.has(edgeKey)) continue;
					drawnLinks.add(edgeKey);

					// Draw hyperspace link
					this.mapCtx.beginPath();
					this.mapCtx.moveTo(
						ZOOM * syst.x + OFFSET_X,
						ZOOM * syst.y + OFFSET_Y
					);
					this.mapCtx.lineTo(
						ZOOM * linkSyst.x + OFFSET_X,
						ZOOM * linkSyst.y + OFFSET_Y
					);
					this.mapCtx.strokeStyle = '#4a7c8a';
					this.mapCtx.lineWidth = Math.max(1, ZOOM * 0.3);
					this.mapCtx.stroke();
				}
			}
		}

		// Draw bright green edge to currently selected linked system
		if (this.selectedSystemId !== null) {
			const currentSyst = Data.systs[this.currentSystemId];
			const selectedSyst = Data.systs[this.selectedSystemId];
			if (currentSyst && selectedSyst && currentSyst.links.includes(this.selectedSystemId)) {
				this.mapCtx.beginPath();
				this.mapCtx.moveTo(
					ZOOM * currentSyst.x + OFFSET_X,
					ZOOM * currentSyst.y + OFFSET_Y
				);
				this.mapCtx.lineTo(
					ZOOM * selectedSyst.x + OFFSET_X,
					ZOOM * selectedSyst.y + OFFSET_Y
				);
				this.mapCtx.strokeStyle = '#00ff00';
				this.mapCtx.lineWidth = Math.max(2, ZOOM * 0.5);
				this.mapCtx.stroke();
			}
		}

		// Draw double-thick green path for hyperNav (only for multi-jump paths)
		if (player) {
			const hyperNav = player.getHyperNav();
			// Only draw thick path when there are multiple systems (shift+click path planning)
			if (hyperNav.length > 1) {
				// Start from current system
				let prevSystemId = this.currentSystemId;

				for (const systemId of hyperNav) {
					const prevSyst = Data.systs[prevSystemId];
					const nextSyst = Data.systs[systemId];

					if (prevSyst && nextSyst) {
						this.mapCtx.beginPath();
						this.mapCtx.moveTo(
							ZOOM * prevSyst.x + OFFSET_X,
							ZOOM * prevSyst.y + OFFSET_Y
						);
						this.mapCtx.lineTo(
							ZOOM * nextSyst.x + OFFSET_X,
							ZOOM * nextSyst.y + OFFSET_Y
						);
						this.mapCtx.strokeStyle = '#00ff00';
						this.mapCtx.lineWidth = Math.max(4, ZOOM * 1.0); // Double thickness
						this.mapCtx.stroke();

						prevSystemId = systemId;
					}
				}
			}
		}

		// Second pass: Draw all systems (nodes)
		for (let [systId, syst] of Object.entries(Data.systs)) {
			const centerX = ZOOM * syst.x + OFFSET_X;
			const centerY = ZOOM * syst.y + OFFSET_Y;
			const isCurrentSystem = syst.id === this.currentSystemId;
			const isSelectedSystem = syst.id === this.selectedSystemId;

			// Draw hollow dark blue circle
			this.mapCtx.beginPath();
			this.mapCtx.arc(centerX, centerY, RADIUS, 0, 2 * Math.PI);
			this.mapCtx.strokeStyle = '#2a5a7a';
			this.mapCtx.lineWidth = Math.max(1.5, ZOOM * 0.5);
			this.mapCtx.stroke();

			// Fill current system with light blue
			if (isCurrentSystem) {
				this.mapCtx.fillStyle = '#4a9ed6';
				this.mapCtx.fill();
			}

			// Draw green box around selected system
			if (isSelectedSystem) {
				const boxSize = RADIUS * 2.5;
				this.mapCtx.strokeStyle = '#00ff00';
				this.mapCtx.lineWidth = Math.max(2, ZOOM * 0.7);
				this.mapCtx.strokeRect(
					centerX - boxSize / 2,
					centerY - boxSize / 2,
					boxSize,
					boxSize
				);
			}

			// Draw system name
			this.mapCtx.fillStyle = '#fff';
			this.mapCtx.font = `${Math.max(8, ZOOM * 5)}px sans-serif`;
			this.mapCtx.fillText(
				syst.name,
				centerX + RADIUS + 2,
				centerY + RADIUS / 2
			);
		}
	}

	/**
	 * Update system info panel when a system is selected.
	 * @param systemId - ID of the selected system
	 */
	public updateSystemInfo(systemId: number | null) {
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
	private capitalizeFirst(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
