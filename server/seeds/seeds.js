Meteor.startup(function () {

  if (Spots.find({}).count() === 0) {
    Spots.insert({name: "Puerto Escondido", mswId: 340});
    Spots.insert({name: "Dar Bouazza", mswId: 248});
    Spots.insert({name: "Santa Catalina - La Punta", mswId: 448});
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
  }

});
