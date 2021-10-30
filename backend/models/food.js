const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  id: {type: number, required: true},
  name: {type: number, required: true},
  serving_size_g:{type: number, default: 100},
  proteins: {type: number, default: 0},
  carbohydrates: {type: number, default: 0},
  fats: {type: number, default: 0},
  sugars: {type: number, default: 0},
  calories: {type: number, default: 0}
});

module.exports = mongoose.model('Food', foodSchema);
