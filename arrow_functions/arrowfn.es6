/*
 ECMAScript 2015 file template
 bl4de <bloorq@gmail.com>

 Created on 20.06.15
 */
console.clear();
console.log('Arrow functions playground');

// arrow function as callback for Array.prototype.filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var res = arr.filter(item => item % 2 == 0);

console.log(res);

// more instructions in arrow function
// Note that an arrow function with a block body
// does not automatically return a value. Use a return statement for that.
res = arr.filter(item => {
    console.log(item);
    return item % 2 == 0;
});

console.log(res);
