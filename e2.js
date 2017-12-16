/* eslint no-console:0, no-unused-vars:0 */

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        fulfill('FULFILLED!');
    }, 300);
});

promise.then(console.log);