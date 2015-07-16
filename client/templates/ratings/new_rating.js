Template.newRating.helpers({
  userFacebookId: function () {
    return Meteor.user().services.facebook.id;
  },
  userName: function () {
    return Meteor.user().services.facebook.name;
  }
});

AutoForm.hooks({
  insertRatingForm: {
    after: {
      insert: function (error, result) {
        if (error) {
          return console.log('error: ' + error);
        }
        Router.go('ratings', {spotId: this.insertDoc.spotId});
      }
    }
  }
});
