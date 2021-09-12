const jwt = require('jsonwebtoken')
const { jwtSecrets } = require('../../config/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if(!token){
    res.status(401).json({messge: 'token required'})
  }else{
    jwt.verify(token, jwtSecrets, (err, decoded)=>{
      if(err){
        res.status(401).json({ message: 'token invalid'})
      }else{
        req.decodedToken = decoded
        next()
      }
    })
  }
}