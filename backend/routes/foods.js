const express = require('express');
const Food = require('../models/food');

const router = express.Router();

router.post('', (req, res, next) => {
  const food = new Food(req.body); //This creates a new Food object with a _id
  food.save().then(result => {
    res.status(200).json({
      message: 'Food added successfully',
      foodId: result._id
    });
  });
});

router.put('/:id', (req, res, next) => {
  const food = req.body; //Don't use Food object, because it will send an error due to _id from Mongo
  Food.updateOne({_id: req.params.id}, food).then(result => {
    res.status(200).json({message: "Food updated successfully"})
  });
});

//middleware
router.get('', (req, res, next) => {
  Food.find()
    .then(documents => {
      res.status(200).json({
        message: "Foods fetched succesfully!",
        foods: documents
      });
    });
});

router.get("/:id", (req, res, next) => {
  Food.findById(req.params.id).then(food => {
    if (food) {
      res.status(200).json({
        message: "Foods found succesfully!",
        foodById: food
      });
    } else {
      res.status(404).json({ message: "Food not found!" });
    }
  });
});

router.delete('/:id', (req,res,next)=>{
  console.log(req.params.id);
  Food.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Food deleted'
    });
  });
});

module.exports = router;
