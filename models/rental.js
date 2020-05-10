var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
  lat: Number,
  lng: Number
});

var rentalSchema = mongoose.Schema({
  title: String,
  owner: String,
  city: String,
  location: locationSchema,
  category: String,
  bedrooms: Number,
  image: String,
  description: String
});

module.exports = mongoose.model('Rental', rentalSchema);
