'use strict';

// MODULES //

var tape = require( 'tape' );
var incrspace = require( 'compute-incrspace' );
var linspace = require( 'compute-linspace' );
var abs = require( 'math-abs' );
var gamma = require( 'math-gamma' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var gammap1m1 = require( './../lib' );


// FIXTURES //

var output1 = JSON.parse( require( './fixtures/output1.json' ).program_message );
var data1 = output1.x;
var expected1 = output1.expected;

var output2 = JSON.parse( require( './fixtures/output2.json' ).program_message );
var data2 = output2.x;
var expected2 = output2.expected;

var output3 = JSON.parse( require( './fixtures/output3.json' ).program_message );
var data3 = output3.x;
var expected3 = output3.expected;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof gammap1m1 === 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an integer smaller than -1, the function returns `NaN`', function test( t ) {
	var values = incrspace( -2, -1000, -1 );
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = gammap1m1( values[ i ] );
		t.ok( v !== v, 'returns NaN when provided ' + values[ i ] );
	}
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', function test( t ) {
	var v = gammap1m1( NINF );
	t.ok( v !== v, 'returns NaN when provided negative infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = gammap1m1( NaN );
	t.ok( v !== v, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if provided `-1`, the function returns positive infinity', function test( t ) {
	var v = gammap1m1( -1 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `-1`, the function returns positive infinity', function test( t ) {
	var v = gammap1m1( -1 );
	t.equal( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function evaluates `Γ(x+1) - 1` for `x` between `[2,10]`', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data1.length; i++ ) {
		v = gammap1m1( data1[ i ] );
		delta = abs( v - expected1[ i ] );
		tol = 1e-14 * Math.max( 1, abs( v ), abs( expected1[ i ]) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data1[ i ] + '. Value: ' + v + '. Expected: ' + expected1[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function evaluates `Γ(x+1) - 1` for `x` between `(-2,2]`', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 1; i < data2.length; i++ ) {
		v = gammap1m1( data2[ i ] );
		delta = abs( v - expected2[ i ] );
		tol = 1e-14 * Math.max( 1, abs( v ), abs( expected2[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data2[ i ] + '. Value: ' + v + '. Expected: ' + expected2[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function evaluates `Γ(x+1) - 1` for non-integer `x` between `(-10,-2)`', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 1; i < data3.length - 1; i++ ) {
		v = gammap1m1( data3[ i ] );
		delta = abs( v - expected3[ i ] );
		tol = 1e-13 * Math.max( 1, abs( v ), abs( expected3[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data3[ i ] + '. Value: ' + v + '. Expected: ' + expected3[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
