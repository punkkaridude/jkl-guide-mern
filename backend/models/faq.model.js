const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    editor: {
        username: String,
        required: true
    },
    /*dateCreated: {
        type: Date,
        required: true
    },*/
    

});

module.exports = mongoose.model('Faq', FAQSchema);