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
            //Required
            //280 char max
        },
        username: {
            //String
            //Required
        },
        //Date
        //Set deafult to the current time stamp
        //Use getter method to format the timestamp on query
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
     toJSON: {
         getters: true,
     },
     id: false,
    }
);

module.exports = reactionSchema;