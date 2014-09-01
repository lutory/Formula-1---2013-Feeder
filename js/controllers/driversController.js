app.controller('DriversListCtrl',['$scope','$http', function($scope, $http){
  
  $scope.driversList = [];
  $scope.error = "";
  $http.jsonp("http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK").
  success(function(data) {
    $scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  }).
  error(function (data) {
    $scope.error = "Request failed";
  });
    

}]);

app.controller('DriverDetailsCtrl',['$scope', '$routeParams', '$http', function( $scope, $routeParams, $http ){
    $scope.currentDriver = $routeParams.drivertId;
  	$scope.error = "";
  	$scope.driverInfo = [];
  	$scope.driverRaces = [];

  	$http.jsonp("http://ergast.com/api/f1/2013/drivers/"+ $routeParams.drivertId +"/driverStandings.json?callback=JSON_CALLBACK").
  	success(function(data) {
    	$scope.driverInfo = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  	}).
  	error(function (data) {
    	$scope.error = "Request failed";
  	});


  	$http.jsonp("http://ergast.com/api/f1/2013/drivers/"+ $routeParams.drivertId +"/results.json?callback=JSON_CALLBACK").
  	success(function(data) {
    	$scope.driverRaces = data.MRData.RaceTable.Races
    	console.log($scope.driverRaces);
  	}).
  	error(function (data) {
    	$scope.error = "Request failed";
  	});

}]);
