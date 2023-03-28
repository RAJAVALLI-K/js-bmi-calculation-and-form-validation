let form = document.querySelector('form');
form.addEventListener('submit', bmiCalculate);
function bmiCalculate(e) {
    e.preventDefault();
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);
    let result = document.querySelector("#result");
    let validation = document.querySelector(".valid");
    let valid = document.querySelector(".valid1");
    let para = document.querySelector(".res-para");
    if ((height === "") || (height < 0) || (isNaN(height))) {
        validation.innerText = "please enter correct height";
        validation.style.color = "red";
    }
    else if ((weight === "") || (weight < 0) || (isNaN(weight))) {
        valid.innerText = "please enter correct weight";
        valid.style.color = "red";
    }
    else {
        findBmi();
    }
    function findBmi() {
        let bmi = (weight / (height ** 2));
        if (bmi <= 19) {
            result.innerHTML = `<p> Your BMI is ${bmi} <p> `;
            para.innerText = "Under Weight";
            result.style.color = "yellow";
        }
        else if (bmi > 19 && bmi <= 25) {
            result.innerHTML = `<p> Your BMI is ${bmi} <p>`;
            para.innerText = "Normal Weight";
            result.style.color = "green";
        }
        else {
            result.innerHTML = `<p> Your BMI is ${bmi} <p>`;
            para.innerText = "Over Weight";
            result.style.color = "red";
        }
    }
}
