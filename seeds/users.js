

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'username1', password: "test", location: 'phoenix', bio: "heres my dog", email: 'test@test.com', phone: 2342342342, house_info: "my house is perfect" },
        {username: 'username2', password: "test", location: 'phoenix', bio: "heres my cat", email: 'test@test.com', phone: 2342342342, house_info: "my house is garbage" },
        {username: 'username3', password: "test", location: 'phoenix', bio: "heres my iguana", email: 'test@test.com', phone: 2342342342, house_info: "my house is the white house" },
        {username: 'username4', password: "test", location: 'phoenix', bio: "heres my parrot", email: 'test@test.com', phone: 2342342342, house_info: "my house is casablanca" },
        {username: 'username5', password: "test", location: 'phoenix', bio: "heres my guinea pig", email: 'test@test.com', phone: 2342342342, house_info: "my house is make of straw" },
        {username: 'username6', password: "test", location: 'phoenix', bio: "heres my pot bellied pig", email: 'test@test.com', phone: 2342342342, house_info: "my house is made of sticks" },
        {username: 'username7', password: "test", location: 'phoenix', bio: "heres my big bad wolf", email: 'test@test.com', phone: 2342342342, house_info: "my house is made of bricks" },
      ]);
    });
};
