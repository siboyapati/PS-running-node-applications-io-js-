var theProtoObj = {
	toString() {
		return " comes from the prototype object";
	}
};

var handler = function(){ return "Handler called"; };

var greet = {
	// set the "super object" i.e. prototype at object
	// construction time
	__proto__: theProtoObj,
	handler, // Shorthand for handler: handler
	// refering to superclass
	toString() { return "Results: " + super.toString() }
};

console.log(greet.handler());
console.log(greet.toString());

function Person(name) {
    this.name = name;
}
Person.prototype[Symbol.toStringTag] = "Person";

function Animal(name){
	this.name = name;
}
Animal.prototype.toString = function() {
    return this.name;
};



var me = new Person("Nicholas");
var myDog = new Animal("LtCol Fluffy Boots");

console.log(`'${me.toString()}' should be '[object Person]'`);
console.log(`'${myDog.toString()}' should be 'LtCol Fluffy Boots'`);
