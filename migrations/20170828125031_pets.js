
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', function(table){
    table.increments();
    table.integer('owner_id');
    table.string('pet_name');
    table.string('species');
    table.integer('age');
    table.string('bio');
    table.string('temperament');
    table.string('notes');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets');
};
