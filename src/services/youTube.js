angular.module('video-player')
.service('youTube', function(){
  

  this.search = (query) => {
  	console.log("Searching from youtube",query);
    console.log("scope", $scope)
  }



});
