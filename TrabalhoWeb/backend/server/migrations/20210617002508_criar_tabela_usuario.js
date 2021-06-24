
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('nome');
        table.string('email');
        table.timestamps();
    })
};

exports.down = function (knex) {

};
