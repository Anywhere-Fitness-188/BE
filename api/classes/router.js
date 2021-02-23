const express = require('express');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
router.use(express.json());
const bcrypt = require('bcryptjs');

const {
    get,
    getByUsername,
    insert,
} = require('./model');

router.get('/', (req, res) =>{
    get().then(a => res.send(a)).catch(e => res.send(e));
})

router.post('/', (req, res) =>{
    if(!req.body.name||!req.body.start_time){
        res.status(401).send({message: "name and start_time are required"})
    } 
    else{
        insert(req.body).then(a => res.send({mesage: 'class added'})).catch(e => res.send(e))
    }
})
module.exports = router;