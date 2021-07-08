const wineData = require('../data/wineData');

exports.saveWine = function(wine) {
    return wineData.saveWine(wine);
}

exports.getWines = function() {
    return wineData.getWines();
}