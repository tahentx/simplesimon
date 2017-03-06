
"use strict";

// Functionality: variables, logic, rules

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

// need to add functions here.

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
        alert('Congrats! You have passed the first round!');
    } else {
        count++;
        animateSquares(masterPattern[count]);
        console.log("Fired");
    }
	}, interval);
}

function animateSquares (element) {
	$(".square").animate({opacity: .4},80).animate({opacity: 1},80);	
}


// Aesthetics: JQuery page effects, decoration, interactivity


$(".square").on("click", function(){
	animateSquares($(this));
});

// $(".blue").on("click", function(){
// 	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
// });

// $(".yellow").on("click", function(){
// 	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
// });

// $(".green").on("click", function(){
// 	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
// });

$(".square").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});

// $(".blue").hover(function() {
// 	$(this).fadeOut (100);
// 	$(this).fadeIn (300);
// });

// $(".green").hover(function() {
// 	$(this).fadeOut (100);
// 	$(this).fadeIn (300);
// });

// $(".yellow").hover(function() {
// 	$(this).fadeOut (100);
// 	$(this).fadeIn (300);
// });












