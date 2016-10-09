// js基本类型 7种
var vord = null,
    unde = undefined,
    numb = 23,
    stri = 'string',
    bool = true,
    symb = Symb('symbol'),
    obje = {
      name: 'zch',
      carier: 'FE'
    };

// 数组、函数、正则均不属于JS内置类型 
var a,
    arr = [6, 1, 2, 3, 5],
    box = function (a, b, c) {
      console.log(a + b + c);
    },
    exp = /in/;

// typeof 总共7种 返回值永远是字符串 
typeof vord // 'object'
typeof unde // 'undefined'
typeof numb // 'number'
typeof NaN // 'number'
typeof stri // 'string'
typeof bool // 'boolean'
typeof symb // 'symbol'
typeof obje // 'object'
typeof box // 'function'
// typeof区分基本类型没问题，但是不能区分数组、正则等
 typeof arr // 'object'
 typeof box // 'function'
 typeof exp // 'object'

 // typeof 不能区分未声明的变量与只声明但未初始化的变量
 typeof a  // 'undefined'
 typeof aa // 'undefined' aa并未声明

 // 针对以上问题可以用instanceof 解决部分问题
 arr instanceof Array // true
 epx instanceof RegExp // true
 box instanceof Function // true


// attention
  NaN === NaN // false
  isNaN(NaN) // true
  isNaN('A') // true
