// random color genrator
const color = function () {
  hex = "0123456789ABCDEF";
  let newcolor = "#";
  for (let i = 0; i < 6; i++) {
    newcolor += hex[Math.floor(Math.random() * 12)];
  }
  return newcolor;
};
// console.log(color());

let intervalid;
const startColor = function () {
  function changebcgColor() {
    if (intervalid !== null) {
      document.body.style.backgroundColor = color();
    }

    // document.body.style.backgroundColor = color();
  }
  intervalid = setInterval(changebcgColor, 2000);
};

const stopcolor = function () {
  clearInterval(intervalid);
  intervalid = null;
};

document.querySelector("#pre").addEventListener("click", startColor);
document.querySelector("#stp").addEventListener("click", stopcolor);
