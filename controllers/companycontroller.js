const router = require('express').Router();
const company = require('../database').import('../models/company');

router.post("/registercompany", (req, res) => {
    company.create({
        companyName: req.body.company.companyName,
        currency: req.body.company.currency,
        address: req.body.company.address,
        city: req.body.company.city,
        state: req.body.company.state,
        zip: req.body.company.zip
    })
    .then(company => res.status(200).json(company))
    .catch(err => console.log(err));
});

router.get('/getcompanies', (req, res) => {
    company.findAll()  //if you had more than one controller file, you could do include: ['userinfo', 'logs]
        .then(info => res.status(200).json(info))
        .catch(err => res.status(500).json(err))
})

module.exports = router; 