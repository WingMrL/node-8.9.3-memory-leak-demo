const express = require('express')
const middleware = require('./middleware.js');
const request = require('request');
const app = express()

app.use(middleware);

app.get('/', (req, res) => {
  let baseOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    json: true,
    forever: true,
    timeout: 20000,
    uri: 'http://t.weather.sojson.com/api/weather/city/101030100'
  };
  request(baseOptions, (error, response, body) => {
    // resolve(body);
    // console.log(body)
  });

  console.log('================');
  console.log(process.namespaces['req-session']);
  res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
