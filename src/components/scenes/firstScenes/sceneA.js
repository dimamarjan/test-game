import { Scene } from 'phaser';
import menImage from '../../../assets/men-first.png'
import bcgImage from '../../../assets/firstBcg.png'
import menFirstTxt from '../../../assets/men-first-txt.png'

class SceneA extends Scene {
    constructor() {
        super('SceneA')
    }
    preload() {
        this.load.image('menImage', menImage)
        this.load.image('bcgImage', bcgImage)
        this.load.image('menFirstTxt', menFirstTxt)
    }
    create() {
        const backgroundImg = this.add.image(400, 450, 'bcgImage')
        backgroundImg.alpha = 0.3

        const menImageFrame = this.add.image(300, 450, 'menImage')
        menImageFrame.alpha = 0

        this.tweens.add({
            targets: menImageFrame,
            alpha: 1,
            duration: 1500,
        })

        setTimeout(() => {
            const menFirstTxtFrame = this.add.image(300, 450, 'menFirstTxt')
            menFirstTxtFrame.alpha = 0
            this.tweens.add({
                targets: menFirstTxtFrame,
                alpha: 1,
                duration: 500
            })
        }, 1500)
        setTimeout(() => {
            this.scene.stop()
            this.scene.launch("SceneB");
            this.scene.remove("SceneA")
        }, 3500)
    }
}

export default SceneA;