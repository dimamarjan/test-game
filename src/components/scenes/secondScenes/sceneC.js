import { Scene } from 'phaser';
import { getImages } from '../../utils/imageComponents'

import textHeader from '../../../assets/dresses/start-header.png'
import cursorHand from '../../../assets/cursor-hand.png'
import progressBarStart from '../../../assets/progress-bar-0.png'
import progressBarQuarter from '../../../assets/progress-bar-25.png'

class SceneC extends Scene {
    constructor() {
        super('SceneC')
    }
    preload() {
        const imagesDataFirst = getImages()

        this.load.image('womanImageToDress', imagesDataFirst.girl)
        this.load.image('textHeader', textHeader)

        this.load.image('dressOne', imagesDataFirst.firstItem)
        this.load.image('dressSecond', imagesDataFirst.secondItem)
        this.load.image('chosenFirstItem', imagesDataFirst.chosenItemOne)
        this.load.image('chosenSecondtItem', imagesDataFirst.chosenItemTwo)

        this.load.image('progressBarStart', progressBarStart)
        this.load.image('progressBarQuarter', progressBarQuarter)

        this.load.image('cursorHand', cursorHand)

        this.load.image('womanDressedOne', imagesDataFirst.chosenGirlOne)
        this.load.image('womanDressedSecond', imagesDataFirst.chosenGirlTwo)
    }

    create() {
        const backgroundImg = this.add.image(400, 450, 'bcgImage')
        backgroundImg.alpha = 0.3

        const sceneHeader = this.add.image(300, 40, 'textHeader')

        const womanImageToDressFrame = this.add.image(300, 500, 'womanImageToDress')
        womanImageToDressFrame.alpha = 0
        this.tweens.add({
            targets: womanImageToDressFrame,
            alpha: 1,
            duration: 1000,
        })

        const progressBarFrame = this.add.image(300, 30, 'progressBarStart')
        progressBarFrame.alpha = 0
        const progressBarQuarterFrame = this.add.image(300, 30, 'progressBarQuarter')
        progressBarQuarterFrame.alpha = 0


        const newWomanFirstFrame = this.add.image(300, 500, 'womanDressedOne')
        newWomanFirstFrame.alpha = 0
        const newWomanSecondFrame = this.add.image(300, 500, 'womanDressedSecond')
        newWomanSecondFrame.alpha = 0

        const choiceOne = this.add.image(160, 740, 'dressOne')
        choiceOne.setInteractive()
        choiceOne.on('pointerdown', () => {
            localStorage.setItem("dressSet", '1')
            this.tweens.add({
                targets: backgroundImg,
                alpha: 1,
                duration: 1000,
            })
            choiceOne.destroy()
            sceneHeader.destroy()
            this.tweens.add({
                targets: progressBarFrame,
                alpha: 1,
                duration: 500,
            })
            this.add.image(160, 740, 'chosenFirstItem')
            this.tweens.add({
                targets: womanImageToDressFrame,
                alpha: 0,
                duration: 1000,
            })
            this.tweens.add({
                targets: newWomanFirstFrame,
                alpha: 1,
                duration: 1000,
            })
            choiceSecond.destroy()
            this.add.image(440, 740, 'dressSecond')
            clearInterval(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }

            setTimeout(() => {
                progressBarFrame.destroy()
                this.tweens.add({
                    targets: progressBarQuarterFrame,
                    alpha: 1,
                    duration: 500,
                })
            }, 1000)
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneD");
                this.scene.remove("SceneC")
            }, 4000);
        })

        const choiceSecond = this.add.image(440, 740, 'dressSecond')
        choiceSecond.setInteractive()
        choiceSecond.on('pointerdown', () => {
            localStorage.setItem("dressSet", '2')
            this.tweens.add({
                targets: backgroundImg,
                alpha: 1,
                duration: 1000,
            })
            choiceSecond.destroy()
            sceneHeader.destroy()
            this.tweens.add({
                targets: progressBarFrame,
                alpha: 1,
                duration: 500,
            })
            this.add.image(440, 740, 'chosenSecondtItem')
            this.tweens.add({
                targets: womanImageToDressFrame,
                alpha: 0,
                duration: 1000,
            })
            this.tweens.add({
                targets: newWomanSecondFrame,
                alpha: 1,
                duration: 1000,
            })
            choiceOne.destroy()
            this.add.image(160, 740, 'dressOne')
            clearTimeout(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }

            setTimeout(() => {
                progressBarFrame.destroy()
                this.tweens.add({
                    targets: progressBarQuarterFrame,
                    alpha: 1,
                    duration: 500,
                })
            }, 1000)
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneD");
                this.scene.remove("SceneC")
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

export default SceneC;