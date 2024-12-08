$(document).ready(function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    $("#arrival-date").focus();

    $("form").submit(function(event) {
        var arrivalDate = $("#arrival-date").val().trim();
        var nights = $("#nights").val().trim();
        var adults = $("#adults").val().trim();
        var children = $("#children").val().trim();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();

        // Validate the entries
        var isValid = true;

        if (arrivalDate === "") {
            alert("Please enter an arrival date.");
            isValid = false;
        }

        if (nights === "" || isNaN(nights)) {
            alert("Please enter a valid number of nights.");
            isValid = false;
        }

        if (email === "") {
            alert("Please enter an email address.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (phone === "") {
            alert("Please enter a phone number.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }

        
    });
});
