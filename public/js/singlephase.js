import MainScene from './MainScene.js' 
import Snake from './Snake.js';

const config = {
    width: 480,
    height: 480,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
};

new Phaser.Game(config);

var score = document.getElementById("score");
score.textContent = Snake.scoreString;
