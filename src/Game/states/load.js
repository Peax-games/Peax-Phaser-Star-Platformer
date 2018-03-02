export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.tilemap('level1', 'img/level1.json', null, window.Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles-1', 'img/tiles-1.png');
            this.game.load.spritesheet('dude', 'img/dude.png', 32, 48);
            this.game.load.spritesheet('droid', 'img/droid.png', 32, 32);
            this.game.load.image('starSmall', 'img/star.png');
            this.game.load.image('starBig', 'img/star2.png');
            this.game.load.image('background', 'img/background2.png');

        },
        create: function () {
            this.game.state.start('play')
        }
    }
}