const {User, Thought, Reaction } = require("../models");

module.exports = {
    //All thoughts route
    async getThoughts(req, res) {
        const allThoughts = await Thought.find();
        res.status(200).json(allThoughts);
    },
    //Single thoughts route (id)
    async createThought(req, res) {
        const singleThought = await Thought.findOne({_id: req.parms.thoughtId});
        res.status(200).json(singleThought);
    },
    //New thoughts route
    async createThought(req, res) {
        const newThought = await Thought.create(req.body);
        const addNewThought = await User.findOneAndUpdate(
            {username: req.body.username},
            {$addToSet: {thoughts: newThought._id}},
            {new: true}
        );
        res.status(200).json(addNewThought);
    },
    //Update thought route
    async updateThought(req, res) {
        const updatedThought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedThought);
    },
    //Delete thought by id
    async deleteThought(req, res) {
        const deletedThought = await Thought.findOneAndUpdate({_id: req.params.thoughtId});
        res.status(200).json(deletedThought);
    },
    //Post new reaction
    createReaction(req, res) {
    },
    //Delete reaction by id
    removeReaction(req, res){
    },
}