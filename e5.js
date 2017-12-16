/* eslint no-console:0, no-unused-vars:0 */

var promise = new Promise(function (fulfill, reject) {
    reject(new Error('PROMISE VALUE');
});

promise.then(console.log);

console.log('MAIN PROGRAM');