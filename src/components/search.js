angular.module('video-player')

.controller('searchController', function($scope){

  
	
  this.onClick = () => {
    
    var query = $scope.searchInput;
    console.log("serching for",query);
    $scope.searchInput = '';
	}

  this.result = function(){

  }

})

.directive('search', function() {
  return {

  	restrict: 'E',
  	controller: 'searchController',
  	controllerAs: 'ctrl',
  	bindToController: true,
    templateUrl: 'src/templates/search.html',
    scope: {}

  };
});
