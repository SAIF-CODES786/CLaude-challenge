// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//     alert('Button was clicked!');
// }


//mouseover event
// let btns = document.querySelectorAll('button');
// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseover = function() {
//         console.log('Mouse is over the button!');
//     }
// }
// function sayHello() {
//     alert('Hello');
// }


// btn.onclick = sayHello; // assigning the function to the onclick event of the button


// event listener


// let btns = document.querySelectorAll('button');
// for(btn of btns) {
//     btn.addEventListener('click', sayHello);
//     btn.addEventListener('click', sayName);
//     btn.addEventListener('dblclick', function() {
//         alert('Button was double-clicked!');
//     });
// }
// function sayHello() {   
//     alert('Hello');
// }
// function sayName() {
//     alert('My name is John');
// }


// events listener for elements other than button


// let p = document.querySelector('p');
// p.addEventListener('click', function() {
//     alert('Paragraph was clicked!');
// });



// let box = document.querySelector('.box');
// box.addEventListener('mouseenter', function() {
//     alert('Mouse entered the box!');
// });


let btn = document.querySelector('button');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = 'blue';
}

btn.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);
h1.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);

btn.addEventListener('click', function(event) {
    console.log(event); // event object contains information about the event that occurred - type of event, target element, timestamp, etc.     
});

btn.addEventListener('dblclick', function(event) {
    console.log(event); // event object contains information about the event that occurred - type of event, target element, timestamp, etc.
});