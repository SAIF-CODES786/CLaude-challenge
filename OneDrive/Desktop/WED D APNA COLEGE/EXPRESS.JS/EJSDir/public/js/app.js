const btns = document.querySelectorAll("btn");

for(btn of btns) {
    btn.addEventListener("click", () => {
       console.log("you clicked me"); 
    })
}