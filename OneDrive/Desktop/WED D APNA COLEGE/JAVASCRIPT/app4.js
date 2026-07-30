// object literal - it is a collection of key-value pairs
// it is a data structure that can hold multiple values of different types
// it is a way to organize data in a structured way
// creating an object literal
const student = { 
    name: "John Doe",
    age: 20,
    grade: "A",
}  // output: { name: 'John Doe', age: 20, grade: 'A' }


// const in object literal - it is a way to create a constant object that cannot be reassigned, but its properties can be modified 
// example of const in object literal 
const student2 = { 
    name: "Jane Doe",
    age: 22,
    grade: "B",
}  // output: { name: 'Jane Doe', age: 22, grade: 'B' }
// modifying properties of const object literal
student2.age = 23;
console.log(student2); // output: { name: 'Jane Doe', age: 23, grade: 'B' }
// trying to reassign const object literal will throw an error
// student2 = { name: "Jack Doe", age: 25, grade: "C" }; // Uncaught TypeError: Assignment to constant variable.

const item = {
    price: 100,
    discount:60,
    colors: ["red", "blue", "green"]
} // output: { price: 100, discount: 60, colors: [ 'red', 'blue', 'green' ] }



const post = {
    username: "@john_doe",
    content: "This is a post about JavaScript objects.",
    likes: 100,
    reposts: 10,
    tags: ["@roe", "@roy", "@joy"]

}// output: { username: '@john_doe', content: 'This is a post about JavaScript objects.', likes: 100, reposts: 10, tags: [ '@roe', '@roy', '@joy' ] }


sudent["name"] // output: "John Doe"
student.name // output: "John Doe"
student.age // output: 20
student.grade // output: "A"

let prop = "reposts";
post[prop] // output: 10


// conversion in get value of object literal
const obj = {
    1:"a",
    2:"b",
    3:"c",
    null : "d",
    true : "e",
    undefined : "f"
}; // output: { '1': 'a', '2': 'b', '3': 'c', null: 'd', true: 'e', undefined: 'f' }
    obj[1] // output: "a"
    obj["1"] // output: "a"
    obj[null] // output: "d"
    obj[true] // output: "e"
    obj[undefined] // output: "f"
    // obj.1 // SyntaxError: Unexpected number why because in object literal, the keys are converted to strings, so when we try to access the value using dot notation, it is treated as a number and it throws an error.
    // obj.2 // SyntaxError: Unexpected number
    // obj.3 // SyntaxError: Unexpected number
    obj.null // output: "d" why because in object literal, the keys are converted to strings, so when we try to access the value using dot notation, it is treated as a string and it works fine.
    obj.true // output: "e"
    obj.undefined // output: "f"



    // add / update properties of object literal
    const person = {
        name: "Alice",
        age: 30,
        city : "New York"
    } // output: { name: 'Alice', age: 30, city: 'New York' }


    person.city = "Los Angeles"; // updating existing property
    // output: { name: 'Alice', age: 30, city: 'Los Angeles' }
    person.country = "USA"; // adding new property
    // output: { name: 'Alice', age: 30, city: 'Los Angeles', country: 'USA' }

    delete person.age; // deleting existing property
    // output: { name: 'Alice', city: 'Los Angeles', country: 'USA' }


    // nested object literal - it is an object that contains another object as a property
    const company = {
        name: "Tech Company",
        employees: {
            employee1: {
                name: "John",
                age: 25,
                position: "Software Engineer"
            },
            employee2: {
                name: "Jane",
                age: 28,
                position: "Product Manager"
            }
        }
    } // output: { name: 'Tech Company', employees: { employee1: { name: 'John', age: 25, position: 'Software Engineer' }, employee2: { name: 'Jane', age: 28, position: 'Product Manager' } } }


    // array of object literals - it is an array that contains multiple object literals as its elements
    const students = [
        {
            name: "John",
            age: 20,
            grade: "A"
        },
        {
            name: "Jane",
            age: 22,
            grade: "B"
        },
        {
            name: "Jack",
            age: 21,
            grade: "C"
        }
    ] // output: [ { name: 'John', age: 20, grade: 'A' }, { name: 'Jane', age: 22, grade: 'B' }, { name: 'Jack', age: 21, grade: 'C' } ]  

            students[0] // output: { name: 'John', age: 20, grade: 'A' }
            students[1] // output: { name: 'Jane', age: 22, grade: 'B' }
            students[2] // output: { name: 'Jack', age: 21, grade: 'C' }
            students[0].name // output: "John"
            students[1].age // output: 22
            students[2].grade // output: "C"
            students[0].name = "John Doe"; // updating existing property
            // output: [ { name: 'John Doe', age: 20, grade: 'A' }, { name: 'Jane', age: 22, grade: 'B' }, { name: 'Jack', age: 21, grade: 'C' } ]
            students[0].city = "New York"; // adding new property
            // output: [ { name: 'John Doe', age: 20, grade: 'A', city: 'New York' }, { name: 'Jane', age: 22, grade: 'B' }, { name: 'Jack', age: 21, grade: 'C' } ]


            // math object literal - it is an object that contains mathematical operations as its properties
            Math.PI // output: 3.141592653589793
            Math.E // output: 2.718281828459045
            Math.sqrt(16) // output: 4
            Math.pow(2, 3) // output: 8
            Math.random() // output: a random number between 0 and 1
            Math.floor(4.7) // output: 4
            Math.ceil(4.3) // output: 5
            Math.round(4.5) // output: 5
            Math.max(1, 2, 3, 4, 5) // output: 5
            Math.min(1, 2, 3, 4, 5) // output: 1
            Math.abs(-5) // output: 5
            Math.pow(2, 3) // output: 8
            Math.sqrt(16) // output: 4
            Math.cbrt(27) // output: 3
            Math.hypot(3, 4) // output: 5


            //random integers between 1 and 10
            let num = Math.random(); // output: a random number between 0 and 1
            num = num * 10; // output: a random number between 0 and 10
            num = Math.floor(num); // output: a random integer between 0 and 9
            num = num + 1; // output: a random integer between 1 and 10

            let random = Math.floor(Math.random() * 10) + 1; // output: a random integer between 1 and 10

            // random integers between 1 and 100
            let random2 = Math.floor(Math.random() * 100) + 1; // output: a random integer between 1 and 100


            // random integers between 1 and 5
            let random3 = Math.floor(Math.random() * 5) + 1; // output: a random integer between 1 and 5
            

            // 21 to 25
            let random4 = Math.floor(Math.random() * 5) + 21; // output: a random integer between 21 and 25


            // guess number game 
            const max = prompt("Enter the maximum number:"); // output: a number entered by the user
            

            const randomi = Math.floor(Math.random() * max) + 1; // output: a random integer between 1 and max
            let guess = prompt("Enter your guess:"); // output: a number entered by the user

            while(true){
                if(guess == "quit"){
                    console.log("user quit the game");
                    break;
                }
                if(guess == randomi){
                    console.log("Congratulations! You guessed the number! The number was " + randomi);
                    break;
                } else if(guess < randomi){
                    guess = prompt("hint: Too low! Try again. Enter your guess:"); // output: a number entered by the user
                }  else if(guess > randomi){
                    guess = prompt("hint: Too high! Try again. Enter your guess:"); // output: a number entered by the user
                }
                
                else {
                    guess = prompt("Wrong guess! Try again. Enter your guess:"); // output: a number entered by the user
                }
            }