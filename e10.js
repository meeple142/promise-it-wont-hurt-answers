/* eslint no-console:0*/

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(numIn) {
    console.log(numIn);
    return numIn + 1;

}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((e) =>console.log(e.message));
    