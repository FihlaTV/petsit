
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet_reviews').insert([
        {pet_id: 1, review: 'Rudolfo was horrible and ate several of my shoes', rating: 1, poster_id: 2},
        {pet_id: 1, review: 'Shame on your Rudolpho! You called my mother fat?!', rating: 2, poster_id: 7},
        {pet_id: 2, review: 'ok', rating: 3, poster_id: 5},
        {pet_id: 2, review: 'evil animal!', rating: 1, poster_id: 3},
        {pet_id: 3, review: 'best dog ever', rating: 5, poster_id: 6},
        {pet_id: 3, review: 'nice beast', rating: 4, poster_id: 1},
        {pet_id: 4, review: 'not a fan', rating: 2, poster_id: 4},
        {pet_id: 4, review: 'I love Bogey! Such a sweetie', rating: 5, poster_id: 7},
        {pet_id: 5, review: 'I couldnt understand a word he said... only Japanese!', rating: 2, poster_id: 1},
        {pet_id: 5, review: 'He only likes anime.', rating: 3, poster_id: 2},
        {pet_id: 6, review: 'Great at weddings and at parties. A pomeranian for every occasion!', rating: 5, poster_id: 1},
        {pet_id: 6, review: 'A sweet little dougal', rating: 4, poster_id: 3},
        {pet_id: 7, review: 'Wonderful performing artist. I was wowwed by his hoop routine and vertical jump', rating: 4, poster_id: 4},
        {pet_id: 7, review: 'What a huge dog. So much scooping', rating: 4, poster_id: 5}


      ]);
    });
};
