const { Observable } = require( "rxjs" );
require( 'rxjs/add/observable/timer' );
require('rxjs/add/operator/mapTo')
require( 'rxjs/add/observable/merge' );
let threeSecHTTPRequest = Observable.timer( 3000 ).mapTo( 'First response' );
let oneSecHTTPRequest = Observable.timer( 1000 ).mapTo( 'Second response' );

Observable
    .merge( threeSecHTTPRequest, oneSecHTTPRequest )
    .subscribe( res => console.log( res ) );