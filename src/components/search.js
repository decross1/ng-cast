videoPlayer.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    newSearch: '<'
  },
  controller: function(youTube) {
    this.searchQuery;
    this.searchClickHandler = function(searchQuery) {
      youTube.search('the last jedi').then((data)=> this.newSearch(data));
    };
  },


});

// use ng-model here for the form
