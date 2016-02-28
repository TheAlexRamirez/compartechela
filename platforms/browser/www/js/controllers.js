angular.module('app.controllers', ['ionic','ngCordova'])
  
.controller('historiasCtrl', function($scope) {

})
   
.controller('enviaCtrl', function($scope) {

})
   
.controller('ajustesCtrl', function($scope) {

})
      
.controller('page5Ctrl', function($scope) {

})
   
.controller('formaDePagoCtrl', function($scope) {

})
   
.controller('perfilCtrl', function($scope) {

}).controller('friendCtrl', function($scope) {

})
   
.controller('catalogoCtrl', function($scope,$http) {

	$scope.catalogo ={};
   $scope.catalogo.items=[];
   

   $http.get('http://safe-cove-98296.herokuapp.com/v1/beers').then(function (response) {

    //alert(JSON.stringify(response));

   $scope.catalogo.items= response.data.beers;
   });
	   
	
}).controller('VideoCtrl', function($scope, $cordovaCapture, VideoService) {
    // TBD

	
});
 