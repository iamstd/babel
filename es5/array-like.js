//  array-like to array 

//  first screen  DOM list
var dom = documents.getElementsByTagName('div');
//  object
typeof dom
// array-like  not  Array
dom instanceof Array  // false


//  second function arguments
var box = function (a, b) {
    console.log(arguments.length) // actual length
    sum();
}
box(1, 2) // 2
box(1, 2, 3) // 3
box(1) // 1
console.log(box.length) // 2 形参个数
// arguments is an array-like
var box = function (a, b) {
    console.log(arguments.length) // actual length
    sum();
    return {
        sum: sum,
        length: arguments.length
    }
}
function sum(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
}
