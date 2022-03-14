const { Schema, model } = require("mongoose");

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
      validate: {
        //Match a valid email address
        validator: function (email) {
          return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z]{2,6})$/.test(
            email
          );
        },
        message: "Please check your email",
      },
    },
    thoughts: [
      {
        //Array of _id values referencing thought model
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        // Array of _id values referencing the User model (self-reference)
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
