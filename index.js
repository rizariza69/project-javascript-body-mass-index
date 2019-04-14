"use stirct"


function show() {
  const weight = document.getElementById('weight').value
  const height = document.getElementById('height').value / 100
  let bmi = weight / height ** 2

  if (bmi < 18.5) {
    document.getElementById('conclution').innerHTML = `You Are so thin, underwight`
  } else if (bmi < 24.9) {
    document.getElementById('conclution').innerHTML = `Yei...you normal, so cool!`
  } else if (bmi < 30) {
    document.getElementById('conclution').innerHTML = `You must diet`
  }

}