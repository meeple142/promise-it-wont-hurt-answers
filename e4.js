/* eslint no-console:0, no-unused-vars:0 */

var promise = new Promise(function (fulfill, reject) {

    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});


function onRejected(error){
    console.log(error);
}

promise.then(console.log, onRejected);