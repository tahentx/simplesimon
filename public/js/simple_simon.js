
"use strict";

var masterPattern = "";
var red = 0;
var blue = 1;
var yellow = 2;
var green = 3;
var min = 0;
var max = 3;


var generateNumber = Math.floor(Math.random()* 3);

// convert number to color for interactivity

var number = 3;

switch (number) {
	case 1:
		console.log("red");
		break;
	case 2:
		console.log("blue");
		break;
	case 3:
		console.log("green");
		break;
	case 3:
		console.log("yellow");
		break;
}

// page effects, decoration, interactivity

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














