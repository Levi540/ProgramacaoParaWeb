const carrinhoItemData = require('../data/carrinhoItemData');

exports.getCarrinhoItem = function(produtoID, carrinhoID) {
    return carrinhoItemData.getCarrinhoItem(produtoID, carrinhoID);
}

exports.saveCarrinhoItem = function(carrinhoItem) {
    return carrinhoItemData.saveCarrinhoItem(carrinhoItem);
}