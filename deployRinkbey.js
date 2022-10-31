const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

  wallet = await wallet.connect(provider);
  const abi = fs.readFileSync(
    "./_Users_yash_Documents_Coding_Blockchain_Web3 javascript_SimpleStorage_sol_SimpleStorage.abi",
    "utf8"
  );
  const binary = fs.readFileSync(
    "./_Users_yash_Documents_Coding_Blockchain_Web3 javascript_SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying your mom");
  const contract = await contractFactory.deploy();
  await contract.deployTransaction.wait(1);

  const transactionResponse = await contract.store("5");
  const transactionReceipt = await transactionResponse.wait(1);
  const updatedNum = await contract.retrieve();
  console.log("Current Favorite Number : " + updatedNum.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
