const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            //Use mongoose objectId data type
            //Default value is set to a new objectId
            type: Schema.Types.ObjectId,
            deafult: () => Types.ObjectId(),
        },
        reactionBody: {
            //String
            type: String,
            //Required
            required: true,
            //280 char max
            maxlength: 280
        },
        username: {
            //String
            type: String,
            //Required
            required: true
        },
        createdAt: {
            type: Date,
            //Set deafult to the current time stamp
            default: Date.now,
            //Use getter method to format the timestamp on query
        },
    },
    {
     toJSON: {
         virtuals: true,
         getters: true,
     },
     id: false,
    }
);

module.exports = reactionSchema;