# super-rentals-backend

This is a simple MEEN-style (MongoDB, Express, Ember, Node) backend for the Ember tutorial [super-rentals](https://guides.emberjs.com/release/tutorial), which only includes a mock backend.

## Usage

I tried to build it in a way that the original super-rentals app has to be edited as little as possible:

Clone the original super-rentals app
`git clone https://github.com/ember-learn/super-rentals.git`

Remove the folder with static api data (since we want to use an actual backend)
`rm -r public/api`

Set MAPBOX_ACCESS_TOKEN (for API access to Mapbox) - you need to do that anyway, also for the regular demo
`export MAPBOX_ACCESS_TOKEN=[INSERT YOUR TOKEN HERE]`

Launch super-rentals-backend after installing the dependencies (this really need more explanation, I know)
`node index.js`

Use Postman (or similar tool) to test the backend and import the tutorial data into your MongoDB:
`POST /api/rentals.json HTTP/1.1
Host: localhost:3000
Content-Type: application/vnd.api+json

{
  "data": [
    {
      "type": "rentals",
      "attributes": {
        "title": "Grand Old Mansion",
        "owner": "Veruca Salt",
        "city": "San Francisco",
        "location": {
          "lat": 37.7749,
          "lng": -122.4194
        },
        "category": "Estate",
        "bedrooms": 15,
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        "description": "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      }
    },
    {
      "type": "rentals",
      "attributes": {
        "title": "Urban Living",
        "owner": "Mike Teavee",
        "city": "Seattle",
        "location": {
          "lat": 47.6062,
          "lng": -122.3321
        },
        "category": "Condo",
        "bedrooms": 1,
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
        "description": "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    },
    {
      "type": "rentals",
      "attributes": {
        "title": "Downtown Charm",
        "owner": "Violet Beauregarde",
        "city": "Portland",
        "location": {
          "lat": 45.5175,
          "lng": -122.6801
        },
        "category": "Apartment",
        "bedrooms": 3,
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        "description": "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }
  ]
}`

Launch super-rentals in another terminal window
`ember serve --proxy http://127.0.0.1:3000`


## Extra credit

You can also build your Ember app an run it on top of super-rentals-backend using the [fastboot-express-middleware](https://github.com/ember-fastboot/fastboot-express-middleware)

To install ember-cli-fastboot, go into the super-rentals directory and run:
`ember install ember-cli-fastboot`

Set the `hostWhitelist` parameter in `environment.js`:
`module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'host',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      // ...
    },
    APP: {
      // ...
    },
    fastboot: {
      hostWhitelist: ['example.com', 'subdomain.example.com', /^localhost:\d+$/]
    }
  };
  // ...
};`

Build super-rentals, directing output to the super-rentals-backend dist directory
`ember build --environment production --output-path /path/to/super-rentals-backend/dist`

Launch super-rentals-backend (now also serving up your ember build)
`node index.js`

Open your browser at https://localhost:3000 should show super-rentals

## Questions, comments, etc.?

Email me at ulf@moehring.me
