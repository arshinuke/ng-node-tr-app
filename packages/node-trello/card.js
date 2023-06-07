const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
    creationDate: Date
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
