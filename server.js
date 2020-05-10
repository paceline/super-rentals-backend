// Import external libraries
const express = require('express');
const fastbootMiddleware = require('fastboot-express-middleware');
API = require('json-api');

// Hook up models
var models = {
  Rental: require('./models/rental')
};

// Hook up JSON API
var adapter = new API.dbAdapters.Mongoose(models);
var registry = new API.ResourceTypeRegistry({
    rentals: {},
  }, {
    dbAdapter: adapter,
    urlTemplates: {
      self: "/api/{type}/{id}.json"
    }
  });
const opts = { host: '127.0.0.1:3000' };
var Front = new API.httpStrategies.Express(new API.controllers.API(registry), null, opts);

// Start express
let app = express();

// Define API routes
app.route("/api/:type(rentals).json")
  .get(Front.apiRequest).post(Front.apiRequest).patch(Front.apiRequest);
app.route("/api/:type(rentals)/:id.json")
  .get(Front.apiRequest).patch(Front.apiRequest).delete(Front.apiRequest);

// Hook up Ember App
app.get('/*', fastbootMiddleware('dist'));
app.use(express.static('dist'));

module.exports = app
