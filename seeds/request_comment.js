
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('request_comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('request_comment').insert([
        {user_id: 1, request_id: 2, comment_body: "I can take care of your pet"},
        {user_id: 2, request_id: 2, comment_body: "sounds like fun. count me in!!! <3"},
        {user_id: 3, request_id: 2, comment_body: "lemme know if you want my help"},
        {user_id: 3, request_id: 1, comment_body: "I'd love help"},
        {user_id: 4, request_id: 1, comment_body: "call me if you still need help"},
        {user_id: 5, request_id: 1, comment_body: "Ill help you out..."},
        {user_id: 6, request_id: 1, comment_body: "I got you. Email me"},
        {user_id: 3, request_id: 1, comment_body: "yer dog is cute"},
      ]);
    });
};
