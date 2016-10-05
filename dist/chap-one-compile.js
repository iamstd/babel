'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var box = [1, 2, 3, 4, 2, 3, 1];
var pi = Math.PI;
function pox() {
  console.log(box);
}
pox(); // [1, 2, 3, 4, 2, 3, 1]

// arrow function
var wox = function wox(text) {
  console.log(text * 2);
};
wox(2); // 4

// var, const, let difference
var a = box[0];
var b = box[1];
var c = box[2];
var d = box[3];
var e = box[4];
var f = box[5];

console.log(a); // 1
// error as following 
// let a = 12; error

console.log('--------', 'now, it is working-area');
if ([1][0]) {
  var _a = 'a';
  for (var _i = 0; _i < 3; _i++) {
    console.log('+++', _i);
  }
  if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) == undefined) {
    console.log(i);
  }
  console.log('000', 'i' + 'is not  defined'); // undefined
}
if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == undefined) {
  console.log(i);
}
console.log('a ' + ' is not defined'); // undefined
