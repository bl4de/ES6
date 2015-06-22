/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 21.06.15
 */
console.log("Symbols playground");

var mySymbol = Symbol(),
    otherSymbol = Symbol("otherSymbol");

var obj = {
    mySymbol: "ok"
};

obj[otherSymbol] = "ok too!";

console.log(obj);

obj[otherSymbol] = "new symbol value";
console.log(obj);

if(otherSymbol in obj) {
    console.log(obj[otherSymbol] + " exists");
}