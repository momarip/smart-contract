const { expect } = require("chai");

describe("FirstContract", () => {
    it("should return its name", async () => {
        const MyContract = await ethers.getContractFactory("FirstContract");
        const myContract = await MyContract.deploy("First Contract");

        await myContract.deployed();
        expect(await myContract.getName()).to.equal("First Contract");
    });
    it("should change its name when requested", async () => {
        const MyContract = await ethers.getContractFactory("FirstContract");
        const myContract = await MyContract.deploy("First Contract");

        await myContract.changeName("Another Contract");
        expect(await myContract.getName()).to.equal("Another Contract");
    });
});
