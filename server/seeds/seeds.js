Meteor.startup(function () {

  if (Spots.find({}).count() === 0) {
    Spots.insert({name: "Puerto Escondido", mswId: 340, ratingsCount: 0});
    Spots.insert({name: "Dar Bouazza", mswId: 248, ratingsCount: 0});
    Spots.insert({name: "Santa Catalina - La Punta", mswId: 448, ratingsCount: 0});
  }

  if (Ratings.find({}).count() === 0) {
    var spot1 = Spots.findOne({name: "Puerto Escondido"});

    Ratings.insert({
      spotId: spot1._id,
      userFacebookId: 1498509016,
      userName: "Super Surfer",
      text: "Great swell and offshore wind all morning !",
      score: 8
    });

    Ratings.insert({
      spotId: spot1._id,
      userFacebookId: 100000743732173,
      userName: "Rider 45",
      text: "Pretty bad. There were no waves at all",
      score: 3
    });
  }

});
