// prototype are the mechanism by which javascript objects inherit ferature fom one other

function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 4;
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

//  ((((((((((((((     new keyword       ))))))))))))))
// the new operator create an instance of a user define object type or ine built the object

function createuser(product, price) {
  this.product = product;
  this.price = price;
}
createuser.prototype.increment = function () {
  this.ptice++;
};
createuser.prototype.printMe = function () {
  console.log(`price :${this.score}`);
};
const chai = new createuser("chai", 20);
const coffee = createuser("coffee", 100);

coffee.printMe();
