gammap1m1
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes `Γ(x+1) - 1`.

Evaluates `Γ(x+1) - 1` accurately even for very small `x`, where `Γ` is the
[gamma function][gamma-function].


## Installation

``` bash
$ npm install math-gammap1m1
```


## Usage

``` javascript
var gammap1m1 = require( 'math-gammap1m1' );
```


#### gammap1m1( x )

Evaluates the [gamma function][gamma-function] at `x + 1` and subtracts `1`.

``` javascript
var val = gammap1m1( 1e-3 );
// returns ~-0.001

val = gammap1m1( -3/2 );
// returns ~-4.545

val = gammap1m1( 4 );
// returns 23

val = gammap1m1( 1/2 );
// returns ~-0.114

```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var gammap1m1 = require( 'math-gammap1m1' );

var x = linspace( -10, 10, 100 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
	v = gammap1m1( x[ i ] );
	console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-gammap1m1.svg
[npm-url]: https://npmjs.org/package/math-gammap1m1

[build-image]: http://img.shields.io/travis/math-io/gammap1m1/master.svg
[build-url]: https://travis-ci.org/math-io/gammap1m1

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/gammap1m1/master.svg
[coverage-url]: https://codecov.io/github/math-io/gammap1m1?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/gammap1m1.svg
[dependencies-url]: https://david-dm.org/math-io/gammap1m1

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/gammap1m1.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/gammap1m1

[github-issues-image]: http://img.shields.io/github/issues/math-io/gammap1m1.svg
[github-issues-url]: https://github.com/math-io/gammap1m1/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function
[factorial-function]: https://github.com/math-io/factorial
[real]: https://en.wikipedia.org/wiki/Real_number
[complex]: https://en.wikipedia.org/wiki/Complex_number
[euler-mascheroni-constant]: https://github.com/compute-io/const-eulergamma
