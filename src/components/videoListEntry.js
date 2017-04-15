angular.module('video-player')

.controller('videoListEntryController', function($scope){

  // this.onClick = (video) => {
  //   console.log("CLICK!",video);
  //   $scope.$parent.currentVideo = video;
  //   console.log($scope)
  // }
  // $scope.$parent.ctrl.onClick();
  // this.onClick = function(video) { 
  	
  // 	$scope.$parent.ctrl.onClick(video);
  // }

})

.directive('videoListEntry', function() {

  return {

  	restrict: 'E',
  	controller: 'videoListEntryController',
  	controllerAs: 'ctrl',
  	bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html',
  	scope: { video: '<' }

  };
});
