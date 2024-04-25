const express = require('express');
const router = express.Router();
const Model = require ('../model/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/getall', (req, res) => {
    res.send('post getall response');
})

router.post('/update', (req, res) => {
    res.send('post update response');
})

router.post('/delete', (req, res) => {
    res.send('post delete response');
})

router.post("/authenticate",(req,res) => {
    Model.find({})
    .then((result) => {
        if(result){
            res.json(result)
        }else{
            res.status(401).json({message:"invalide credential"})
        }
    }).catch((err) => {
        res.status(500).json(err)
    });
});

// getall
// update
// delete

module.exports = router;