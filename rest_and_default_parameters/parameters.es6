/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 25.05.15
 */

"use strict";
//rest parameters

function restParameters(a, b, ...r) {
    console.log(a, b);

    console.log(r);
    for (var i of r) {
        console.log(i);
    }
}

//restParameters(1, 2, 3, 4, 5, 6, 7, 8);
//restParameters({test: 1}, {test: 2}, {test: 3}, {test: 4});


// default parameters
function defaultParameters(a, b = 1, c, d = "aaa", e = (a) ? a + 100 : 0) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log('=====');
}

//defaultParameters();
//defaultParameters(10);
//defaultParameters(10, 20);
//defaultParameters(10, undefined);
//defaultParameters(10, 20, 30);


// generators and functions as default parameters
var _n,
    _v = 12;

function* getParam(s) {
    var start = s;

    yield start + 10;
}


function nextVal() {
    return _v += 12;
}


function defaultParametersWithGenerators(b = _n.next().value, c = 20) {
    console.log(b);
    console.log(c);
    console.log('=====');
}


function defaultParametersWithFunctions(b = nextVal(), c = 20) {
    console.log(b);
    console.log(c);
    console.log('=====');
}

// works as expected :)
defaultParametersWithFunctions();
defaultParametersWithFunctions();
defaultParametersWithFunctions();

_n = getParam(1);

// first call works well, in every next call b is undefined :/
defaultParametersWithFunctions();
defaultParametersWithFunctions();
defaultParametersWithFunctions();