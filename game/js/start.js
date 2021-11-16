class Start extends Phaser.Scene {
	constructor() {
		super({ key: 'Start' })
	}

	preload(){
		this.load.image('sky1', '../img/sky1.png');
		this.load.image('logo', '../img/logo.png');
	}
    create() {

		this.add.image(560, 560, 'sky1')
		this.add.image(750, 320, 'logo')
		this.add.text(570, 400, 'Click to Start!', { fontSize: '50px', fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial Black'});
		this.input.on('pointerdown', () => {
			this.scene.stop('Start')
			this.scene.start('GameScene')
		})


	}

}