angular.module('video-player')

.service('youTube', ['$http',function($http){
  

  this.search = (query,callback) => {
    console.log("Searching from youtube",query);
    // console.log("scope", $scope)
    
    $http.get( 

      // url
      'https://www.googleapis.com/youtube/v3/search', 

      // options
      { params:{ 
              part: 'snippet',
              type: 'video',
              videoEmbeddable: true,
      
              key: YOUTUBE_API_KEY,
              q: query,
              maxAmount: 5
          }
        })

    .then(function(result){
      // success callback

      callback(result.data.items);

    }, 

    function(error){
      // error callback
      console.log("GET ERROR",error);
    });
  }





}]);
