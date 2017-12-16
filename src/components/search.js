videoPlayer.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    newSearch: '<'
  },
  controller: function(youTube, $scope) {
    this.searchClickHandler = function(searchQuery) {
      youTube.search(searchQuery).then((data)=> this.newSearch(data));
    };
  },


});

// use ng-model here for the form
