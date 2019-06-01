const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['shubham', 'kamran', 'vinayak'].map(x => web3.utils.asciiToHex(x)), {gas: 6000000});
};
