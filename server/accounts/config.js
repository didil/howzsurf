Meteor.startup(function () {
  ServiceConfiguration.configurations.update(
      {"service": "facebook"},
      {
        $set: {
          "appId": Meteor.settings.facebook.app_id,
          "secret": Meteor.settings.facebook.app_secret
        }
      },
      {upsert: true}
  );
});