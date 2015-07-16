Ratings = new Mongo.Collection('ratings');

Ratings.attachSchema(new SimpleSchema({
  spotId: {
    type: String,
    label: "Spot Id",
    max: 50
  },
  userFacebookId:{
    type: String,
    label: "userFacebookId",
    max: 50
  },
  userName:{
    type: String,
    label: "User Name",
    max: 50
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  },
  score: {
    type: Number,
    label: "Score",
    min: 0,
    max: 10
  },
  text: {
    type: String,
    label: "Text",
    max: 1000
  }
}));

Ratings.allow({
  insert: function () {
    return Meteor.userId();
  }
});

Ratings.helpers({

});
