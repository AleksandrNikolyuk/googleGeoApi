const express = require('express');
const config = require('config');
const form = require('public/javascripts/main');
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAQtJi-4ZDqfm6e-OqxzMB5h5TGoAaqox4',
  Promise,
});

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  // console.log(req.body.name);
  const googleMaps = new googleMapsClient({
    input,
  }).asPromise();

  googleMaps.placesAutoComplete(req.body.name)
    .then((response) => {
      console.log(response.json);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
