(function() {
  'use strict';

  angular
    .module('shivaTheBugSquasher')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('game', {
        url: '/game',
        templateUrl: 'app/components/game/game.html',
        controller: 'GameController',
        controllerAs: 'game'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
