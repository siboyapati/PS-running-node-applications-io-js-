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