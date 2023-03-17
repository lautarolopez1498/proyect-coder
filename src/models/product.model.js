const mongoose = require('mongoose');

const productCollection = 'products'

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  thumbnail: String,
  code: String,
  stock: {
    type: Number,
    default: 0
  }
});

const productsModel = mongoose.model(productCollection, productSchema);

module.exports = productsModel;
