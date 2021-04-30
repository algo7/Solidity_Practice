// Dependencies
const { readFileSync } = require('fs')
const path = require('path');

// Read the solidity source code
const solSourcePath = path.resolve(__dirname, '../contracts', 'inbox.sol')
const solSource = readFileSync(solSourcePath)