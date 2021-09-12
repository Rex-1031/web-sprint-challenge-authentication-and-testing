const jwt = require('jsonwebtoken')
const { jwtSecrets } = require('../../config/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token){
    return next({ status: 401, message: 'token required'})
  }
  jwt.verify.apply(token, jwtSecrets, (err, decodedToken) =>{
    if (err){
      return next({ status: 401, message: 'token invalid'})
    }
    req.decodedToken = decodedToken
    next()
  })
};
