const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
let User = require('../models/user.model');

const signToken = userID =>{
    return JWT.sign({
        iss : "authCode",
        sub : userID
    },"authCode",{expiresIn : "1h"});
}

userRouter.post('/Register',(req,res)=>{
    const { fullname,username,password,email,role } = req.body;
    User.findOne({username},(err,user)=>{
        if(err) res.status(500).json({message : {msgBody : "Erros has occured in checking if already exists!", msgError: true}});
        if(user) res.status(400).json({message : {msgBody : "Username is already taken!", msgError: true}});
        else { 
            const newUser = new User({ fullname,username,password,email,role });
            newUser.save(err=>{
                if(err) res.status(500).json({message : {msgBody : "Erros has occured when trying to save user!", msgError: true}});            
                else res.status(201).json({message : {msgBody : "Account successfully created!", msgError : false}}); 
            });
        }
    });
});

userRouter.post('/Login', passport.authenticate('local',{session : false}),(req, res)=>{
    if(req.isAuthenticated()){
        const {_id,username,role} = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated : true,user : {username,role}});
    }
});

userRouter.get('/Logout', passport.authenticate('jwt',{session : false}),(req, res)=>{
    res.clearCookie('access_token');
    res.json({user:{username : "",role : ""},success : true});
});

userRouter.get('/JKL-Guide/Admin', passport.authenticate('jwt',{session : false}),(req, res)=>{
    if(req.user.role === "admin"){
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    else res.status(403).json({message : {msgBody : "Not an admin!", msgError : true}});
});

userRouter.get('/JKL-Guide/Admin/Allusers', passport.authenticate('jwt',{session : false}),(req, res)=>{
    if(req.user.role === "admin"){
            User.find()
            .then(user => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err));
    }
    else res.status(403).json({message : {msgBody : "Authorization failed!", msgError : true}});
});

userRouter.get('/JKL-Guide/Settings/', passport.authenticate('jwt',{session : false}),(req, res)=>{
    res.json(req.user)

    
});


userRouter.get('/Authenticated', passport.authenticate('jwt',{session : false}),(req, res)=>{
    const {username,email,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,email,role}});
});

userRouter.put('/JKL-Guide/Settings/UpdateUsername', passport.authenticate('jwt',{session : false}),(req, res)=>{
    const _id = req.user._id;
    console.log(req.user)
    User.findByIdAndUpdate({_id}, {'username': req.body.username}, function(err, result){
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
});

userRouter.put('/JKL-Guide/Settings/UpdateEmail', passport.authenticate('jwt',{session : false}),(req, res)=>{
    const _id = req.user._id;
    console.log(req.user)
    User.findByIdAndUpdate({_id}, {'email': req.body.email}, function(err, result){
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
});


userRouter.post('/JKL-Guide/Settings/ChangePassword', passport.authenticate('jwt',{session : false}),(req, res)=>{
    const _id = req.user._id;
    const { password, newPassword } = req.body;
    // console.log(req.user)
    User.findById({_id}, function(err, result){
        if(err) res.send(err)
        result.validPassword(password, function(err, user){
            if(err) res.send({message: {msgBody: err, msgError: true}})
            user.password = newPassword;
            user.save();
            return res.send({message: {msgBody: "Passwords changed!", msgError: false}})
        })
    })
});

module.exports = userRouter;