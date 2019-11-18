const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
// connect Mongoose to your DB
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nodeappkuldeep');

app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))