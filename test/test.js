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
	var values = linspace( 2, 10, 100 );
	var delta;
	var expected;
	var tol;
	var v;
	var i;

	for ( i = 0; i < values.length; i++ ) {
		v = gammap1m1( values[ i ] );
		expected = gamma( values[ i ] + 1 ) - 1;
		delta = abs( v - expected );
		tol = 1e-16 * Math.max( 1, abs( v ), abs( expected ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + values[ i ] + '. Value: ' + v + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function evaluates `Γ(x+1) - 1` for `x` between `(-2,2]`', function test( t ) {
	var values = linspace( -2, 2, 100 );
	var delta;
	var expected;
	var tol;
	var v;
	var i;

	for ( i = 1; i < values.length; i++ ) {
		v = gammap1m1( values[ i ] );
		expected = gamma( values[ i ] + 1 ) - 1;
		delta = abs( v - expected );
		tol = 1e-12 * Math.max( 1, abs( v ), abs( expected ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + values[ i ] + '. Value: ' + v + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function evaluates `Γ(x+1) - 1` for non-integer `x` between `(-10,-2)`', function test( t ) {
	var values = linspace( -10, -2, 100 );
	var delta;
	var expected;
	var tol;
	var v;
	var i;

	for ( i = 1; i < values.length - 1; i++ ) {
		v = gammap1m1( values[ i ] );
		expected = gamma( values[ i ] + 1 ) - 1;
		delta = abs( v - expected );
		tol = 1e-16 * Math.max( 1, abs( v ), abs( expected ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + values[ i ] + '. Value: ' + v + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
