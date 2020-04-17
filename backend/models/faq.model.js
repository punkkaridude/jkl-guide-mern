const mongoose = require('mongoose');
//UKK:n skeema/modeli
const faqSchema = new mongoose.Schema({
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
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true       
    }
});

module.exports = mongoose.model('Faq', faqSchema);