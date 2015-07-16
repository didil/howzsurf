RatingsController = SpotController.extend({
  yieldRegions: {
    'ratingsList': {to: 'rating'}
  },
  data: function () {
    var controller = this;
    return {
      spot: function () {
        return controller.spot();
      },
      ratings: function () {
        return Ratings.find({spotId: controller.params.spotId}, {sort: {createdAt: -1},limit: 20});
      }
    }
  },
  onAfterAction: function () {
    if(this.spot()){
      Meta.setTitle(this.spot().name + "'s Ratings");
    }
  }
});

RatingsController.events({});
