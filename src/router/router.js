const express = require('express')
clientSchema = require('../model/client')

router = new express.Router()

router.post('/register',async(req,res)=>{
    const newClient = new clientSchema(req.body.client)
    newClient.save().then(()=>{
        res.send(newClient)
    }).catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

module.exports = router