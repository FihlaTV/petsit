

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {owner_id: 1, pet_name: 'Rudolfo', species: 'Golden Retriever', age: 9, bio: 'Rudy is a rescue who has finally found his forever home with us. All of the other dogs used to call him names. And they never let him play with them. Poor Rudolfo!', temperament: 'Slobbery', notes: 'He gets brushed twice a day (always WITH the grain, NEVER AGAINST!).', pic_url:'http://i.imgur.com/SKJpb0Z.jpg' },
        {owner_id: 2, pet_name: 'Pacheco', species: 'Shibu Inu', age: 5, bio: 'Pacheco was born and in west Philadelphia. The playground was where he spent most of his days. Then he got in one little fight and his mom got scared', temperament: 'Sleepy', notes: 'Needs to snack every 30 minutes.', pic_url:'http://i.imgur.com/eFmdKRv.png'  },
        {owner_id: 3, pet_name: 'Rufus', species: 'Shibu Inu', age: 6, bio: 'A rescue from Kolyma. He was saved from a life of cold and shivering to a much more gentle climate of panting in AZ', temperament: 'Heated', notes: 'Not for sled pulling!', pic_url:'http://i.imgur.com/DEVEokz.jpg'},
        {owner_id: 4, pet_name: 'Bogey', species: '1/2 good 1/2 evil', age: 9, bio: 'Once living a life of crime, Bogey found a second chance from a wise old basketball coach who saw his true potential', temperament: 'Fiery', notes: 'All of Bogeys outfits MUST be returned!!', pic_url: 'http://i.imgur.com/2366OtN.jpg'},
        {owner_id: 5, pet_name: 'Miyagi-san', species: 'Shibu Inu', age: 4, bio: 'Only understands Japanese because he was rescued from the shores of Iwo Jima by a blind fisherman.', temperament: 'Umami', notes: 'No sushi! Only sashimi. Plus he is gluten and lactose intolerant', pic_url:'http://i.imgur.com/jJmxYb0.jpg'},
        {owner_id: 6, pet_name: 'Bear', species: 'Pomeranian', age: 9, bio: 'She is a professional ringbearer and available for hire for weddings and other ceremonial occassions that require a Pomeranian', temperament: 'Sour', notes: 'Requires a thorough brushing every 6 hours.', pic_url:'https://pomeranian.expert/wp-content/uploads/2016/09/boo-pomeranian-wallpaper-1024x576.jpg'},
        {owner_id: 7, pet_name: 'Horse', species: 'Dane', age: 1, bio: 'Horse fell into a deep depression after the war but found new life as a performing jump rope artist and hula hooper', temperament: 'Wiggly', notes: 'Riders not permitted but fellow hoopers are welcome', pic_url:'http://i.imgur.com/HtVygY5.jpg'},
      ]);
    });
};
