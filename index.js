import Phaser from "phaser";
import Game from "./scenes/Game";
import GameOver from "./scenes/GameOver";
import Winner from "./scenes/Winner";

const config = {
  type: Phaser.AUTO,
  width: 1400,
  height: 700,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true
    }
  },
  scene: [Game, GameOver, Winner]
};

const game = new Phaser.Game(config);
