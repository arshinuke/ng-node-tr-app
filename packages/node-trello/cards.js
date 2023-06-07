const express = require('express');
const Card = require('./card');

const router = express.Router();

router.post('/', (req, res) => {
    console.log("testing",req.body);
    const { title, description, creationDate } = req.body;

    const card = new Card({
        title,
        description,
        creationDate
    });

    card.save()
        .then(() => res.json(card))
        .catch(error => res.status(500).json({ error: 'Failed to create card' }));
});

module.exports = router;
