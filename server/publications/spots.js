Meteor.publishComposite("spots", function () {
  return {
    find: function () {
      return Spots.find({} , {sort: {ratingsCount: -1}});
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
          return Ratings.find({spotId: spot._id}, {sort: {createdAt: -1}, limit: 20});
        }
      }
    ]
  }
});
