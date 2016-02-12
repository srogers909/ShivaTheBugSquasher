(function () {
	'use strict';

	function Boot() {
	}

	Boot.prototype = {
		preload: function preload() {
			this.load.image('preloader', 'assets/preloader.gif');
		},

		create: function create() {
			// configure game
			this.game.input.maxPointers = 1;

			if (this.game.device.desktop) {
				this.game.scale.pageAlignHorizontally = true;
				//this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
			} else {
				this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
				this.game.scale.minWidth = 640;
				this.game.scale.minHeight = 480;
				this.game.scale.maxWidth = 640;
				this.game.scale.maxHeight = 480;
				this.game.scale.forceOrientation(true);
				this.game.scale.pageAlignHorizontally = true;
				this.game.scale.setScreenSize(true);
			}
			this.game.state.start('preloader');
		}
	};

	window['shivathebugsquasher'] = window['shivathebugsquasher'] || {};
	window['shivathebugsquasher'].Boot = Boot;
}());

