Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/spot/:spotId/ratings/new', {
  name: 'newRating',
  controller: 'NewRatingController'
});

Router.route('/spot/:spotId/ratings', {
  name: 'ratings',
  controller: 'RatingsController'
});

Router.plugin('ensureSignedIn', {
  except: ['home']
});

