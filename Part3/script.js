const $ = (selector) => document.querySelector(selector)


function processEntry(){
    const income = parseFloat($('#taxIncome').value)

    if (income <= 0){
        alert('The income must be greater than zero in order to calculate')
    } else {
        calculateTax(income)
    }
}
function calculateTax(income) {
    let tax = 0;

    if (income > 518400) {
        tax = 156235 + (income - 518400) * 0.37;
    } 
    else if (income > 207350 && income <= 518400) {
        tax = 47367.50 + (income - 207350) * 0.35;
    } 
    else if (income > 163300 && income <= 207350) {
        tax = 33271.50 + (income - 163300) * 0.32;
    } 
    else if (income > 85525 && income <= 163300) {
        tax = 14605.50 + (income - 85525) * 0.24;
    } 
    else if (income > 40125 && income <= 85525) {
        tax = 4617.50 + (income - 40125) * 0.22;
    } 
    else if (income > 9875 && income <= 40125) {
        tax = 987.50 + (income - 9875) * 0.12;
    } 
    else if (income > 0 && income <= 9875) {
        tax = income * 0.1;
    }

    $("#taxOwed").value = tax.toFixed(2);
}

document.addEventListener("DOMContentLoaded",function() {
$("#calculateTax").addEventListener("click", processEntry)
})