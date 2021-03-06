//Tässä tiedostossa palveluihin liittyvät reitit
const router = require('express').Router();
let Service = require('../models/service.model');
router.route('/Service').get((req, res) => {
    Service.find()
    .then(service => res.json(service))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Palveluiden lisäämiseen tarvittavat tiedot
router.route('/Add-service').post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const postalcode = req.body.postalcode;
    const city = req.body.city;
    const country = req.body.country;
    const email = req.body.email;
    const phone = req.body.phone;
    const website = req.body.website;
    const details = req.body.details;
    const image = req.body.image;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const added = Date.now();
    const newService = new Service({
        name, 
        address, 
        postalcode, 
        city, 
        country, 
        email, 
        phone, 
        website, 
        details, 
        image, 
        longitude, 
        latitude,
        added
    });

    //Uuden palvelun tallennus yo. mukaisesti.
    newService.save()
        .then(() => res.json('Service added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;