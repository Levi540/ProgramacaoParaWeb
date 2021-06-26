const database = require('../database/database');

exports.saveUser = function(user) {
    return database.one('insert into users (nome, senha, email) values ($1, $2, $3) returning *'
    , [user.nome, user.senha, user.email]);
}

exports.getUser = function(userLogin) {
    return database.query('select * from users where email = $1', [userLogin]);
}