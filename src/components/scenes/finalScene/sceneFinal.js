import { Scene } from 'phaser';
import { getImages, getPlaces } from '../../utils/imageComponents'
import manFinalText from '../../../assets/men-final-txt.png'
import menImage from '../../../assets/men-last.png'
import playNowButton from '../../../assets/button-play-now.png'

class SceneFinal extends Scene {
    constructor() {
        super('SceneFinal')
    }
    preload() {
        const imagesData = getImages(localStorage.getItem('dressSet'))
        const placeIdData = getPlaces(localStorage.getItem('placesSet'))

        this.load.image('womanFinalhScene', imagesData.girl)
        this.load.image('backgroundPlace', placeIdData)
        this.load.image('manFinalText', manFinalText)
        this.load.image('menImage', menImage)

        this.load.image('playNowButton', playNowButton)
    }

    create() {
        const backgroundFrame = this.add.image(400, 450, 'backgroundPlace')
        backgroundFrame.alpha = 0
        const menImageFrame = this.add.image(400, 450, 'menImage')
        menImageFrame.alpha = 0
        const womanImageFrame = this.add.image(200, 500, 'womanFinalhScene')
        womanImageFrame.alpha = 0
        this.tweens.add({
            targets: backgroundFrame,
            alpha: 1,
            x: 200,
            duration: 1500,
        })
        this.tweens.add({
            targets: backgroundFrame,
            x: 200,
            duration: 40000,
        })
        this.tweens.add({
            targets: [menImageFrame, womanImageFrame],
            alpha: 1,
            duration: 1500,
        })
        const menFinalTextFrame = this.add.image(300, 500, 'manFinalText')
        menFinalTextFrame.alpha = 0
        setTimeout(() => {
            this.tweens.add({
                targets: menFinalTextFrame,
                alpha: 1,
                duration: 1000,
            })
        }, 2000)

        setTimeout(() => {
            this.add.image(300, 800, 'playNowButton')
            this.tweens.add({
                targets: menFinalTextFrame,
                alpha: 0,
                duration: 1000,
            })
        }, 4000)
    }
}

export default SceneFinal;