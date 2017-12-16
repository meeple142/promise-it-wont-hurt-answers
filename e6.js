/* eslint no-console:0, no-unused-vars:0 */
var color = require('chalk');
var promise = new Promise(function (fulfill, reject) {
    reject(new Error('rejected my words'));
});

promise.catch((err)=>console.log(err.message));

var promiseFill = Promise.resolve('The Best')
    .then((msg) => console.log(color.green(msg)));

var promiseReject = Promise.reject('The Worst')
    .then((msg) => console.log(color.green(msg)))
    .catch((msg) => console.log(color.red(msg)));
