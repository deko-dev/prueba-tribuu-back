const mongoose = require('mongoose');
const { Schema } = mongoose;


const dataUserSchema = new Schema({
    name: { 
        type: String,
        required: true
    },  
    lastname: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    language: { 
        type: [
            { type: String }
        ],
        required: true
    },
    currency: {
        code: { 
            type: String,
        },
        name: {
            type: String,
        },
        symbol: {
            type: String
        },
    },
    country: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    countryCodeName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', dataUserSchema);