angular.module('video-player')

.controller('videoListEntryController', function($scope){


})

.directive('videoListEntry', function() {

  return {

  	restrict: 'E',
  	controller: 'videoListEntryController',
  	controllerAs: 'ctrl',
  	bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html',
  	scope: { video: '=' }

  };
});
