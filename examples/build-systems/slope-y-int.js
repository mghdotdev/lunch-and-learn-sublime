var slope = function( a, b ) {
	if ( a[0] == b[0] ) {
		return null;
	}

	return ( b[1] - a[1] ) / ( b[0] - a[0] );
};
var yInt = function( point, slope ) {
	if (slope === null) {
		// vertical line
		return point[0];
	}

	return point[1] - slope * point[0];
};

var A = [100, 56.25];
var B = [66.6665, 37.5];
var x = 50;
var m = slope( A, B );
var b = yInt( A, m );

console.log( 'SLOPE =', m );
console.log( 'Y-INTERCEPT =', b );

console.log( '-------------------- Result --------------------' );
console.log( (m*x) + b );