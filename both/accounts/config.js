AccountsTemplates.configureRoute('signIn', {
  layoutTemplate: 'appLayout',
  redirect: '/'
});
AccountsTemplates.configureRoute('signUp', {
  layoutTemplate: 'appLayout',
  redirect: '/'
});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});