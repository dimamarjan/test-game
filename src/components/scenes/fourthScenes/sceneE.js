import { Scene } from 'phaser';
import { getImages } from '../../utils/imageComponents'

import accsessoriesHeader from '../../../assets/accessories/accsessorise-header.png'
import progressBarBeforeEnd from '../../../assets/progress-bar-75.png'

class SceneE extends Scene {
    constructor() {
        super('SceneE')
    }
    preload() {
        const imagesData = getImages(localStorage.getItem('dressSet'))
        this.load.image('accsessoriesHeader', accsessoriesHeader)
        this.load.image('womanThirdScene', imagesData.girl)

        this.load.image('firstAccsess', imagesData.firstItem)
        this.load.image('secondAccsess', imagesData.secondItem)
        this.load.image('chosenfirstAccsess', imagesData.chosenItemOne)
        this.load.image('chosensecondAccsess', imagesData.chosenItemTwo)

        this.load.image('progressBarBeforeEnd', progressBarBeforeEnd)

        this.load.image('womanWithAccsessOne', imagesData.chosenGirlOne)
        this.load.image('womanWithAccsessSecond', imagesData.chosenGirlTwo)
    }

    create() {
        this.add.image(400, 450, 'bcgImage')
        const HeaderFrame = this.add.image(300, 40, 'accsessoriesHeader')
        const womanFrame = this.add.image(300, 500, 'womanThirdScene')

        const progressBarHalfFrame = this.add.image(300, 30, 'progressBarHalf')
        progressBarHalfFrame.alpha = 0
        const progressBarBeforeEndFrame = this.add.image(300, 30, 'progressBarBeforeEnd')
        progressBarBeforeEndFrame.alpha = 0

        const womanWithAccsessOneFrame = this.add.image(300, 500, 'womanWithAccsessOne')
        womanWithAccsessOneFrame.alpha = 0
        const womanWithAccsessTwoFrame = this.add.image(300, 500, 'womanWithAccsessSecond')
        womanWithAccsessTwoFrame.alpha = 0

        const firstAccsessFrame = this.add.image(160, 740, 'firstAccsess')
        firstAccsessFrame.setInteractive()
        firstAccsessFrame.on('pointerdown', () => {
            const dressSetVal = localStorage.getItem('dressSet')
            localStorage.setItem("dressSet", `${dressSetVal + "a"}`)
            firstAccsessFrame.destroy()
            HeaderFrame.destroy()
            this.tweens.add({
                targets: progressBarHalfFrame,
                alpha: 1,
                duration: 500,
            })
            this.add.image(160, 740, 'chosenfirstAccsess')
            this.tweens.add({
                targets: womanFrame,
                alpha: 0,
                duration: 1000,
            })
            this.tweens.add({
                targets: womanWithAccsessOneFrame,
                alpha: 1,
                duration: 1000,
            })
            secondAccsessFrame.destroy()
            this.add.image(440, 740, 'secondAccsess')
            clearInterval(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }

            setTimeout(() => {
                progressBarHalfFrame.destroy()
                this.tweens.add({
                    targets: progressBarBeforeEndFrame,
                    alpha: 1,
                    duration: 500,
                })
            }, 1000)
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneF");
                this.scene.remove('SceneE')
            }, 4000);
        })

        const secondAccsessFrame = this.add.image(440, 740, 'secondAccsess')
        secondAccsessFrame.setInteractive()
        secondAccsessFrame.on('pointerdown', () => {
            const dressSetVal = localStorage.getItem('dressSet')
            localStorage.setItem("dressSet", `${dressSetVal + "b"}`)
            secondAccsessFrame.destroy()
            HeaderFrame.destroy()
            this.tweens.add({
                targets: progressBarHalfFrame,
                alpha: 1,
                duration: 500,
            })
            this.add.image(440, 740, 'chosensecondAccsess')
            this.tweens.add({
                targets: womanFrame,
                alpha: 0,
                duration: 1000,
            })
            this.tweens.add({
                targets: womanWithAccsessTwoFrame,
                alpha: 1,
                duration: 1000,
            })
            firstAccsessFrame.destroy()
            this.add.image(160, 740, 'firstAccsess')
            clearTimeout(temp)
            if (cursorHandFrame) {
                cursorHandFrame.destroy()
            }

            setTimeout(() => {
                progressBarHalfFrame.destroy()
                this.tweens.add({
                    targets: progressBarBeforeEndFrame,
                    alpha: 1,
                    duration: 500,
                })
            }, 1000)
            setTimeout(() => {
                this.scene.stop()
                this.scene.launch("SceneF");
                this.scene.remove('SceneE')
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

export default SceneE;