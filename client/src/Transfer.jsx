import { useState } from 'react';

import { keccak256 } from 'ethereum-cryptography/keccak';
import { secp256k1 } from 'ethereum-cryptography/secp256k1';
import { hexToBytes as toBytes, bytesToHex as toHex, utf8ToBytes } from 'ethereum-cryptography/utils';

import server from './server';

function Transfer({ address, setBalance, privateKey }) {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sendAmount, setSendAmount] = useState('');

  const setValue = (setter) => (evt) => setter(evt.target.value);

  const hashMessage = async (msg) => {
    const stringMsg = JSON.stringify(msg);
    const bytesMsg = utf8ToBytes(stringMsg);
    const hashMsg = keccak256(bytesMsg);

    return toHex(hashMsg);
  };

  const signMessage = async (msgHash) => {
    const pk = toBytes(privateKey);
    const msgSignature = secp256k1.sign(msgHash, pk);

    return msgSignature;
  };

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const message = {
        sender: address,
        amount: parseInt(sendAmount),
        recipient: recipient,
      };

      const messageHash = await hashMessage(message);

      const msgSigned = await signMessage(messageHash);

      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: sender,
        amount: parseInt(sendAmount),
        recipient: recipient,
        hash: messageHash,
        signature: msgSigned.toCompactHex(),
      });

      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
      if (ex.response.data.error) {
        console.log(ex.response.data.error);
      }
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Sender
        <input placeholder="Type an address" value={sender} onChange={setValue(setSender)}></input>
      </label>

      <label>
        Recipient
        <input placeholder="Type an address" value={recipient} onChange={setValue(setRecipient)}></input>
      </label>

      <label>
        Send Amount
        <input placeholder="1, 2, 3..." value={sendAmount} onChange={setValue(setSendAmount)}></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
