// Dependencies
const { readFileSync } = require('fs')
const path = require('path');
const solc = require('solc');

// Read the solidity source code
const solSourcePath = path.resolve(__dirname, '../contracts', 'inbox.sol')
const solSource = readFileSync(solSourcePath, 'utf-8')


/**
 * The Solidity code compilation function
 * @return {Array.<Array.<string>>} An array of 2 elements with the first being an array of bytecode and the 2nd being an array of ABIs
 */
const compile = () => {

    try {

        // The compiler input
        let input = {
            language: 'Solidity',
            sources: {
                'inbox': {
                    content: solSource
                }
            },
            settings: {
                outputSelection: {
                    '*': {
                        '*': ['*']
                    }
                }
            }
        };

        // Extract the source key => might be compiling multiple contracts at the same time
        let { sources } = input
        sources = Object.keys(sources)

        // Stringify the input
        input = JSON.stringify(input);

        // Compile the code
        const compiled = solc.compile(input)

        // Parse the result
        const output = JSON.parse(compiled);

        // Extract the byte code
        const byteCode = sources.map(source => {
            for (const contractName in output.contracts[source]) {
                return output.contracts[source][contractName].evm.bytecode.object
            }
        })

        // Extract the ABIs
        const ABIs = sources.map(source => {
            for (const contractName in output.contracts[source]) {
                return output.contracts[source][contractName].abi
            }
        })


        return [byteCode, ABIs.flat(),];

    } catch (err) {
        console.log(`Compilation Failed: ${err}`)
    }
}

console.log(compile())