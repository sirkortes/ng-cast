angular.module('video-player')

.controller('videoListController', function($scope){


})

.directive('videoList', function() {

  return {

    restrict: 'E',
    controller: 'videoListController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html',
    scope: { 
      onClick: '<',
      videos: '<'
    }
  };

});
