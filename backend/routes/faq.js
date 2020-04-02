const router = require('express').Router();
const Faq = require('../models/faq.model');

router.route('/').get((req, res) => {
    Faq.find()
    .then(faq => res.json(faq))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const header = req.body.header;
    const body = req.body.body;
    const editor = req.body.editor;
    const dateCreated = Date.now();
    const newFaq = new Faq({
        header,
        body,
        editor,
        dateCreated
    });

    newFaq.save()
        .then(() => res.json('FAQ updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;