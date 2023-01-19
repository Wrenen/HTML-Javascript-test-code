/*
This scrpit covers the basics JavaScript
*/

console.log('JavaScript imported successfully');

// -- Declaring Constants --
const rate = 7;

// -- Declaring Variables --
let name = 'Wrenen'; // 'let' is used to declare variables; 'var' can also be used but there are issues

// Naming variable tips
//   -no reserved keywords
//  -cannot start with number
//  -cannot contain space or hyphen
//  -case-sensitive 

// Primitive Variables types
let string = 'DCunha';
let number = 30;
let boolean = true;
let nullTypes = null; //used for variables that don't have a value yet
let undef = undefined;

// JS is a dynamaic language and can variable type can be change at anytime

// -- Objects --
let movie = {
    name: 'The Dark Knight', //each value inside a object is defined with :
    year: 2008               //values are sperated with a ,
};

// Dot Notation to access individual object member
movie.name = 'The Batman';

// Bracket notation
movie['year'] = '2022'; // Bracket notation is preferred if the member can change based on input 

// -- Arrays --
let colors = ['red','blue','green'];

//indexing
colors[0] = 'yellow';
colors[3] = 'red';  //dynamic length so size can change


//  -- Functions --
function func1(){
    console.log('This printed from a function!');
}

function inputFunc(name , number){
    console.log('Input taken by the function: ' + name + ' and ' + number);
}

function square(number) {
    let output = 0;
    output = number * number;
    return output;
}

//calling functions
func1();
inputFunc('Wrenen',1);
inputFunc(2,'Test');
console.log(square(3)); // this function returns a value

// -- Formated output / Template literal --

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`; // !!! Important !!! use ` and not '
console.log(text);

let testNum = 69;
text = `Welcome ${firstName} ${testNum + 351}!`;
console.log(text);

//Template literals are not supported in Internet Explorer.

// -- Conditional Statements --

let x = 10;
let y = 20;

if(x > y){
    console.log('x is greater than y');
} else if (x == y){
    console.log('x is equal to y');
} else{
    console.log('x is lesser than y');
}

// -- Loops --
for (let i = 0; i < 5; i++){
    console.log(`Looping... ${i}`);
}

//using colors array from above
for (let color in colors){
    console.log(colors[color]);
}
