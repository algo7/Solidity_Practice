const Inbox = artifacts.require("Inbox");

module.exports = async (deployer) => {
    // Initial constructor function will be the 2nd parameters below
    await deployer.deploy(Inbox, 'Hi there!')
};