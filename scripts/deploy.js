// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.

  const FafToken = await hre.ethers.getContractFactory("FafafaToken");
  const fafToken = await FafToken.deploy();

  // const Governance = await hre.ethers.getContractFactory("Governance");
  // const governance = await Governance.deploy()

  // await greeter.deployed();
  // await fafToken.deployed();
  await fafToken.deployed()
  // await governance.deployed()
  // console.log("Greeter deployed to:", greeter.address);
  // console.log("Token deployed to:", fafToken.address)
  console.log("FafToken deployed to: ", fafToken.address)
  // console.log("Governance deployed to: ", governance.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
