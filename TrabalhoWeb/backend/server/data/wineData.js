const database = require('../database/database');

exports.saveWine = function(wine) {
    return database.one('insert into vinho (nome, tipo, nacionalidade, quantidade, preco) values ($1, $2, $3, $4, $5) returning *'
    , [wine.nome, wine.tipo, wine.nacionalidade, wine.quantidade, wine.preco]);
}