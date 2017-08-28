
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_reviews', function(table){
    table.increments();
    table.int('owner_id');
    table.string('user_id');
    table.string('review');
    table.int('rating');
    table.string('poster_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_reviews');
};
