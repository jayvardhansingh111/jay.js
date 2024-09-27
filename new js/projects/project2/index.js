const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector(".result");

  if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Enter a valid weight ${weight}`;
  } else if (height === "" || height <= 0) {
    result.innerHTML = `Enret a valid height ${height}`;
  } else {
    const bmiresult = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = `<span>${bmiresult}</span>`;
  }
  //   const weight = parseInt(document.querySelector("#weight").value);
  //   const height = parseInt(document.querySelector("#height").value);
  //   const result = document.querySelector(".result");

  //   if (height === "" || height < 0 || isNaN(height)) {
  //     result.innerHTML = `Please give a valid height ${height}`;
  //   } else if (weight === "" || weight < 0 || isNaN(weight)) {
  //     result.innerHTML = `Please give a valid weight ${weight}`;
  //   } else {
  //     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //     //show the result
  //     result.innerHTML = `<span>${bmi}</span>`;
  //   }
});
