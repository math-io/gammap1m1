// To run this script, `cd` to the `./test/fixtures` directory and then execute in the terminal `runWandbox --file --compiler gcc-head --output output3.json ./runner3.cpp`.

#include <iostream>
#include <vector>
#include <boost/math/special_functions/gamma.hpp>

using namespace std;

vector<double> linspace( double start, double end, int num ) {
	double delta = (end - start) / (num - 1);
	vector<double> arr( num - 1 );
	for ( int i = 0; i < num - 1; ++i ){
		arr[ i ] = start + delta * i;
	}
	arr.push_back( end );
	return arr;
}

void print_vector( vector<double> vec, bool last = false ) {
	cout << "[";
	for ( vector<double>::iterator it = vec.begin(); it != vec.end(); ++it ) {
		if ( vec.end() != it+1 ) {
			cout << setprecision (16) << *it;
			cout << ",";
		} else {
			cout << setprecision (16) << *it;
			cout << "]";
			if ( last == false ) {
				cout << ",";
			}
		}
	}
	return;
}

void print_results( vector<double> x, vector<double> expected ) {
	cout << "{" << endl;
	cout << "  \"x\": ";
	print_vector( x );
	cout << "  \"expected\": ";
	print_vector( expected, true );
	cout << "}" << endl;
	return;
}

int main() {
	vector<double> x = linspace( -9.99, -2.01, 100 );
	vector<double> expected;

	for ( int i = 0; i < 100; i++  ) {
		expected.push_back( boost::math::tgamma1pm1( x[ i ] ) );
	}
	print_results( x, expected );
	return 0;
}
