/* eslint no-console:0, no-unused-vars:0 */

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        reject(new Error('REJECTED!'));
    }, 300);
});

function onReject(error){
    console.log(error.message);
}

promise.then(console.log, onReject);