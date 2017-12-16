/* eslint no-console:0, no-unused-vars:0 */
/* global  getPromise1, getPromise2*/
function all(promise1, promise2) {
    return new Promise(function (resolve, reject) {
        var counter = 0,
            vals = [];

        function shipItBack() {
            resolve(vals);
        }

        function saveItSpot(i){
            return (val) => {
                vals[i] = val;
                counter += 1;
                if (counter === 2) {
                    shipItBack();
                }
            }
        }

        //send out the first one
        promise1.then(saveItSpot(0));

        //send out the second one
        promise2.then(saveItSpot(1));

    });
}

all(getPromise1(), getPromise2())
    .then(console.log);