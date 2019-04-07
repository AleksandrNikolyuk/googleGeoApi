const express = require('express');
const Ajv = require('ajv');
const Places = require('google-places-web').default;
// const AdressModel = require('../models/adress');
const routeSchema = require('../schema/adresValid.json');

const router = express.Router();
const ajv = new Ajv();

const validate = ajv.compile(routeSchema);

Places.apiKey = require('../controller/geoadress');

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  const partialAddress = validate(req.body.name);
  const language = 'en';

  if (!partialAddress) {
    console.log('You did not enter correctly adress');
    res.send('You did not enter correctly adress');
  }

  Places.autocomplete({ input: partialAddress, language })
    .then((response) => {
      const dataAdress = { adress: [] };
      response.forEach((element) => {
        dataAdress.adress.push({ adr: element.description });
      });
      return dataAdress;
    })
    .then((dataAdress) => {
      console.log(dataAdress);
      res.json(dataAdress);
    })
    .catch(e => console.log(e));
});

module.exports = router;
module.exports = dataAdress;
