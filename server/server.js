const express = require('express');
const { validateHeaderName } = require('http');
const app = express();
const path = require('path');
// const db = require('../models')
const models = require('../models/partyModel');

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../index.html')))


app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });