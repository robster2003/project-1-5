"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#calculate").addEventListener("dblclick", processEntry);




});

//define a constant tax rate of 5%
const taxRate = 0.05;
//Calculates the tax, and returns the value formated to two decimals places
const calculateTax = income => (income * taxRate).toFixed(2);


// get called when the Calculate button is click.
function processEntry() {
    // Get the value from the input field
    const income = parseFloat($("#income").value);

    // Calculate tax
    const tax = calculateTax(income, taxRate);

    // Display the tax in the output field
    $("#tax").value = tax;
}
