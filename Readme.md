#cconv - Coordinate Conversion nice litle node module

In the chaotic world of GIS coordinate systems, a node module rises to bring a message of hope and understanding.

This module converts from geodesic latitude/longitude(degrees) to projected coordinates Easting/Northing (metres), and also the other way around.

##Usage

`var cconv= require('cconv')`

`var cA = [50.000,-5.000];` [latitude, longitude]

`var cB = [];` [Easting, Northing]

`sridA = 4258;` The srid of the original system 

`sridB = 3035` The srid of the second system

`cB = cconv(sridA, sridB, cA);`





