/*

  Test for ccvonv, forward and reversed tests

*/

var test = require('tap').test;

var cconv = require('../cconv');

test('Test forward', function (t) {

  //[latitude, longitude]
  var cA = [50.000,5.000];

  //[ Northing, Easting]
  var cB = [];

  //verification outputs [ Northing, Easting]
  var v = [2999718.85, 3962799.45];

  //The srid of the original system
  var sridA = '4258';

  //The srid of the second system
  var sridB = '3035';

  var f = true;

  cB = cconv(sridA, sridB, cA, f);

  t.ok( Math.abs(cB[0] - v[0] ) < 1E-1 , "Northing is OK");
  t.ok( Math.abs(cB[1] - v[1] ) < 1E-1 , "Easting is OK");

  t.end();
});

test('Test Reversed', function (t) {

  //[ Northing, Easting]
  cA = [2999718.85, 3962799.45];

  //[latitude, longitude] 
  cB = [];

  //verification outputs //[latitude, longitude] 
  v = [50.000,5.000];

  //The srid of the original system
  sridA = '4258';

  //The srid of the second system
  sridB = '3035';

  f = false;
  cB = cconv(sridA, sridB, cA, f);

  t.ok( Math.abs(cB[0] - v[0] ) < 1E-1 , "latitude is OK");
  t.ok( Math.abs(cB[1] - v[1] ) < 1E-1 , "longitude is OK");

  t.end();
});
