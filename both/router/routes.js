Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/spot/:_id', {
  name: 'spot',
  controller: 'SpotController'
});


Router.plugin('ensureSignedIn', {
  except: ['home']
});
