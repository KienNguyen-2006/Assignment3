"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subTotal = parseFloat($("#subTotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    let errorMessage = "";

    // Validate inputs
    if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000) {
        errorMessage += "Subtotal must be > 0 and < 10000.\n";
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        errorMessage += "Tax Rate must be > 0 and < 12.";
    }

    if (errorMessage) {
        alert(errorMessage);
        $("#subTotal").focus();
        return;
    }

    const salesTax = (subTotal * taxRate) / 100;
    const total = subTotal + salesTax;

    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);

    $("#subTotal").focus();
};

const clearForm = () => {
    $("#subTotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";
    $("#subTotal").focus();
};

const clearField = event => {
    event.target.value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);

    $("#clear").addEventListener("click", clearForm);

    $("#subTotal").addEventListener("click", clearField);
    $("#taxRate").addEventListener("click", clearField);

    $("#subTotal").focus();
});
