//Tiedostossa suosikkien reitit

const express = require('express');
const favRouter = express.Router();
const passport = require('passport');
let User = require('../models/user.model');
let Favorite = require('../models/favorites.model');
let Service = require('../models/service.model');

//Haetaan käyttäjän suossuosikit ID:n perusteella
favRouter.get('/all', passport.authenticate('jwt',{session : false}),(req, res)=>{
    User.findOne( {_id: req.user._id}, (err, user) => {
        if(err) res.status(500).json({message : {msgBody : "Erros has occured: " + err, msgError: true}});
        res.send(user.favorites);
    });
});

//Suosikkien lisäys
favRouter.post('/add', passport.authenticate('jwt',{session : false}),(req, res)=>{
    // console.log("add")
    const servId = req.body.serviceId;
    // console.log(serviceId)
    //Etsitään palvelu tietokannasta ID:n perusteella, jos ID:tä ei löydy, error 400.
    Service.findOne({_id : servId}, function (err, service){
        if(err) res.status(500).json({message : {msgBody : "Erros has occured: " + err, msgError: true}});
        if(!service) res.status(400).json({message : {msgBody : "No service with id: " + servId, msgError: true}});
        //Suosikin asettaminen käyttäjälle
        else{
            const newFav = new Favorite({
                serviceId: servId,
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
                added : Date.now()
            });
            //console.log(newFav)
            //Suosikkien tallennus
            User.findOne({_id: req.user._id},(err, user) => {
                if(err) res.status(500).json({message : {msgBody : "Erros has occured in finding user" + err, msgError: true}});
                else{
                    //console.log(user)
                    //console.log(newFav)
                    if(!user.favorites.some(service => service.serviceId === servId)){
                        user.favorites.push(newFav)
                        //console.log(user.favorites)
                        
                    }
                    user.save(err => {
                        if(err) res.status(500).json({message : {msgBody : "Erros has occured in saving user" + err, msgError: true}});
                        else res.status(200).json({message : {msgBody : "Service" + newFav + " succesfully favorited!", msgError: false}})
                    });
                }
            })      
        }
    });
});

//Suosikkien poistaminen käyttäjältä
favRouter.post('/remove', passport.authenticate('jwt',{session : false}),(req, res)=>{
    // console.log("remove");
    const { serviceId, name } = req.body;
    User.findOne({_id: req.user._id},(err, user) => {
        if(err) res.status(500).json({message : {msgBody : "Erros has occured in finding user" + err, msgError: true}});
        else{
            user.favorites.map((favorite, index) => {
                if(favorite.serviceId === serviceId || favorite.name === name){
                    user.favorites.splice(index, 1);
                }     
            })
            user.save((err) => {
                if(err) res.status(500).json({message : {msgBody : "Erros has occured in saving user" + err, msgError: true}});
                else res.status(200).json({message : {msgBody : "Service succesfully removed from favorites!", msgError: false}})
            })
        }
    })
});

//Jo valmiiksi suosikeissa olevan palvelun lisäysyritys suosikkeihin
favRouter.post('/alreadyFavorited', passport.authenticate('jwt',{session : false}),(req, res)=>{
    //console.log("alreadyFavorited")
    //console.log("favRouter", req.body.serviceId)
    const { serviceId, name } = req.body;
    User.findOne({_id:req.user._id}, (err, user) => {
        if(err) res.status(500).json({message : {msgBody : "Erros has occured in finding user" + err, msgError: true}});
        let isFavorited = false;
        //console.log(user.username)
        if(user.favorites && user.favorites.length > 0){
            console.log("favorites")
            user.favorites.map(favorite => {
                //console.log(name, serviceId)
                //console.log(favorite.name)
                if(serviceId === favorite.serviceId || name === favorite.name){
                    isFavorited = true;
                }
                return isFavorited;
            })
            res.send(isFavorited)
        }
        else{
            res.send(isFavorited)
        }
    })
});

favRouter.post('/favoriteCount', passport.authenticate('jwt',{session : false}),(req, res)=>{
    
});

module.exports = favRouter;