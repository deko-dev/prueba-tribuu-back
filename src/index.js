const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(morgan('dev'));

// Settings
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Added Headers
app.use((req, res, next) => {
    // Enabled CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Added allowed methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Agregamos los headers que debe contener nuestra API Rest
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')

    // Execute next middleware
    next();

})

// Server Up
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});

// Database
require('./database');

// Routes
app.use('/api',require('./routes/dataUser'));
