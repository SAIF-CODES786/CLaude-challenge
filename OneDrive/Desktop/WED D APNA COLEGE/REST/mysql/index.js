const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Saif@1234"
});



let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// INSERTING NEW
// let q = "INSERT INTO user (id, username, email, password) values ?";
// // let users =[["123","123_newuser","abc@gmail.com","abc"],
// // ["124","124_newuser","def@gmail.com","def"]];
// let data = [];
// for(let i = 1; i <= 100; i++)
// {
//     data.push(createRandomUser()); // 100 faker data
// }  


// HOME ROUTE
app.get("/",(req,res)=>{
  let q = "SELECT count(*) from user";
  try {
    connection.query(q,(err,result) => {
        if(err) throw err    
        let count = result[0]["count(*)"];
        res.render("home.ejs",{count});
});
} catch(err) {
    console.log(err);
    res.send("error in database")
}
});

// SHOW ROUTE
app.get("/user",(req,res)=>{
  let q = "SELECT *from user";
  try {
    connection.query(q,(err,result) => {
        if(err) throw err
        // console.log(result);    
        res.render("show.ejs",{result});
});
} catch(err) {
    console.log(err);
    res.send("error in database")
}
})


// Edit Route
app.get("/user/:id/edit",(req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q,(err,result) => {
        if(err) throw err 
        let user = result[0];
        res.render("edit.ejs",{user});
});
} catch(err) {
    console.log(err);
    res.send("error in database")
}
})

//UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body; // TO GET FORM PSSWORD
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q,(err, result) => {
        if(err) throw err
        let user = result[0];
        if(formPass != user.password)
        {
            res.send("wrong password");
        }
        else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2,(err, result) => {
                if(err) throw err
                console.log(result);
                res.redirect("/user");
            });
        }
});
} catch(err) {
    console.log(err);
    res.send("error in database")
}
})


// Post Route to add new user
app.post("/user",(req,res) => {
    
})


app.listen("8080", ()=>{
    console.log("server is listening to port 8080");
});   



// try {
//     connection.query(q,[data],(err,result) => {
//         if(err) throw err    
//         console.log(result);
// });
// } catch(err) {
//     console.log(err);
// }
// connection.end();