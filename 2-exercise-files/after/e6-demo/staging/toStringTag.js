"use strict";

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
