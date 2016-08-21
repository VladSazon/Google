alert('Helloworld!');
prompt("Are u okay ?")
confirm("did u get it ?")
function billionaires(name, wealth) {
this.name = name;
this.wealth = wealth;
}
function therichest(name) {
	this.name = name;
	this.source = IT;
}
function goldenyouth(name) {

	this.name = name;
	this.saying = "oh yeahh"
}
therichest.prototype = new billionaires();
goldenyouth.prototype = new therichest();

var thefirst = new goldenyouth("Vlad junior");
console.log(thefirst.saying);
console.log(thefirst.source);