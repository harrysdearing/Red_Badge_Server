const router = require('express').Router();
const customer = require('../database').import('../models/customer');
const validateSession = require('../middleware/validate-session');

router.post("/registercustomer", validateSession, (req, res) => {
    customer.create({
        customerId: req.body.customer.customerId,
        customerName: req.body.customer.customerName,
        startDate: req.body.customer.startDate,
        expDate: req.body.customer.expDate,
        billingCycle: req.body.customer.billingCycle,
        companyId: req.user.companyId
    })
    .then(customer => res.status(200).json(customer))
    .catch(err => console.log(err));
});

router.get('/getcustomer', validateSession, (req, res) => {
    customer.findAll({
        where: {
            companyId: req.user.companyId
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
    customer.findAll()
        .then(info => res.status(200).json(info))
        .catch(err => res.status(500).json(err))
})

router.put("/updatecustomer/:id", validateSession, (req, res) => {
    customer.update({
        customerId: req.body.customer.customerId,
        customerName: req.body.customer.customerName,
        startDate: req.body.customer.startDate,
        expDate: req.body.customer.expDate,
        billingCycle: req.body.customer.billingCycle,
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then((customer) => {
        res.status(200).json(customer)
    })
    .catch((err) => {
        res.status(500).json({
           error: err
        })
    })
});

router.delete("/deletecustomer/:id", validateSession, (req, res) => {
    customer.destroy({where: { id: req.params.id }})
    .then((entry) => {
        if(entry===0){
            res.status(403).json({message:"You are not allowed to delete another user's Customer Connection!"})
        } else {
            res.status(200).json({message:"Customer Connection deleted"})
        }
    }) 
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router; 