
exports.up = function(knex, Promise) {
  return knex.schema.createTable('requests', function(table){
    table.increments();
    table.integer('poster_id');
    table.integer('pet_id');
    table.string('start_date');
    table.string('end_date');;
    table.string('notes');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests');
};
Id
Poster_id
Pet_id
Start_date
Start_time
End_date
End_time
Info
accepted_user(default null)
