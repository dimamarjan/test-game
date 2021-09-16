import Phaser, { Game } from 'phaser'

import dprModeSet from './components/utils/dprMode'

import SceneA from './components/scenes/firstScenes/sceneA'
import SceneB from './components/scenes/firstScenes/sceneB'
import SceneC from './components/scenes/secondScenes/sceneC'
import SceneD from './components/scenes/thirdScenes/sceneD'
import SceneE from './components/scenes/fourthScenes/sceneE'
import SceneF from './components/scenes/fifthScene/sceneF'
import SceneFinal from './components/scenes/finalScene/sceneFinal'


var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: [
        SceneA,
        SceneB,
        SceneC,
        SceneD,
        SceneE,
        SceneF,
        SceneFinal
    ],
    scaleMode: dprModeSet()
};


var game = new Game(config);