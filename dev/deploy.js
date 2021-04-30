// Dependencies
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

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

    // Get a list of all accounts (all unlocked)
    accounts = await web3.eth.getAccounts();

    // Contract initialization parameters
    const deployParams = {
        data: byteCode[0],
        // Arguments to pass into the contract's constructor function
        arguments: ['Hi there!']
    }

    const sendParams = {
        from: accounts[0],
        gas: '1000000'
    }

    // Deploy the contract
    contract = await new web3.eth.Contract(ABIs)
        .deploy(deployParams)
        .send(sendParams)

}

// Call the deploy function
dploy();

