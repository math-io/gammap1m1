'use strict';

var linspace = require( 'compute-linspace' );
var gammap1m1 = require( './../lib' );

var x = linspace( -10, 10, 100 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
	v = gammap1m1( x[ i ] );
	console.log( 'x: %d, f(x): %d', x[ i ], v );
}
