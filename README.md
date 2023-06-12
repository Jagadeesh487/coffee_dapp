1. write a smart Contract in remix, then compile, deploy and test there itself in remix.
2. open vs code and set up a folder named coffeeshop_dapp and set up hardhat in it, by, 
   i. npm init
   ii. npm install --save-dev hardhat
   iii. npx hardhat(note: choose javascript)
   iv. npm install --save-dev @nomicfoundation/hardhat-toolbox
3. Rename the lock.sol in to chai.sol in contracts folder and paste the chai code which we written in remix.
4. Then modify the deploy.js file located in scripts folder.
5. Then complie the chai.sol by "npx hardhat compile"
6. For this project we are not testing, so delete test folder.
7. Then deploy the deploy.js by "npx hardhat run scripts/deploy.sol"
8. After deployment is sucess we got an deploy contract address like (for me when i deployed the address is 0x5FbDB2315678afecb367f032d93F642f64180aa3) Note: we deployed our smart contract on locally by hardhad so we got same address.
9. Now, we have to install react.js of our frontend, for that we are going to instal vite, throught vite we are going to install react app. (note to i use vite because react have remove --create-react-app nm-- form their documentation).
   i. npm create vite@latest
   ii. select react
10. After installation we got vite-project folder, now rename it into client. Run react app by
   i. cd client
   ii. npm install
   iii. npm run dev
11. Then goto client/src/app.jsx and type 
    import { useEffect, useState } from 'react'
import './App.css'
/*
function App() {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const template = async() => {
      const contractAddress = "";
      const contractABI = "";
      //Metamask part
      //1. IN order to do transations on sepolia testnet
      //2. MetaMask consists of infura api which actuallu help in connectinf to the blockchain
      const {ethereum} = window;
      const account = await ethereum.request({
        method: "eth_requestAccounts"
      })
    }
    template();
  },{})
  return(
    <div className='App'></div>
  )
}  
export default App
*/ above code is help to connect with ,metamask by default
12. then complete the app.jsx folder, by
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })

  const [account,setAccount] = useState("Not connected")
   
  useEffect(()=>{
    const template = async() => {
      const contractAddress = "";
      const contractABI = "";
      //Metamask part
      //1. IN order to do transations on sepolia testnet
      //2. MetaMask consists of infura api which actuallu help in connectinf to the blockchain
      try {
        const {ethereum} = window;

      const account = await ethereum.request({
        method: "eth_requestAccounts"
      })

      setAccount(account);

      const provider = new ethers.provider.Web3Provider(ethereum); // used to read the blockchain
      const signer = provide.getSigner();//used to write in blockchain
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      setState({provider,signer,contract});   
      } catch (error) {
        alert(error);
      }
    }
    template();
  },{})
  return(
    <div className='App'></div>
  )
}  
export default App
12. then we have to deploy the sol file. for that we are using the alchemey. and we take the api key form that.
13. and we have to modify the hardhat.config.js file also. by
   require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
14.then install .env, 
npm install dotenv
15. and then create an .env file. this env file help to keep save our api's and urls.
16. after your have to delpoy a samrt contract by 
npx hardhat run --network sepolia scripts/deploy.js
17. you have to change the app.jsx with your deployed contract address.










