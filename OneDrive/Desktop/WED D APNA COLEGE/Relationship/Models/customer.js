const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(console.log("connected to db")).catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new Schema({
   item : String,
   price : Number,
})


const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        }
    ]
})

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
//     });



customerSchema.post("findOneAndDelete", async (customer ) => {
    if(customer.orders.length){
       let res = await Order.deleteMany({_id : {$in : customer.orders}})
       console.log(res);
    }
    });

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name : "tony stark"
//     });

//     let order1 = await Order.findOne({item : "samosa"});
//     let order2 = await Order.findOne({item : "pizza"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }

// addCustomer();


const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");  
    console.log(result[0]);
}



// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item : "samosa", price : 15},
//         {item : "kachori", price : 10},
//         {item : "pizza", price : 200},
//     ]);
//     console.log(result);
// };


// addOrders();

const addCust = async () => {
    let newCust = new Customer({name : "bruce wayne"});
    let newOrder = new Order ({item : "burger", price : 150});
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();

    console.log("added to customer");
}

// addCust();

const delCust = async () => {
    let data = await Customer.findOneAndDelete('6a5878bf28b081b4be8484c8');
    console.log(data);
}

delCust();