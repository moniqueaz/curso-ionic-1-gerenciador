angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.agendamento', {
    url: '/agendamento',
    views: {
      'tab1': {
        templateUrl: 'templates/agendamento.html',
        controller: 'AgendamentoController'
      }
    }
  })

  .state('tabsController.fornecedores', {
    url: '/fornecedor',
    views: {
      'tab2': {
        templateUrl: 'templates/fornecedores.html',
        controller: 'FornecedoresController'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/agendamento')


});