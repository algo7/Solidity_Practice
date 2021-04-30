// Dependencies
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

// Compiled Solidity code
const { byteCode, ABIs } = require('./compile');

// Create a new instance of HDWalletProvider
const provider = new HDWalletProvider();

// Create a new instance of Web3
const web3 = new Web3(provider);




