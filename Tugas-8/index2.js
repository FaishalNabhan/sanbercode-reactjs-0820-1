var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooks(10000, books) {
    readBooksPromise
        .then(function(startread) {
            console.log(startread);
        })
        .catch(function(timeup) {

        })
}

readBooks();