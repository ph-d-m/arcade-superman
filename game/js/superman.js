class GameScene extends Phaser.Scene {
	constructor(){
		super({ key: 'GameScene' })
	}

    preload() {
        this.load.image('superman', '../img/superman.png')
        this.load.image('portail', '../img/portail.png')
        this.load.image('sky1', '../img/sky1.png');
        this.load.image('enemy1', '../img/fluo.png')
        this.load.spritesheet('enemy2', '../img/greensprite.png', {frameWidth: 215, frameHeight: 53} )    
    }
    
    create() {
    
      this.add.image(560, 560, 'sky1')
    
      const space = this.physics.add.staticGroup();
    
        space.create(30, 350, 'portail').setScale(.600)
        gameState.scoreText = this.add.text(700, 20, 'Score: 0', { fontSize: '25px', fill: '#ffffff', fontWeight: 'bold', fontFamily: 'Arial', backgroundColor: 'black', padding: (10, 15)})
    
        gameState.superman = this.physics.add.sprite(100, 300, 'superman').setScale(.500)
        gameState.cursors = this.input.keyboard.createCursorKeys();
    
        // gameState.enemy1 = this.physics.add.sprite(2000, 300, 'enemy1')

        
        this.anims.create({
          key: 'idle',
          frames: this.anims.generateFrameNumbers('enemy2', { start: 0, end: 2 }),
          frameRate: 5,
          repeat: -1
        });
      
        gameState.superman.setCollideWorldBounds(true);
    
        const enemies = this.physics.add.group()
    
    
      function enemyGen () {
        const xCoord = Math.random() * 600;
        enemies.create(2000, xCoord, 'enemy2').setScale(.600);
    
      }
      
    
      const enemyGenLoop = this.time.addEvent({
        delay: 250,
        callback: enemyGen,
        callbackScope: this,
        loop: true,
      });
    
      this.physics.add.collider(enemies, space, function (enemy) {
        enemy.destroy();
        gameState.score += 10;
        gameState.scoreText.setText(`Score: ${gameState.score}`)
      });
      
    
      this.physics.add.collider(gameState.superman, enemies, () => {
        enemyGenLoop.destroy();
        gameState.superman.destroy();
        this.physics.pause();
        this.scene.stop('GameScene');
        this.scene.start('End')
      })



    }

    update() {
        if (gameState.cursors.right.isDown) {
            gameState.superman.x += 4
          } else if (gameState.cursors.left.isDown){
            gameState.superman.x -= 4
            
          } else if (gameState.cursors.up.isDown){
            gameState.superman.y -= 4
          } else if (gameState.cursors.down.isDown){
            gameState.superman.y += 4
          }
    }
    
}