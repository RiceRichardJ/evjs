#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Input and output directories
const INPUT_DIR = path.join(__dirname, 'in');
const OUTPUT_DIR = path.join(__dirname, 'out');
const RESOURCE_FORK_DIR = '/Users/ricerichardj/home/Escape Velocity/2025/Escape Velocity Files/Escape Velocity 1.0.5 ƒ/EV Data.out';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// CSV filename to resource type mapping
const FILE_MAPPINGS = {
  'dësc.csv': 'desc',
  'düde.csv': 'dude',
  'flët.csv': 'flet',
  'gövt.csv': 'govt',
  'jünk.csv': 'junk',
  'mïsn.csv': 'misn',
  'nëbu.csv': 'nebu',
  'öops.csv': 'oops',
  'oütf.csv': 'outf',
  'përs.csv': 'pers',
  'shïp.csv': 'ship',
  'spöb.csv': 'spob',
  'sÿst.csv': 'syst',
  'wëap.csv': 'weap'
};

// Helper to parse numeric values
function parseNum(val) {
  if (val === '' || val === undefined || val === null) return '';
  const num = Number(val);
  return isNaN(num) ? val : num;
}

// Helper to convert hex string to decimal
function hexToDecimal(val) {
  if (val === '' || val === undefined || val === null) return '';
  if (typeof val === 'string' && val.startsWith('0x')) {
    const decimal = parseInt(val, 16);
    return isNaN(decimal) ? '' : decimal;
  }
  return parseNum(val);
}

// Helper to convert decimal to hex format (0x0000)
function decimalToHex(val) {
  if (val === '' || val === undefined || val === null) return '';
  const num = parseInt(val);
  if (isNaN(num)) return '';
  return '0x' + num.toString(16).toUpperCase().padStart(4, '0');
}

