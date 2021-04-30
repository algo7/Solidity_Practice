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
const deploy = () => {
    // Get the account addrs
    const accounts = await web3.eth.getAccounts();

    // Deploy the contract
    await new web3.eth.Contract(ABIs)

}

// Call the deploy function
dploy();

