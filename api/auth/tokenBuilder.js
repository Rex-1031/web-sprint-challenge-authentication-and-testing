const jwt = require('jsonwebtoken')
const { jwtSecrets } = require('../../config/secrets')

module.exports = function(user){
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, jwtSecrets, options)
}
