const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { keccak256 } = require('ethereum-cryptography/keccak');
const { toHex } = require('ethereum-cryptography/utils');

const generateUsers = (numOfUsers=5) => {
  const users = [];

  for (let i = 0; i < numOfUsers; i++) {
    const privateKey = secp256k1.utils.randomPrivateKey();
    const publicKey = secp256k1.getPublicKey(privateKey);
    const address = keccak256(publicKey.slice(1)).slice(-20);
    const balance = 100;

    const userObj = {
      privatekey: privateKey,
      publickey: publicKey,
      address,
      balance,
    };

    users.push(userObj);

    console.log('\nprivate key:', toHex(privateKey));
    console.log('public key:', toHex(publicKey));
    console.log(`address: 0x${toHex(address)}`);
    console.log(balance);
  }

  return users;
};

generateUsers();