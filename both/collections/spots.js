Spots = new Mongo.Collection('spots');

Spots.helpers({

});

Spots.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
