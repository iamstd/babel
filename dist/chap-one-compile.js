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
// es6 
if ([1][0]) {
  var _a = 'a';
  for (var _i = 0; _i < 3; _i++) {
    console.log('+++', _i);
  }
  if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) == undefined) {
    console.log(i);
  }
  console.log('000', 'i' + ' is not  defined'); // undefined
}
if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == undefined) {
  console.log(i);
}
console.log('a ' + ' is not defined'); // undefined

var obj = {
  name: 'zch',
  age: 27,
  sex: 'female',
  career: 'IT'
};
var name = obj.name;
var age = obj.age;
var sex = obj.sex;
var career = obj.career;
var bug = obj.bug;

console.log('解构复制', name);
console.log('解构成功，但不存在', bug);
// obj 增加属性
obj.dox = box;
var dox = obj.dox;

console.log('array = ', dox);

// box 数组去重
var boxarr = [];
for (var _i2 = 0; _i2 < box.length; _i2++) {
  if (boxarr.indexOf(box[_i2]) == -1) {
    boxarr.push(box[_i2]);
  }
}
console.log('box去重后的数组', boxarr);

// 写一个方法读取url中字段值
var queryString = function queryString(text) {
  var url = window.location.search,
      obj = null;
  // console.log(url.slice(1).split('&'))
  var url1 = '?aa=223jl&bb=aldjakdf&cc=adf111';
  var box = url1.slice(1).split('&');
  for (var i = 0; i < box.length; i++) {
    if (box[i].match(text)) {
      var xx = box[i].split('=');
      console.log(xx[1]);
    }
  }
};
queryString('bb');
queryString('aa');
queryString('cc');
