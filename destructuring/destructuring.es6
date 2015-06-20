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

var [,x] = [10, arr];
console.log(x[1]); // should be 2000

// rest pattern creates an array with rest parameters
var [a, ...b] = [1, 2, 3, 4, 5, 6];
console.log(b); // Array[2,3,4,5,6]


// with generators:
function* gen() {
    var a = 0;
    while (true) {
        yield a += 10;
    }
}

var [a,b,c,d,e] = gen();

console.log(b); // should be 20
console.log(d); // should be 40

// destructuring objects
var obj = {
    manufacturer: 'Audi',
    model: 'RS5',
    type: 'Coupe',
    power: '450 HP'
};

var {manufacturer,model:m,type:t} = obj;
console.log(manufacturer); // should be 'Audi'
console.log(t); // should be 'Coupe'

// shortcut
var {manufacturer,model,type,power} = {
    manufacturer: 'Audi',
    model: 'RS5',
    type: 'Coupe',
    power: '450 HP'
};

console.log(model); // should be 'RS5'


// default values
var [def = 10] = [];
console.log(def); // should be 10

// returning multiple values from fn()

function fn() {
    return [1, 2, 3];
}

var [x,y,z] = fn();
console.log(y); // should be 2