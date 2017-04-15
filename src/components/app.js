angular.module('video-player')

.controller('appCtrl', function($scope) {
	
	this.selectVideo = function(){

	};

	this.searchResults= function(){

	};

	this.currentVideo = window.exampleVideoData[0];

	this.videos = window.exampleVideoData;

})

.directive('app', function() {

  return {

  	restrict: 'E',
  	controller: 'appCtrl',
	controllerAs: 'ctrl',
	bindToController: true,
	templateUrl: 'src/templates/app.html',
	scope: { 
	}

  };

});
