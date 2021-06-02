class Credits extends Phaser.Scene {
    constructor(){
        super("creditsScene");
    }
    
    preload(){
        this.load.image('cmyk_logo', './assets/CMYKmenu_logo.png');
        this.load.image('flower', './assets/menu_flower.png');
    }

    create(){
        //this.cameras.main.fadeIn(2000, 0, 0, 0)
        let menuConfig = {
            fontFamily: 'Quicksand',
            fontSize: '28px',
            //backgroundColor: '#AEB6BF',
            color: '#AEB6BF',
            align: 'right',
            padding: {
                top: 0,
                bottom: 0,
            },
            fixedWidth: 0
        }
        this.cmyk = this.add.image(screenCenterX, screenCenterY - 100, 'cmyk_logo').setOrigin(0.5);
        this.flower = this.add.image(screenCenterX+1, screenCenterY - 166, 'flower').setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height * 0.78, 'Created By: ', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height * 0.84, 'Daghan Koc', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height * 0.88, 'Julian Liaw ', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height * 0.92, 'Nathan Tejeda ', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height * 0.96, 'Kai Turner', menuConfig).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height * 0.7, 'MAIN MENU', menuConfig).setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', () => {
            this.tweens.add({
                targets: [this.cmyk, this.flower],
                x: -250,
                duration: 2000,
                ease: 'Cubic',
                onComplete: ()=> this.scene.stop('creditsScene'),
            });
            this.scene.start('menuScene')
        });

        
    }
    update(){
        this.flower.angle++;
    }

}