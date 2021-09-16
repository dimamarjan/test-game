import { Scene } from 'phaser';
import { getImages } from '../../utils/imageComponents'

import bagHeader from '../../../assets/bags/bag-header.png'
import progressBarHalf from '../../../assets/progress-bar-50.png'

class SceneD extends Scene {
    constructor() {
        super('SceneD')
    }

    preload() {
        const imagesData = getImages(localStorage.getItem('dressSet'))
        this.load.image('bagHeader', bagHeader)
        this.load.image('womanSecondScene', imagesData.girl)

        this.load.image('firstBag', imagesData.firstItem)
        this.load.image('secondBag', imagesData.secondItem)
        this.load.image('chosenfirstBag', imagesData.chosenItemOne)
        this.load.image('chosenSecondBag', imagesData.chosenItemTwo)

        this.load.image('progressBarHalf', progressBarHalf)

        this.load.image('womanWithBagOne', imagesData.chosenGirlOne)
        this.load.image('womanWithBagSecond', imagesData.chosenGirlTwo)
    }

    create() {
        this.add.image(400, 450, 'bcgImage')
        const bagHeaderFrame = this.add.image(300, 40, 'bagHeader')
        const womanDressedOneFrame = this.add.image(300, 500, 'womanSecondScene')

        const progressBarQuarterFrame = this.add.image(300, 30, 'progressBarQuarter')
        progressBarQuarterFrame.alpha = 0
        const progressBarHalfFrame = this.add.image(300, 30, 'progressBarHalf')
        progressBarHalfFrame.alpha = 0

        const womanWithBagOneFrame = this.add.image(300, 500, 'womanWithBagOne')
        womanWithBagOneFrame.alpha = 0
        const womanWithBagSecondFrame = this.add.image(300, 500, 'womanWithBagSecond')
        womanWithBagSecondFrame.alpha = 0

        const firstBagFrame = this.add.image(160, 740, 'firstBag')
        firstBagFrame.setInteractive()
        firstBagFrame.on('pointerdown', () => {
            const dressSetVal = localStorage.getItem('dressSet')
            localStorage.setItem("dressSet", `${dressSetVal + "a"}`)
            firstBagFrame.destroy()
            bagHeaderFrame.destroy()
            this.tweens.add({
                targets: progressBarQuarterFrame,
                alpha: 1,
                duration: 500,
            })
            this.add.image(160, 740, 'chosenfirstBag')
            this.tweens.add({
                targets: womanDressedOneFrame,
                alpha: 0,
                duration: 1000,
            })
            this.tweens.add({
                targets: womanWithBagOneFrame,
                alpha: 1,
                duration: 1000,
            })
            secondBagFrame.destroy()
            this.add.image(440, 740, 'secondBag')
            clearInterval(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }

            setTimeout(() => {
                progressBarQuarterFrame.destroy()
                this.tweens.add({
                    targets: progressBarHalfFrame,
                    alpha: 1,
                    duration: 500,
                })
            }, 1000)
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneE");
                this.scene.remove('SceneD')
            }, 4000);
        })

        const secondBagFrame = this.add.image(440, 740, 'secondBag')
        secondBagFrame.setInteractive()
        secondBagFrame.on('pointerdown', () => {
            const dressSetVal = localStorage.getItem('dressSet')
            localStorage.setItem("dressSet", `${dressSetVal + "b"}`)
            secondBagFrame.destroy()
            bagHeaderFrame.destroy()
            this.tweens.add({
                targets: progressBarQuarterFrame,
                alpha: 1,
                duration: 500,
            })
            this.add.image(440, 740, 'chosenSecondBag')
            this.tweens.add({
                targets: womanDressedOneFrame,
                alpha: 0,
                duration: 1000,
            })
            this.tweens.add({
                targets: womanWithBagSecondFrame,
                alpha: 1,
                duration: 1000,
            })
            firstBagFrame.destroy()
            this.add.image(160, 740, 'firstBag')
            clearTimeout(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }

            setTimeout(() => {
                progressBarQuarterFrame.destroy()
                this.tweens.add({
                    targets: progressBarHalfFrame,
                    alpha: 1,
                    duration: 500,
                })
            }, 1000)
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneE");
                this.scene.remove('SceneD')
            }, 4000);
        })

        let cursorHandFrame;

        const temp = setTimeout(() => {
            cursorHandFrame = this.add.image(230, 850, 'cursorHand')
            this.tweens.add({
                targets: cursorHandFrame,
                alpha: 1,
                duration: 1000,
                x: 530,
                repeat: -1,
                yoyo: 1
            })
        }, 3000)
    }
}

export default SceneD;