function hello() {
    console.log("Hello, World!");
}
hello();


function printMessage(message) {
    console.log("message");
    console.log("Message printed successfully.");
}

printMessage();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();


function isAdult() {
    const age = 20; // You can change this value to test with different ages
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
}

isAdult();

// practice questons

function printPoem() {
    console.log("Roses are red,");
    console.log("Violets are blue,");
    console.log("Sugar is sweet,");
    console.log("And so are you.");
}
printPoem();


// practice question 2

function torolladice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a " + diceRoll);
}
torolladice();


// function with arguments
function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet("Alice", 25);
greet("Bob", 30);
greet("Charlie", 35);
    

function sum(a, b) {
    console.log(a + b);
}
sum(5, 10);
sum(20, 30);
sum(15, 25);




// pratice question
function average(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    console.log("The average is: " + avg);
}
average(10, 20, 30);
average(5, 15, 25);
average(8, 12, 16);


function multiplicationTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = number; i <= number * 10; i += number) {
        console.log(i);
    }
}

multiplicationTable(5);
multiplicationTable(7);



// return keyword
function add(a, b) {
    return a + b;
}
const result = add(10, 20);
console.log("The sum is: " + result);



function isAdult(age) {
    if (age >= 18) {
        return "You are an adult.";
    } else {
        return "You are not an adult.";
    }

    console.log("This line will never be executed.");
}


// practice question
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Example usage:
let strr = ["hi", "hello", "welcome"];
 function concat(strr) {
    let result= "";
    for (let i = 0; i < strr.length; i++) {
        result += strr[i];
    }
    return result;
 }


 // scope - it is the area where a variable is defined and can be accessed. There are two types of scope: global scope and local scope.
 // function scope - variables defined inside a function are local to that function and cannot be accessed outside of it. Global scope - variables defined outside of any function are global and can be accessed from anywhere in the code.
let sum = 56; // global scope
function calSum(a, b) {
    let sum = a + b; //function scope
    console.log("The sum is: " + sum);
}



// block scope - variables defined inside a block (e.g., inside an if statement or a loop) are only accessible within that block.
// apply only on let and const variables, var variables are not block scoped.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        let result = "Even"; // block scope
        console.log(result);
    } else {
        let result = "Odd";
        console.log(result); // block scope
    }
}
checkEvenOdd(10);
checkEvenOdd(15); //output: Odd 


// lexical scope - it is the scope that is determined by the position of the variable in the code. Variables defined in an outer scope are accessible in an inner scope, but not vice versa.
function outerFunction() {
    let outerVariable = "I am from the outer function.";
    function innerFunction() {
        console.log(outerVariable); // inner function can access outer variable
    }
    innerFunction();
}
outerFunction();


let greet = 'Hello'; // global scope
function changeGreet() {
    let greet = 'Hi';   // function scope - this greet variable is different from the global greet variable
    console.log(greet); // Output: Hi

    function innerGreet() {
        console.log(greet); // lexical scope - innerGreet can access the greet variable from changeGreet function
    }
    innerGreet(); // Output: Hi
}
console.log(greet); // Output: Hello    
changeGreet(); // Output: Hi


// fumction expression - it is a function that is assigned to a variable. It can be anonymous (without a name) or named.
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

let hello = function() {
    console.log("Hello, World!");
}
hello(); // Output: Hello, World!

//it act as a variable and can be passed as an argument to another function or returned from a function.

// higher-order function - it is a function that takes another function as an argument or returns a function as a result.
// takes multiple functions as arguments
function multiplegreet(func, n) {
    for (let i = 0; i <= n; i++) {
       func () 
}
}
let greet = function() {
    console.log("Hello, World!");
}

multiplegreet(greet,2);


function oddEvenTester(request) {
    if(request=="odd"){
        return function() {
            console.log(!(num % 2 === 0) );
        }

    } else if(request=="even"){
        return function() {
            console.log(num % 2 === 0);
        }
    } else {
        
            console.log("Invalid request. Please specify 'odd' or 'even'.");
        
    }
}
// methods - it is a function that is associated with an object. It can be called using the object name and the method name
const calculator = {
    num: 10,
    add: function(a, b) {
        return a + b;
    },  
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        }
        else {
            return "Cannot divide by zero.";
        }
    }
};

