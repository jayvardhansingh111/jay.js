// const butt = document.querySelectorAll(".button");
// // console.log(butt);
// const body = document.querySelector("body");
// // console.log(bodd);
// butt.forEach(function (button) {
//   console.log(button);
//   button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === "white") {
//       body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === "green") {
//       body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === "orange") {
//       body.style.backgroundColor = "#d35121";
//     }

//     if (e.target.id === "black") {
//       body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === "red") {
//       body.style.backgroundColor = "red";
//     }
//   });
// });

const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");
console.log(body);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = " #bd471c";
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = "black";
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }
  });
});
