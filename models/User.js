const { Schema, model } = require('mongoose');

//Schema to create user model
const userSchema = new Schema(
    {
    username: {
        //String
        type: String,
        //Unique
        unique: true,
        //Required
        required: true,
        //Trimmed
        trim: true,
    },
    email: {
        //String
        type: String,
        //Required
        required: true,
        //Unique
        unique: true,
        //match valid email address?
    },
    thoughts:{},
    //Array of _id values referncing the thought model
    friends: {},
    //Array of _id values referencing the user model
},
{
    toJSON: {
        getters: true,
    },
}
);

const User = model('user', userSchema);

module.exports = User;
