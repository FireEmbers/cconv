#cconv - Coordinate Conversion nice little node module

In the chaotic world of GIS coordinate systems, a node module rises to bring a message of hope and understanding.

This module converts from geodesic latitude/longitude(degrees) to projected coordinates Easting/Northing (metres), and also the other way around.

##Usage

`var cconv= require('cconv')`

`cB = cconv(sridA, sridB, cA, f);`

`var sridA = 4258;` The srid of the coordinate system 

`var sridB = 3035;` The srid of the projected system

###Forward

`var f = true;`

`var cA = [50.000,-5.000];` [ latitude, longitude]

`var cB = [];` [ Northing, Easting ]

###Reverse

`var f = true;`

`var cA = [2999718.85, 3962799.45];` [ Northing, Easting ]

`var cB = [];` [ latitude, longitude ]


##References
http://www.iers.org/nn_11666/IERS/EN/Science/ITRS/ITRS.html?__nnn=true

(pag72 mainly)





