const wineData = require('../data/wineData');

exports.saveWine = function(wine) {
    return wineData.saveWine(wine);
}