// Dependencies
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Create a new instance of Web3
const web3 = new Web3(ganache.provider());

// Compiled Solidity code
const { byteCode, ABIs } = require('../dev/compile')


// The variable to store all the accounts
let accounts = null;
let contract = null;

beforeEach(async () => {

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
})

// Test groups
describe('Inbox Contract', () => {


    it('Test Contract Deployment', () => {
        console.log(contract)
    })

})