

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {owner_id: 1, pet_name: 'haha dog', species: 'golden retriever', age: 1, bio: 'woof i am a dog haha', temperament: 'spicy', notes: 'wanted in 3 countries for illegal bone trafficking' },
        {owner_id: 2, pet_name: 'haha cat', species: 'tabbie', age: 2, bio: 'woof i am a cat haha', temperament: 'salty', notes: 'wanted in 3 countries for illegal fish trafficking' },
        {owner_id: 3, pet_name: 'haha bird', species: 'parrot', age: 3, bio: 'woof i am a bird haha', temperament: 'savory', notes: 'wanted in 3 countries for illegal seed trafficking' },
        {owner_id: 4, pet_name: 'haha cow', species: 'fresian', age: 4, bio: 'woof i am a cow haha', temperament: 'bitter', notes: 'wanted in 3 countries for illegal grass trafficking' },
        {owner_id: 5, pet_name: 'haha whale', species: 'blue whale', age: 5, bio: 'woof i am a whale haha', temperament: 'sweet', notes: 'wanted in 3 countries for illegal krill trafficking' },
        {owner_id: 6, pet_name: 'haha goat', species: 'idek tbh', age: 6, bio: 'woof i am a goat haha', temperament: 'sour', notes: 'wanted in 3 countries for illegal whatever goats eat trafficking' },
        {owner_id: 7, pet_name: 'haha horse', species: 'big horse', age: 7, bio: 'woof i am a horse haha', temperament: 'horsy', notes: 'wanted in 3 countries for illegal carrot trafficking' }
      ]);
    });
};
