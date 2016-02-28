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

}).controller('liveCtrl', function($scope) {

})
   
.controller('catalogoCtrl', function($scope,$http,$state, $ionicSlideBoxDelegate) {

	$scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
	
	$scope.catalogo ={};
   $scope.catalogo.items=[];
   

   $http.get('http://safe-cove-98296.herokuapp.com/v1/beers').then(function (response) {

    //alert(JSON.stringify(response));

   $scope.catalogo.items= response.data.beers;
	   
	   setTimeout(function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });
   });
	   
	
})
.controller('VideoCtrl', function($scope, $cordovaCapture, VideoService) {
    // TBD

$scope.clip = '';
 
$scope.captureVideo = function() {
	$cordovaCapture.captureVideo().then(function(videoData) {
		VideoService.saveVideo(videoData).success(function(data) {
			$scope.clip = data;
			$scope.$apply();
		}).error(function(data) {
			console.log('ERROR: ' + data);
		});
	});
};
	
});
 