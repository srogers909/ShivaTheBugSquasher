/**
 * Created by Steven Rogers on 1/28/2016.
 */

(function() {
  'use strict';

  angular
    .module('shivaTheBugSquasher')
    .controller('GameController', GameController);

  function GameController() {
    var vm = this;

    vm.game = new Phaser.Game(
      1024, 768, Phaser.AUTO, '', {
        preload: preload,
        create: create,
        update: update
      });

    vm.preload = function preload() {
    };

    vm.create = function create() {
    };

    vm.update = function update() {
    };
  }
}());
