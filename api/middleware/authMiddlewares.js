const Users = require('../users/users-model')

//on failed registration/login if username or password is missing

const checkPayload = (req, res, next)=>{
    try{
        const { username, password } = req.body
        if(!username || !password){
            res.status(404).json({message: 'username and password required'})
        }else{
            req.username = username
            req.password = password
            next()
        }
    }catch(err){
        next(err)
    }
}

const checkUsername = async (req, res, next) =>{

}

const checkLogin =(req, res, next) =>{

}


module.exports ={
    checkLogin,
    checkPayload,
    checkUsername
}