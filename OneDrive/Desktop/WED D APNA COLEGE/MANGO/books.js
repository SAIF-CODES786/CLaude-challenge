const mongoose = require('mongoose');

main()
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title: {
      type : String, 
      required : true,   
      maxLength: 20,
    },
    author: {
      type : String,
    },
    price: {
      type : Number,
      min: [0,"Price cannot be negative"],
    },
    discount: {
        type : Number,
        default: 0
    },
    category: {
        type : String,
        enum: ['fiction', 'non-fiction', 'comics', 'biography', 'science', 'history'],
    },
    genre: [String],
});

const Book = mongoose.model('Book', bookSchema);

// let book4 = new Book({
//     title: 'marvel comics v2',
//     author: 'Stan Lee',
//     price: 15,
//     genre: ['comics', 'action'],
// });
// book4.save().then(() => {
//     console.log('Book saved to the database');
// })
// .catch(err => {
//     console.log(err);
// });

Book.findByIdAndUpdate('6a474676efc563ac51a8efb3', { price: -700 }, {runValidators: true}).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err.errors.price.properties.message);
});