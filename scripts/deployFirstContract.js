async function main() {
    const FirstContract = await ethers.getContractFactory("FirstContract");
    const firstContract = await FirstContract.deploy("First Contract");

    console.log("My Contract deployed to:", firstContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
