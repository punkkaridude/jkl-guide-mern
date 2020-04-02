const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
let User = require('../models/user.model');
let Favorite = require('../models/favorites.model');
let Service = require('../models/service.model');

const signToken = userID =>{
    return JWT.sign({
        iss : "authCode",
        sub : userID
    },"authCode",{expiresIn : "1h"});
}

userRouter.post('/Register',(req,res)=>{
    const { fullname,username,password,email,role } = req.body;
    User.findOne({username},(err,user)=>{
        if(err) res.status(500).json({message : {msgBody : "Erros has occured", msgError: true}});
        if(user) res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
        else { 
            const newUser = new User({ fullname,username,password,email,role });
            newUser.save(err=>{
                if(err) res.status(500).json({message : {msgBody : "Erros has occured", msgError: true}});            
                else res.status(201).json({message : {msgBody : "Account successfully created", msgError : false}}); 
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
        res.status(200).json({message : {msgBody : "Hello master!", msgError : false}});
    }
    else res.status(403).json({message : {msgBody : "Not an admin!", msgError : true}});
});

userRouter.get('/Authenticated', passport.authenticate('jwt',{session : false}),(req, res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});

userRouter.post('/JKL-Guide/Favorites/add', passport.authenticate('jwt',{session : false}),(req, res)=>{
    const id = req.body.objectid;
    Service.findById(id, function (err, service){
        if(err) res.status(500).json({message : {msgBody : "Erros has occured", msgError: true}});
        if(!service) res.status(400).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            const newFav = new Favorite({
                name : service.name,
                address : service.address,
                postalcode : service.postalcode,
                city : service.city,
                country : service.country,
                email : service.email,
                phone : service.phone,
                website : service.website,
                details : service.details,
                image : service.image,
                longitude : service.longitude,
                latitude : service.latitude,
                isDeleted : service.isDeleted,
                added : Date.now()
            });
            newFav.save(err=>{
                if(err) res.status(500).json({message : {msgBody : "Erros has occured in adding favorite", msgError: true}});
                else {
                    req.user.favorites.push(newFav);
                    req.user.save(err=>{
                        if(err) res.status(500).json({message : {msgBody : "Error in saving favorite", msgError: true}});
                        else res.status(200).json({message : {msgBody : "Successfully added service in favorites", msgError: false}});
                    });
                }
            });
        }
    });
});

module.exports = userRouter;