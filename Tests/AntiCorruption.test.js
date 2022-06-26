const { assert } = require("chai");
const { default: Web3 } = require("web3");

const AntiCorruption = artifacts.require("AntiCorruption");
require("chai").use(require("chai-as-promised")).should();

function tokens(n) {
  return Web3.utils.toWei(n, "ether");
}

contract("AntiCorruption", (accounts) => {
  let anti;

  before(async () => {
    anti = await AntiCorruption.new();
  });

  describe("AntiCorruption contract deployment", async () => {
    it("has a name", async () => {
      let name = await anti.name();
      assert.equal(name, "AntiCorruption");
    });
  });

  describe("Final target amount", async () => {
    it("the target amount is", async () => {
      let targetAmount = await anti.targetAmount();
      assert.equal(targetAmount, tokens(4));
    });
  });
});
