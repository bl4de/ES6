/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 23.06.15
 */
console.log("collections");


// simple implementation of set.addAll
Set.prototype.addAll = function (...args) {
    for (var element of args) {
        this.add(element);
    }
};


// Set
var o = {
    test: "test",
    test2: "test2"
};
var shas, s = new Set(); //space between added only once
s.add(o);

//console.log(s);
s.addAll("adam", "audi", "vw", "opel", "fors", "adam", "opel", "bmw");
//console.log(s);

// Map

var m = new Map();
m.set("c", "d");
m.set("a", "b");
console.log(m.size);
//console.log(m.has("c"));
//console.log(m.get("c"));

var ki = m.keys();
console.log(ki.next());

var vi = m.values();
console.log(vi.next());
console.log(vi.next());
console.log(vi.next());

var ei = m.entries();
console.log(ei.next().value);
console.log(ei.next().value);
