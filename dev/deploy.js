// Dependencies
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { writeFileSync } = require('fs')

// Compiled Solidity code
const { byteCode, ABIs } = require('./compile');

// Create a new instance of HDWalletProvider
const provider = new HDWalletProvider({
    mnemonic: {
        phrase: 'phrase_here'
    },
    addressIndex: 0,
    shareNonce: true,
    providerOrUrl: "url_here"
});


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
        const deploymentAccount = accounts[0]


        // Contract initialization parameters
        const deployParams = {
            data: byteCode[0],
            // Arguments to pass into the contract's constructor function
            arguments: ['Hi there!']
        };

        const sendParams = {
            from: deploymentAccount,
            gas: '1000000'
        };

        // Extract the private key
        const { privateKey: key } = provider.wallets[deploymentAccount.toLowerCase()]

        // Extract the rawTransaction hash
        const { rawTransaction } = await web3.eth.accounts.signTransaction(
            sendParams,
            `0x${key.toString('hex')}`
        );

        // Deploy the contract
        await new web3.eth.Contract(ABIs).deploy(deployParams)

        // Get the contract's address after deployment
        const { contractAddress } = await web3.eth.sendSignedTransaction(rawTransaction);

        // Write the address to a file
        writeFileSync('./contract_addr.txt', contractAddress);

        // Log the address to the terminal
        console.log(`Contract Deployed at ${contractAddress}`);

        provider.engine.stop();

    } catch (err) {
        console.log(`Deployment Failed`);
        console.log(err)
    };

};

// Call the deploy function
deploy();

