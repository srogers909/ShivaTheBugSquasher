(function() {
  'use strict';

  angular
    .module('shivaTheBugSquasher')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
