class End extends Phaser.Scene {
	constructor() {
		super({ key: 'End' })
	}

  preload(){
		this.load.image('sky1', '../img/sky1.png');
  }

  
	create() {
    this.add.image(560, 560, 'sky1')
        this.add.text(620, 270, 'GAME OVER', { fontSize: '50px', fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial Black' });
        this.add.text(560, 350, 'Click to Restart', { fontSize: '50px', fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial Black' });
        
        
        this.input.on('pointerup', () => {
          gameState.score = 0;
          this.scene.restart();
          this.scene.stop('End')
		this.scene.start('GameScene')
        })

		}
}