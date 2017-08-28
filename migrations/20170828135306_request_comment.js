exports.up = function(knex, Promise) {
  return knex.schema.createTable('request_comment', function(table){
    table.increments();
    table.integer('user_id');
    table.integer('request_id');
    table.string('comment_body');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('request_comment');
};
