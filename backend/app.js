const express = require('express');
const bodyParser = require('body-parser');

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
  const food = req.body;
  console.log(food);
  res.status(200).json({
    message: 'Food added successfully'
  });
});


//middleware
app.use('/api/foods', (req, res, next) => {
  const foods = [
    {
      id: 1,
      name: "chiken",
      proteins: 10,
      carbohydrates: 69,
      fats: 19,
      serving_size_g: 0,
      sugars: 0,
      calories: 0
  },
    {
      id: 2,
      name: "rice",
      proteins: 1,
      carbohydrates: 89,
      fats: 5,
      serving_size_g: 0,
      sugars: 0,
      calories: 0
  }
];
  res.status(200).json({
    message: "Foods fetched succesfully!",
    foods: foods
  });
});

module.exports = app;
