var express = require('express');
var router = express.Router();
const Phone = require('../models/phoneSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save_phone',(req,res) => {
  var savePhone = {
    "companyName": req.body.companyName,
    "modelNumber": req.body.modelNumber,
    "quantity": req.body.quantity
  };
  var phoneDocument = new Phone(savePhone);
  // phoneDocument.save((err,phone)=>{

  // })
  phoneDocument.save().then(item => {
    res.status(200).json({
      status: true,
      message: 'Phone Saved'
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      message: 'Phone Not Saved',
      error: err
    });
  });
});

router.get('/get_phones',(req,res) => {
  Phone.find().then(item => {
    res.status(200).json({
      status: true,
      message: 'Phones Retrieved',
      data: item
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      message: 'Phones Not Retrieved',
      error: err
    });
  });
});

module.exports = router;
