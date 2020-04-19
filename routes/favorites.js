//Tiedostossa suosikkien reitit

const express = require('express');
const favRouter = express.Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const passportConfig = require('../passport');
let User = require('../models/user.model');
let Favorite = require('../models/favorites.model');
let Service = require('../models/service.model');

//Haetaan käyttäjän suossuosikit ID:n perusteella
favRouter.get('/', passport.authenticate('jwt',{session : false}),(req, res)=>{
    Favorite.find( {'userFrom': req.user._id})
    .then(favorite => res.json(favorite))
    .catch(err => res.status(400)
    .json('Error: ' + err));
});

//Suosikkien lisäys
favRouter.post('/add', passport.authenticate('jwt',{session : false}),(req, res)=>{
    
    const serviceId = req.body.serviceId;
    // console.log(serviceId)
    //Etsitään palvelu tietokannasta ID:n perusteella, jos ID:tä ei löydy, error 400.
    Service.findOne({_id : serviceId}, function (err, service){
        if(err) res.status(500).json({message : {msgBody : "Erros has occured: " + err, msgError: true}});
        if(!service) res.status(400).json({message : {msgBody : "No service with id: " + serviceId, msgError: true}});
        //Suosikin asettaminen käyttäjälle
        else{
            const newFav = new Favorite({
                serviceId: serviceId,
                userFrom : req.user._id,
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
            //Suosikkien tallennus
            newFav.save(err=>{
                if(err) res.status(500).json({message : {msgBody : "Erros has occured in adding favorite", msgError: true}});
                else res.status(200).json({message : {msgBody : "Service succesfully favorited!", msgError: false}})
            });
        }
    });
});

//Suosikkien poistaminen käyttäjältä
favRouter.post('/remove', passport.authenticate('jwt',{session : false}),(req, res)=>{
    Favorite.findOneAndRemove({
        $and : [
            { $or: [
                {serviceId : req.body.serviceId},
                {name: req.body.name}
            ]},
            {userFrom : req.user._id}] }, (err, removed) => {
        if(err) {
            res.status(400).json({message : {msgBody : "Error has occured when removing favorite!", msgError: true}});
        }
        else if(!removed) {
            res.status(400).json({message : {msgBody : "No such favorite!", msgError: true}});
        }
        else {
            res.status(204).json({message : {msgBody : "Succesfully removed " + removed + "!", msgError: false}});
        }
    })
});

//Jo valmiiksi suosikeissa olevan palvelun lisäysyritys suosikkeihin
favRouter.post('/alreadyFavorited', passport.authenticate('jwt',{session : false}),(req, res)=>{
    //console.log("favRouter", req.body.serviceId)
    Favorite.exists({
        $and : [
            { $or: [
                {serviceId : req.body.serviceId},
                {name: req.body.name}
            ]},
            {userFrom : req.user._id}] }, function(err, result){
        if(err){
            res.send(err)
        }
        else {
            res.send(result)
        }
    });
});

favRouter.post('/favoriteCount', passport.authenticate('jwt',{session : false}),(req, res)=>{
    Favorite.find({serviceId: req.body.serviceId}).exec((err, favorited) => {
        if(err) return res.status(400).json({message : {msgBody : "Error had occured when fetching count!", msgError: true}});
        res.status(200).json({favCount: favorited.length});
    });
});

module.exports = favRouter;