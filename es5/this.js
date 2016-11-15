// 定义函数war与变量
var war =() => {console.log(this.count)};
var count =1;
// 函数hox
hox = () => {
  var count = 0;
  war();
  //函数war 以及函数提升
  function war() {console.log('====', count)}
};
hox(); // 0


// 定义函数war与变量
var war =() => {console.log(this.count)}; //this指向war定义的地方，此事在hox中，hox函数本身没有this，因此就是外围的window环境
// var count =1;
// 函数hox
hox = () => {
  var count = 0;
  war();  // 此时可理解为this.war()
  // 函数war 以及函数提升
  // function war() {console.log('====', count)}
};
hox(); // undefined  因为window中没有定义count

