const mongoose = require('mongoose');

main()
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,     
    age: Number,
 }); 


const User = mongoose.model('User', userSchema);


// const user1 = new User({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30
// });

// const user2 = new User({
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com',
//     age: 25
// });

// user1.save();
// user2.save().then(() => {
//     console.log('Users saved to the database');
// })
// .catch(err => {
//     console.log(err);
// })


// User.insertMany([
//     {
//         name: 'Alice Johnson',
//         email: 'alice.johnson@example.com',
//         age: 28
//     },
//     {
//         name: 'Bob Williams',
//         email: 'bob.williams@example.com',
//         age: 35
//     }
// ]).then((res) => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// });


// User.find({age:{ $gt: 25 }}).then((res) => {
//    console.log(res);
// }).catch(err => {
//     console.log(err);
// });


// User.findById({"6a4731cb2b73336256903666"}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


// User.updateOne({name: 'John Doe'}, {age: 31}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


// User.updateMany({age: {$gt: 25}}, {age: 31}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


// User.findOneAndUpdate({name: 'John Doe'}, {age: 32},{new: true}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


// User.deleteOne({name: 'John Doe'}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


// User.deleteMany({age: {$gt: 25}}).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });



User.findByIdAndDelete("6a47307cf7a93e5436aa4b04").then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
});



// operation buffering - mongoose will buffer the operations until the connection is established. Once connected, it will execute the buffered operations. This is useful when you want to perform database operations before the connection is fully established.