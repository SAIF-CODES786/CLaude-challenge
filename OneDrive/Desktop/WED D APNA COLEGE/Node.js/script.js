// let n= 5;
// for (let i =0;i<n;i++){
//     console.log("hello",i);
// }


// process ARGV
// let args = process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello and welcome",args[i]);
// }


// const math = require("./math");

// console.log(math);


// const info = require("./Fruits");
// console.log(info);



import {sum,pi}from "./math.js";
console.log(sum(4,5),pi);

import { generate } from "random-words";
console.log(generate());
