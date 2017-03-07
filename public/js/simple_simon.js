"use strict";

// The code below establishes the logic, and the sequence of the squares lighting up.

// Global variables declared.

var masterPattern = [];

var memoryArray = [];


function generateRandomNumber() {
	var random;
	random = Math.floor(Math.random()* 4);
	return random;
}


// Start button functionality defined.


$("#start").on("click", function() {
	newRound();
});


var squares = [
	$(".red"),
	$(".blue"),
	$(".green"),
	$(".yellow")];

function getRandomSquare(){
	var RandomIndex = generateRandomNumber();
	return squares[RandomIndex];
}


function newRound (){
	masterPattern.push(getRandomSquare());
	console.log(masterPattern);
	simonAnimateSequence();
}

function simonAnimateSequence () {
	var count = 0;
	var max = masterPattern.length; // set to master pattern.length
	var interval = 1000; // interval time in milliseconds

	var intervalId = setInterval(function () {
	    if (count >= max) {
	    	userTurn();
	        clearInterval(intervalId);
	        alert('Your turn!');
	    } else {
	        animateSquares(masterPattern[count]);
	        count++;
	        console.log("Fired");
	    }
	}, interval);
}


function animateSquares (element) {
	element.animate({opacity: .4},400, function(){
	element.animate({opacity: 1},400);		
	})	 
}


// Aesthetics section: JQuery page effects, decoration, interactivity


$(".square").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});


// The code below defines the user interactivity and how failure takes place.


function userTurn () {
	var clickCount = 0;
		$(".square").on("click", function(){
			var pattern = masterPattern[clickCount];
			console.log("Array: " + pattern);
			animateSquares($(this));
			console.log(this);
			
			if ($(this).attr("data") == pattern.attr("data")){
				if (clickCount == masterPattern.length -1){
				newRound();
				clickCount = 0;
				$(".square").off("click");
			} else {
				clickCount++;
			}

		}else{
			masterPattern = [];
			alert("Game over!");
		}
	})
}


// Code below creates the 'reset' button functionality


$("#reset").on("click", function() {
	masterPattern = [];
});






