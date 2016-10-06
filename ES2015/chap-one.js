var box = [1, 2, 3, 4, 2, 3, 1];
const pi = Math.PI;
function pox(){
	console.log(box) 
}
pox(); // [1, 2, 3, 4, 2, 3, 1]

// arrow function
var wox = text => {
  console.log(text*2); 
}
wox(2); // 4

// var, const, let difference
const [a, b, c, d, e, f] = box;
console.log(a) // 1
// error as following 
// let a = 12; error

console.log('--------', 'now, it is working-area');
// es6 
if ([1][0]) {
  let a = 'a';
  for (let i = 0; i < 3; i++) {
    console.log('+++', i)
  }
  if(typeof i == undefined) {
    console.log(i)
  } 
  console.log('000', 'i' + ' is not  defined') // undefined
}
if(typeof a == undefined) {
    console.log(i)
  }
console.log('a ' + ' is not defined'); // undefined

var obj = {
  name: 'zch',
  age: 27,
  sex: 'female',
  career: 'IT'
}
const {name, age, sex, career, bug} = obj;
console.log('解构复制', name);
console.log('解构成功，但不存在', bug);
// obj 增加属性
obj.dox = box;
const { dox } = obj;
console.log('array = ', dox); 

// box 数组去重
var boxarr = [];
for (let i = 0; i < box.length; i++) {
  if (boxarr.indexOf(box[i]) == -1) {
    boxarr.push(box[i])
  }
}
console.log('box去重后的数组', boxarr);






// 写一个方法读取url中字段值
var queryString = (text) => {
  let url = window.location.search,
      obj = null;
  // console.log(url.slice(1).split('&'))
  var url1 = '?aa=223jl&bb=aldjakdf&cc=adf111';
  const box = url1.slice(1).split('&')
  for(var i = 0; i < box.length; i++){
    if(box[i].match(text)) {
      var xx = box[i].split('=');
       console.log(xx[1]); 
    }
  }
}
// 输入你需要查询的字段名
queryString('bb')
