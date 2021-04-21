const router = require('express').Router();
const dca = require('../database').import('../models/dca');
const validateSession = require('../middleware/validate-session');

router.post("/adddca", validateSession, (req, res) => {
    dca.create({
        dca_company: req.body.dca.dca_company,
        dca_username: req.body.dca.dca_username,
        dca_password: req.body.dca.dca_password,
        dca_url: req.body.dca.dca_url,
        dca_key: req.body.dca.dca_key,
        dca_secret: req.body.dca.dca_secret,
        api_key: req.body.dca.api_key,
        companyId: req.user.companyId
    })
    .then(dca => res.status(200).json(dca))
    .catch(err => console.log(err));
});

router.get('/getdca', validateSession, (req, res) => {
    dca.findAll({
        where: {
            companyId: req.user.companyId
        },
        include: 'company'
    })
    .then(function createSuccess(data) {
        res.status(200).json({
            message: 'DCA Info found',
            data: data
        })
    }).catch(err => res.status(500).json('DCA Info not found', err))
});

router.put("/gettoken:id", validateSession, (req, res) => {
    let updateToken = {
      api_key: req.body.dca.api_key,
    };
    dca.update(updateToken, {
      where: { id: req.params.id },
    })
      .then((entry) => {
          if(entry[0]===0){
              res.status(403).json({message:"You are not allowed edit another user's dca!"})
          } else {
              res.status(200).json({entry:entry,message:"DCA Connection updated"})
          }
      }) 
      .catch((err) => res.status(500).json({ error: err }));
  });

  router.put("/updateDCA/:id", validateSession, (req, res) => {
    let updatedEntry = {
      dca_company: req.body.dca.dca_company,
      dca_username: req.body.dca.dca_username,
      dca_password: req.body.dca.dca_password,
      dca_url: req.body.dca.dca_url,
      dca_key: req.body.dca.dca_key,
      dca_secret: req.body.dca.dca_secret,
      api_key: req.body.dca.api_key
    };
    dca.update(updatedEntry, {
      where: { id: req.params.id },
    })
      .then((entry) => {
          if(entry[0]===0){
              res.status(403).json({message:"You are not allowed edit another user's dca!"})
          } else {
              res.status(200).json({entry:entry,message:"DCA Connection updated"})
          }
      }) 
      .catch((err) => res.status(500).json({ error: err }));
  });
  
  //Delete a trip
  router.delete("/deleteDCA/:id", validateSession, (req, res) => {
      dca.destroy({where: { id: req.params.id }})
      .then((entry) => {
          if(entry===0){
              res.status(403).json({message:"You are not allowed to delete another user's DCA Connection!"})
          } else {
              res.status(200).json({message:"DCA Connection deleted"})
          }
      }) 
      .catch((err) => res.status(500).json({ error: err }));
  });

module.exports = router; 