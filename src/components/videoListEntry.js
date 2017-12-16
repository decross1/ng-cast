videoPlayer.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    currentVideo: '<',
    index: '<',
    changeVideo: '&'
  },
  controller: function() {
    this.consoleLogStuff = () => {
      console.log(this.index);
      // this.currentVideo;
    };
  }, 
});

//current-video="$videoEntry" index="$index" ng-repeat="videoEntry in $ctrl.videoList track by $index