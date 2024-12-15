"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    $('#reservation_form').validate({
        rules: {
            arrival_date: "required",
            nights: {
                required: true,
                digits: true
            },
            adults: "required",
            children: "required",
            name: "required",
            email: {
                required: true,
                email: true,
                pattern: emailPattern
            },
            phone: {
                required: true,
                pattern: "\\d{3}[-]\\d{3}[-]\\d{4}"
            }
        },
        messages: {
            arrival_date: "Please enter your arrival date",
            nights: {
                required: "Please enter the number of nights",
                digits: "Please enter a valid number"
            },
            adults: "Please select the number of adults",
            children: "Please select the number of children",
            name: "Please enter your name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address",
                pattern: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                pattern: "Please enter a valid phone number format (999-999-9999)"
            }
        },
        submitHandler: function(form) {
            // Replace form with thank you message
            $('#reservation_form').replaceWith(`
                <main>
                    <h3>Thank you for your request!</h3>
                    <p>We will contact you within the next 24 hours.</p>
                </main>
            `);
        }
    });
});
