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

const url = 'https://api.webflow.com/collections/63ac42c4acaa435cc84cf30a/items';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer 7bd7559152d0309413566d7a60be1071c6138666b098e45126dbeddf9046c98d'
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