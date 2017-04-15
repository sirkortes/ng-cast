angular.module('video-player')

.controller('videoListController', function($scope){


  this.onClick = (video) => {
    console.log("CLICK!",video);
  }

})

.directive('videoList', function() {

  return {

    restrict: 'E',
    controller: 'videoListController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html',
    scope: { 
      // callbackFn: '&',
      videos: '='
    }
  };

});
