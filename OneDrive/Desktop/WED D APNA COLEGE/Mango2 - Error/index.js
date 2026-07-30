const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");
const ExpressError = require('./expresserror.js');
const expresserror = require('./expresserror.js');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main()
  .then(() => { console.log('Connected to MongoDB'); 
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
}

// let chat1 = new Chat({
//   from: 'Alice',
//   to: 'Bob',
//   message: 'Hello, Bob!',
//   created_at: new Date()
// });
// chat1.save().then((res) => { console.log(res) });

// Index route
app.get('/chats', async(req, res, next) => {
  try {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
  } catch(err){
    next(err);
  }
});

// New chat route
app.get('/chats/new', (req, res) => {
  // throw new expresserror(404,"Page Not Found");
  res.render("new.ejs");
});

// Create chat route
app.post('/chats', async (req,res,next) => {
  try {
    let { from, to, message } = req.body;
    let newchat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date()
  });
  await newchat.save();
  res.redirect('/chats');  
  } catch(err) {
    next(err);
  }
});

app.get('/', (req, res) => {  
  res.send('Hello, World!');
});

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// NEW -SHOW ROUTE
app.get("/chats/:id",asyncWrap (async(req, res,next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
      next(new expresserror(404, "Chat not found"));
      }
    res.render("show.ejs", {chat});
}));

// Edit chat route
app.get('/chats/:id/edit', async(req, res, next) => {
  try {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
  } catch(err){
    next(err);
  }
});

// Update chat route
app.put('/chats/:id', async(req, res,next) => { 
  try{
    let {id} = req.params;
    let {newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message: newMsg},
    { new: true },{runValidators: true});
    console.log(updatedChat);
    res.redirect('/chats');
  } catch(err){
    next(err);
}
});


// Delete chat route
app.delete('/chats/:id', async(req, res) => {
  try {
    let {id} = req.params;
    let chatDeleted = await Chat.findByIdAndDelete(id);
    console.log(chatDeleted);
    res.redirect('/chats');
  } catch(err) {
    next(err);
  }
});

const handleValidationErr = (err) => {
    console.log("This is a validation error. Please follow rules");
    console.dir(err);
    return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if(err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
  });



// Error handling middleware
app.use((err, req, res, next) => {
    let {status = 500, msg = "Something went wrong!"} = err;
    res.status(status).send(msg);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
})



   