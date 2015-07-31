"use strict";

var a = [1, 2, 3, 4, 5];

// for ... of Array
for (let i of a) {
	console.log(i);
}

var s = "Audi RS5 B8 MY 2015";

// for ... of String
for (let i of s) {
	if (i === "B") {
		break;
	}
	console.log(i);
}

var o = {
	"manufacturer": "Audi",
	"model": "RS5",
	"model year": "2015",
	"engine": "V8 FSI 4.2",
	"power": "450 KM"
};

// for .. of Object
for (let i of Object.keys(o)) {
	console.log(i + " : " + o[i]);
}