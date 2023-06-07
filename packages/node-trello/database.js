const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arkantosshinukenobii:arkantosshinukenobii@ng-node-tr-cluster.hlpbhr6.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));
