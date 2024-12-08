"use strict";

const $ = (selector) => document.querySelector(selector);

const processEntry = () => {
    const changeAmount = parseInt($("#changeAmount").value);

    if (isNaN(changeAmount) || changeAmount < 0 || changeAmount > 99) {
        alert("Please enter a number between 0 and 99.");
        return;
    }

    makeChange(changeAmount);
};

const makeChange = (amount) => {
    const quarters = Math.floor(amount / 25);
    amount %= 25;

    const dimes = Math.floor(amount / 10);
    amount %= 10;

    const nickels = Math.floor(amount / 5);
    amount %= 5;

    const pennies = amount;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculateChange").addEventListener("click", processEntry);
});
