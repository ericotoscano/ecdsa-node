const express = require('express');
const app = express();
const cors = require('cors');
const port = 3042;

const { secp256k1 } = require('ethereum-cryptography/secp256k1');

// Users Array created using "generateusers.js" on "server/scripts/"
const users = [
  {
    privatekey: '9522a36b01edf970b092237e5876ed6688f21da5278220b4477b947a6fd4a5e1',
    publickey: '02f00e5f041df0c93a22d53dcd0748e94a68717f4cc1d52f34228df9d7f56c1023',
    address: '0xa2f127ae22c2a4e5561647268b68f09edb1af6bd',
    balance: 100,
  },
  {
    privatekey: 'fe3765c9bc02e95ecbf4e7d9c4cc72e8c2ecebcbcda0fc06a980f999481c32aa',
    publickey: '038afb2b8ccf364752cc80afdc44775d30ee25600b3e5667f4cf99cb98e366ac6f',
    address: '0xecdd2dc4b96cf59760d3df6141cd4ed79da5e7d6',
    balance: 100,
  },
  {
    privatekey: '9005277a01976ad621a6ffd52b21aea454505549b5070e9521713eb457c4c2a0',
    publickey: '03906ba2c9f77e048c05ea2b96cb3e3e79636d8e09bd15f04a295efd55003f8306',
    address: '0xb0d72b41617f2aa755c63d110f9c8f72a9d8f5ec',
    balance: 100,
  },
  {
    privatekey: '9837b81c8e6037837af53ef3be2531b68767719dad819e2c05a65f4c7c350074',
    publickey: '02f74fc4214caa226ee1f467d491c7bf3aa5dd57b6577f73f5fe829a3efaca689d',
    address: '0xb28fbcac9bea07db53711ebc335d23896479e4bf',
    balance: 100,
  },
  {
    privatekey: 'e107aaaa9773bee16c52ef15a0f0ff3c0ee1c89027f6c94a64ec3077d55fb5ad',
    publickey: '032a1303996442106a38e653ec9bc6b8856e5d9db7e96f6e4c653adedff2b097db',
    address: '0x0f5dd77864a3022d7fb2f38421dbb5df6cad5b08',
    balance: 100,
  },
];

app.use(cors());
app.use(express.json());

app.get('/address', (req, res) => {
  try {
    const userAddresses = [];

    for (let user of users) {
      userAddresses.push(user.address);
    }

    res.status(200).send(userAddresses);
  } catch (err) {
    res.status(400).send({ error: err, message: 'An error occurred while loading addresses.' });
  }
});

app.get('/balance/:address', (req, res) => {
  try {
    const { address } = req.params;
    const userObj = users.find((user) => user.address === address);

    if (userObj !== undefined) {
      const balance = userObj.balance;
      const privateKey = userObj.privatekey;

      res.status(200).send({ balance, privateKey });
    } else {
      throw new Error('This address is not available.');
    }
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

app.post('/send', (req, res) => {
  try {
    const { sender, amount, recipient, hash, signature } = req.body;

    const senderObj = users.find((user) => user.address === sender);
    const recipientObj = users.find((user) => user.address === recipient);

    if (senderObj !== undefined && recipientObj !== undefined) {
      const isSigned = secp256k1.verify(signature, hash, senderObj.publickey);

      if (isSigned) {
        if (senderObj.balance < amount) {
          res.status(400).send({ message: "Sender doesn't have enough funds." });
        } else {
          senderObj.balance -= amount;
          recipientObj.balance += amount;

          res.status(200).send({ balance: senderObj.balance });
        }
      } else {
        res.status(400).send({ message: 'Sender must be the same Address typed on Wallet' });
      }
    } else {
      res.status(400).send({ message: 'The sender or recipient address is not available.' });
    }
  } catch (err) {
    res.status(400).send({ error: err, message: 'An error occurred while processing transaction' });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
