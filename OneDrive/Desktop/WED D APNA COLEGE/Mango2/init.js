const mongoose = require('mongoose');
const Chat = require('./models/chat.js');



main()
  .then(() => { console.log('Connected to MongoDB'); 
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
} 


let chats = [
  {
  from: 'Alice',
  to: 'Bob',
  message: 'Hello, Bob!',
  created_at: new Date()
},
{
    from: 'Bob',
    to: 'Alice',
    message: 'Hi, Alice! How are you?',
    created_at: new Date()
},
{
    from:'rohan',
    to:'rohit',
    message:'Hello, rohit!',
    created_at: new Date()
},
{
    from:'rohit',
    to:'rohan',
    message:'Hi, rohan! How are you?',
    created_at: new Date()
}
];


Chat.insertMany(chats);
 