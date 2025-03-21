const mongoose = require('mongoose');

const productSchema =new mongoose.Schema({
  id:Number,
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
});

module.exports = mongoose.model('product', productSchema, 'fire');