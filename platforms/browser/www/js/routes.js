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
      'tab8': {
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

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('tabsController.formaDePago', {
    url: '/pagos',
    views: {
      'tab8': {
        templateUrl: 'templates/formaDePago.html',
        controller: 'formaDePagoCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/page10',
    views: {
      'tab8': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController.catalogo', {
    url: '/page11',
    views: {
      'tab6': {
        templateUrl: 'templates/catalogo.html',
        controller: 'catalogoCtrl'
      }
    }
  })

  .state('tabsController.live', {
    url: '/page8',
    views: {
      'tab9': {
        templateUrl: 'templates/live.html',
        controller: 'liveCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});