const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(console.log("connected to db")).catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}



const userSchema = new Schema({
    username : String,
    addresses: [
        {
            _id : false,
            location : String,
            city : String,
            country : String
        }
    ]
})

const User = mongoose.model("User",userSchema);
const addUsers
 = async () => {
    let user1 = new User({
        username : "sherlock",
        addresses : [
            {
                location : "fff",
                city : "lucknow",
                country : "india"
            }
        ]
    })
    user1.addresses.push({location : "ggg", city : "lucknow", country : "india"})
    let result = await user1.save();
    console.log(result);
};

addUsers();
