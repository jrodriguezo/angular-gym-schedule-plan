const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/food-collection'

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Connected to database!'))
  .catch(err => console.log('Connection failed due to '+err));

const Food = require('./models/food');

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

app.post('/api/foods', (req, res, next) => {
  const food = new Food(req.body); //This creates a new Food object with a _id
  food.save().then(result => {
    res.status(200).json({
      message: 'Food added successfully',
      foodId: result._id
    });
  });
});

app.put('/api/foods/:id', (req, res, next) => {
  const food = req.body; //Don't use Food object, because it will send an error due to _id from Mongo
  Food.updateOne({_id: req.params.id}, food).then(result => {
    res.status(200).json({message: "Food updated successfully"})
  });
});

//middleware
app.get('/api/foods', (req, res, next) => {
  Food.find()
    .then(documents => {
      res.status(200).json({
        message: "Foods fetched succesfully!",
        foods: documents
      });
    });
});

app.delete('/api/foods/:id', (req,res,next)=>{
  console.log(req.params.id);
  Food.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Food deleted'
    });
  });
});

module.exports = app;
