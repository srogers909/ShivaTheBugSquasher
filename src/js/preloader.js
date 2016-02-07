(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function () {
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

      // this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();
      this.ready = true;
    },

    loadResources: function () {
      // load your assets here
      this.load.tilemap('fullmap', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    },

    create: function () {

    },

    update: function () {
      // if (!!this.ready) {
        this.game.state.start('menu');
      // }
    },

    onLoadComplete: function () {
      // this.ready = true;
    }
  };

  window['shivathebugsquasher'] = window['shivathebugsquasher'] || {};
  window['shivathebugsquasher'].Preloader = Preloader;
}());
