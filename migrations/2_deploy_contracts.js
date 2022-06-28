const AntiCorruption = artifacts.require("./AntiCorruption.sol");

module.exports = function (deployer) {
    deployer.deploy(AntiCorruption);
};
