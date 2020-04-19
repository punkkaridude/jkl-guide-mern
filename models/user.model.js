const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//Käyttäjien skeema/model tietokantaa varten
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
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
});

//Hashataan salasana
UserSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10,(err, passwordHash)=>{
        if(err) return next(err)
        this.password = passwordHash;
        next();
    });
});

//Tarkistetaan, että salasana täyttää kriteerit
UserSchema.methods.validPassword = function(password, cb){
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if(err) return cb(err);
        else{
            if(!isMatch) return cb(null, isMatch);
            return cb(null,this);
        }
    });
};

module.exports = mongoose.model('User', UserSchema);