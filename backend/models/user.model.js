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
        required: true
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

UserSchema.methods.validPassword = function(password, cb) {
    bcrypt.compareSync(password, this.password, (err, isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb(null,this);
        }
    });
};

module.exports = mongoose.model('User', UserSchema);