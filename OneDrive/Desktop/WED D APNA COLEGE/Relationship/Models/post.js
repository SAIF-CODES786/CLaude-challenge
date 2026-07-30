const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(console.log("connected to db")).catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
  username: String,
  email: String
})


const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})


const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post", postSchema);


// const addData = async () => {
//     // let user1 = new User({
//     //     username : "tony",
//     //     email : "tony@gmail.com"
//     // });
//     let user1 = await User.findOne({username : "tony"})

//     let post2 = new Post({
//         content : "best post to write",
//         likes : 200,
//     });

//     post2.user = user1;

//     // await user1.save()
//     await post2.save();
// }

// addData();



const getData = async () => {
    let result = await Post.findOne({}).populate("user");
    console.log(result); 
}

getData(); 