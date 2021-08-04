const Deposits = artifacts.require("Deposits")
const ContractOne = artifacts.require("ContractOne")
const ContractTwo = artifacts.require("ContractTwo")
const ProxyContract = artifacts.require("ProxyContract")

contract("ProxyContract", accounts => {

    it("Add Calculate Contract Address", async () => {
        const proxyContract = await ProxyContract.deployed()
        const contractOne = await ContractOne.deployed()
        const deposits = await Deposits.deployed()
        
        await proxyContract.setContractDepositAddress(contractOne.address, deposits.address)
        const contractAddressFromProxy = await proxyContract.contractAddress()
        const depositAddressFromProxy = await proxyContract.depositAddress()

        assert.equal(contractAddressFromProxy, contractOne.address, "Not correctOne contract address")
        assert.equal(depositAddressFromProxy, deposits.address, "Not correct deposits address")
    })

    it("Make deposit with proxy contract", async() => {
        const proxyContract = await ProxyContract.deployed()
        const deposits = await Deposits.deployed()

        await proxyContract.setDeposit(10)

        const user = await deposits.getUserDeposit(accounts[0])
        console.log("To get 50 (5*10)", user.toNumber())
    })

    it("Get deposit from deposits", async() => {
        const proxyContract = await ProxyContract.deployed()
        const deposits = await Deposits.deployed()

        await proxyContract.getDeposit(50)

        const user = await deposits.getUserDeposit(accounts[0])
        console.log("After get deposit (50-50)", user.toNumber())
    })

    it("Upgrade of calculation", async() => {
        const proxyContract = await ProxyContract.deployed()
        const contractTwo = await ContractTwo.deployed()
        const deposits = await Deposits.deployed()

        await proxyContract.setContractDepositAddress(contractTwo.address, deposits.address)
        const contractAddressFromProxy = await proxyContract.contractAddress()
        const depositAddressFromProxy = await proxyContract.depositAddress()

        assert.equal(contractAddressFromProxy, contractTwo.address, "Not correct contractTwo address")
        assert.equal(depositAddressFromProxy, deposits.address, "Not correct deposits address")
    })

    it("Make deposit with proxy contract", async () => {
        const proxyContract = await ProxyContract.deployed()
        const deposits = await Deposits.deployed()

        await proxyContract.setDeposit(10)

        const user = await deposits.getUserDeposit(accounts[0])
        console.log("After upgrate we have to get 80 (8*10)", user.toNumber())
    })


})