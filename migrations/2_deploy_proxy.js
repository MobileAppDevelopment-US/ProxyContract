const Deposits = artifacts.require("Deposits");
const ContractOne = artifacts.require("ContractOne");
const ContractTwo = artifacts.require("ContractTwo");
const ProxyContract = artifacts.require("ProxyContract");

module.exports = function (deployer) {
    deployer.deploy(Deposits);
    deployer.deploy(ContractOne, 5);
    deployer.deploy(ContractTwo, 8);
    deployer.deploy(ProxyContract);
};
