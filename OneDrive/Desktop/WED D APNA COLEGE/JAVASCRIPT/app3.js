let todo = [];

let req = prompt("please enter your request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("quitting the app");
        break;
    }

    if(req=="list"){
        console.log("**********");
        for(let i = 0; i < todo.length; i++){
            console.log(i + 1 + ": " + todo[i]);
        }
        console.log("**********");
    } else if(req=="add"){
        let Task = prompt("please enter the task you want to add");
        todo.push(Task);
        console.log("Task added");
    } else if(req=="delete"){
        let index = prompt("please enter the index of the task you want to delete");
        todo.splice(index,1);
        console.log("Task deleted");
    } else {
        console.log("unknown request");
    }

    req = prompt("please enter your request");
}