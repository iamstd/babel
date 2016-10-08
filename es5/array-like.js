
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
  var wox = function (a, b) {
      console.log(arguments.length) // actual length
      sum();
      return {
          sum: sum,
          arguments: arguments,
          length: arguments.length
      }
  }
  function sum(){
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i];
      }
  }


// array-like to  Array
var DOM = Array.prototype.slice.call(dom); // Array
var obj = wox(1, 2, 3, 4)
var Arguments = Array.prototype.slice.call(obj.arguments);

// String 类型借用数组方法
  // join method 
  var str = 'iamzch';
  var Str = Array.prototype.join.call(str, '-'); //i-a-m-z-c-h
  var String = Array.prototype.map.call(str, v => {
    return v.toUpperCase() + '-'; 
  }).join(''); // I-A-M-Z-C-H

// 将str反过来
  // 方法1 一个函数
  function reverse (str) {
    var Str = '',
        n = str.length;
    for(var i = 0; i <= str.length; i++) {
      Str += str[n-i];
    }
    console.log(Str);
  } 
  reverse(str)

  // 方法2 借用数组的函数reverse
  var a = str.split('').reverse().join(''); // one line code

// num 