app.controller('TeamsListCtrl',['$scope','$http', function($scope, $http){
  
  $scope.teamsList = [];
  $scope.error = "";
  $http.jsonp("http://ergast.com/api/f1/2013/constructorStandings.json?callback=JSON_CALLBACK").
  success(function(data) {
    $scope.teamsList = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
  }).
  error(function (data) {
    $scope.error = "Request failed";
  });
    

}]);

app.controller('TeamDetailsCtrl',['$scope', '$routeParams', '$http', function( $scope, $routeParams, $http ){
    $scope.currentTeam = $routeParams.teamId;
    $scope.error = "";
    $scope.teamInfo = [];
    $scope.teamRaces = [];
    $scope.driver1= [];
    $scope.driver2 = [];

    $http.jsonp("http://ergast.com/api/f1/2013/constructors/"+ $routeParams.teamId +".json?callback=JSON_CALLBACK").
    success(function(data) {
      $scope.teamInfo = data.MRData.ConstructorTable.Constructors[0];
    }).
    error(function (data) {
      $scope.error = "Request failed";
    });

    $http.jsonp("http://ergast.com/api/f1/2013/constructors/"+ $routeParams.teamId +"/results.json?callback=JSON_CALLBACK").
    success(function(data) {
      $scope.teamRaces = data.MRData.RaceTable.Races;
      $scope.driver1 = data.MRData.RaceTable.Races[0].Results[0].Driver;
      $scope.driver2 = data.MRData.RaceTable.Races[0].Results[1].Driver;
      //$scope.driver2 = data.MRData.RaceTable.Races.Results[1].Driver;
      console.log($scope.teamRaces[0].Results);
    }).
    error(function (data) {
      $scope.error = "Request failed";
    });

    $scope.totalScore = function(teamRace){
      var total=0;
      var driver1Scores = Number( teamRace.Results[0].points );
      var driver2Scores = Number( teamRace.Results[1].points );
      var total = driver1Scores + driver2Scores;

      return total;
    }; 

}]);