const hre = require("hardhat");

async function main() {
  const chai = await ethers.deployContract("chai");

  await chai.waitForDeployment();

  console.log("Chai Contract Address:", await chai.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xa64e3144835aF8781c750ceC432784a68d883266


// -------below code i got while installation ------

// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// ----below code i copied for code eater youtube video -----

// async function main() {
//   const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
//   const chai = await Chai.deploy(); //creating an instance of our smart contract

//   await chai.deployed();//deploying your smart contract

//   console.log("Deployed contract address:",`${chai.address}`);
// }
