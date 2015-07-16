SpotController = AppController.extend({
  template: 'spot',
  waitOn: function () {
    return [this.subscribe('spot', this.params.spotId), this.subscribe("userData")];
  },
  spot: function () {
    return Spots.findOne(this.params.spotId);
  },
  data:  {
    spot: this.spot
  }
});

SpotController.events({});
