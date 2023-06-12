below code will connect wensite to metamask automatically.

/*import { useEffect, useState } from 'react'
import './App.css'

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
*/