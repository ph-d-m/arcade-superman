const gameState = {
score: 0
};

  const config = {
	type: Phaser.AUTO,
	width: '100%',
	height: 700,
	backgroundColor: "#5f2a55",
    physics: {
    default: 'arcade',
    arcade: {
    gravity: { x: "-100"},
     enableBody: true,
    }
},
  // scene: {
  //     preload,
  //     create,
  //     update
  // }

  scene: [Start, GameScene, End]

}

const game = new Phaser.Game(config);