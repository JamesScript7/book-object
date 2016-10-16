// var book = {
// 	"title": "Infinite Jest",
// 	"body": ["Page 1: Written by David Foster Wallace",
// 			 "Page 2: Hal Incandeza is the youngest of the Incandenza children.",
// 			 "Page 3: As a child, he was very precocious"]
// };

function Book(title, body) {
	this.title = title;
	this.body = body;
}

Book.prototype.read = function() {
	var result = [];
	//forEach();
	
	//for..in..

	//recursive
	
	//for()
	for(var i=0;i<this.body.length;i++) {
		result += "Page " + [i + 1] + ": " + this.body[i] + "\n";
	}

	return "Title: " + this.title + "\n" + result;
};

var myBook1 = new Book("Cats", ["Written by James", "Cats are awesome", "How to adopt a cat"]);
var myBook2 = new Book("Dogs", ["Written by Kim", "Dogs are awesome", "How to adopt a dog"]);

console.log(myBook1.read());
console.log(myBook2.read());