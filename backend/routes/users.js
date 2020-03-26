const router = require('express').Router();
let User = require('../models/user.model');
const passport = required('passport');

router.route('/').get((req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { 
        fullname, 
        username, 
        password,
        email,
        role
    } = req.body
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Erros has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
        else{
            const newUser = new User();
            newUser.fullname = fullname;
            newUser.username = username.toLowerCase();
            newUser.email = email;
            newUser.role = role;
            newUser.password = newUser.generateHash(password);
            newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(500).json('Error: ' + err));
        }
    });
});

//Tämä kesken 
router.route('/Login').post(passport.authenticate('local', {session: false}), (req, res) => {
    if(req.isAuthenticated()){
        const {_id,username,role} = req.user;
        const token = SignToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite:true});
    }
}


module.exports = router;