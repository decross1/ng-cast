videoPlayer.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    currentVideo: '<',
    index: '<',
    onClick: '<', 
  },
});

//current-video="$videoEntry" index="$index" ng-repeat="videoEntry in $ctrl.videoList track by $index