const router = require('express').Router();
const User = require('../models/user.model');
const UserSession = require('../models/usersession.model');

router.route('/').get((req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});
//login usernamella ja salasanalla!
router.route('/Login').post((req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { username } = username;
    //jos username input on tyhjä
    if(!username) {
        return res.send({
            success: false,
            mes: "Error: Username cannot be blank."
        });
    }
    //jos password input in tyhjä
    if(!password) {
        return res.send({
            success: false,
            mes: "Error: Password cannot be blank."
        });
    }
    //Username pienellä
    username = username.toLowerCase();
    //etsitään username tietokannasta
    User.find(
        {
            username
        },
        (err, user) => {
            //server error
            if (err) {
                return res.send({
                    success: false,
                    mes: "Error: Server error!"
                });
            }
            //jos tunnusta ei ole olemassa
            if (user.length != 1) {
                return res.send({
                    success: false,
                    mes: "Error: Invalid username!"
                });
            }
            //asetetean tunnus listaan
            const user = users[0];
            // jos salasanat eivät täsmää eli verrataan db:n ja inputin salasanaa
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    mes: "Error: Invalid password!"
                });
            }
            //luodaan uusi sessio tunnukselle
            let userSession = new UserSession();
            //katsotaan user id tunnukselle db:stä
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                //server error
                if (err) {
                    return res.send({
                        success: false,
                        mes: "Error: Server error."
                    });
                }
                //login onnistui!
                return res.send({
                    success: true,
                    mes: "Valid sign in.",
                    //luodaan session token!
                    token: doc._id
                });
            });
        }
    )
});

//verifoidaan sessio
router.route("/verify", (req, res, next) => {
    const { query } = req;
    const { token } = query;
    //etsitään sessio joka vastaa oikeaa tokenia eikä ole poistettu
    UserSession.find(
        {
            _id: token,
            isDeleted: false
        },
        (err, sessions) => {
            //server error
            if (err) {
                return res.send({
                    success: false,
                    mes: "Error: Server error"
                });
            }
            //Väärä token
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    mes: "Error: Invalid token!"
                });
            } 
            //onnistui
            else {
                return res.send({
                    success: true,
                    mes: "Good"
                });
            }
        }
    );
});

//logout ja session tokenin poisto!
router.route("/logout", (req, res, next) => {
    const { query } = req;
    const { token } = query;
    //etsitään tokenia vastaava sessio ja poistetaan muuttamlla isDeleted: true
    UserSession.findOneAndUpdate(
        {
            _id: token,
            isDeleted: false
        }, 
        {
            $set: { isDeleted: true }
        },
        null,
        //jos tunnus on olemassa
        (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    mes: "Error: Server error."
                });
            }
            //jos sessiota ei ole olemassa
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    mes: "Error: Invalid token."
                });
            }
            //logout onnistui!!
            return res.send({
                success: true,
                mes: "Good"
            });
        }
    );
});

module.exports = router;