

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Harry', password: "test", location: 'phoenix', bio: "heres my dog", email: 'test@test.com', phone_number:'1234567890', house_info: "my house is purrfect" },
        {username: 'Sally', password: "test", location: 'phoenix', bio: "heres my cat", email: 'test@test.com', phone_number:'9876543210', house_info: "my house is garbage" },
        {username: 'Thelma', password: "test", location: 'phoenix', bio: "heres my iguana", email: 'test@test.com', phone_number:'2222222222', house_info: "my house is the white house" },
        {username: 'Louise', password: "test", location: 'phoenix', bio: "heres my parrot", email: 'test@test.com', phone_number: '1911919191', house_info: "my house is casablanca" },
        {username: 'Bonnie', password: "test", location: 'phoenix', bio: "heres my guinea pig", email: 'test@test.com', phone_number: '1111111111', house_info: "my house is make of straw" },
        {username: 'Clyde', password: "test", location: 'phoenix', bio: "heres my pot bellied pig", email: 'test@test.com', phone_number: '7777777777', house_info: "my house is made of sticks" },
        {username: 'Homer', password: "test", location: 'phoenix', bio: "heres my big bad wolf", email: 'test@test.com', phone_number: '5656565656', house_info: "my house is made of bricks" },
      ]);
    });
};
