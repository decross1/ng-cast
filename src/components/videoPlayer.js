videoPlayer.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    currentVideo: '<'
  },

  controller: function() {
    let youtube = 'https://www.youtube.com/embed/';
  }
});
