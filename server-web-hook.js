const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();

const PORT = process.env.PORT || 3000;

app.use( bodyParser.json() );

app.post( '/webhook', ( req, res ) => {
    console.log( 'Received webhook', req.body );
    res.sendStatus( 200 );
} );

app.listen( PORT, () => {
    console.log( `Server is running on port ${ PORT }` );
} );

/*
To run this in terminal:
$ node server-web-hook.js
In another terminal use Postman or as below:
$ curl -X POST -H "Content-Type: application/json" -d '{"event": "user_registered", "user": {"id": 1, "name":"John Doe"}}' http://localhost:3000/webhook
The response shall appear in server logs as below:
Received webhook { event: 'user_registered', user: { id: 1, name: 'John Doe' } }
*/