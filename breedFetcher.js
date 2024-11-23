const needle = require('needle');

const fetchBreedDescription = function (breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    // console.log('statusCode:', response && response.statusCode);
    //console.log('body:' , body);
    // console.log(typeof body);
    if (Array.isArray(body) && body.length > 0) {
      callback(null, body[0].description);
    } else {
      callback(null, 'No data found for requested breed');
    }

  });
};

module.exports = { fetchBreedDescription };