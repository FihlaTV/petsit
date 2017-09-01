
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {poster_id: '1', pet_id: '1', start_date:"2017-10-01", end_date:"2017-10-03", notes: "please help! Im desperate for a vacay", accepted_user_id:null},
        {poster_id: '2', pet_id: '2', start_date:"2017-10-12", end_date:"2017-10-13", notes: "Pacheco is a sweetie and really easy to care for", accepted_user_id:null},
        {poster_id: '3', pet_id: '3', start_date:"2017-11-01", end_date:"2017-11-03", notes: "Must be vegan sitter. Rufus does not like the smell of meat", accepted_user_id:null},
        {poster_id: '4', pet_id: '4', start_date:"2022-10-01", end_date:"2023-10-03", notes: "Keep my pet for a year please. I'm very tired and need extended holiday", accepted_user_id:null},
        {poster_id: '5', pet_id: '5', start_date:"2017-12-01", end_date:"2018-01-01", notes: "Miyagi-san is looking for xmas & new years hosts. You will fall in love with our little jewel", accepted_user_id:null},
        {poster_id: '6', pet_id: '6', start_date:"2017-02-21", end_date:"2018-03-03", notes: "Bear is needy but he is a sweetie. Really easy to care for as well as long as you don't mind brushing out tangles. Thx in advance!!", accepted_user_id:null},
        {poster_id: '7', pet_id: '7', start_date:"2017-12-21", end_date:"2018-01-03", notes: "Horse is an amazing dog who will brighten your holidays. I can drop of her bed, food bowl, holiday meal and medications anytime.", accepted_user_id:null}
      ]);
    });
};
