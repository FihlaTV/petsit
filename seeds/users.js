

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Harry', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Phoenix', bio: "I travel a lot. Please help me out and Ill help you out with your dog boarding too", email: 'test@test.com', phone_number:'1234567890', house_info: "Ive got a doggy door, backyard, pool. It's an animal paradise." },
        {username: 'Sally', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Ahwatukee', bio: "I am a lonely old woman and I need animal friends to brighten my days", email: 'test@test.com', phone_number:'9876543210', house_info: "I live in a shoe but it's roomy enough for small breeds" },
        {username: 'Thelma', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Scottsdale', bio: "If you call me Velma, I'll block you and your dog will have to stay at PetSmart", email: 'test@test.com', phone_number:'2222222222', house_info: "Right now I'm living out of my convertible, but I can take your dog on roadtrips" },
        {username: 'Louise', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Mesa', bio: "I'm the consumate dog lover and animal nut. Your dog will be on vacation if I get my hands on them", email: 'test@test.com', phone_number: '1911919191', house_info: "I've converted my humble abode into what's basically a dog spa replete with kiddy pool, hamster treadmill, and doggy bones fully saturating the floor" },
        {username: 'Bonnie', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Paradise Valley', bio: "As long as your dog stays out of the basement, we'll be ok. Don't ask what's in the basement!", email: 'test@test.com', phone_number: '1111111111', house_info: "Its a palace. Send Fido over for playtime" },
        {username: 'Clyde', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Cave Creek', bio: "I live on a humble farm but there are plenty of animal friends for your dog to play with. No wolves pls", email: 'test@test.com', phone_number: '7777777777', house_info: "Its a farmhouse but its home." },
        {username: 'Homer', password: "$2a$08$5yGyuajyKCJBOlQGbScD7.stTmIm0yM6C60KSOJ4CERlVuJHxcgDu", location: 'Carefree', bio: "Im an animal nut - what can i say?!!! Lets have an animal playdate", email: 'test@test.com', phone_number: '5656565656', house_info: "My house isn't fancy but there's a big backyard and lots of shade" },
      ]);
    });
};
