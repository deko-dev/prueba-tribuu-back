const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((response) => {
        console.log('Database Connect!!');
    })
    .catch((error) => {
        console.log('Error', error);
    })

module.exports = mongoose;