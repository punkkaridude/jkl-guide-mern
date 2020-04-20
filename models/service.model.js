const mongoose = require('mongoose');
//Palveluiden skeema/modeli
const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postalcode: {
        type: Number,
        required: true,
        minlength: 5
    },
    city: {
        type: String,
        required: true       
    },
    country:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false,
        default: ''
    },
    phone:{
        type: String,
        required: false,
        default: ''
    },
    website:{
        type: String,
        required: false,
        default: ''
    },
    details:{
        type: String,
        required: false,
        default: ''
    },
    image:{
        type: String,
        required: false,
        default: ''
    },
    longitude:{
        type: Number,
        required: true,
        default: ''
    },
    latitude:{
        type: Number,
        required: true,
        default: ''
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    added:{
        type: Date,
        required: true
    },
    favorited:{
        type: Number,
        default: 0
    }
    
});

module.exports = mongoose.model('Service', ServiceSchema);