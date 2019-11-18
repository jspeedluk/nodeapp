const express = require('express')
const app = express()
const port = 3000
// const PORT = process.env.PORT || 3000;
const cool = require('cool-ascii-faces')
require('dotenv').config()
// connect Mongoose to your DB
// var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nodeappkuldeep');

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/dhankhar', (req, res) => res.send('Hello dhankhar!'))
app.get('/cool', (req, res) => res.send(cool()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))