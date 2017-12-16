videoPlayer.component('app', {
  templateUrl: 'src/templates/app.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    this.currentVideo = window.exampleVideoData[0];
    this.videoList = window.exampleVideoData;
    this.changeVideo = function(index) {
      this.currentVideo = videoList[index];
      console.log('changeVideo invoked');
    };
    console.log('app', this);
  }
});
