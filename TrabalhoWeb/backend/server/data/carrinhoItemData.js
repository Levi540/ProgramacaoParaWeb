const database = require('../database/database');

exports.getCarrinhoItem = function(produtoID, carrinhoID) {
    return database.query('select * from carrinhoitem where idproduto = $1 and idcarrinho = $2'
    , [produtoID, carrinhoID]);
}

exports.saveCarrinhoItem = function(carrinhoItem) {
    return database.one('insert into carrinhoitem (idproduto, idcarrinho, quantidade, valor) values ($1, $2, $3, $4) returning *' 
    , [carrinhoItem.idproduto, carrinhoItem.idcarrinho, carrinhoItem.quantidade, carrinhoItem.valor]);
}