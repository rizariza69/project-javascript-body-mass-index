function show() {

  event.preventDefault()

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;
  let bmi = weight / height ** 2;

  if (bmi < 18.5) {
    document.getElementById(
      "conclution"
    ).innerHTML = `You thin severe thines, more eat and gym`;
  } else if (bmi < 24.9) {
    document.getElementById("conclution").innerHTML = `you normal, cool!`;
  } else if (bmi < 30) {
    document.getElementById("conclution").innerHTML = `You Overweight, must diet and gym. keep health`;
  } else if (bmi < 40) {
    document.getElementById("conclution").innerHTML = `You Obese, you must extreme diet and gym. keep health`;
  }
}