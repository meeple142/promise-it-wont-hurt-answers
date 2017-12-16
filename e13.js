/* eslint no-console:0, no-unused-vars:0 */

var http = require('q-io/http');
function log(stuff){
    console.log(stuff);
    return stuff;
}


http.read('http://localhost:7000')
    .then(String)
    .then((id) => `http://localhost:7001/${id}`)
    .then(http.read)
    .then(JSON.parse)
    .then(console.log)
    .catch(console.error);