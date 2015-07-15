DashboardController = AppController.extend({
  waitOn: function () {
    return this.subscribe('spots');
  },
  data: {
    spots: Spots.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  },
  'change #spots-select': function (event, template) {
    Router.go('spot', {_id: event.target.value});
  }
});
