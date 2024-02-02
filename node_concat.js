let { Observable } = require( 'rxjs/Observable' );
require( 'rxjs/add/observable/concat' );
require( 'rxjs/add/observable/timer' );
require( 'rxjs/add/operator/mapTo' );

// emulate first HTTP request with 3 secs
let threeSecHTTPRequest = Observable
    .timer( 3000 )
    .mapTo( 'First response' );

// emulate second HTTP request with 1 sec
let oneSecHTTPRequest = Observable
    .timer( 1000 )
    .mapTo( 'Second response' );

Observable
    .concat( threeSecHTTPRequest, oneSecHTTPRequest )
    .subscribe( res => console.log( res ) );
