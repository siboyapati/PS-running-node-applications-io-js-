let add = (x,y) => {
	let temp = x + y;
	return temp;
};
let square = x => x * x;
let three = () => 3;

let result = square(add(2,three()));
console.log(`'${result}' should be '25'`);