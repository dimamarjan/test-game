import { Scene } from 'phaser';
import womanImage from '../../../assets/girl-first.png'
import womanFirstTxt from '../../../assets/woman-first-txt.png'

class SceneB extends Scene {
    constructor() {
        super('SceneB')
    }
    preload() {
        this.load.image('womanImage', womanImage)
        this.load.image('womanFirstTxt', womanFirstTxt)
    }
    create() {
        const backgroundImg = this.add.image(400, 450, 'bcgImage')
        backgroundImg.alpha = 0.3

        const womanImageFrame = this.add.image(300, 450, 'womanImage')
        womanImageFrame.alpha = 0
        this.tweens.add({
            targets: womanImageFrame,
            alpha: 1,
            duration: 1500,
        })

        setTimeout(() => {
            const mwomanFirstTxtFrame = this.add.image(300, 450, 'womanFirstTxt')
            mwomanFirstTxtFrame.alpha = 0
            this.tweens.add({
                targets: mwomanFirstTxtFrame,
                alpha: 1,
                duration: 500
            })
        }, 1500)
        setTimeout(() => {
            this.scene.stop()
            this.scene.launch("SceneC");
            this.scene.remove("SceneB")
        }, 3500)
    }
}


export default SceneB;