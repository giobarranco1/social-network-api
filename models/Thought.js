const {Schema, model} = require('mongoose');

//Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            //String
            //Required
            //Must be between 1 and 280 characters
        },
        createdAt: {
            //Date
            //Set default value to the current timestamp
            //Use a getter method to format the timestamp on query
        },
        username: {
            //String
            //Required
        },
        reaction: {
            //Array of nested doc created with the reactionSchema 
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Thought = model('thought', thoughtSchema);

model.exports = Thought;