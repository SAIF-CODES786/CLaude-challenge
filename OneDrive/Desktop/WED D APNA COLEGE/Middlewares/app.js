const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// middleware 

// app.use((req,res,next) => {
//     // let {query} = req.query;
//     // console.log(query);
//    console.log("hi i am 1st middleware");
//    //res.send("middleware finished");
//    return next(); // it mean return stop to print after next 
//    console.log("abcd")
// })


// app.use((req,res,next) => {
//     // let {query} = req.query;
//     // console.log(query);
//    console.log("hi i am 2nd middleware");
//    //res.send("middleware finished");
//    next();
// })

// logger
// app.use((req,res,next) => {
//    req.time = Date.now();
//    console.log(req.method, req.hostname, req.path, req.time);
//    next();
// })



// app.use("/random",(req,res,next)=>{
//     console.log("middleware");
//     next();
// })


// app.use("/api",(req,res,next) => {
//     let {token} = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("Access DENEID!");
// })


// app.get("/api",(req,res) => {
//   res.send("data");
// })


// multiple middleware
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next(); // call to simple or non err handling middleware
    }
    throw new ExpressError(401,"Access DENEID!");
}


app.get("/api", checkToken,(req,res) => {
  res.send("data");
})

app.get("/",(req,res)=>{
    res.send("hi, i am root");
})


app.get("/random",(req,res)=>{
    res.send("this is a random page");
})

// error handling
app.get("/err",(req,res) => {
  abcd = abcd;
});

app.get("/admin",(req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden!");
});

app.use((err,req,res,next) => {
    let {status = 500,message = "Some Error Occured"} = err;
    res.status(status).send(message);
});


// app.use((err,req,res,next) => {
//     console.log("----error----")
//     next(err); // call to err handling middleware
// });

// //404 error
// app.use((req,res) => {
//    res.status(404).send("Page Not found");
// });


app.listen(3000,() => {
    console.log("server listening to port 3000");
});