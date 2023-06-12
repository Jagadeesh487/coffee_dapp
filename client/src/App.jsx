import { useEffect, useState } from 'react'
import abi from "./adi/chai.json"
import {ethers} from "ethers"
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
      const contractAddress = "0x31a94337CdbBc02588Aa84f01221306AF26f2815";
      const contractABI = abi.abi;
      //Metamask part
      //1. IN order to do transations on sepolia testnet
      //2. MetaMask consists of infura api which actuallu help in connectinf to the blockchain
      try {
        const {ethereum} = window;

      const account = await ethereum.request({
        method: "eth_requestAccounts"
      })

      setAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum); // used to read the blockchain
      const signer = provide.getSigner();//used to write in blockchain
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract)
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
