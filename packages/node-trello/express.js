const express = require('express');
const cors = require('cors');
const db = require('./database');
const cardsRouter = require('./cards');

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: '*',
   // methods: ['GET', 'POST'],
    //allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/cards', cardsRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
