
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet_reviews').insert([
        {pet_id: 1, review: 'peed on my laptop', rating: 1, poster_id: 2},
        {pet_id: 2, review: 'this pet is an angel', rating: 5, poster_id: 7},
        {pet_id: 3, review: 'ok', rating: 3, poster_id: 5},
        {pet_id: 4, review: 'devil', rating: 0, poster_id: 3},
        {pet_id: 5, review: 'best whale ever', rating: 5, poster_id: 6},
        {pet_id: 6, review: 'nice', rating: 4, poster_id: 1},
        {pet_id: 7, review: 'not a fan', rating: 2, poster_id: 4},
      ]);
    });
};
