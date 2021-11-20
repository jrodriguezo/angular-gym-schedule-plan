const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const foodsRoutes = require('./routes/foods');

const MONGODB_URI = 'mongodb://localhost/food-collection'

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Connected to database!'))
  .catch(err => console.log('Connection failed due to '+err));


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res , next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/foods',foodsRoutes);


module.exports = app;
