const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
    const whitelistContractAddress = WHITELIST_CONTRACT_ADDRESS;
    const metadataNFT = METADATA_URL;
    
    const cryptoDevsNFT = await ethers.getContractFactory("CryptoDevs");
    const deployedCryptoDevsNFTContract = await cryptoDevsNFT.deploy(
        metadataNFT,
        whitelistContractAddress
    );

    console.log("Deployed CryptoDevs NFT:", deployedCryptoDevsNFTContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
})