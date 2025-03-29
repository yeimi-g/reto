const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val)) {
    val.addEventListener('click', handlClick);
}


billInput.value ="0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = "0.0"
let peopleValue = "1";

function billInputFun{
    billValue = parseFloat(billInput.value)
    console.log(billValue);
}

function peopleInputFun{
    peopleValue = parseFloat(peopleInput.value)
    console.log(peopleValue);
}

function handlClick(event) {
    tips.forEach(function(val)){
        val.classList.remove("active-tip");
        if (event.target.innerHTML ==vla.innerHTML){
            val.classList.add("active-tip");
        }
    }
}
