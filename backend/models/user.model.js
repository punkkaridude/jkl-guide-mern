const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
});

UserSchema.methods.generateHash = function(password) {
    console.log(password)
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

UserSchema.methods.validPassword = function(password) {
    console.log(password)
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);