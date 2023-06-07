window.addEventListener('DOMContentLoaded', function (params) {
   const form = document.getElementById("calc-form");
   if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e){
        e.preventDefault();
        update();
    });
   } 
});

function getCurrentUIValues(){
    return {
        amount : +(document.getElementById("loan-amount").value),
        years : +(document.getElementById("loan-years").value),
        rate : +(document.getElementById("loan-rate").value),
    }
}

function setupInitialValues(){
    const values = {amount:10000 ,years: 8, rate:10};
    const amountUI = document.getElementById("loan-amount");
    amountUI.value = values.amount;
    const yearsUI = document.getElementById("loan-years");
    yearsUI.value = values.years;
    const rateUI = document.getElementById("loan-rate");
    rateUI.value = values.rate;
    update();
}

function update() {
    const CurrentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(CurrentUIValues));
}

function calculateMonthlyPayment(values) {
    const monthlyRate = (values.rate/100)/12;
    const n = Math.floor(values.years*12);
    return(
        (monthlyRate*values.amount)/
        (1 - Math.pow((1 + monthlyRate), -n))
        ).toFixed(2);
}

function updateMonthly(monthly){
    const monthlyUI = document.getElementById("monthly-payment");
    monthlyUI.innerText = "$" + monthly;
}