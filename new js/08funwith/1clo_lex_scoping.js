// closer and lexical scoping

const outer = "out from the function";
function out() {
  let name = "Gabbar";
  function iner() {
    // console.log(name, outer);
  }
  iner();
  // console.log(name);

  function doubleiner() {
    // console.log(name, outer);
    console.log(iner()); // we cant do this
  }
  doubleiner();
}
out();
// console.log(outer);
