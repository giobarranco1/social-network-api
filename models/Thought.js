const {Schema, model} = require('mongoose');
const reactionSchema = require("./Reaction");

//Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            //String
            type: String,
            //Required
            required: true,
            //Must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            //Date
            type: Date,
            //Set default value to the current timestamp
            default: Date.now,
            //Use a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            //String
            type: String,
            //Required
            required: true,
        },
        //Array of nested doc created with the reactionSchema
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    if (this.reactions) {
        return this.reactions.length;
    } else {
        return 0;
    }
});

const Thought = model('thought', thoughtSchema);

model.exports = Thought;