// for loop
for (let i = 0; i <= 6; i++) {
    console.log(i);
}


for(let i = 6; i >= 0; i--) {
    console.log(i);
}

let i = 8;
console.log(i);


// odd numbers
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

console.log('backwards');

for (let i = 15; i >= 1; i -= 2) {
    console.log(i);
}


// even numbers
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

console.log('backwards');

for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}





// multiplication table for 5
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}



let n = prompt('Enter a number: ');
n = parseInt(n); // parseInt converts the string input to an integer
for(let i=n; i <= n*10; i += n) {
    console.log(i);
}

// nested loops
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration: ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }   
}

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

console.log('backwards');

let backwardsCount = 5;
while (backwardsCount > 0) {
    backwardsCount--;
    console.log(backwardsCount);
}


// favourite movies
// const favmovies = [ 'Interstellar', ];
// let guess = prompt('Guess one of my favourite movies: ');
// while ((guess!=favmovies[0])){
//     if (guess === 'quit') {
//         console.log('Game over. Better luck next time!');
//         break; // exit the loop if the user wants to quit
//     }
//     guess = prompt('Wrong guess! Try again.');
// }
// if (guess === favmovies[0]) {
//     console.log('Congratulations! You guessed correctly.');
// }
// else if (guess === 'quit') {
//     console.log('Game over. Better luck next time!');
// }

// break keyword
let number = 0;
while (number < 10) {
   
    if (number === 5) {
        break; // exit the loop when number is 5
    }
    console.log(number);    
    number++;
}


// loops with arrays
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i]);
} 
// output:
// 0 'apple'
// 1 'banana'
// 2 'cherry'
// 3 'date'
// 4 'elderberry'

// reverse order
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}
// output:
// 4 'elderberry'
// 3 'date'
// 2 'cherry'
// 1 'banana'
// 0 'apple'


// nested loops with arrays
let heroes = [['Superman', 'Batman', 'Wonder Woman'], ['Spiderman', 'Ironman', 'Hulk']];
for (let i = 0; i < heroes.length; i++) {
    console.log(i,heroes[i],heroes[i].length);  
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j: ${j}, hero: ${heroes[i][j]}`);
    }
}


let student = [['saif',98],['ali',85],['hamza',92]];
for (let i = 0; i < student.length; i++) {
    console.log(`info of student #${i}:`);         // `` is used for string interpolation and allows us to embed expressions inside string literals. It is denoted by backticks (``) instead of single ('') or double ("") quotes. Inside the backticks, we can use ${} to insert variables or expressions directly into the string without needing to concatenate them. example:
    // let name = 'Alice';
    // console.log(`Hello, ${name}!`); // Output: Hello, Alice! 
    for (let j = 0; j < student[i].length; j++) {  
        console.log(student[i][j]);
    }
}


// for of loop : The for...of loop is a more concise and readable way to iterate over iterable objects like arrays, strings, maps, sets, etc. It automatically handles the iteration and provides direct access to the values of the iterable without needing to manage an index variable. example:     
// for(let element of iterable) { // element is the value of the current iteration and iterable is the collection we want to loop through
//     // code to execute for each element
// }
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

for(let char of "hello") {
    console.log(char);
} 


// nested for of loop
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let row of matrix) {
    console.log('Row:', row);
    for (let num of row) {
        console.log('Number:', num);
    }
}

let heroes2 = [['Superman', 'Batman', 'Wonder Woman'], ['Spiderman', 'Ironman', 'Hulk']];
for (let heroGroup of heroes2) {
    console.log('Hero Group:', heroGroup);
    for (let hero of heroGroup) {
        console.log('Hero:', hero);
    }
}