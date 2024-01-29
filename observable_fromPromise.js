const https = require('https');
let Rx = require( 'rxjs/Rx' );  // Importing the entire library is bad idea

let {Observable, interval} = require('rxjs/Observable');
require('rxjs/add/observable/from');

let beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
];

// Observable.fromPromise(fetch('https://dummyjson.com/todos'))
//     .subscribe(
//         beer => console.log(beer),
//         err => console.error(err),
//         () => console.log("Streaming is over")
//     );
var fetchContent = function(url) {
    return Rx.Observable.create(function (observer) {
        https.get( url, function ( res ) {
            let data = [];
            const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
            res.on( 'data', chunk => {
                data.push( chunk );
            } )
            res.on( 'end', () => {
                console.log( 'Response ended: ' );
                const users = JSON.parse( Buffer.concat( data ).toString() );

                for (const user of users ) {
                    console.log( `Got user with id: ${ user.id }, name: ${ user.name }` );
                }
            } ).on( 'error', err => {
                observer.onError();
            })
        })
    });
};

Rx.Observable.interval(1000)
    .map(function() { return 'https://jsonplaceholder.typicode.com/users' })
    .flatMap(fetchContent)
    .map(content=>console.log(content))
    .subscribe(
        beer => console.log(beer),
        err => console.error(err),
        () => console.log("Streaming is over")
    );