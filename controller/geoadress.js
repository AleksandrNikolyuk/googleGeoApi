const config = require('config');
const Places = require('google-places-web').default;

Places.apiKey = config.get('geoKey');

module.exports = Places.apiKey;
