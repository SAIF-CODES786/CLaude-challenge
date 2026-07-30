// keyboard events: keydown, keyup, keypress


let inp = document.querySelector("input");
inp.addEventListener("keydown", function () {
    console.log("Key down event triggered");
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.keyCode);
    if(event.code == "arrowup"){
        console.log("Up arrow key pressed");
    }
    else if(event.code == "arrowdown"){
        console.log("Down arrow key pressed");
    }
    else if(event.code == "arrowleft"){
        console.log("Left arrow key pressed");
    }
    else if(event.code == "arrowright"){
        console.log("Right arrow key pressed");
    }

});

inp.addEventListener("keyup", function () {
    console.log("Key up event triggered");
});



let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Form submitted");
    console.dir(form);
    let name = this.elements[0]; // Access the first input element (name) // OR form.elements[0]
    let pass = this.elements[1]; // Access the second input element (password) // OR form.elements[1]
    let name = document.querySelector("#name");
    let password = document.querySelector("#password");
    console.log("Name: " + name.value);
    console.log("Password: " + password.value);
    alert(`Hi ${name.value}, your password is ${password.value}`);
});


// change event - fired when the value of an input element changes and the element loses focus (blur event)
let name = document.querySelector("#name");
name.addEventListener("change", function () {    
    console.log("Change event triggered");
    console.log("New value: " + this.value);
});


// input event - fired when the value of an input element changes (real-time)
name.addEventListener("input", function () {
    console.log("Input event triggered");
    console.log("Current value: " + this.value);
});





let input = document.querySelector("#text");
let p = document.querySelector("p");
input.addEventListener("input", function () {
    console.log("Input event triggered");
    console.log("Current value: " + input.value);
    p.innerText = input.value; // Update the paragraph text with the current input value
});




    