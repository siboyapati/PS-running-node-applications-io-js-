
// Classes
class Employee {

	constructor(name) { this.name = name; }

	doWork() { return "complete!"; }

	get name() { return this._name.toUpperCase(); }

	set name(newValue) { this._name = newValue; }
}

let e1 = new Employee("Scott");
let e2 = new Employee("Alex");

console.log(`'${e1.name}' should be 'SCOTT'`);
console.log(`'${e2.name}' should be 'ALEX'`);

e1.name = "Marcus";
console.log(`'${e1.name}' should be 'MARCUS'`);

