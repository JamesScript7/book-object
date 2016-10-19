function Book(title, body) {
	this.title = title;
	this.body = body;
}

var myBook1 = new Book("Cats", ["Written by James", "Cats are awesome", "How to adopt a cat"]);
var myBook2 = new Book("Dogs", ["Written by Kim", "Dogs are awesome", "How to adopt a dog"]);

var cats = document.getElementById("cats");
var dogs = document.getElementById("dogs")

Book.prototype.read = function() {
	var result = "";

	//for..in..

	// On MDN, they tell me it should not be used iterate
	// over an array where index order are important

	//recursive = function(value){}

	// Couldn't figure out how to make this work in this context

	//forEach();

	// var pages = this.body;
	// var count = 1;
	// pages.forEach(function(x) {
	// 	result += "Page " + count + ": " + x + " " + "<br>";
	// 	count++;
	// });

	//while(){}

	// var i = 0;
	// while (i < this.body.length) {
	// 	result += "Page " + [i + 1] + ": " + this.body[i] + "<br>";
	// 	i++;
	// }

	// for(){}

	for(var i=0;i<this.body.length;i++) {
		result += "Page " + [i + 1] + ": " + this.body[i] + "<br>";
	}

	return "Title: " + this.title + "<br>" + result;
};

cats.innerHTML = myBook1.read();
dogs.innerHTML = myBook2.read();

//I found the for(){} loop to be the most contained and fewest line of code.
//The while loop looks better but adds 1 variable to local namespace.
//The forEach was fun but it adds 2 variables to local namespace.




