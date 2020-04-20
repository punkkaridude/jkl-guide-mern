const mongoose = require('mongoose');
//Suosikkien skeema/modeli
const favorite = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String
    },
    postalcode: {
        type: Number
    },
    city: {
        type: String  
    },
    country:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    website:{
        type: String
    },
    details:{
        type: String
    },
    image:{
        type: String
    },
    longitude:{
        type: Number
    },
    latitude:{
        type: Number
    },
    added:{
        type: Date
    },
    serviceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }
});

module.exports = mongoose.model('Favorite', favorite);