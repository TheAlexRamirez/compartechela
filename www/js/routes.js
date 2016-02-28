angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.historias', {
    url: '/history',
    views: {
      'tab4': {
        templateUrl: 'templates/historias.html',
        controller: 'historiasCtrl'
      }
    }
  })

  .state('tabsController.envia', {
    url: '/page3',
    views: {
      'tab5': {
        templateUrl: 'templates/envia.html',
        controller: 'enviaCtrl'
      }
    }
  })

  .state('tabsController.ajustes', {
    url: '/page4',
    views: {
      'tab6': {
        templateUrl: 'templates/ajustes.html',
        controller: 'ajustesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('start', {
    url: '/page5',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('pagos', {
    url: '/pagos',
    templateUrl: 'templates/pagos.html',
    controller: 'pagosCtrl'
  })

  .state('perfil', {
    url: '/page10',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});