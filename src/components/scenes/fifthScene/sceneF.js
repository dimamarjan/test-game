import { Scene } from 'phaser';
import { getImages } from '../../utils/imageComponents'

import placeHeader from '../../../assets/places/place-header.png'

class SceneF extends Scene {
    constructor() {
        super('SceneF')
    }
    preload() {
        const imagesData = getImages(localStorage.getItem('dressSet'))
        this.load.image('placeHeader', placeHeader)
        this.load.image('womanFourthScene', imagesData.girl)

        this.load.image('firstPlace', imagesData.firstItem)
        this.load.image('secondPlace', imagesData.secondItem)
    }

    create() {
        this.add.image(400, 450, 'bcgImage')
        const HeaderFrame = this.add.image(300, 40, 'placeHeader')
        const womanFrame = this.add.image(300, 500, 'womanFourthScene')

        const firstPlaceFrame = this.add.image(160, 740, 'firstPlace')
        firstPlaceFrame.setInteractive()
        firstPlaceFrame.on('pointerdown', () => {
            localStorage.setItem("placeSet", "a")
            firstPlaceFrame.destroy()
            HeaderFrame.destroy()
            this.tweens.add({
                targets: womanFrame,
                alpha: 0,
                duration: 1000,
            })
            secondPlaceFrame.destroy()
            clearInterval(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneFinal");
                this.scene.remove('SceneF')
            }, 4000);
        })

        const secondPlaceFrame = this.add.image(440, 740, 'secondPlace')
        secondPlaceFrame.setInteractive()
        secondPlaceFrame.on('pointerdown', () => {
            localStorage.setItem("placeSet", "b")
            secondPlaceFrame.destroy()
            HeaderFrame.destroy()
            this.tweens.add({
                targets: womanFrame,
                alpha: 0,
                duration: 1000,
            })
            firstPlaceFrame.destroy()
            clearTimeout(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneFinal");
                this.scene.remove('SceneF')
            }, 4000);
        })

        let cursorHandFrame;

        const temp = setTimeout(() => {
            cursorHandFrame = this.add.image(230, 850, 'cursorHand')
            this.tweens.add({
                targets: cursorHandFrame,
                alpha: 1,
                x: 530,
                duration: 1000,
                repeat: -1,
                yoyo: 1
            })
        }, 3000)
    }
}

export default SceneF;