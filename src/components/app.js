angular.module('video-player')

.controller('appCtrl', ['youTube', function(youTube) {
	


  this.videos = window.exampleVideoData;
	this.currentVideo = window.exampleVideoData[0];

  
  this.selectVideo = function(video){
    this.currentVideo = video;
  };


  this.searchResults= (data) => {
    console.log("resulting",data);
    this.videos = data;
    this.currentVideo = this.videos[0];
    console.log("new videos:",this.videos)
  };


  this.searchClick = (query) => {
    console.log("youTube query",query)
    youTube.search(query, this.searchResults);
  }


	this.onClick = (video) => {
    this.selectVideo(video);
  }


}])

.directive('app', function() {

  return {

  restrict: 'E',
  controller: 'appCtrl',
	controllerAs: 'ctrl',
	bindToController: true,
	templateUrl: 'src/templates/app.html',
	scope: { 
		// onClick: '<'
	}

  };

});
