angular.module('video-player')

.controller( 'videoPlayerCtrl', function($scope) {

	console.log("videoPlayerCtrl")

})

.directive('videoPlayer', function() {
  return {
  	controller: 'videoPlayerCtrl',
  	controllerAs: 'ctrl',
  	bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html',
    scope: { video: '<' }	
  };
});
