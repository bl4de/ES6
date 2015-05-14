/**
 * Created by bl4de on 10.05.15.
 */

// simple generator - returns 'iterations' of 'startVal'
// increased by 'step' or 1
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
