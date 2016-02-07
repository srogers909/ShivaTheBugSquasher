(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function () {
      this.input.onDown.add(this.onInputDown, this);
      this.game.stage.backgroundColor = '#FFFFFF';
    },

    update: function () {

    },

    onInputDown: function () {
      this.game.state.start('menu');
    }
  };

  window['shivathebugsquasher'] = window['shivathebugsquasher'] || {};
  window['shivathebugsquasher'].Game = Game;
}());
