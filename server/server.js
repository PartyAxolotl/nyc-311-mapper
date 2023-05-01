const express = require('express');
const { validateHeaderName } = require('http');
const app = express();
const path = require('path');
// const db = require('../models')
// const controllers = require('../controllers/partyController');

const DbController = require('../controllers/partyController')
console.log('server.js')


const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../index.html')))

// const dbRouter = express.Router();
// app.use('/party/party-spots', dbRouter);

//post request to database for borough and day
app.post('/party/party-spots', DbController.findByBoroughAndDay, (req, res) => {
  res.status(200).json(res.locals.locations);
});

app.get('/party/party-spots', DbController.testGet, (req, res) => {
  res.status(202).send(res.locals.message)
})


app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });