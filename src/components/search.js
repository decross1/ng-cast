videoPlayer.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    newSearch: '<'
  },
  controller: function(youTube, $scope) {
    this.searchQuery;
    this.searchClickHandler = function(e) {
      youTube.search(this.searchQuery).then((data)=> this.newSearch(data));
      if (e.key === 'Enter' || e.type === 'click') {
        this.searchQuery = '';
      }
    };
  },


});

// use ng-model here for the form
