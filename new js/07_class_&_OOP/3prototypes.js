let myheros = ["jack", "jackey"];
let heroPower = {
  jack: "walk",
  jackey: "run",

  getjackeyPower: function () {
    console.log(`power is ${this.jackey}`);
  },
};
Object.prototype.jay = function () {
  console.log(`jay is present`);
};

// heroPower.jay();
// myheros.jay();

Array.prototype.harry = function () {
  console.log(`harry is also present`);
};
// heroPower.harry();       // we can`t define the object function in the array
// myheros.harry();

//(((((((((((((((((   inheritance   )))))))))))))))))
const user = {
  name: "jack",
  email: "jay@.com",
};
const teacher = {
  makevedio: true,
};
const assistent = {
  morevedio: false,
};
const TAassistent = {
  note: "js notes",
  fulltime: true,
  __proto__: teacher,
};

// teacher.__proto__ = user;
// console.log(teacher.__proto__.name);
// console.log(teacher.name);

Object.setPrototypeOf(assistent, teacher);
// console.log(assistent.makevedio);

let User2 = "jayvardhan      ";
String.prototype.truelength = function () {
  console.log(this);
  console.log(`true length :${this.trim().length}`);
};
User2.truelength();
"jack  ".truelength();
