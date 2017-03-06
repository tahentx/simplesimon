"use strict";

// The code below establishes the logic, and the sequence of the squares lighting up.

var masterPattern = [];

var random;

function generateRandomNumber() {
	random = Math.floor(Math.random()* 4);
	return random;
}


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

// Aesthetics: JQuery page effects, decoration, interactivity


$(".square").on("click", function(){
	animateSquares($(this));
});


$(".square").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});



// The code below defines the user interactivity and how failure takes place.


function userTurn () {
	var clickCount = 0;

		$(".square").on("click", function(){
			var clickedId = "#" + $(this).attr("id");
			console.log("Clicked: " + clickedId);
			console.log("Array: " + memoryArray[clickCount]);
			animateSquares(clickedId, 180);
			console.log(this);
			if (clickedId == memoryArray[clickCount]){
			if (clickCount == memoryArray.length -1){
				newMemory();
				clickCount = 0;
				$(".square").off("click");
			} else {
				clickCount++;
			}
		}else{
			memoryArray = [];
			alert("Game over!");
		}
	})
}