// Helper to parse resource fork text file for misn
function parseMisnTextFile(id) {
  try {
    // Find the file matching this ID
    const files = fs.readdirSync(RESOURCE_FORK_DIR);
    const filename = files.find(f => f.startsWith(`EV Data_mïsn_${id}_`));

    if (!filename) {
      console.warn(`  Warning: No text file found for misn ID ${id}`);
      return {};
    }

    const filePath = path.join(RESOURCE_FORK_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');

    const data = {};
    const lines = content.split('\n');

    for (const line of lines) {
      const match = line.match(/^\s*(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();

        // Parse numeric or hex values
        if (value.startsWith('0x')) {
          data[key] = value; // Keep hex as string
        } else {
          const num = Number(value);
          data[key] = isNaN(num) ? value : num;
        }
      }
    }

    return data;
  } catch (error) {
    console.warn(`  Warning: Error reading text file for misn ID ${id}:`, error.message);
    return {};
  }
}

// Helper to parse resource fork text file for dude
function parseDudeTextFile(id) {
  try {
    // Find the file matching this ID
    const files = fs.readdirSync(RESOURCE_FORK_DIR);
    const filename = files.find(f => f.startsWith(`EV Data_düde_${id}_`));

    if (!filename) {
      console.warn(`  Warning: No text file found for dude ID ${id}`);
      return {};
    }

    const filePath = path.join(RESOURCE_FORK_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');

    const data = {};
    const lines = content.split('\n');

    for (const line of lines) {
      const match = line.match(/^\s*(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();

        // Parse numeric or hex values
        if (value.startsWith('0x')) {
          data[key] = value; // Keep hex as string
        } else {
          const num = Number(value);
          data[key] = isNaN(num) ? value : num;
        }
      }
    }

    return data;
  } catch (error) {
    console.warn(`  Warning: Error reading text file for dude ID ${id}:`, error.message);
    return {};
  }
}

// Helper to parse resource fork text file for junk
function parseJunkTextFile(id) {
  try {
    // Find the file matching this ID
    const files = fs.readdirSync(RESOURCE_FORK_DIR);
    const filename = files.find(f => f.startsWith(`EV Data_jünk_${id}_`));

    if (!filename) {
      console.warn(`  Warning: No text file found for junk ID ${id}`);
      return {};
    }

    const filePath = path.join(RESOURCE_FORK_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');

    const data = {};
    const lines = content.split('\n');

    for (const line of lines) {
      const match = line.match(/^\s*(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();

        // Parse numeric or hex values
        if (value.startsWith('0x')) {
          data[key] = value; // Keep hex as string
        } else {
          const num = Number(value);
          data[key] = isNaN(num) ? value : num;
        }
      }
    }

    return data;
  } catch (error) {
    console.warn(`  Warning: Error reading text file for junk ID ${id}:`, error.message);
    return {};
  }
}

// Helper to parse resource fork text file for oops
function parseOopsTextFile(id) {
  try {
    // Find the file matching this ID
    const files = fs.readdirSync(RESOURCE_FORK_DIR);
    const filename = files.find(f => f.startsWith(`EV Data_öops_${id}_`));

    if (!filename) {
      console.warn(`  Warning: No text file found for oops ID ${id}`);
      return {};
    }

    const filePath = path.join(RESOURCE_FORK_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');

    const data = {};
    const lines = content.split('\n');

    for (const line of lines) {
      const match = line.match(/^\s*(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();

        // Parse numeric or hex values
        if (value.startsWith('0x')) {
          data[key] = value; // Keep hex as string
        } else {
          const num = Number(value);
          data[key] = isNaN(num) ? value : num;
        }
      }
    }

    return data;
  } catch (error) {
    console.warn(`  Warning: Error reading text file for oops ID ${id}:`, error.message);
    return {};
  }
}

// Helper to parse resource fork text file for outf
function parseOutfTextFile(id) {
  try {
    // Find the file matching this ID
    const files = fs.readdirSync(RESOURCE_FORK_DIR);
    const filename = files.find(f => f.startsWith(`EV Data_oütf_${id}_`));

    if (!filename) {
      console.warn(`  Warning: No text file found for outf ID ${id}`);
      return {};
    }

    const filePath = path.join(RESOURCE_FORK_DIR, filename);
    const content = fs.readFileSync(filePath, 'utf-8');

    const data = {};
    const lines = content.split('\n');

    for (const line of lines) {
      const match = line.match(/^\s*(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();

        // Parse numeric or hex values
        if (value.startsWith('0x')) {
          data[key] = value; // Keep hex as string
        } else {
          const num = Number(value);
          data[key] = isNaN(num) ? value : num;
        }
      }
    }

    return data;
  } catch (error) {
    console.warn(`  Warning: Error reading text file for outf ID ${id}:`, error.message);
    return {};
  }
}

// Helper to filter sentinel values (-1) from arrays
function filterSentinels(arr) {
  const filtered = [];
  for (const val of arr) {
    if (val === -1 || val === '') break;
    filtered.push(val);
  }
  return filtered;
}

// Helper to decode booty flags
function decodeBootyFlags(flags) {
  const hexVal = typeof flags === 'string' && flags.startsWith('0x')
    ? parseInt(flags, 16)
    : parseInt(flags);

  const booty = [];
  if (hexVal & 0x0001) booty.push('food');
  if (hexVal & 0x0002) booty.push('ind');
  if (hexVal & 0x0004) booty.push('med');
  if (hexVal & 0x0008) booty.push('lux');
  if (hexVal & 0x0010) booty.push('met');
  if (hexVal & 0x0020) booty.push('equ');
  if (hexVal & 0x0040) booty.push('money');
  return booty;
}

// Helper to decode info type flags for düde
function decodeInfoTypes(flags) {
  const hexVal = typeof flags === 'string' && flags.startsWith('0x')
    ? parseInt(flags, 16)
    : parseInt(flags);

  const types = [false, false, false, false];
  if (hexVal & 0x0001) types[0] = true; // Good prices
  if (hexVal & 0x0002) types[1] = true; // Disaster info
  if (hexVal & 0x0080) types[2] = true; // Unknown
  if (hexVal & 0x0004) types[3] = true; // Specific advice
  return types;
}

// Converter for nëbu resource
function convertNebu(row) {
  return {
    id: parseNum(row['ID']),
    name: row['Name'] || '',
    x: parseNum(row['Position X']),
    y: parseNum(row['Position Y']),
    w: parseNum(row['Size X']),
    h: parseNum(row['Size Y']),
    showNCB: row['ActiveOn'] || '',
    setWhenExplored: row['OnExplore'] || ''
  };
}

// Converter for düde resource
function convertDude(row) {
  // IMPORTANT: EVN export has wrong column labels! Actual mapping:
  // CSV 'Govt' → Ship1
  // CSV 'Flags' → Ship2 (hex, convert to decimal)
  // CSV 'InfoTypes' → Ship3 (hex, convert to decimal)
  // CSV 'Ship 1' → Ship4
  // CSV 'Ship 2' → Prob1
  // CSV 'Ship 3' → Prob2
  // CSV 'Ship 4' → Prob3
  // CSV 'Ship 5' → Prob4
  // CSV 'Ship 6' → Govt
  // CSV 'Ship 7' → Booty (decimal, convert to hex format)

  const id = parseNum(row['ID']);
  const textData = parseDudeTextFile(id);

  const shipTypes = [];
  const probability = [];

  // Ship1
  const ship1 = parseNum(row['Govt']);
  if (ship1 !== '' && ship1 !== -1) {
    shipTypes.push(ship1);
    probability.push(parseNum(row['Ship 2']) || 0); // Prob1
  }

  // Ship2 (hex to decimal)
  const ship2 = hexToDecimal(row['Flags']);
  if (ship2 !== '' && ship2 !== -1) {
    shipTypes.push(ship2);
    probability.push(parseNum(row['Ship 3']) || 0); // Prob2
  }

  // Ship3 (hex to decimal)
  const ship3 = hexToDecimal(row['InfoTypes']);
  if (ship3 !== '' && ship3 !== -1) {
    shipTypes.push(ship3);
    probability.push(parseNum(row['Ship 4']) || 0); // Prob3
  }

  // Ship4
  const ship4 = parseNum(row['Ship 1']);
  if (ship4 !== '' && ship4 !== -1) {
    shipTypes.push(ship4);
    probability.push(parseNum(row['Ship 5']) || 0); // Prob4
  }

  return {
    id,
    name: row['Name'] || '',
    aiType: parseNum(row['AI Type']),
    shipTypes,
    probability,
    government: parseNum(row['Ship 6']), // Actual govt column
    booty: decimalToHex(row['Ship 7']), // Convert to hex format
    infoTypes: textData.InfoTypes ?? -1  // From text file
  };
}

// Converter for sÿst resource
function convertSyst(row) {
  // Collect links (link1-link5)
  const links = [];
  for (let i = 1; i <= 5; i++) {
    const val = parseNum(row[`link${i}`]);
    if (val !== '' && val !== -1) {
      links.push(val);
    }
  }

  // Collect spobs (spob1-spob4)
  const spobs = [];
  for (let i = 1; i <= 4; i++) {
    const val = parseNum(row[`spob${i}`]);
    if (val !== '' && val !== -1) {
      spobs.push(val);
    }
  }

  // Collect dudes with probabilities (dude1-dude4, dudeProb1-dudeProb4)
  const dudes = [];
  for (let i = 1; i <= 4; i++) {
    const dudeVal = parseNum(row[`dude${i}`]);
    const probVal = parseNum(row[`dudeProb${i}`]);
    if (dudeVal !== '' && dudeVal !== -1) {
      dudes.push([dudeVal, probVal || 0]);
    }
  }

  const result = {
    id: parseNum(row['ID']),
    name: row['Name'] || '',
    x: parseNum(row['x']),
    y: parseNum(row['y']),
    links,
    spobs,
    dudes,
    avgShips: parseNum(row['avgShips']),
    government: parseNum(row['govt']),
    message: parseNum(row['message']),
    asteroids: parseNum(row['roids']),
    interference: parseNum(row['interference'])
  };

  // Add optional fields if they exist
  if (row['visbit']) result.visbit = parseNum(row['visbit']);

  return result;
}

// Converter for wëap resource
function convertWeap(row) {
  const result = {
    id: parseNum(row['ID']),
    name: row['Name'] || '',
    damage: [parseNum(row['Mass Damage']), parseNum(row['Energy Damage'])],
    reload: parseNum(row['Reload']),
    speed: parseNum(row['Speed']),
    duration: parseNum(row['Duration']),
    spread: parseNum(row['Inaccuracy']),
    explosion: parseNum(row['Explosion Type']),
    graphic: parseNum(row['Graphic']),
    sound: parseNum(row['Sound Type'])
  };

  // Add optional fields
  if (row['Ammo Type'] && parseNum(row['Ammo Type']) !== -1) {
    result.ammoType = parseNum(row['Ammo Type']);
  }
  if (row['Guidance']) {
    result.type = parseNum(row['Guidance']);
  }
  if (row['Impact']) {
    result.impact = parseNum(row['Impact']);
  }
  if (row['Prox Radius']) {
    result['prox-radius'] = parseNum(row['Prox Radius']);
  }
  if (row['Blast Radius']) {
    result['blast-radius'] = parseNum(row['Blast Radius']);
  }

  return result;
}

// Converter for mïsn resource
function convertMisn(row) {
  // For misn, we need to merge CSV data with text file data
  // The text files have all the correct fields, CSV is missing some
  const id = parseNum(row['ID']);
  const textData = parseMisnTextFile(id);

  // Use text file data as primary source
  return {
    id,
    name: row['Name'] || '',
    availStel: textData.AvailStel ?? parseNum(row['Avail Stellar']),
    availBitSet: textData.AvailBitSet ?? -1,  // Missing from CSV
    availLoc: textData.AvailLoc ?? parseNum(row['Avail Location']),
    availRecord: textData.AvailRecord ?? parseNum(row['Avail Record']),
    availRating: textData.AvailRating ?? parseNum(row['Avail Rating']),
    availRandom: textData.AvailRandom ?? parseNum(row['Avail Random']),
    travelStel: textData.TravelStel ?? parseNum(row['Travel Stellar']),
    returnStel: textData.ReturnStel ?? parseNum(row['Return Stellar']),
    cargoType: textData.CargoType ?? parseNum(row['Cargo Type']),
    cargoQty: textData.CargoQty ?? parseNum(row['Cargo Quantity']),
    pickupMode: textData.PickupMode ?? parseNum(row['Pickup Mode']),
    dropoffMode: textData.DropoffMode ?? parseNum(row['Dropoff Mode']),
    scanGovt: textData.ScanGovt ?? parseNum(row['Scan Mask']),
    failIfScan: textData.FailIfScan ?? 0,  // Missing from CSV
    payVal: textData.PayVal ?? parseNum(row['Pay Value']),
    shipCount: textData.ShipCount ?? parseNum(row['Ship Count']),
    shipSyst: textData.ShipSyst ?? parseNum(row['Ship System']),
    shipDude: textData.ShipDude ?? parseNum(row['Ship Dude']),
    shipGoal: textData.ShipGoal ?? parseNum(row['Ship Goal']),
    shipBehav: textData.ShipBehav ?? parseNum(row['Ship Behaviour']),
    shipNameID: textData.ShipNameID ?? parseNum(row['Ship Name']),
    compBitSet: textData.CompBitSet ?? parseNum(row['Ship Start']),
    compGovt: textData.CompGovt ?? parseNum(row['Comp Govt']),
    compReward: textData.CompReward ?? parseNum(row['Comp Reward']),
    failBitSet: textData.FailBitSet ?? -1,
    briefText: textData.BriefText ?? parseNum(row['Brief Text']),
    quickBrief: textData.QuickBrief ?? parseNum(row['Quick Brief Text']),
    loadCargText: textData.LoadCargText ?? parseNum(row['Load Text']),
    dropCargText: textData.DropCargText ?? parseNum(row['Drop Text']),
    compText: textData.CompText ?? parseNum(row['Comp Text']),
    failText: textData.FailText ?? parseNum(row['Fail Text']),
    timeLimit: textData.TimeLimit ?? parseNum(row['Time Limit']),
    canAbort: textData.CanAbort ?? parseNum(row['Can Abort']),
    unused: textData.Unused ?? -1,
    availBitClr: textData.AvailBitClr ?? -1,  // Missing from CSV
    auxShipCount: textData.AuxShipCount ?? parseNum(row['Aux Count']),
    auxShipDude: textData.AuxShipDude ?? parseNum(row['Aux Dude']),
    auxShipSyst: textData.AuxShipSyst ?? parseNum(row['Aux System']),
    compBitSet2: textData.CompBitSet2 ?? -1,  // Missing from CSV
    flags: textData.Flags ?? row['Flags 1'] ?? ''
  };
}

// Converter for jünk resource
function convertJunk(row) {
  // Use text file data as authoritative source
  const id = parseNum(row['ID']);
  const textData = parseJunkTextFile(id);

  return {
    id,
    name: row['Name'] || '',
    soldAt: textData.SoldAt ?? -1,
    boughtAt: textData.BoughtAt ?? -1,
    basePrice: textData.BasePrice ?? 0,
    flags: textData.Flags ?? '0x0000'
  };
}

// Converter for öops resource
function convertOops(row) {
  // Use text file data as authoritative source
  const id = parseNum(row['ID']);
  const textData = parseOopsTextFile(id);

  return {
    id,
    name: row['Name'] || '',
    stellar: textData.Stellar ?? parseNum(row['Stellar']),
    commodity: textData.Commodity ?? parseNum(row['Commodity']),
    priceDelta: textData.PriceDelta ?? parseNum(row['Price Change']),
    duration: textData.Duration ?? parseNum(row['Duration']),
    freq: textData.Freq ?? parseNum(row['Frequency']),
    missionBit: textData.MissionBit ?? -1  // Missing from CSV
  };
}

// Converter for oütf resource
function convertOutf(row) {
  // Use text file data as authoritative source
  const id = parseNum(row['ID']);
  const textData = parseOutfTextFile(id);

  return {
    id,
    name: row['Name'] || '',
    missionBit: textData.MissionBit ?? -1,
    mass: textData.Mass ?? parseNum(row['Mass']),
    techLevel: textData.TechLevel ?? parseNum(row['Tech Level']),
    modType: textData.ModType ?? parseNum(row['Mod Type']),
    modVal: textData.ModVal ?? parseNum(row['Mod Value']),
    max: textData.Max ?? parseNum(row['Maximum']),
    flags: textData.Flags ?? row['Flags'] ?? '',
    cost: textData.Cost ?? parseNum(row['Cost'])
  };
}

// Converter for gövt resource
function convertGovt(row) {
  // IMPORTANT: EVN export has wrong column labels! Actual mapping:
  // CSV 'Voice Type' → Unused (skip)
  // CSV 'Flags 1' → Flags
  // CSV 'Flags 2' → Ally (hex, convert to decimal)
  // CSV 'Scan Fine' → Enemy
  // CSV 'Crime Tolerance' → CrimeTol
  // CSV 'Smuggle Penalty' → SmugPenalty
  // CSV 'Disable Penalty' → DisabPenalty
  // CSV 'Board Penalty' → BoardPenalty
  // CSV 'Kill Penalty' → KillPenalty
  // CSV 'Shoot Penalty' → ShootPenalty
  // CSV 'Initial Record' → InitialRec
  // Everything after is EVN-specific and not used for EV

  return {
    id: parseNum(row['ID']),
    name: row['Name'] || '',
    flags: row['Flags 1'] || '',  // Keep as hex string
    ally: hexToDecimal(row['Flags 2']),  // Convert hex to decimal
    enemy: parseNum(row['Scan Fine']),
    crimeTol: parseNum(row['Crime Tolerance']),
    smugPenalty: parseNum(row['Smuggle Penalty']),
    disabPenalty: parseNum(row['Disable Penalty']),
    boardPenalty: parseNum(row['Board Penalty']),
    killPenalty: parseNum(row['Kill Penalty']),
    shootPenalty: parseNum(row['Shoot Penalty']),
    initialRec: parseNum(row['Initial Record'])
  };
}

// Converter for flët resource
function convertFlet(row) {
  // Collect ships
  const ships = [];
  for (let i = 1; i <= 4; i++) {
    const val = parseNum(row[`Ship ${i}`]);
    if (val !== '' && val !== -1) {
      ships.push(val);
    }
  }

  // Collect min values
  const min = [];
  for (let i = 1; i <= 4; i++) {
    const val = parseNum(row[`Min ${i}`]);
    if (val !== '' && val !== -1) {
      min.push(val);
    }
  }

  // Collect max values
  const max = [];
  for (let i = 1; i <= 4; i++) {
    const val = parseNum(row[`Max ${i}`]);
    if (val !== '' && val !== -1) {
      max.push(val);
    }
  }

  return {
    id: parseNum(row['ID']),
    name: row['Name'] || '',
    leadShip: parseNum(row['Lead Ship']),
    ships,
    min,
    max,
    govt: parseNum(row['Govt']),
    linkSystem: parseNum(row['Link System']),
    appearOn: row['AppearOn'] || '',
    hailQuote: parseNum(row['Hail Quote']),
    flags: parseNum(row['Flags'])
  };
}

// Generic converter - best effort based on column names
function convertGeneric(row, resourceType) {
  const result = {
    id: parseNum(row['ID'])
  };

  for (const [key, value] of Object.entries(row)) {
    if (key === 'ID') continue; // Already handled

    // Convert key to camelCase
    let propName = key
      .split(' ')
      .map((word, i) => {
        if (i === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');

    // Special case mappings
    if (key === 'Name') propName = 'name';
    if (key === 'Position X' || key === 'XPos' || key === 'xPos') propName = 'x';
    if (key === 'Position Y' || key === 'YPos' || key === 'yPos') propName = 'y';
    if (key === 'Size X') propName = 'w';
    if (key === 'Size Y') propName = 'h';

    result[propName] = parseNum(value);
  }

  return result;
}

// Main converter function - routes to specific converter
function convertRow(row, resourceType) {
  switch (resourceType) {
    case 'nebu':
      return convertNebu(row);
    case 'dude':
      return convertDude(row);
    case 'flet':
      return convertFlet(row);
    case 'govt':
      return convertGovt(row);
    case 'junk':
      return convertJunk(row);
    case 'misn':
      return convertMisn(row);
    case 'oops':
      return convertOops(row);
    case 'outf':
      return convertOutf(row);
    case 'syst':
      return convertSyst(row);
    case 'weap':
      return convertWeap(row);
    default:
      return convertGeneric(row, resourceType);
  }
}

// Convert a CSV file to JSON
function convertFile(csvFilename) {
  const resourceType = FILE_MAPPINGS[csvFilename];
  if (!resourceType) {
    console.warn(`Unknown file: ${csvFilename}`);
    return;
  }

  console.log(`Converting ${csvFilename} → ${resourceType}.js...`);

  try {
    // Read CSV file
    const csvPath = path.join(INPUT_DIR, csvFilename);
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    // Parse CSV
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });

    // Convert each row
    const converted = records.map(row => convertRow(row, resourceType));

    // Create output object
    const output = {
      [resourceType]: converted
    };

    // Format as JS module
    let jsContent = `export default ${JSON.stringify(output, null, '\t')}\n`;

    // Special formatting for dude resource - collapse shipTypes and probability arrays to single lines
    if (resourceType === 'dude') {
      jsContent = jsContent.replace(
        /"shipTypes":\s*\[\s*([0-9,\s-]+?)\s*\]/g,
        (match, nums) => `"shipTypes": [ ${nums.replace(/\s+/g, ' ').trim()} ]`
      );
      jsContent = jsContent.replace(
        /"probability":\s*\[\s*([0-9,\s-]+?)\s*\]/g,
        (match, nums) => `"probability": [ ${nums.replace(/\s+/g, ' ').trim()} ]`
      );
    }

    // Special formatting for flet resource - collapse ships, min, max arrays to single lines
    if (resourceType === 'flet') {
      jsContent = jsContent.replace(
        /"ships":\s*\[\s*([0-9,\s-]+?)\s*\]/g,
        (match, nums) => `"ships": [ ${nums.replace(/\s+/g, ' ').trim()} ]`
      );
      jsContent = jsContent.replace(
        /"min":\s*\[\s*([0-9,\s-]+?)\s*\]/g,
        (match, nums) => `"min": [ ${nums.replace(/\s+/g, ' ').trim()} ]`
      );
      jsContent = jsContent.replace(
        /"max":\s*\[\s*([0-9,\s-]+?)\s*\]/g,
        (match, nums) => `"max": [ ${nums.replace(/\s+/g, ' ').trim()} ]`
      );
    }

    // Write output file
    const outPath = path.join(OUTPUT_DIR, `${resourceType}.js`);
    fs.writeFileSync(outPath, jsContent, 'utf-8');

    console.log(`  ✓ Wrote ${converted.length} entries to ${resourceType}.js`);
  } catch (error) {
    console.error(`  ✗ Error converting ${csvFilename}:`, error.message);
  }
}

// Main execution
function main() {
  console.log('CSV to JSON Converter for Escape Velocity Data\n');
  console.log(`Input:  ${INPUT_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  // Get all CSV files
  const csvFiles = Object.keys(FILE_MAPPINGS);

  // Convert each file
  for (const csvFile of csvFiles) {
    convertFile(csvFile);
  }

  console.log('\nConversion complete!');
  console.log(`\nNext steps:`);
  console.log(`1. Review files in ${OUTPUT_DIR}`);
  console.log(`2. Compare with existing src/json/ files`);
  console.log(`3. Manually integrate or adjust as needed`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { convertFile, convertRow };
