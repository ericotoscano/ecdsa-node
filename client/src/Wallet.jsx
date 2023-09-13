import server from './server';
import { useEffect, useState } from 'react';

function Wallet({ address, setAddress, balance, setBalance, setPrivateKey }) {
  const [addressesList, setAddressesList] = useState(['']);

  useEffect(() => {
    server
      .get('address')
      .then((response) => {
        setAddressesList(response.data);
      })
      .catch((ex) => {
        alert(ex.response.data.message);
        console.log(ex.response.data.error);
      });
  }, []);

  const addressList = addressesList.map((address) => (
    <li className="listElement" key={addressesList.indexOf(address)}>
      {address}
    </li>
  ));

  async function onChange(evt) {
    try {
      const address = evt.target.value;
      const availableAddress = addressesList.find((addr) => addr === address);

      if (availableAddress) {
        const {
          data: { balance, privateKey },
        } = await server.get(`balance/${availableAddress}`);

        setBalance(balance);
        setPrivateKey(privateKey);
        setAddress(availableAddress);
      } else {
        alert('Copy and paste one of an available address...');
        setAddress('');
        setBalance(0);
      }
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Address
        <input placeholder="Copy and paste one of an available address to check its balance" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>

      <div>
        <h3>Available Addresses for Wallet and Transactions</h3>
        <ol className="list">{addressList}</ol>
      </div>
    </div>
  );
}

export default Wallet;
