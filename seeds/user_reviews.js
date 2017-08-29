
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_reviews').insert([
        {user_id: 3, review: 'service was ok. Could do better!', rating: 4, poster_id: 2},
        {user_id: 4, review: 'service was ok. Could do better!', rating: 2, poster_id: 2},
        {user_id: 1, review: 'service was amazing!', rating: 5, poster_id: 2},
        {user_id: 6, review: 'Ok but forgot to feed my cat, though.', rating: 3, poster_id: 2},
        {user_id: 2, review: 'Couldve gotten better service at a kill shelter', rating: 4, poster_id: 4},
        {user_id: 7, review: 'service was ok. I wish they played with my dog', rating: 5, poster_id: 1}
      ]);
    });
};
