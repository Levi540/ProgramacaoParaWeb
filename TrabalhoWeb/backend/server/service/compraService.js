const compraData = require('../data/comprasData');

exports.getCompra = function(idUsuario, idCarrinho) {
    return compraData.getCompra(idUsuario, idCarrinho);
}

exports.saveCompra = function(compra) {
    return compraData.saveCompra(compra);
}