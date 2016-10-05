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