const jwt = require('jsonwebtoken');
const secret = 'jacob';

module.exports = (req, res, next) => {
console.log(req.headers.authorization)
if(!req.headers.authorization){
  res.status(401).send({message: 'token required'});
}

else{
 const token = req.headers.authorization;
 jwt.verify(token, secret, (e, dt) =>{
  if(e){
    res.status(401).send({message: 'token invalid'})
  }
  else{
    next();
  }
 })
}}