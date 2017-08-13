let request = require('request-promise');
let http = require('https');
function sendRestRequestWithHeader (URI, method, header) {
  let options = {
    uri: URI,
    method: method,
    headers: header,
    resolveWithFullResponse: false
  };

  return request(options).then(function (response) {
    return response;
  });

}

let HEADER = {
  'Accept-Language': 'en-GB',
  "Client-ID": "AEM",
  'User-Agent': 'chrome'
};

let httpsRequest = http.get('https://jsonplaceholder.typicode.com/users', function (responce) {
  // Task 1 -	Validation: status code of the obtained response is 200 OK
  console.log("\n", responce.statusCode);
  if (responce.statusCode === 200) {
    console.log('+ All Okay, status code of the obtained response is 200 OK')
  } else console.log('Error, status code is not 200!');

  // Task 2 - Validation: the content-type header exists and equal "application/json; charset=utf-8"
  console.log("\n", responce.headers['content-type']);
  if (responce.headers['content-type'] === 'application/json; charset=utf-8') {
    console.log('+ All Okay, - the content-type header exists and equal "application/json; charset=utf-8"');
  } else console.log('Error, content-type is not "application/json; charset=utf-8"!');

});

sendRestRequestWithHeader('https://jsonplaceholder.typicode.com/users', 'GET', HEADER).then(function (responce) {
  console.log('\n\n',responce);
  // Task 3 - Validation: the content of the response body is the array of 10 users
  if (JSON.parse(responce).length === 10) {
    console.log('+ All Okay, the content of the response body is the array of 10 users');
  } else console.log('Error, no 10 users!');

});