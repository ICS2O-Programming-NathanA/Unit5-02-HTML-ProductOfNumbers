// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much it will cost for a certain order
 */
function displayNumbers () {

	//declare variables
	let sum = 0

	//get user input
	let userNum1 = parseInt(document.getElementById('firstNum').value)
	let userNum2 = parseInt(document.getElementById('secondNum').value)
	
	// use a FOR loop to display the product of the 2 numbers
	for (let counter = 1; counter <= userNum2; counter++) {
		// Add userNum1 to sum
		sum = sum + userNum1
	}

	//Display results
	document.getElementById('display-results').innerHTML = "The product is " + sum + "."
}
	