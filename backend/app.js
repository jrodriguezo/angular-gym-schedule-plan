const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/food-collection'

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Connected to database!'))
  .catch(err => console.log('err'+err));

const Food = require('./models/food');

const app = express();

app.use(bodyParser.json());

app.use((req, res , next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const food = new Food(req.body);
  food.save();
  console.log(food);
  res.status(200).json({
    message: 'Food added successfully'
  });
});


//middleware
app.use('/api/foods', (req, res, next) => {
  Food.find()
    .then(documents => {
      res.status(200).json({
        message: "Foods fetched succesfully!",
        foods: documents
      });
    });
});

module.exports = app;
