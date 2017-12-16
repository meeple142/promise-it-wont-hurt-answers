/* eslint no-console:0, no-unused-vars:0 */

var http = require('q-io/http');

http.read('http://localhost:1337')
    .then(JSON.parse)
    .then(console.log)
    .catch(console.error);