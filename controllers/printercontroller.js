const router = require('express').Router();
const printer = require('../database').import('../models/printer');
const validateSession = require('../middleware/validate-session');

router.post("/registerprinter", validateSession, (req, res) => {
    printer.create({
        printerModel: req.body.printer.printerModel,
        assetId: req.body.printer.assetId,
        serialNumber: req.body.printer.serialNumber,
        ipAddress: req.body.printer.ipAddress,
        status: req.body.printer.status,
        billable: req.body.printer.billable,
        base_mono_volume: req.body.printer.base_mono_volume,
        base_color_volume: req.body.printer.base_color_volume,
        base_rate: req.body.printer.base_rate,
        monoPrice: req.body.printer.monoPrice,
        colorPrice: req.body.printer.colorPrice,
        flat_rate: req.body.printer.flat_rate,
        companyId: req.user.companyId,
        customerId: req.body.printer.customerId
    })
    .then(printer => res.status(200).json(printer))
    .catch(err => console.log('Is this not working', err));
});

router.get('/getprinters', validateSession, (req, res) => {
    printer.findAll({
        where: {
            companyId: req.user.companyId
        },
        include: ['company']
    })
    .then(function createSuccess(data) {
        res.status(200).json({
            message: 'Printer Info found',
            data: data
        })
    }).catch(err => res.status(500).json('Printer Info not found', err))
});

router.get('/getallprinters/:customerId', validateSession, (req, res) => {
    printer.findAll({
        where: {
            companyId: req.user.companyId,
            customerId: req.params.customerId
        },
        include: 'company'
    }) 
        .then(info => res.status(200).json(info))
        .catch(err => res.status(500).json(err))
})

router.put("/updateprinter/:id", validateSession, (req, res) => {
    printer.update({
        printerModel: req.body.printer.printerModel,
        assetId: req.body.printer.assetId,
        serialNumber: req.body.printer.serialNumber,
        billable: req.body.printer.billable,
        base_mono_volume: req.body.printer.base_mono_volume,
        base_color_volume: req.body.printer.base_color_volume,
        base_rate: req.body.printer.base_rate,
        monoPrice: req.body.printer.monoPrice,
        colorPrice: req.body.printer.colorPrice,
        flat_rate: req.body.printer.flat_rate
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then((printer) => {
        res.status(200).json(printer)
    })
    .catch((err) => {
        res.status(500).json({
           error: err
        })
    })
});

router.delete("/deleteprinter/:id", validateSession, (req, res) => {
    printer.destroy({where: { id: req.params.id }})
    .then((entry) => {
        if(entry===0){
            res.status(403).json({message:"You are not allowed to delete another Company's Printer!"})
        } else {
            res.status(200).json({message:"Printer deleted"})
        }
    }) 
    .catch((err) => res.status(500).json({ error: err }));
});


// router.get('/getallprinters/:id', validateSession, (req, res) => {
//     printer.findAll({
//         where: {
//             companyId: req.user.companyId,
//             id: req.params.id
//         },
//         include: 'company'
//     }) 
//         .then(info => res.status(200).json(info))
//         .catch(err => res.status(500).json(err))
// })

module.exports = router; 