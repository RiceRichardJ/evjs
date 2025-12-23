#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Input and output directories
const INPUT_DIR = path.join(__dirname, 'in');
const OUTPUT_DIR = path.join(__dirname, 'out');

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
  // Collect ship types and probabilities
  const shipTypes = [];
  const probability = [];

  for (let i = 1; i <= 4; i++) {
    const shipVal = parseNum(row[`Ship ${i}`]);
    const probVal = parseNum(row[`Ship ${i} %`]);
    if (shipVal !== '' && shipVal !== -1) {
      shipTypes.push(shipVal);
      probability.push(probVal || 0);
    }
  }

  return {
    name: row['Name'] || '',
    shipTypes,
    probability,
    aiType: parseNum(row['AI Type']),
    government: parseNum(row['Govt']),
    docile: false, // Simplified - would need flag parsing
    hailText: decodeInfoTypes(row['InfoTypes']),
    booty: decodeBootyFlags(row['Flags'])
  };
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

// Generic converter - best effort based on column names
function convertGeneric(row, resourceType) {
  const result = {};

  for (const [key, value] of Object.entries(row)) {
    if (key === 'ID') continue; // Skip ID field

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
    const jsContent = `export default ${JSON.stringify(output, null, '\t')}\n`;

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
