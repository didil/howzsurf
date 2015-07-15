Template.rating.helpers( {
  userImageUrl: function() {
    return "http://graph.facebook.com/"+ this.userFacebookId +"/picture" ;
  },
  createdTimeAgo:function(){
    return moment(this.createdAt).fromNow();
  }
});
