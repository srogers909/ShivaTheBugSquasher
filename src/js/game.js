(function() {
  'use strict';

  function Game() {
    this.map = null;
    this.layer = null;
    this.player = null;
    this.cursors = null;
    this.jumpButton = null;
    this.hVelocity = 310;
    this.vVelocity = -350;
    this.facing = 'right';
    this.jumpTimer = 0;
    //this.enemy = null;
  }

  Game.prototype = {
    create: function () {
      this.input.onDown.add(this.onInputDown, this);
      this.game.stage.backgroundColor = '#5C94FC';
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.map = this.game.add.tilemap('fullmap');
      this.map.addTilesetImage('platformer');

      this.layer = this.map.createLayer('Tile Objects');
      this.map.setCollisionBetween(0, 20);
      this.layer.resizeWorld();

      this.player = this.game.add.sprite(100, 511, 'character');
      this.game.physics.enable(this.player);

      this.player.

      this.player.body.bounce.y = 0.1;
      this.player.body.gravity.y = 380;

      this.game.camera.follow(this.player);

      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    },

    update: function () {
      this.game.physics.arcade.collide(this.player, this.layer);
      this.player.body.velocity.x = 0;

      if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -this.hVelocity;

        if (this.facing !== 'left')
        {
          this.facing = 'left';
        }
      } else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = this.hVelocity;

        if (this.facing !== 'right') {
          this.facing = 'right';
        }
      }

      if (this.jumpButton.isDown && this.player.body.onFloor() && this.game.time.now > this.jumpTimer)
      {
        // Set the 'player' sprite's y velocity to a negative number
        //  (vVelocity is -90) and thus have it move up on the screen.
        this.player.body.velocity.y = this.vVelocity;
        // Add 650 and the current time together and set that value to 'jumpTimer'
        // (The 'jumpTimer' is how long in milliseconds between jumps.
        //   Here, that is 650 ms.)
        this.jumpTimer = this.game.time.now + 5;
      }

      // Check if 'facing' is "left"
      if (this.facing === 'left') {
        // Set the 'player' to the second (1) frame
        //  ('facing' is "left")
        this.player.frame = 0;
      } else {
        // Set the 'player' to the first (0) frame
        //  ('facing' is "right").
        this.player.frame = 4;
      }

    },


    onInputDown: function () {
      this.game.state.start('menu');
    }


  };

  window['shivathebugsquasher'] = window['shivathebugsquasher'] || {};
  window['shivathebugsquasher'].Game = Game;
}());
