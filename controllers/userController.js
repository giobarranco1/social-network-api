const {User, Thought} = require("../models");

module.exports = {
    //All users
    async getUsers(req, res) {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    },
    //Single user
    async getSingleUser(req, res) {
        const singleUser = await User.findOne({_id: req.params.userId})
        .populate("friends")
        .populate("thoughts");
        res.status(200).json(singleUser);  
    },
    //Create new user
    async createUser(req, res) {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    },
    //Update User
    async updateUser(req, res) {
        const updatedUser = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedUser);
    },
    //Delete user
    async deleteUser(req, res) {
        const deletedUser = await User.findOneAndDelete({_id: req.params.userId})
        res.status(200).json(deletedUser);
    },
    //Add a new friend
    async addFriend(req, res) {
        const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {new: true}
        );
        res.status(200).json(newFriend);
    },
    //lose a friend
    async removeFriend(req, res) {
        const oldAcquaintance = await User.findOneAndUpdate(
            {id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        );
        res.status(200).json(oldAcquaintance);
    }
}