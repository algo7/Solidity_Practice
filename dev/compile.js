// Dependencies
const { readFileSync } = require('fs')
const path = require('path');
const solc = require('solc');

// Read the solidity source code
const solSourcePath = path.resolve(__dirname, '../contracts', 'inbox.sol')
const solSource = readFileSync(solSourcePath, 'utf-8')

const template = {
    language: 'Solidity',
    sources: {
        'inbox.sol': {
            content: solSource,
        }
    }
}
// Compile the solidity code
console.log(solc.compile(JSON.stringify(template)))