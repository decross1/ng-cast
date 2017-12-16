videoPlayer.component('search', {
  templateUrl: 'src/templates/search.html',
  controller: function(youTube) {
    this.result = youTube.search('the last jedi');
    console.log(this.result);
  }
});

// use ng-model here for the form
