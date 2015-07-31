/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 27.07.15
 */

//function* gen(i) {
//    while (true) {
//        yield i += 10;
//    }
//}
//
//
//var a = gen(10);
//
//console.log(a.next());
//console.log(a.next());
//console.log(a.next());

//----------------------

function* gene() {
    var ret = yield ;
}


var a = gene(1);

console.log(a.next(10));
console.log(a.next(20));
console.log(a.next(30));