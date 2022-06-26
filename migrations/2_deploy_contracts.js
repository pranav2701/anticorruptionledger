const AntiCorruption = artifacts.require("AntiCorruption");

module.exports = async function (deployer, newtork, accounts) {
    await deployer.deploy(AntiCorruption)
    const anticorruption = await AntiCorruption.deployed();

}
