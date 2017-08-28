
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_reviews', function(table){
    table.increments();
    table.integer('user_id');
    table.string('review');
    table.integer('rating');
    table.string('poster_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_reviews');
};
