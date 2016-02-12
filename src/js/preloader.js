(function () {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }


    Preloader.prototype = {
        preload: function preload() {
            this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
            this.load.setPreloadSprite(this.asset);
            this.loadResources();
            this.ready = true;
        },

        loadResources: function loadResources() {
            this.game.load.tilemap('fullmap', 'assets/sprites/level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('scene-img', 'assets/sprites/scene.png');
            this.game.load.audio('music', 'assets/audio/smb-3-level-theme-1.mp3');
            this.game.load.audio('game-over-music', 'assets/audio/game-over-alternate.mp3');

            // mario load
            //this.game.load.atlasJSONHash('mario', 'assets/sprites/spm-mario.png', 'assets/sprites/spm-mario.json');
            this.game.load.atlasJSONHash('princess', 'assets/sprites/princess.png', 'assets/sprites/princess.json');

            this.game.load.atlasJSONHash('goomba', 'assets/sprites/goomba.png', 'assets/sprites/goomba.json');

            // koopa load
            //this.game.load.atlasJSONHash('koopa', 'assets/sprites/koopa.png', 'assets/sprites/koopa.json');
        },

        create: function create() {
        },

        update: function update() {
            //if (!this.ready) {
            this.game.state.start('menu');
            //}
        },

        onLoadComplete: function onLoadComplete() {
            //this.ready = true;
        }
    };

    window['shivathebugsquasher'] = window['shivathebugsquasher'] || {};
    window['shivathebugsquasher'].Preloader = Preloader;
}());
