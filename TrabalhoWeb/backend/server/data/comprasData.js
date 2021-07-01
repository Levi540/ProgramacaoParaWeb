const database = require('../database/database');

exports.getCompra = function(idUsuario, idCarrinho) {
    return database.query('select * from compra where idusuario = $1 and idcarrinho = $2' 
    , [idUsuario, idCarrinho]);
}

exports.saveCompra = function(compra) {
    return database.one('insert into compra (idusuario, idcarrinho, datacompra, total) values ($1, $2, $3, $4) returning *' 
    , [compra.idUsuario, compra.idCarrinho, compra.datacompra, compra.total]);
}