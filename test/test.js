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

// The variable to hold the deployed contract instance
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

    // Test if the contract is successfully deployed
    it('Test Contract Deployment', () => {
        assert.ok(contract.options.address)
    })

    // Test for initial message
    it('Test for the Default Message', async () => {
        const message = await contract.methods.message().call()
        assert.strictEqual(message, 'Hi there!')
    })

    // Test for setMessage function
    it('Test for Setting New Message', async () => {

        // Set the new message
        const receipt = await contract.methods.setMessage('Bye').send({ from: accounts[0] })

        // Confirms the transaction
        assert.ok(receipt.transactionHash)

        // Double check if the message is updated
        const message = await contract.methods.message().call()
        assert.strictEqual(message, 'Bye')
    })

})