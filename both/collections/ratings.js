Ratings = new Mongo.Collection('ratings');

Ratings.helpers({

});

Ratings.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
