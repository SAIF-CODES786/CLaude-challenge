const express = require('express')
const app = express()


const port = 3000;


// handling request and response
// app.use((req, res) => {
//   //console.log(res);
//     console.log('Hello World!');
//     // res.send('this is basic response');
//     // res.send({
//     //     name:"saif",
//     //     class:"oing"
        
//     // });
//     res.send("<h2>standard response</h2>");
// })


// handling request and response with routes
app.get('/', (req, res) => {
    res.send("this is home page");
});

// app.get('/about', (req, res) => {
//     res.send("this is about page");
// });
// app.get('/contact', (req, res) => {
//     res.send("this is contact page");
// });
// app.put("/ko", (req, res) => {
//     res.send("this is ko");
// });
// app.get("/*splat",(req,res) => {  // for giving specific error
//     // wildcard route must be at last 
//     res.send("page not found")
// });


//PATH PARAMETER
app.get('/:username/:id', (req, res) => {
    let {username,id} = req.params;
    // console.log(req.params);
    res.send(`welcome to the page of @${username}`);
});


// listening for incoming request
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//QUERY STRINGS
app.get('/search',(req, res) => {

    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("nothing searched")
    }
    res.send(`search result of ${q}`);

})
