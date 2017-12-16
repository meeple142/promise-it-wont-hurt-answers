/* eslint no-console:0, no-unused-vars:0 */

function attachTitle(nameIn) {
    return 'DR. ' + nameIn;
}

var val = Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);