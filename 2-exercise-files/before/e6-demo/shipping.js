"use strict"

// Templated strings
let person = {name: 'John Smith'};
let tpl = `My name is ${person.name}.`;
console.log(`'${tpl}' should have been 'My name is John Smith.'`);

// Scoped variables with let
var doWork = function(flag){
	if(flag){
		let x = 3;
		return x;
	}
};
let result = doWork(true);
console.log(`${result} should have been 3.`);

// Map
let ageMap = new Map();
let ralph = {'name': 'Ralph'};
ageMap.set(ralph, 29);
let ralphAge = ageMap.get(ralph);
console.log(`${ralphAge} should have been 29.`);

// Set
var set = new Set();
set.add('Tom');
set.add('Dick');
set.add('Harry');

let hasHarry = set.has('Harry');
console.log(`${hasHarry} should be true`);

// Generators
function *range(start, end, step) {
	while (start < end) {
		yield start;
		start += step;
	}
}

for (let i of range(0, 10, 2)) {
	console.log(i);
}