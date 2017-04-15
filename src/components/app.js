angular.module('video-player')

.controller('appCtrl', ['youTube', function(youTube) {
	
	this.selectVideo = function(video){
		this.currentVideo = video;
	};

	this.searchResults= function(){

	};

	this.searchClick = (query) => {
    
    console.log("youTube",youTube)
    youTube.search(query);
	}

	this.currentVideo = window.exampleVideoData[0];

	this.videos = window.exampleVideoData;

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
