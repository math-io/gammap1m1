'use strict';

/**
* NOTE: the original C++ code and copyright notice is from the [Boost library]{http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/gamma.hpp}.
*
* This implementation follows the original, but has been modified for JavaScript.
*/

/**
* (C) Copyright John Maddock 2006.
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/

// MODULES //

var expm1 = require( 'math-float64-expm1' );
var gamma = require( 'math-gamma' );
var gammaln = require( 'math-gammaln' );
var log1p = require( 'math-float64-log1p' );


// GAMMAP1M1 //

/**
* FUNCTION: gammap1m1( x )
*	Computes `Γ(x+1) - 1`.
*
* @param {Number} x - input value
* @returns {Number} function value
*/
function gammap1m1( x ) {
	var result;
	if ( x < 0 ) {
		if ( x < -0.5 ) {
			// Best method is simply to subtract 1 from gamma:
			result = gamma( 1 + x ) - 1;
		} else {
			// Use expm1 on gammaln:
			result = expm1( -log1p(x) + gammaln( x + 2 ) );
		}
	} else {
		if ( x < 2 ) {
			// Use expm1 on gammaln:
			result = expm1( gammaln( x + 1 ) );
		} else {
			// Best method is simply to subtract 1 from gamma:
			result = gamma( 1 + x ) - 1;
		}
	}
	return result;
} // end FUNCTION gammap1m1()


// EXPORTS //

module.exports = gammap1m1;
