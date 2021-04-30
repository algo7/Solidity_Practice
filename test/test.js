// Dependencies
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Create a new instance of Web3
const web3 = new Web3(ganache.provider());

// Compiled Solidity code
const { byteCode, ABIs } = require('../dev/compile')
console.log(byteCode)

// The variable to store all the accounts
let accounts = null;

beforeEach(async () => {
    // Get a list of all accounts (all unlocked)
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    // Use one of these accounts to deploy the contract
})

describe('Inbox Contract', () => {

    it('Deploy the Contract', () => {

    })

})