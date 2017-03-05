
"use strict";

// Functionality: variables, logic, rules

var masterPattern = [];

var random;


function generateRandomNumber() {
	random = Math.floor(Math.random()* 4);
	return random;
}


$("button#start").on("click", function() {
	generateRandomNumber();
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

function animate(){
	var randomSquare = getRandomSquare();
	randomSquare.animate({opacity: .4},80).animate({opacity: 1},80);	
}

function simonSequence(){

}



	// masterPattern.push(random);

// Aesthetics: JQuery page effects, decoration, interactivity


$(".red").on("click", function(){
	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
});

$(".blue").on("click", function(){
	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
});

$(".yellow").on("click", function(){
	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
});

$(".green").on("click", function(){
	$(this).animate({opacity: .4},80).animate({opacity: 1},80);	
});

$(".red").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});

$(".blue").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});

$(".green").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});

$(".yellow").hover(function() {
	$(this).fadeOut (100);
	$(this).fadeIn (300);
});












