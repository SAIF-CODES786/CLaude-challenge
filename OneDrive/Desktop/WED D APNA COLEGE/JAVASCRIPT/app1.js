//strings methhods
let str = "    Hello World   ";
str = str.trim();
console.log(str);

let password = prompt("Enter your password");
let newPass = password.trim();
console.log(newPass);
console.log(password);

// string are inmutable
let str1 = "Hello";
str1[0] = "h";
console.log(str1); // still Hello


let strr = "Hello World";
console.log(strr.toUpperCase());
console.log(strr.toLowerCase());


// string methods with arguments
// argument is a some value that we pass to a function when we call it

// indexOf() method
let str2 = "Hello World";
console.log(str2.indexOf("o"));
console.log(str2.indexOf("q"));


// method chaining
let str3 = "   Hello World   ";
let result = str3.trim().toUpperCase().indexOf("O");
console.log(result); // 4


// slice() method
let str4 = "Hello World";
console.log(str4.slice(0, 5));

console.log(str4.slice(-3)); // rld


// substring() method
let str5 = "Hello World";
console.log(str5.substring(0, 5));
console.log(str5.substring(6)); // World

// replace() method
let str6 = "Hello World";
console.log(str6.replace("World", "JavaScript")); // Hello JavaScript

// repeat method
let str7 = "Hello ";
console.log(str7.repeat(3)); // Hello Hello Hello


// pratice questions
let msg = "   Hello World   ";
console.log(msg.trim().toUpperCase()); // HELLO WORLD

let name  = "apnacollege";
console.log(slice(0, 4)); // apna
console.log(indexOf("c")); // 4
console.log(name.replace("college", "university")); // apnauniversity

console.log(name.slice(4).replace("l","t").replace("l","t")); // college -> cotlege -> cottege
 


// arrays
let namee = ["John", "Doe", "Smith"];
console.log(namee[0]); // John
console.log(namee[1]); // Doe
console.log(namee[2]); // Smith
console.log(namee[0][0]); // J
console.log(namee[0].length); // 4
console.log(namee.length) ; // 3
let emptyArray = [];
console.log(emptyArray.length); // 0


// array are mutable
let arr = [1, 2, 3];
arr[0] = 10;
console.log(arr); // [10, 2, 3] 


// array methods
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

arr1.pop();
console.log(arr1); // [1, 2, 3]


let cars = ["BMW", "Audi", "Mercedes"];
cars.unshift("Toyota");
console.log(cars); // ["Toyota", "BMW", "Audi", "Mercedes"]

cars.shift(); // 'toyota' removed
console.log(cars); // ["BMW", "Audi", "Mercedes"]

let followers = ["John", "Doe", "Smith"];

let blockedFollowers = followers.shift(); // 'John' removed
console.log(blockedFollowers); // John
console.log(followers); // ["Doe", "Smith"]
// pratice questions
let start = ['january','july','march','april'];
start.shift(); // 'january' removed
console.log(start); // ['july','march','april']
start.shift(); // 'july' removed
console.log(start); // ['march','april']
start.unshift('june'); // 'june' added at the beginning
console.log(start); // ['june','march','april']
start.unshift('july'); // 'july' added at the beginning
console.log(start); // ['july','june','march','april']

// indexOf() method
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape")); // -1

// includes() method
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

// concat() method
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
let combined = arr2.concat(arr3);
console.log(combined); // [1, 2, 3, 4, 5, 6]

primaryColors = ["red", "blue", "yellow"];
secondaryColors = ["green", "orange", "purple"];
let allColors = primaryColors.concat(secondaryColors);
console.log(allColors); // ["red", "blue", "yellow", "green", "orange", "purple"]


// reverse() method
let arr4 = [1, 2, 3];
arr4.reverse();
console.log(arr4); // [3, 2, 1]

primaryColors = ["red", "blue", "yellow"];
primaryColors.reverse();
console.log(primaryColors); // ["yellow", "blue", "red"]


// slice() method
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(0, 4);
console.log(sliced); // [1, 2, 3, 4]

let months = ["January", "February", "March", "April", "May"];
let slicedMonths = months.slice(1, 4);
console.log(slicedMonths); // ["February", "March", "April"]

console.log(months.slice(-3)); // ["March", "April", "May"] 
console.log(months.slice(-5)); // ["January", "February", "March", "April", "May"]

// splice() method
// splice(start, deleteCount, item1, item2, ...)
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1); // 2 is the index and 1 is the number of elements to remove
console.log(arr6); // [1, 2, 4, 5]

let arr7 = [1, 2, 3, 4, 5];
arr7.splice(2, 2); // 2 is the index and 2 is the number of elements to remove
console.log(arr7); // [1, 2, 5]

let colors = ["red", "blue", "yellow", "green", "orange"];
colors.splice(1, 2); // 1 is the index and 2 is the number of elements to remove
console.log(colors); // ["red", "green", "orange"]
colors.splice(1, 0, "purple", "pink"); // 1 is the index and 0 is the number of elements to remove and "purple" and "pink" are the elements to add
console.log(colors); // ["red", "purple", "pink", "green", "orange"]

// sort() method
let arr8 = [3, 1, 4, 2, 5];
arr8.sort();
console.log(arr8); // [1, 2, 3, 4, 5]

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
days.sort();
console.log(days); // ["Friday", "Monday", "Thursday", "Tuesday", "Wednesday"]


// pratice questions
let monthhs = ["January","July","march","august"];
months.splice(0,2,"july","june"); // 0 is the index and 2 is the number of elements to remove and "july" and "june" are the elements to add
console.log(monthhs); // ["july","june","march","august"]

let languages = ['javascript', 'python', 'java', 'c++', 'c','sql'];
languages.reverse().indexOf('javascript'); // 5
console.log(languages); // ['sql', 'c', 'c++', 'java', 'python', 'javascript']


// array refernces
let arr9 = [1, 2, 3];
let arr10 = arr9;   
arr10.push(4);
console.log(arr9); // [1, 2, 3, 4] because arr9 and arr10 are referencing the same array in memory
console.log(arr10); // [1, 2, 3, 4]
arr9 == arr10; // true because they are referencing the same array in memory

let arr11 = ['a', 'b', 'c'];
let arr12 = arr11.slice(); // creates a new array with the same elements
arr12.push('d');
console.log(arr11); // ['a', 'b', 'c'] because arr11 and arr12 are referencing different arrays in memory
console.log(arr12); // ['a', 'b', 'c', 'd']
arr11 == arr12; // false because they are referencing different arrays in memory


// constant arrays 
const arr13 = [1, 2, 3];
arr13.push(4);
console.log(arr13); // [1, 2, 3, 4] because we are not reassigning the array, we are just modifying it


const g = 10;
g = 20; // error because we cannot reassign a constant variable

arr13 = [5, 6, 7]; // error because we cannot reassign a constant variable


// nested arrays
let nestedArr = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArr[0]); // [1, 2]
console.log(nestedArr[0][0]);   // 1
console.log(nestedArr[1][1]); // 4   

// pratice questions - tic-tac-toe game state
let gameState = [
    ['X', null, 'O'],
    [null, 'X', null],    
    ['O', null, 'X']
];
console.log(gameState[0][0]); // 'X'
console.log(gameState[1][1]); // 'X'
console.log(gameState[2][0]); // 'O'   
gameState[0][1] = 'O'; // setting the value at index [0][1] to 'O'
console.log(gameState[0][1]); // 'O'








