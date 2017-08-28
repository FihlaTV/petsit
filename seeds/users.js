

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'username', password: "test", location: 'phoenix', bio: "heres my dog", email: 'test@test.com', phone: 2342342342, house_info: "my house is perfect" },
        {username: 'username', password: "test", location: 'phoenix', bio: "heres my dog", email: 'test@test.com', phone: 2342342342, house_info: "my house is perfect" },
      ]);
    });
};
