const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculate() {
  const w = weight.value;
  const h = height.value;
  console.log(w);
  console.log(h);

  let bmi = (w / ((h / 100) * (h / 100))).toFixed(2);

  let ans = "Your BMI is: " + bmi;

  if (bmi < 18.5) {
    ans += "(underweight)";
  } else if (bmi >= 18.5 && bmi < 25) {
    ans += "(normalweight)";
  } else if (bmi >= 25 && bmi < 30) {
    ans += "(overweight)";
  } else if (bmi >= 30 && bmi < 40) {
    ans += "(obese)";
  }

  result.textContent = ans;
  height.value = null;
  weight.value = null;
}

calculateBtn.addEventListener("click", calculate);