console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.subtract(20, 5)); // Output: 15
console.log(calculator.multiply(4, 5)); // Output: 20
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.divide(10, 0)); // Output: Cannot divide by zero. 


// this keyword - it is a special keyword that refers to the current object. It can be used to access the properties and methods of the current object.
const person = {
    name: "Alice",  
    age: 30,
    eng:69,
    math:85,
    phy:78,
    getAvg() {
        console.log(this);// Output: person object
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name}'s average score is: ${avg}`);
    },
    }


    function getAvg() {
        console.log(this); // Output: global object (window in browsers)
    }
getAvg();


// try & catch - it is a mechanism to handle errors in JavaScript. The code inside the try block is executed, and if an error occurs, the code inside the catch block is executed.
try {
    let result = 10 / 0;
    console.log(result); // Output: Infinity
} catch (error) {
    console.log("An error occurred: " + error.message);
}

// arrow function - it is a shorter syntax for writing functions in JavaScript. It does not have its own this keyword and cannot be used as a constructor.
const add = (a, b) => {console.log(a + b);};

const cube = (x) => {return x * x * x;};


const pow = (a,b) => {return a ** b;};
// implicit return - if the function body contains only a single expression, you can omit the curly braces and the return keyword. The value of the expression will be returned automatically.

const multiply = (a, b) => a * b;

const square = x => x * x;

const add = (a, b) => a + b;

const cube = x => x * x * x;

const pow = (a, b) => a ** b;

// set timeout - it is a function that allows you to execute a function after a specified delay in milliseconds.
console.log("Hello, World!"); // Output: Hello, World!
setTimeout(() => {
    console.log("apna time aayega"); // Output: apna time aayega (after 2 seconds)
}, 2000);
console.log("everyone"); // Output: This message is displayed immediately.




// set interval - it is a function that allows you to execute a function repeatedly at specified intervals in milliseconds.
let id1 = setInterval(() => {
    console.log("This message is displayed every 3 seconds.");
}, 3000); // Output: This message is displayed every 3 seconds. (repeatedly every 3 seconds)
console.log(id1); // Output: 1 (or some other unique identifier for the interval)
// To stop the interval, you can use clearInterval(id)
let id2 = setInterval(() => {
    console.log("This message is displayed every 5 seconds.");
}, 5000);
console.log(id2); // Output: 2 (or some other unique identifier for the interval)


clearInterval(id1); // This will stop the first interval
clearInterval(id2); // This will stop the second interval





// this with arrow function - in arrow functions, the this keyword does not refer to the function itself but inherits the this value from the enclosing scope. This means that if you use an arrow function as a method in an object, it will not have its own this and will instead refer to the global object (window in browsers) or be undefined in strict mode.
// function scope is who call the object function ka this use karta hai, not the object itself.
// arrow function use lexical scope call parent function ka this use karta hai, not the object itself.



const student = {
    name: "Bob",
    age: 25,
    marks: [85, 90, 78],
    prop: this, // Output: global scope (object) (window in browsers) or undefined in strict mode
    getname: function() {
        console.log(this); // Output: student object
        return this.name; // Output: Bob
    },
    getmarks: () => {
        console.log(this); // Output: global scope (object) (window in browsers) or undefined in strict mode
        return this.marks; // Output: undefined (because this does not refer to the student object)
    },
    getInfo1 : function() {
        setTimeout(() => {
            console.log(this); // Output: student object (because arrow function inherits this from getInfo1 function)
        }, 1000);
    },
    getInfo2 : function() {
        setTimeout(function() {
            console.log(this); // Output: global scope (object) (window in browsers) or undefined in strict mode (because regular function has its own this)
        }, 1000);
    }  
}


// practice question
const square = (n) => {return n * n;};
console.log(square(5)); // Output: 25

let id = setInterval(() => {
    console.log("Hello, World!");
}, 2000); // Output: This message is displayed every 2 seconds. (repeatedly every 2 seconds)

setTimeout(() => {
    clearInterval(id);
    console.log("Interval cleared.");
}, 10000); // Output: Interval cleared. (after 10 seconds, the interval will be stopped)


