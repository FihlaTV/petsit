
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet_reviews', function(table){
    table.increments();
    table.integer('pet_id');
    table.string('review');
    table.integer('rating');
    table.integer('poster_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pet_reviews');
};
