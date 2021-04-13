const router = require('express').Router();
const printer = require('../database').import('../models/printer');
const validateSession = require('../middleware/validate-session');

router.post("/registerprinter", validateSession, (req, res) => {
    printer.create({
        printerModel: req.body.printer.printerModel,
        assetId: req.body.printer.assetId,
        serialNumber: req.body.printer.serialNumber,
        startMono: req.body.printer.startMono,
        endMono: req.body.printer.endMono,
        monoPrice: req.body.printer.monoPrice,
        colorPrice: req.body.printer.colorPrice,
        base_mono_volume: req.body.printer.base_mono_volume,
        base_color_volume: req.body.printer.base_color_volume,
        base_rate: req.body.printer.base_rate,
        flat_rate: req.body.printer.flat_rate,
        billable: req.body.printer.billable,
    })
    .then(printer => res.status(200).json(printer))
    .catch(err => console.log(err));
});

router.get('/getprinter', validateSession, (req, res) => {
    printer.findOne({
        where: {
            printerId: req.printer.id
        },
        include: 'company'
    })
    .then(function createSuccess(data) {
        res.status(200).json({
            message: 'Printer Info found',
            data: data
        })
    }).catch(err => res.status(500).json('Printer Info not found', err))
});


router.get('/getallprinters', validateSession, (req, res) => {
    printer.findAll({
        where: {
            companyId: req.company.id,
        },
        include: 'company'
    }) 
        .then(info => res.status(200).json(info))
        .catch(err => res.status(500).json(err))
})

module.exports = router; 