const usersData = require('../data/usersData');

exports.saveUser = function(user) {
    return usersData.saveUser(user);
}