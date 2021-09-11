const db= require('../../data/dbConfig');


function findAll(){
    return db('users')
}

function findById(id){
    return db('users')
        .where('id', id)
        .first()
}

function findUser(username){
    return db('users')
        .where('username', username)

}

function pwValidation(password){
    return db('users')
        .where('password', password )
}

async function addUser(user){
    const id = await db('users').insert(user)
    return findById(id)
}


module.exports ={
    findAll,
    findById,
    findUser,
    pwValidation,
    addUser
}