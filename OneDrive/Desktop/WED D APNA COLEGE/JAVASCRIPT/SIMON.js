let gameSequence=[];
let playerSequence=[];


let btns=["yellow","red","green","orange"];
let started=false;
let level=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}



function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}


function levelUp() {
    
    playerSequence=[];
    level++;
    h2.innerText = `Level ${level}`;
    // random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    console.log(gameSequence);
    gameFlash(randbtn);
    // console.log(randIdx);
    // console.log(randBtn);
    // console.log(randColor);
}


function checkSeq(idx) {
    if(playerSequence[idx]===gameSequence[idx]){
        if(playerSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
        }
}   else {
    h2.innerHTML=`Game over! Your score was <b>${level}</b> Press any key to restart.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
}

}


function btnpress() {

    if(started == false){
        return;
    }

    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    playerSequence.push(userColor);

    checkSeq(playerSequence.length-1);
} 

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}


function reset() {
    started=false;
    gameSequence=[];
    playerSequence=[];
    level=0;
}




