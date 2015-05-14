/**
 * Created by bl4de on 10.05.15.
 */

"use strict";

// simple generator - returns 'iterations' of 'startVal'
// increased by 'step' or 1
/*
 function* simpleGenerator(startVal, iterations, step) {
 while (iterations-- > 0) {
 yield (step > 0) ? startVal += step : startVal++;
 }
 yield (step > 0) ? startVal += step : startVal;
 }

 var i = simpleGenerator(120, 15, 10),
 res = {
 done: false
 };


 while (!res.done) {
 res = i.next();
 //console.log(res);
 console.log(res.value);
 }
 */

//###################################################################

function* modifyValue(v) {
	var start = 1;
	if (v) {
		start += v;
	}

	while (start) {
		yield ++start;
	}
}


var i = modifyValue();

var res = i.next();
console.log(res);


res = i.next(12);
console.log(res);

res = i.next();
console.log(res);


//###################################################################
//
//class RangeIterator {
//	constructor(start, stop) {
//		this.value = start;
//		this.stop = stop;
//	}
//
//	[Symbol.iterator]() {
//		return this;
//	}
//
//	next() {
//		var value = this.value;
//		if (value < this.stop) {
//			this.value++;
//			return {done: false, value: value};
//		} else {
//			return {done: true, value: undefined};
//		}
//	}
//}
//
//// Return a new iterator that counts up from 'start' to 'stop'.
//function range(start, stop) {
//	return new RangeIterator(start, stop);
//}
