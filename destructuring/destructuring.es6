/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 04.06.15
 */

"use strict";

var arr = [1, 2, 3];

var [a,b,c] = arr;

console.log(a); // should be 1

// destructuring nested structures
var arr = [1000, 2000];
var outerArr = [1, 2, 3, arr]
var [a,[p,q,r,[x,z]]] = [10, outerArr];

console.log(x); // should be 1000
