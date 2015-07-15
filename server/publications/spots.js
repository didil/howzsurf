Meteor.publishComposite("spots", function () {
  return {
    find: function () {
      return Spots.find({});
    }
  }
});

Meteor.publishComposite("spot", function (_id) {
  return {
    find: function () {
      return Spots.find(_id);
    }
    ,
    children: [
      {
        find: function (spot) {
          return Ratings.find({spotId: spot._id});
        }
      }
    ]
  }
});
