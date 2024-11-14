const express = require('express');

const router = express.Router();

router.get('/add' ,(req,res) => {  //req, res ka order change nhi hoga
    res.send('response from user add');
});

router.get('/getall' ,(req,res) => {  
    res.send('response from user add');
});

router.get('/getbyid' ,(req,res) => {  
    res.send('response from user add');
});

router.get('/delete' ,(req,res) => {  
    res.send('response from user add');
});

router.get('/update' ,(req,res) => {  
    res.send('response from user add');
});

module.exports = router ; // import export krne keliye ye liye hai import ke liye require use karte h 
//jha import karana hai vha likhte hai use 