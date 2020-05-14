import MainScene from './MainScene.js' 

const config = {
    width: 480,
    height: 480,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
};

new Phaser.Game(config);