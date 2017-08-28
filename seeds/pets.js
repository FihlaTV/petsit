

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {owner_id: 1, pet_name: 'haha dog', species: 'golden retriever', age: 9, bio: 'woof i am a dog haha', temperament: 'slobbery', notes: 'wanted in 3 countries for illegal bone trafficking', pic_url:'http://i.imgur.com/SKJpb0Z.jpg' },
        {owner_id: 2, pet_name: 'Pacheco', species: 'tabbie', age: 5, bio: 'A majestic beast', temperament: 'salty', notes: 'Needs to snack every 30 minutes.', pic_url:'http://i.imgur.com/eFmdKRv.png'  },
        {owner_id: 3, pet_name: 'Rufus', species: 'Husky', age: 101, bio: 'A rescue from Kolyma', temperament: 'heated', notes: 'Not for sled pulling!', pic_url:'http://i.imgur.com/DEVEokz.jpg'},
        {owner_id: 4, pet_name: 'DeeOogi', species: '1/2 good 1/2 evil', age: 9, bio: 'A blessed animal', temperament: 'bitter', notes: 'All of DeOogis outfits MUST be returned!!', pic_url: 'http://i.imgur.com/2366OtN.jpg'},
        {owner_id: 5, pet_name: 'Miyagi-san', species: 'Inu Shibu', age: 4, bio: 'Only understands japanese', temperament: 'umami', notes: 'No sushi! Only sashimi.', pic_url:'http://i.imgur.com/jJmxYb0.jpg'},
        {owner_id: 6, pet_name: 'Bear', species: 'Pomerainian', age: 9, bio: 'She is a professional ringbearer', temperament: 'sour', notes: 'Requires a thorough brushing every 6 hours.', pic_url:'https://pomeranian.expert/wp-content/uploads/2016/09/boo-pomeranian-wallpaper-1024x576.jpg'},
        {owner_id: 7, pet_name: 'Horse', species: 'Dane', age: 1, bio: 'woof i am a horse haha', temperament: 'horsy', notes: 'Riders not permitted!', pic_url:'http://i.imgur.com/HtVygY5.jpg'},
      ]);
    });
};
