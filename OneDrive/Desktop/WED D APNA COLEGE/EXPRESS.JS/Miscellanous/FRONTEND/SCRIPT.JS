let arr1 = [1,2,3];
arr1.sayHello = () => {
    console.log("hello");
};

let arr2 = [4,5,6];
arr2.sayHello = () => {
    console.log("hello");
};


// arr.__proto__ =(n)=> {console.log("pushing number : ",n )} // xpects an object, assigning a function to it is silently ignored — array stays unchanged.

Array.prototype 
String.prototype  // Blueprints from which all arrays and strings inherit their built-in methods.

//constructor - dosen't return any anything & start with capital letter
function personmakemaker(name,age) {
      const person ={
        name:name,
        age:age ,
        talk (){
          console.log("this person's name is " + this.name);
        }
      }
      return person;
}

console.log(personmakemaker("saif",20));


function Person(name, age) {
    this.name = name; // properties
    this.age = age;
}

// it takes reference from above function as a new keyword and refer this .
// they do not copy, here talk fuction will be in the prototype of Person , and it will  be same for both person
Person.prototype.talk = function() {
        console.log("this person's name is " + this.name);
    };

let p1 = new Person("saif", 20);
let p2 = new Person("sdf", 20);


// properties and functions are inside the constructor of class

class person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  
  talk(){
    console.log("this person's name is " + this.name);
  }
}

let p1 = new Person("saif", 20);
let p2 = new Person("sdf", 20);


// INHERITANCE

class people {
  constructor(name, age){
  console.log("people constructor");
    this.name = name;
    this.age = age;
  }
  talk(){
    console.log(`Hi, i am ${this.name}`);
  }
}


class student extends people {
    constructor(name, age, rollno){
        console.log("student constructor");
        super(name, age); // must call super constructor first - parent constructor is being called
        this.rollno = rollno;
    }
}


class teacher extends people {
  constructor(name, age, subject){
        super(name, age); // must call super constructor first
        this.subject = subject;
    }
}