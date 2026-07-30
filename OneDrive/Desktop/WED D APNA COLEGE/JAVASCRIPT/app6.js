// ID selectors
document.getElementById("mainImg")
let mainImg = document.getElementById("mainImg");
mainImg // .src = "https://www.w3schools.com/w3images/lights.jpg";
console.log(mainImg);
// mainImg.src = "https://www.w3schools.com/w3images/lights.jpg";
console.dir(mainImg);
mainImg.style.width = "500px";
mainImg.style.height = "300px";
mainImg.style.border = "2px solid red";

// mainImg.src = "https://www.w3schools.com/w3images/lights.jpg";
// mainImg.tagname // "IMG"
// mainImg.id // "mainImg"





// classname selectors
document.getElementsByClassName("oldImg");
let oldImg = document.getElementsByClassName("oldImg");
console.log(oldImg);
oldImg[0].src = "https://www.w3schools.com/w3images/nature.jpg";
oldImg[1].src = "https://www.w3schools.com/w3images/fjords.jpg";
oldImg[2].src = "https://www.w3schools.com/w3images/mountains.jpg";



for (let i = 0; i < oldImg.length; i++) {
    oldImg[i].src = "spiderman_img.png";
    console.log(`value of image no. ${i} is changed`)
} // oldImg[0].src = "spiderman_img.png";
//  oldImg[1].src = "spiderman_img.png";
//  oldImg[2].src = "spiderman_img.png";


// tagname selectors
document.getElementsByTagName("p");
let p = document.getElementsByTagName("p");
console.log(p);
// p[0].innerText = "This is the first paragraph.";
// p[1].innerText = "This is the second paragraph.";
// p[2].innerText = "This is the third paragraph.";


// query selector


console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("h1"));











// innerText - it will change the text content of the element and it will not consider the html tags
// innerHTML - it will change the text content of the element and it will consider the html tags
// textContent - it will change the text content of the element and it will not consider the html tags and it will also consider the hidden elements
let para = document.querySelector('p');
para.innerText // para.innerText = "<b>This is the first paragraph.</b>";
para.innerHTML // para.innerHTML = "<b>This is the first paragraph.</b>";
para.textContent // para.textContent = "<b>This is the first paragraph.</b>";
let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;



let img = document.querySelector("img");
img.getAttribute("id") // "mainImg"
img.setAttribute("id", "spidermanImg"); // img.id = "spidermanImg";
img.setAttribute("class", "images"); // img.className = "images";






// manipulation of styles
let img = document.querySelector("img");
console.dir(img);
img.style


let heading = document.querySelector("h1");
heading.style.backgroundColor = "blue";
heading.style.color = "yellow";
heading.style.fontSize = "50px";
heading.style.textAlign = "center";


let links = document.querySelectorAll(".box a");
for(link of links) {
    link.style.color = "red";
    link.style.textDecoration = "none";
    link.style.fontSize = "20px";
    console.log(`value of link no. ${link} is changed`)
}

// OR


for (let i = 0; i < links.length; i++) {
    links[i].style.color = "red";
    links[i].style.textDecoration = "none";
    links[i].style.fontSize = "20px";
    console.log(`value of link no. ${i} is changed`)
}

// STYLE only give inline properties



// classList - it will give the list of classes of the element and it also have some methods to manipulate the classes of the element
let img = document.querySelector("img");
img.classList // DOMTokenList(2) ['abc', 'xyz', value: 'abc xyz']

heading.classList.add("green"); // it will add the class to the element
heading.classList.add("underline"); // it will add the class to the element
heading.classList.remove("green"); // it will remove the class from the element
heading.classList.contains("underline") // true - it will check if the element has the class or not
heading.classList.toggle("green"); // it will add the class if it is not present and it will remove the class if it is present
heading.classList.contains("green") // true




// navigation properties
let h4 = document.querySelector("h4");
h4.parentElement // it will give the parent element of the element
h4.children // it will give the child elements of the element

let box = document.querySelector(".box");
box.children // HTMLCollection(3) [a, a, a]
box.childElementCount // 3

let ul = document.querySelector("ul");
ul.childElementCount // 4
ul.children // HTMLCollection(4) [li, li, li, li]
ul.parentElement // div.box
ul.children[0] // li
ul.children[1] // li
ul.children[2] // li
ul.children[3] // li
ul.children[2].previousElementSibling // li
ul.children[2].nextElementSibling // li

let img = document.querySelector("img");
img.parentElement // div.box
img.parentElement.parentElement // body
img.previousElementSibling.style.color = "blue"; // h1





// adding elements to the DOM
document.createElement("p"); // it will create a new element but it will not add it to the DOM
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
let body = document.querySelector("body");
document.body.appendChild(newPara);

let buttn = document.createElement("button");
buttn.innerText = "Click Me";
box.appendChild(buttn);

 newpara.append(" This is a new paragraph."); // it will add the text to the existing text of the element
 newpara.prepend("This is a new paragraph. "); // it will add the text to the existing text of the element at the beginning


 let button = document.createElement("button");
 button.innerText = "new button";
 let p = document.querySelector("p");
 p.insertAdjacentElement("afterend", button); // it will insert the element after the specified element
 p.insertAdjacentElement("beforebegin", button); // it will insert the element before the specified element
 p.insertAdjacentElement("afterbegin", button); // it will insert the element at the beginning of the specified element
 p.insertAdjacentElement("beforeend", button); // it will insert the element at the end of the specified element




 // removing elements from the DOM
let button = document.querySelector("button");
button.remove(); // it will remove the element from the DOM

let p = document.querySelector("p");
body.removeChild(p); // it will remove the child element from the parent element




// pratice question


let para = document.createElement("p");
para.innerText = "hey i am red.";
document.querySelector("body").append(para);
para.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "hey i am blue.";
document.querySelector("body").append(heading);
heading.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "i am in a div.";
para2.innerText = "me too.";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);





