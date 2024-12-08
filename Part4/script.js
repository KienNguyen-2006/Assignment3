"use strict";

const $ = (selector) => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => { 
    const selectedRoomType = document.querySelector('input[name="roomType"]:checked');
    const selectedBedType = document.querySelector('input[name="bedType"]:checked');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $("#arrivalDate").focus() 

    $("#reservationForm").addEventListener("submit", (e) => {

        const nights = $("#nights").value.trim()
        const name = $("#name").value.trim();
        const emailAddress = $("#emailAddress").value.trim();
        const phoneNumber = $("#phoneNumber").value.trim();
        const roomType = $("#roomType").value.trim();
        const bedType = $("#bedType").value.trim();
        const adults = $("#adults").value.trim();
        const children = $("#children").value.trim();
        const arrivalDate = $("#arrivalDate").value.trim();

        let isValid = true;

        clearErrors();

        if(name === ""){
            showError("#name", "This field is required")
            isValid = false;
        }

    
        if (emailAddress === ""){
            showError("#emailAddress", "This field is required");
            isValid = false;
        } 
        else if (!emailPattern.test(emailAddress)){
            showError("#emailAddress", "Must be a valid email address.");
            isValid = false;
        }

        if (nights == ""){
            showError("#nights","This field is required");
            isValid = false;
        }
        else if (isNaN(nights)){
            showError("#nights","Must be numeric.");
            isValid = false;
        }
        else if(nights <= 0){
            showError("#nights","Nights should be > 0")
            isValid = false;
        }

        if(adults == 0 && children == 0){
            showError("#adults","Amount of Adults/Children Must Be Selected");
        }

        if(arrivalDate == ""){
            showError("#arrivalDate","This field is required")
        }

        if(!selectedRoomType){
            showError("#roomType", "Choose An Option")
        }

        if(!selectedBedType){
            showError("#bedType", "Choose An Option")
        }

        if(phoneNumber == ""){
            showError("#phoneNumber", "This field is required");
        }

        if(!isValid){
            e.preventDefault();
        }

        $("#name").value = name;
        $("#nights").value = nights;
        $("#emailAddress").value = emailAddress;
        $("#phoneNumber").value = phoneNumber;
        $("#adults").value = adults;
        $("#children").value = children;
        $("#arrivalDate").value = arrivalDate;
        $("#roomType").value = roomType;
})});

const showError = (selector, message) =>{
    const field = $(selector);
    const error = document.createElement("span");
    error.className = "error";
    error.textContent = "* " + message;
    field.parentElement.appendChild(error);
}

const clearErrors = () =>{
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => error.remove());
}