/* eslint no-console:0, no-unused-vars:0 */
/* global first, second */
/*
function onFulfilled(message){
    return second(message)
}
*/

// did this because it said it needed to
//first().then(onFulfilled).then(console.log);

//this is all you need to do
first().then(second).then(console.log);