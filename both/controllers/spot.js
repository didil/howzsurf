SpotController = AppController.extend({
  waitOn: function () {
    return this.subscribe('spot', this.params._id);
  },
  data: function () {
    var controller = this;
    return {
      spot: function () {
        return Spots.findOne(controller.params._id);
      },
      ratings: function () {
        return Ratings.find({spotId: controller.params._id}, {sort: {createdAt: -1}});
      }
    }
  },
  onAfterAction: function () {
    Meta.setTitle('Spot');
  }
});

SpotController.events({});
