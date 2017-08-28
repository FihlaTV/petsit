
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('username');
    table.string('password');
    table.string('location');
    table.string('bio');
    table.string('email');
    table.string('phone_number');
    table.string('house_info');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
