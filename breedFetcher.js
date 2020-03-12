const request = require('request');
//const httpLink = `https://api.thecatapi.com/v1/images/search?breed_id=${breedName}`;

const fetchBreedDescription = function (breedName, callback) {
  const breedInitals = breedName.toLowerCase().slice(0, 3)
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedInitals}`, (error, _response, body) => {

    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, null);
    }
    const desc = data[0].description.trim();
  
  callback(null, desc); //is this right?
});
};


module.exports = { fetchBreedDescription };


//sudo command
//1. require the request library
//2. touch .gitignore node_modules
//3. Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
//3.a request from endpoint
//4. content is a string => convert js object