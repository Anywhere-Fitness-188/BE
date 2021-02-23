const express = require('express');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
router.use(express.json());
const bcrypt = require('bcryptjs');

const {
    get,
    getByUsername,
    insert,
    del,
} = require('./model');

router.delete('/', (req, res) =>{
    if(!req.body.id){
        res.status(401).send({message: 'id required'})
    }
    del(req.body.id).then(a => res.send({message: 'class deleted'})).catch( e => res.send({error: e}));
})
router.get('/', (req, res) =>{
    get().then(a => res.send(a)).catch(e => res.send(e));
})

router.post('/', (req, res) =>{
    if(!req.body.name||!req.body.start_time){
        res.status(401).send({message: "name and start_time are required"})
    } 
    else{
        insert(req.body).then(a => res.send({message: 'class added'})).catch(e => res.send(e))
    }
})
module.exports = router;