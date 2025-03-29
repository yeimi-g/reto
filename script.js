const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-cusom");
const resetBtn = document.querySelector(".reset");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val)) {
    val.addEventListener('click', handlClick);
}
tipCustom.addEventListener('input', tipInputFun);
resetBtn.addEventListener("click", reset);

billInput.value ="0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun{
    billValue = parseFloat(billInput.value)
    console.log(billValue);
}

function peopleInputFun{
    peopleValue = parseFloat(peopleInput.value)
    console.log(peopleValue);
}

function tipInputFun(){
    tipValue=parseFloat(tipCustom.value / 100);

    tipCustom.forEach(function(val)){
        val.classList.remove("active-tip");
    };
    calculateTip();
}

function handlClick(event) {
    tips.forEach(function(val)){
        val.classList.remove("active-tip");
        if (event.target.innerHTML ==vla.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML)/100
        }
    };
    console.log(tipValue);
}

function calculateTip(){
    if(peopleValue >= 1){
        let tipAmount = (billValue *  tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}

function reset(){
    billInput.value ="0.0";
    billInputFun()
    peopleInput.value = "1";
    peopleInputFun()
    tipCustom.value = "";
}