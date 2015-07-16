NewRatingController = SpotController.extend({
  yieldRegions: {
    'newRating': {to: 'rating'}
  },
  data: function () {
    var controller = this;
    return {
      spot: function () {
        return controller.spot();
      }
    }
  },
  onAfterAction: function () {
    Meta.setTitle('New Rating');
  }
});

NewRatingController.events({});