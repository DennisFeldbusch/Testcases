const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ENDPOINT = '/users/1';

// Concatenating the two constants using backticks
fetch(`${BASE_URL}${ENDPOINT}`)
  .then(res => res.json())
  .then(data => console.log(data));
