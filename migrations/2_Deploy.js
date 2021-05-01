const Inbox = artifacts.require("Inbox");

module.exports = async (deployer) => {
    deployer.deploy(Inbox);
    const { address } = await deployer.deploy(Inbox)
    console.log(address)
};