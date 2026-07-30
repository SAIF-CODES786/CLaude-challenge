// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello world");
// }


// function demo() {
//     console.log("inside demo fnx");
//     hello();
// }


// console.log("calling demo fnx");
// demo();
// console.log("calling demo fnx completed");


// function one() {
//     return;
// }
    
// function two() {
//     return one()+one();
// }

// function three(){
//     let ans = two() + two();
//     console.log(ans);
// }


// three();


// // jAVA IS single threaded language

// let a =25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);

// // synchronous nature


// setTimeout(()=>{
//         console.log("apna college");
//     }, 1000); // this work of waiting is done by browser
// setTimeout(()=>{console.log("welcome");}, 2000);

    
// console.log("hello world");


// // asynchronous nature





// h1 = document.querySelector("h1");

// // setTimeout(    ()=>{
// //         h1.style.color="red";
// //     }, 1000);


// // setTimeout(()=>{
// //         h1.style.color="blue";
// //     }, 2000);


// // setTimeout(    ()=>{
// //         h1.style.color="green";
// //     }, 3000);


// function changeColor(color, delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }



// changeColor ("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000,() => {
//             changeColor("orange", 1000,()=>{
//             });
//        });
//     });
// });



// // callbacks nesting -> callbacks hell




// function savetoDb(data,success,failure) {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if (internetSpeed>4) {
//         success();
// }   else {
//         failure();
// }
//     console.log("data has been saved to db");
// }



// savetoDb("apnacollege", ()=>{
//     console.log("success1: your data was saved");
//     savetoDb("hello world", ()=>{
//         console.log("success2: your data was saved");
//         savetoDb("apnacollege", ()=>{
//             console.log("success3: your data was saved");
//         }, ()=>{
//             console.log("failure1: weak connection. data not saved");
//         })
//     }, ()=>{
//             console.log("failure2: weak connection. data not saved");
//     })
// }, ()=>{
//             console.log("failure3: weak connection. data not saved");
// });



// // Promises - resolve & reject


// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed>4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure: data was not saved");
//         }
//     });
//     console.log("data has been saved to db");
// }

// savetoDb("apna college")



// // promises - then()&catch()



// let request = savetoDb("apna college"); // request = promise object
// request
//     .then(()=>{
//         console.log("promise was fulfilled");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });




// // promises like call back version
// savetoDb("apna college")
//     .then(()=>{
//         console.log("promise 1 was fulfilled");
//         savetoDb("hello world").then(()=>{
//            console.log("promise 2 was fulfilled"); 
//            savetoDb("apna college").then(()=> {
//                 console.log("promise 3 was fulfilled");
//        })
//    })
// })
//    .catch(()=>{
//         console.log("promise was rejected");
//     });



// // improved version of promises- promises chaining

// savetoDb("apna college")
//     .then(()=>{
//         console.log("promise 1 was fulfilled");
//         return savetoDb("hello world");
//     })
//     .then(()=>{
//         console.log("promise 2 was fulfilled with data:");
//         return savetoDb("apna college");
//     })
//     .then(()=>{
//         console.log("promise 3 was fulfilled");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });




// savetoDb("apna college")
//     .then((result)=>{
//         console.log("promise 1 was fulfilled: data 1 saved");
//         console.log("result of promises:", result);
//         return savetoDb("hello world");
//     })
//     .then((result)=>{
//         console.log("promise 2 was fulfilled : data 2 saved");
//         console.log("result of promises:", result);
//         return savetoDb("apna college");
//     })
//     .then((result)=>{
//         console.log("promise 3 was fulfilled: data 3 saved");
//         console.log("result of promises:", result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("error of promises:", error);
//     });





        
// // refrating old code
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("color changed");
//         }, delay);
//     });    
// }



// changeColor ("red", 1000)
// .then(() => 
//     {console.log("color was changed to red");
//     return changeColor("blue", 1000);
// })
// .then(() => {
//     console.log("color was changed to blue");
//     return changeColor("green", 1000);
// })
// .then(() => {
//     console.log("color was changed to green");

// });




