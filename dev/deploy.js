// Dependencies
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { writeFileSync } = require('fs')

// Compiled Solidity code
const { byteCode, ABIs } = require('./compile');

// Create a new instance of HDWalletProvider
const provider = new HDWalletProvider('key_phrase', 'url');

// Create a new instance of Web3
const web3 = new Web3(provider);

/**
 * The deploy function
 * @return {Undefined}
 */
const deploy = async () => {

    try {
        // Get a list of all accounts (all unlocked)
        const accounts = await web3.eth.getAccounts();

        // Contract initialization parameters
        const deployParams = {
            data: byteCode[0],
            // Arguments to pass into the contract's constructor function
            arguments: ['Hi there!']
        };

        const sendParams = {
            from: accounts[0],
            gas: '1000000'
        };

        // Deploy the contract
        const contract = await new web3.eth.Contract(ABIs)
            .deploy(deployParams)
            .send(sendParams);

        // Get the contract's address after deployment
        const contractAddress = contract.options.address;

        // Write the address to a file
        writeFileSync('./contract_addr.txt', contractAddress);

        // Log the address to the terminal
        console.log(`Contract Deployed at ${contractAddress}`);

    } catch (err) {
        console.log(`Deployment Failed: ${err}`);
    };

};

// Call the deploy function
deploy();

