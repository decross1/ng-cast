videoPlayer.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    currentVideo: '<',
    videoList: '<',
    changeVideo: '<'
  },

  controller: function() {
    console.log('videoList', this);
  }
});
