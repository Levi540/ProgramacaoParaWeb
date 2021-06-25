const database = require('../database/database');

exports.getCarrinho = function(carrinhoID) {
    return database.query('select * from carrinho where idusuario = $1', [carrinhoID]);
}

exports.saveCarrinho = function(carrinho) {
    return database.one('insert into carrinho (idusuario, compraEfetuada) values ($1, $2) returning *' 
    , [carrinho.idusuario, carrinho.compraEfetuada]);
}