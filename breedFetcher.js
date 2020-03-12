const request = require('request');
const breedId = process.argv[2];
console.log();
//const httpLink = 'https://api.thecatapi.com/v1/images/search?breed_id=beng'
const httpLink = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`;
console.log(httpLink);

request(httpLink, (error, _response, body) => {

  console.log(body.length);
  if (error) {
    console.log('URL does not exist and/or is invalid');
    return;
  } else if (body.length === 2) {
    console.log('Breed request does not exist and/or is invalid');
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0]);
//  console.log(typeof data);
});




//sudo command
//1. require the request library
//2. touch .gitignore node_modules
//3. Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
//3.a request from endpoint
// 4. content is a string => convert js object