/* eslint no-console:0*/
function parsePromised(jsonIn) {
    return new Promise(function(fulfill, reject) {
        try {
            var parsed = JSON.parse(jsonIn);
            fulfill(parsed);
        } catch (e) {
            reject(e.message);
        }
    });
}

parsePromised(process.argv[2])
    .then(console.log)
    .catch(console.log);