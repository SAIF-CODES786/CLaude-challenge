const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");


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
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

// let chat1 = new Chat({
//   from: 'Alice',
//   to: 'Bob',
//   message: 'Hello, Bob!',
//   created_at: new Date()
// });
// chat1.save().then((res) => { console.log(res) });

// Index route
app.get('/chats', async(req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", {chats});
});

// New chat route
app.get('/chats/new', (req, res) => {
  res.render("new.ejs");
});

// Create chat route
app.post('/chats', (req, res) => {
  let { from, to, message } = req.body;
  let newchat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date()
  });
  newchat.save().then((res) => { console.log("Chat saved successfully!") })
  .catch((err) => { console.log("Error saving chat:", err) });
  res.redirect('/chats');  
});

app.get('/', (req, res) => {  
  res.send('Hello, World!');
});


// Edit chat route
app.get('/chats/:id/edit', async(req, res) => {
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", {chat});
});

// Update chat route
app.put('/chats/:id', async(req, res) => {
  let {id} = req.params;
  let {newMsg} = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(id, {message: newMsg},
  { new: true },{runValidators: true});
  console.log(updatedChat);
  res.redirect('/chats');
});


// Delete chat route
app.delete('/chats/:id', async(req, res) => {
  let {id} = req.params;
  let chatDeleted = await Chat.findByIdAndDelete(id);
  console.log(chatDeleted);
  res.redirect('/chats');
});


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
})


    