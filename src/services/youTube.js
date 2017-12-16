angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query) {
    // let params = ;
    
    return ($http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search", 
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5, 
        q: query, 
        type: 'video', 
        videoEmbeddable: 'true'
      }
    }).then(function mySuccess(response) {
      console.log('you did it bruh', response);
      return response.data.items;
    }, function myError(response) {
      console.log('you messed up bruh', response);
    }));
  };
});
