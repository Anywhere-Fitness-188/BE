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
    getJoin,
    getAttendees,
    joinClass,
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

router.get('/attendees', (req, res) =>{
    if(!req.body.class_id){
        res.status(401).send({message: 'class_id required'})
    }
    getAttendees(req.body.class_id).then(a => res.send(a)).catch(e => res.send({error: e}))
})

router.post('/attendees', (req, res) =>{
    if(!req.body.class_id || !req.body.user_id){
        res.status(401).send({message: 'class_id and user_id required'})
    }
    joinClass(req.body).then(a => res.send(a)).catch(e => res.send({error: e}))
})

router.get('/join', (req,res) =>{
    getJoin().then(a => res.send(a))
})

router.post('/', (req, res) =>{
    if(!req.body.name||!req.body.start_time){
        res.status(401).send({message: "user_id, name, and start_time are required"})
    } 
    else{
        insert(req.body).then(a => res.send({message: a})).catch(e => res.send({error: e}))
    }
})
module.exports = router;