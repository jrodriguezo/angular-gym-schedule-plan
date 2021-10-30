const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: {type: String, required: true},
  serving_size_g:{type: Number, default: 100},
  proteins: {type: Number, default: 0},
  carbohydrates: {type: Number, default: 0},
  fats: {type: Number, default: 0},
  sugars: {type: Number, default: 0},
  calories: {type: Number, default: 0}
});

module.exports = mongoose.model('Food', foodSchema);
