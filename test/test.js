// Dependencies
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Create a new instance of Web3
const web3 = new Web3(ganache.provider());