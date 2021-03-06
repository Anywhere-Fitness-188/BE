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

router.post('/register', (req, res) => {
  if (!req.body.password||!req.body.username || !req.body.type){
    res.status(401).send({message: 'username, password and type required'})
  }
  else{
      if(req.body.type != 'client' && req.body.type != 'instructor'){
        res.status(401).send({message: 'type must be client or instructor'})
      }
      else{
        const hash = bcrypt.hashSync(req.body.password, 2);
        const user = {username: req.body.username,
        password: req.body.password,
        type: req.body.type};
        user.password = hash;
        insert(user).then(a => res.send({message: a})).catch(e => res.status(409).send({error: e.message}));
      }
  }
});

router.post('/login', (req, res) => {
  if(!req.body.password||!req.body.username){
    res.status(401).send({message:'username and password required'});
  }
  else{
  getByUsername(req.body.username).then(user =>{

    if(!user){
      res.status(401).send({message:'invalid credentials'});
    }
    else if(user && bcrypt.compareSync(req.body.password,user.password)){
        req.session.user = user;
        const token = generateToken(user);
        req.session.token = token;
        res.status(200).json({
            message: `Welcome ${user.username}!`,
            token: token, 
            user_id: user.id
          });
    }
    else{
        res.status(401).send({message: 'invalid credentials'})
    }
})
.catch(err => {
    res.status(401).send({message: 'invalid credentials'})
    console.log("error in post",err);

})

function generateToken(user) {
  const payload = {
    subject: user.id, 
    username: user.username,
  };

  const options = {
    expiresIn: '1d', 
  };

  
  const secret = 'jacob';
  console.log('sending token');
  return jwt.sign(payload, secret, options);
}
  
  }
});

module.exports = router;