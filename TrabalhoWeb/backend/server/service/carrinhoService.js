const carrinhoData = require('../data/carrinhoData');

exports.getCarrinho = function(ID) {
    return carrinhoData.getCarrinho(ID);
}

exports.saveCarrinho = function(carrinho) {
    return carrinhoData.saveCarrinho(carrinho);
}