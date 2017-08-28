
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {poster_id: '1', pet_id: '1', start_date:"2017-10-01", end_date:"2017-10-03", notes: "please help!", accepted_user_id:null},
        {poster_id: '2', pet_id: '2', start_date:"2017-10-12", end_date:"2017-10-13", notes: "Rufus is a sweetie", accepted_user_id:null},
        {poster_id: '3', pet_id: '6', start_date:"2017-11-01", end_date:"2017-11-03", notes: "Must be vegan sitter", accepted_user_id:null},
        {poster_id: '4', pet_id: '3', start_date:"2022-10-01", end_date:"2023-10-03", notes: "Keep my pet for a year please", accepted_user_id:null},
        {poster_id: '5', pet_id: '3', start_date:"2017-12-01", end_date:"2018-01-01", notes: "Fido is looking for xmas & new years hosts", accepted_user_id:null},

      ]);
    });
};
