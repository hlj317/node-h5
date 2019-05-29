var assert = require("chai").assert,
	should = require("chai").should(),
	Nightmare = require("nightmare");

var nightmare = new Nightmare();

describe("Codepackage", function() {
	this.timeout(15000);

	before(function (done) {
		nightmare
			.goto("http://www.simonholmes.com")
			.title(function(title){
				console.log("Title is: " + title); // Correct output
				should.exist(title);
				title.should.be.a("string");
			})
			.run(function(err, mare){
				done();
			});
	});

	after(function(){
		console.log("tests finished");
	});

	it("should have a title set", function(done) {

		nightmare
			.title(function(title){
				console.log("Title is: " + title); // Incorrect output (title is empty)
				should.exist(title);
				title.should.be.a("string");
			})
			.run(function(err, mare){
				done();
			});

	});

});