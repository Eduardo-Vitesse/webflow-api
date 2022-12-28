require('envconfig');
const fetch = require('node-fetch');
const express = require('express')
const cors = require('cors');

const app = express()

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const port = 3000
var dados;

const url = `https://api.webflow.com/collections/${process.env.COLLECTION_ID}/items`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${process.env.TOKEN}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(data => dados = data)
  .catch(err => console.error(`error: ${err}`));
  
app.get('/', (req, res) => {
  res.send(dados)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})