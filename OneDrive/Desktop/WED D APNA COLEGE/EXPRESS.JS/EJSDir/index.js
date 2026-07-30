const express = require('express');
const app = express();
const path = require('path');

const port = 3000;


app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
// if we are not in current direcory like we run the ejsdir with express.js directory
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// using ejs
app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get("/hello",(req,res)=>{
    res.render("hello")
});


// app.get("/ig/:username", (req, res)=>{
//     const followers = ["aman", "rohit", "mohit", "rahul"];
//     let {username} = req.params;
//     res.render("insta.ejs", {username,followers})
// }) 



app.get("/ig/:username", (req, res)=>{
  let {username} = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if(data) {
    res.render("insta.ejs", {data});
  } else {
    res.render("error.ejs");
  }
});

// passing data into EJS - with the help of another rollingdice.ejs file

app.get("/rollingdice",(req,res)=>{
  let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rollingdice.ejs",{diceVal})
});

// listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})