// array methods - it is a built-in function that can be used to perform various operations on arrays, such as adding, removing, or modifying elements. Some common array methods include push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), reduce(), etc.

// forEach() - it is a method that executes a provided function once for each array element.
let arr = [1, 2, 3, 4, 5];
// method 1 - using anonymous function
arr.forEach(function(element) {
    console.log(element);
}); // Output: 1 2 3 4 5 (each element is printed on a new line)

// method 2 - using arrow function
arr.forEach((element) => {
    console.log(element);
}); // Output: 1 2 3 4 5 (each element is printed on a new line)

// method 3 - using named function
let print = function(element) {
    console.log(element);
};
arr.forEach(print); // Output: 1 2 3 4 5 (each element is printed on a new line)


let arr = [{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Charlie", age: 35}];
arr.forEach(function(element) {
    console.log(element.name + " is " + element.age + " years old.");
});

// using arrow function
arr.forEach((element) => {
    console.log(element.name + " is " + element.age + " years old.");
});



// map - it is a method that creates a new array populated with the results of calling a provided function on every element in the calling array.
let arr = [1, 2, 3, 4, 5];
let squared = arr.map((element) => {
    return element * element;
});
console.log(squared); // Output: [1, 4, 9, 16, 25]

let squared = arr.map(function(element) {
    return element * element;
});
console.log(squared); // Output: [1, 4, 9, 16, 25]


let students = [{name: "Alice", marks: 85}, {name: "Bob", marks: 90}, {name: "Charlie", marks: 78}];
let gpa = students.map((student) => {
    return {name: student.name, gpa: student.marks / 20}; // Assuming GPA is calculated as marks divided by 20
});
console.log(gpa); // Output: [{name: "Alice", gpa: 4.25}, {name: "Bob", gpa: 4.5}, {name: "Charlie", gpa: 3.9}]




// filter - it is a method that creates a new array with all elements that pass the test implemented by the provided function.
let arr = [1, 2, 3, 4, 5];
let evenNumbers = arr.filter((element) => {
    return element % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]




// EVERY - it is a method that tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value (true or false).
let arr = [2, 4, 6, 8];
let allEven = arr.every((element) => {
    return element % 2 === 0;
});
console.log(allEven); // Output: true

let arr2 = [2, 3, 6, 8];
let allEven2 = arr2.every((element) => {
    return element % 2 === 0;
});
console.log(allEven2); // Output: false (because 3 is not an even number)




// SOME - it is a method that tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value (true or false).
let arr = [1, 2, 3, 4, 5];
let hasEven = arr.some((element) => {
    return element % 2 === 0;
});
console.log(hasEven); // Output: true (because there are even numbers in the array)

let arr2 = [1, 3, 5, 7];
let hasEven2 = arr2.some((element) => {
    return element % 2 === 0;
});
console.log(hasEven2); // Output: false (because there are no even numbers in the array)



// REDUCE - it is a method that executes a reducer function on each element of the array, resulting in a single output value.
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, element) => {
    console.log("Accumulator: " + accumulator + ", Current Element: " + element);
    return accumulator + element;
}, 0);
console.log(sum); // Output: 15




let arr =[1, 2, 3, 4, 5,6,83,34,23,45,67];
let max = -1;
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max); // Output: 83


let max = arr.reduce((max, element) => {
    if(element > max) {
        return element;
    }   
    else {
        return max;
    }
});
console.log(max); // Output: 83




let num = [10, 20, 30, 40, 50];
let check = num.every((element) => {
    return element % 10 === 0; // Check if the element is divisible by 10
});
console.log(check); // Output: true (because all elements are divisible by 10)


let arr =[1, 2, 3, 4, 5,6,83,34,23,45,67];
let min = -1;
for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min); // Output: 1



function getMin(arr) {
let min = arr.reduce((min, element) => {
    if(element < min) {
        return element;
    }   
    else {
        return min;
    }
});
return min;
}







// default parameters - it is a feature that allows you to specify default values for function parameters. If a parameter is not provided when the function is called, the default value will be used.
function sum(a, b = 3) {
    return a + b; // If b is not provided, it will default to 3
}

