/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 17.05.15
 */
"use strict";


var container,
	second,
	user = {
		name: 'Eve',
		surname: 'Smith'
	},
	str = `
	<strong>
	Hello, ${user.name} ${user.surname}
	</strong>`;


// tag fn() definition
function toUpper(tpl) {
	var _tpl = tpl[0];
	for (let i = 1; i < arguments.length; i++) {
		console.log(arguments[i]);
		_tpl += " " + arguments[i].toUpperCase();
	}

	return _tpl;
}

// template string usage
container = document.getElementById("container");
container.innerHTML = str;

// template string with tag fn()
second = document.getElementById("second");
second.innerHTML = toUpper`<strong>
	Hello, ${user.name} ${user.surname}
	</strong>`;
