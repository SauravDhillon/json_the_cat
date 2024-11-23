const needle = require('needle');
const [breedName] = process.argv.slice(2);
needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
  if (err) {
    console.log('An error occured while requesting data from server', err);
    return;
  }
  // console.log('statusCode:', response && response.statusCode);
  //console.log('body:' , body);
  // console.log(typeof body);
  if (Array.isArray(body) && body.length > 0) {
    console.log('Description of breed requested:', body[0].description);
  } else {
    console.log('No data found for requested breed');
  }

});