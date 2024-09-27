const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
// console.log(Math.PI);
Math.PI = 4;
// console.log(Math.PI); // we can`t override Math`s PI value

const subj = {
  Name: "Math",
  fee: 4000,
  isAvalable: true,

  jack: function () {
    //  if you make a function then you need to use if condition
    console.log("in this type error occur");
  },
};
console.log(Object.getOwnPropertyDescriptor(subj, "fee"));

Object.defineProperty(subj, "fee", {
  value: 5000,
  writable: false,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(subj, "fee"));

for (const [key, value] of Object.entries(subj)) {
  if (typeof value !== "function") {
    console.log(`key : ${key} values: ${value}`);
  }
  console.log(`key : ${key} values: ${value}`);
}