// // Async Keyword
// async function myFunc() {
//     // throw ("something went wrong");
//     return "made it";
// }


// let fello = async () => {
//     return "done";
// }



// myFunc()
// .then((data) => {
//     console.log("promise was fulfilled with data:", data);
//     console.log("we are done");
// })
// .catch((err) => {
//     console.log("promise was rejected with error:", err);
//     console.log("we are done with errors");
// });



// function getNum() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve("success");
//         }, 1000);
//     });
// }

// async function main(){
//     await getNum();
//     await getNum();
//     await getNum();
// }


// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             if (num>3) {
//                 reject("promise rejected"); 
//             }
//             h1.style.color=color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");
//         }, delay);
//     });    
// }


// async function color() {
//     try {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("purple", 1000);
//     }
    
//     catch(err) {
//         console.log("error caught");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log("new number=",a+3);
// }



// //API - Application Programming Interface
// // EX - 
// // https://jsonplaceholder.typicode.com/posts
// // https://cats-effects.herokuapp.com/api/facts


// // JSON - JavaScript Object Notation
// // EX- 
// // {
// //     "userId": 1,
// //     "id": 1,
// //     "title": "delectus aut autem",
// //     "completed": false
// // }


// let jsonRes = '{"fact":"Cats are the most popular pet in the United States: There are 94 million cats vs. 78 million dogs.", "length": 109}'
// let validRes = JSON.parse(jsonRes); // JSON to JS object conversion
// console.log(validRes.fact);


// let student = {
//     name: "rahul",
//     age: 21,
//     branch: "cse"
// };
// console.log(JSON.stringify(student)); // JS OBJECT TO JS



// // Ajax - Asynchronous JavaScript and XML   
// // let btn = document.querySelector("button");
// // btn.addEventListener("click", async () => {
// //     let fact = await getFacts();
// //     console.log(fact);
// //     let p = document.querySelector("#result");
// //     p.innerText = fact;
// // })




// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let link = await getIMage();
//     // console.log(link);
//     let img = document.querySelector("#see");
//     img.setAttribute("src",link);
//     img.style.display = "inline";
// });

// // let url1 = "https://catfact.ninja/fact";
// let url2 = "http://dog.ceo/api/breeds/image/random"


// // fetch(url)
// // .then((res) => {
// //     console.log(res);
// //     return res.json();
// // })
// // .then((data1) => {
// //     console.log(data);
// //     console.log("data1:",data.fact);
// //     return fetch(url);
// // })
// // .then((res) => {
// //     return (res.json())
// // })
// // .then((data2) => {
// //     console.log(data);
// //     console.log("data2",data.fact);
// // })
// // .catch((err) => {
// //     console.log("error occurred", err);
// // });



// // async function getFacts(){
// //     try{
// //     let res = await fetch(url);
// //     let data = await res.json();
// //     console.log(data); 
// // }   catch(e) {
// //     console.log("error=", e);
// // }
// // }




// // async function getFacts(){
// //     try{
// //     let res = await axios.get(url1);
// //     return res.data.fact; 
// //   }   catch(e) {
// //     console.log("error=", e);
// //     return "no fact found";
// //   }
// // }
    

// async function getIMage(){
//     try{
//     let res = await axios.get(url2);
//     return res.data.message; 
//   }   catch(e) {
//     console.log("error=", e);
//     return "no fact found";
//   }
// }
    


// const url = "https://icanhazdadjoke.com"

// async function getJoke(){
//     try{
//         const config = {
//             headers: {
//                 Accept: "application/json",
//             }
//         }
//         let res = await axios.get(url,config);
//         return res.data.joke;
//     }catch (e) {
//         console.log("error=", e);
//     }
// }





let url = "https://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let cont = await getUni(country);
    show(cont);
})



function show(cont){
    let list = document.querySelector("#list");  
    list.innerText = "";
    for(col of cont) {
      console.log(col.name);
      let li = document.createElement("li");
      li.innerText = col.name;
      list.appendChild(li);
    }
}


async function getUni(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch(e) {
        console.log("error-", e);
        return[];
    }
}