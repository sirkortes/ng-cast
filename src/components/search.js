angular.module('video-player')

.controller('searchController', function($scope){



})

.directive('search', function() {
  return {

  	restrict: 'E',
  	controller: 'searchController',
  	controllerAs: 'ctrl',
  	bindToController: true,
    templateUrl: 'src/templates/search.html',
    scope: {
      result: '<',
      searchClick: '<'
    }

  };
});
