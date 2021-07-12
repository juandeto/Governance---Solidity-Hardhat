import { useState } from'react';
import {ethers } from 'ethers';
import Explanation from 'views/Explanation';
import Governance from './artifacts/contracts/Governance.sol/Governance.json'
import './App.scss';

const GovernanceAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
const FafafaAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  const [idVote, setIdVote] = useState(null)
  const [comisionVote, setComisionVote] = useState(null)
  const [candidate, setCandidate] = useState('')
  const [comisionCandidate,setComisionCandidate] = useState(null)
  //store greeting in local state
  // const [greeting, setGreetingValue] = useState();
  // const [userAccount, setUserAccount] = useState();
  // const [amount, setAmount] = useState();

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'});
  }

  const handlerVotation = async () => {
    if(typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          console.log('PROVIDER: ', provider)
          const contract = new ethers.Contract(GovernanceAddress, Governance.abi, provider)
          console.log('CONTRACT: ', contract)
          try {
            const data = await contract
            console.log('data: ', data)
          } catch (err) {
            console.log('Error: ', err)
          }
        }
  }

  // async function fetchGreeting() {
  //   if(typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     console.log('PROVIDER: ', provider)
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
  //     console.log('CONTRACT: ', contract)
  //     try {
  //       const data = await contract.greet()
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log('Error: ', err)
  //     }
  //   }
  // }
  // async function getBalance() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
  //     console.log('CONTRACT: ', contract, account)
  //     const balance = await contract.balanceOf(account);
  //     console.log("Balance: ", balance.toString());
  //   }
  // }

  // async function setGreeting() {
  //   if(!greeting) return
  //   if (typeof window.ethereum !== 'undefined'){
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     console.log('PROVIDER: ', provider)
  //     const signer = provider.getSigner()
  //     console.log('SIGNER: ', signer)
  //     const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
  //     console.log('CONTRACT: ', contract)
  //     const transaction = await contract.setGreeting(greeting)
  //     console.log('TX: ', transaction)
  //     await transaction.wait()
  //     fetchGreeting()
  //   }
  // }

  // async function sendCoins() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
  //     console.log('CONTRACT: ', contract)
  //     const transation = await contract.transfer(userAccount, amount);
  //     await transation.wait();
  //     console.log(`${amount} Coins successfully sent to ${userAccount}`);
  //   }
  // }

  return (
    <div className="container">
      <section className="landing">
       <h1 className="landing-title">FAF Token <i style={{color:"#cacaca"}}>es un concepto</i></h1>
       <nav className="landing-navbar">
         <span className="landing-start"><a href="#explanation">Comenzar</a></span>
       </nav>
       <h3 className="landing-subtitle">Total supply: ${totalSupply}</h3>

        {/* <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />

        <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendCoins}>Send Coins</button>
        <input onChange={e => setUserAccount(e.target.value)} placeholder="Account ID" />
        <input onChange={e => setAmount(e.target.value)} placeholder="Amount" /> */}
      </section>
      <Explanation />
      <section className="operations-container">
        <h2 className="operations-title">Opera en la comunidad: votá, conspira, propone...</h2>
        <div className="operations-formContainer">
          <form className="operations-form" onSubmit={handlerVotation}>
            <label>Votar</label>
            <input value={idVote} onChange={(e) => setIdVote(e.target.value)} placeholder="ingrese número del candidato" type="number" name="vote"/>
            <label>Comisión</label>
            <input value={comisionVote} onChange={(e) => setComisionVote(e.target.value)} placeholder="300.000 fafs" type="number" name="vote"/>
            <button type="submit" className="tx-button">¡Votar ya!</button>
          </form>
          <form className="operations-form">
            <label>Añadí un candidato *</label>
            <input value={candidate} onChange={(e) => setCandidate(e.target.value)} placeholder="ingrese nombre del candidato" type="text" name="vote"/>
            <label>Comisión</label>
            <input value={comisionCandidate} onChange={() => setComisionCandidate(e.target.value)} placeholder="50.000 fafs" type="number" name="vote"/>
            <button type="submit" className="tx-button">Ingresar Candidato</button>
          </form>
          <div className="operations-form">
            <label>Desplegar lista de candidatos.</label>
            <button onClick={() => console.log('hellow')} className="tx-button">Consultar</button>
          </div>
          <div className="operations-form">
            <label>¿Es tiempo electoral?</label>
            <button onClick={() => console.loh('hola')} className="tx-button">Consultar</button>
          </div>
        </div>
          
      </section>
      <section id="detalles" className="detalles-container">
        
      </section>
    </div>
  );
}

export default App;