// it will go in order and it will not default to a) parameter if the previous parameter is not provided. For example, if you call sum(5), it will return 8 (5 + 3) because b defaults to 3. However, if you call sum(5, 2), it will return 7 (5 + 2) because b is provided and does not default to 3. If you call sum(), it will return NaN because a is not provided and does not have a default value.


// spread operator - it is a syntax that allows an iterable (such as an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // This will create a new array that combines the elements of arr1 and arr2
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

let str = "Hello";
let chars = [...str];
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']

let arr1 = [1, 2, 3];
console.log(...arr1); // Output: 1 2 3 (the elements of arr1 are expanded and printed separately)
console.log(arr1); // Output: [1, 2, 3] (arr1 remains unchanged)
console.log(1,2,3); // Output: 1 2 3 (the elements are printed separately)



// spread with array literals - it can be used to create a new array by combining existing arrays or adding new elements to an array.
let arr1 = [1, 2, 3];
let newarr = [...arr1]; // This will create a new array that contains the elements of arr1
console.log(newarr); // Output: [1, 2, 3]
newarr.push(4); // This will add a new element to the new array
console.log(newarr); // Output: [1, 2, 3, 4]
console.log(arr1); // Output: [1, 2, 3] (arr1 remains unchanged)


let chars = [..."Hello"]; // This will create a new array that contains the characters of the string "Hello"
console.log(chars); // Output: ['H', 'e', 'l', 'l', 'o']



let even = [2, 4, 6];
let odd = [1, 3, 5];
let numbers = [...even, ...odd];
console.log(numbers); // Output: [2, 4, 6, 1, 3, 5]



// spread with object literals - it can be used to create a new object by combining existing objects or adding new properties to an object.
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combinedObj = {...obj1, ...obj2};
console.log(combinedObj); // Output: {a: 1, b: 2, c: 3, d: 4}

let data ={
    email: "jxd,cnc,cncnm",
    password: "12345678"
};
let newData = {...data, username: "john_doe"};
console.log(newData); // Output: {email: "jxd,cnc,cncnm", password: "12345678", username: "john_doe"        


let arr = [1, 2, 3];
let objectFromArr = {...arr};
console.log(objectFromArr); // Output: {0: 1, 1: 2, 2: 3} (the array elements are converted to object properties with their indices as keys)
let str = "Hello";
let objectFromStr = {...str};
console.log(objectFromStr); // Output: {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'} (the string characters are converted to object properties with their indices as keys)


//Rest operator - it is a syntax that allows an iterable (such as an array or string) to be collected into a single variable. It is denoted by three dots (...) followed by the variable name.
function sum(...args) {
    return args.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sum(1, 2, 3)); // Output: 6 (the numbers are collected into an array and summed)
console.log(sum(4, 5)); // Output: 9 (the numbers are collected into an array and summed)
console.log(sum()); // Output: 0 (no numbers are provided, so the sum is 0)



function min() {
    console.log(arguments); // Output: [1, 2, 3] (the arguments are collected into an array-like object)
    console.log(arguments.length); // Output: 3 (the number of arguments provided)
    arguments.push(4); // This will not work because arguments is not a true array and does not have array methods like push
    console.log(arguments[0]); // Output: 1 (accessing the first argument)
    console.log(arguments[1]); // Output: 2 (accessing the second argument)
}

function min(msg, ...args) {
    console.log(msg); // Output: "Minimum value:"
    return args.reduce((min, current) => {
        if(min>current) {
            return current;
        }
        else {
            return min;
        }
    });
}
console.log(min(5, 2, 8, 1)); // Output: 1 (the minimum value among the provided arguments)



// DESTRUCTING - it is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
let [first, second, third, ...rest] = names;
console.log(first); // Output: Alice
console.log(second); // Output: Bob
console.log(third); // Output: Charlie
console.log(rest); // Output: ["David", "Eve", "Frank"]




// object destructuring
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    country: "USA",
};
let {name, age, ...location,hobby="reading"} = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30
console.log(location); // Output: {city: "New York", country: "USA"}
console.log(hobby); // Output: "reading"





// DOM - it stands for Document Object Model. It is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (such as an element, attribute, or text). The DOM allows you to manipulate the content, structure, and style of a web page using JavaScript. You can use DOM methods to select elements, modify their properties, add event listeners, and create new elements dynamically.
