const router = require('express').Router();
const customer = require('../database').import('../models/customer');
const validateSession = require('../middleware/validate-session');

router.post("/registercustomer", validateSession, (req, res) => {
    customer.create({
        customerName: req.body.customer.customerName,
        startDate: req.body.customer.startDate,
        expDate: req.body.customer.expDate,
        billingCycle: req.body.customer.billingCycle
    })
    .then(customer => res.status(200).json(customer))
    .catch(err => console.log(err));
});

router.get('/getcustomer', validateSession, (req, res) => {
    customer.findOne({
        where: {
            customerId: req.customer.id
        },
        include: 'company'
    })
    .then(function createSuccess(data) {
        res.status(200).json({
            message: 'Customer Info found',
            data: data
        })
    }).catch(err => res.status(500).json('Customer Info not found', err))
});


router.get('/getallcustomers', validateSession, (req, res) => {
    customer.findAll()  //if you had more than one controller file, you could do include: ['userinfo', 'logs]
        .then(info => res.status(200).json(info))
        .catch(err => res.status(500).json(err))
})

module.exports = router; 