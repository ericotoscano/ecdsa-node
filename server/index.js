const express = require('express');
const app = express();
const cors = require('cors');
const port = 3042;

const { secp256k1 } = require('ethereum-cryptography/secp256k1');

// Users Array created using "generateusers.js" on "server/scripts/"
const users = [
  {
    privatekey: 'c52974873e308e57898b0d1510361d8bd9ada0853549c9f034845b6a24a4334c',
    publickey: '02987496114ba2ba938bb9012a048132bed83211047339b2749c5c43eeca63c827',
    address: '0x873bef47d8afe1dbfc032e17ae538a8dbfa27b43',
    balance: 100,
  },
  {
    privatekey: '17444b735a634399071d6d49f6af8f8ab02cb6de01d99d18c45847efe3538c30',
    publickey: '02e3e186f8b36cf91c4859d20876ff57a732b8639fc2ff59f1daee4a81575afb7a',
    address: '0x1aede1e32e289aa267f2db431084554ddd1d5586',
    balance: 100,
  },
  {
    privatekey: 'e58fbc76b701e960feb223a616dbd42865f78198876e506d50384f413fcabbf2',
    publickey: '02c588ab4f3ec56ee0076e17d4d5fe0df8d5ab4853f541a5da6467b16549883bde',
    address: '0xe971196c329c2b469737f76fbc3204f3dfead623',
    balance: 100,
  },
  {
    privatekey: 'a8721b522a2ac4d8d671bd6ced34886034a95ad0127e8f1711e585de3c1fed3d',
    publickey: '03af28340a1d246dcd4f6c5523a2e00f4341f369a88fce2aeb9654a5bcf9568c9b',
    address: '0x442e48da7d496118fd7690fffd38da6a105f30ad',
    balance: 100,
  },
  {
    privatekey: '1913f477d6c7a8b71343153d6e00be5e101335a60b4cb41a34fe645b707f5a06',
    publickey: '02a4491fbbe94bab15b9404a4cf0a5f4b8ca631bbcb58e214bd06f38c252e74268',
    address: '0x310bbac473df22c7335411083d259c9c9dd90bca',
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
