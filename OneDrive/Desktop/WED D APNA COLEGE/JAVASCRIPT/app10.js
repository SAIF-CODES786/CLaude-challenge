let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    console.log("clicked");
    let item = document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    inp.value="";
});


// let delbtn = document.querySelectorAll(".delete");
// for (del of delbtn)
//     del.addEventListener("click",function(){
//         let par = this.parentElement;
//         par.remove();
//     })    // it is only works for pre existing elements

// event delegation - it works for future elements also

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
})
