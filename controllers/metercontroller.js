const router = require('express').Router();
const meters = require('../database').import('../models/meters');
const validateSession = require('../middleware/validate-session');

router.post("/registermeters", validateSession, (req, res) => {
    meters.create({
        serialNumber: req.body.meters.printerModel,
        mono: req.body.meters.mono,
        color: req.body.meters.color,
        dateReported: req.body.meters.dateReported,
        companyId: req.user.companyId,
        customerId: req.body.meters.customerId,
        printerId: req.body.meters.printerId
    })
    .then(meters => res.status(200).json(meters))
    .catch(err => console.log(err));
});


router.get('/getallmeters', validateSession, (req, res) => {
    meters.findAll({
        where: {
            companyId: req.user.companyId
        },
        include: ['customer', 'company', 'printer']
    }) 
        .then(info => res.status(200).json(info))
        .catch(err => res.status(500).json(err))
})

module.exports = router; 