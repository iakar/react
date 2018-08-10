const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    googleId: String 

});

mongoose.model('users', userSchema);  // create a class for the users collection in MongoDb with the userSchema Properties - if he collection exists in Mongo, it will not overwrite it

/* 
const { Schema } = mongoose;   we could have used this in line 2 - same thing - this is called destructuring
what this is saying is that the mongoose object called Schema. Take that propert and assign it to a new variable called schema { Schema } 
*/
