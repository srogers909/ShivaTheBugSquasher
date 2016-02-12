(function () {
	'use strict';

	function Game() {
		this.map = null;
		this.layer = null;
		this.player = null;
		this.enemy = null;
		this.cursors = null;
		this.jumpButton = null;
		this.hVelocity = 310;
		this.vVelocity = -360;
		this.facing = 'right';
		this.music = null;
	}

	Game.prototype = {
		create: function create() {
			this.game.stage.backgroundColor = '#5C94FC';
			this.game.physics.startSystem(Phaser.Physics.ARCADE);

			this.game.sound.play('music');

			this.map = this.game.add.tilemap('fullmap', 64, 64);
			this.map.addTilesetImage('scene', 'scene-img');
			this.map.setCollisionBetween(0, 35);

			this.layer = this.map.createLayer('Tile Layer 1');
			this.layer.resizeWorld();

			this.input.onDown.add(this.onInputDown, this);

			this.player = this.game.add.sprite(100, 0, 'princess');
			this.enemy = this.game.add.sprite(900, 500, 'goomba');
			this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
			this.game.physics.enable(this.enemy, Phaser.Physics.ARCADE);

			this.player.animations.add('walk', ['sprite14'], 1, true);
			this.player.anchor.setTo(0.5, 0.5);
			this.player.scale.x *= -1; // turn right
			this.player.body.bounce.y = 0.2;
			this.player.body.gravity.y = 370;
			this.player.body.collideWorldBounds = true;

			this.game.camera.follow(this.player);

			this.enemy.animations.add('walk', ['sprite0', 'sprite1', 'sprite2'], 5, true);
			this.enemy.animations.play('walk');
			this.enemy.body.velocity.x = -100;

			this.cursors = this.game.input.keyboard.createCursorKeys();
			this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		},

		update: function update() {
			this.game.physics.arcade.collide([this.player, this.enemy], this.layer);
			this.game.physics.arcade.collide(this.player, this.enemy, this.killHandler, null, this);
			this.player.body.velocity.x = 0;

			if (this.cursors.left.isDown) {
				this.player.body.velocity.x = -this.hVelocity;
				this.player.scale.x = 1;
				this.player.animations.play('walk');

			} else if (this.cursors.right.isDown) {
				this.player.body.velocity.x = this.hVelocity;
				this.player.scale.x = -1;
				this.player.animations.play('walk');
			}

			if (this.jumpButton.isDown && this.player.body.onFloor()) {
				this.player.body.velocity.y = this.vVelocity;
			}
		},

		killHandler: function killHandler(obj1, obj2) {
			var vm = this;

			vm.game.stage.backgroundColor = '#992d2d';
			obj1.kill();

			setTimeout(function() { vm.game.state.start('menu'); }, 2000);
		},

		onInputDown: function onInputDown() {
			this.game.state.start('menu');
		},

		render: function render() {
			this.game.debug.spriteInfo(this.player, 32, 32);
		}
	};

	window['shivathebugsquasher'] = window['shivathebugsquasher'] || {};
	window['shivathebugsquasher'].Game = Game;
}());
