import girlStart from '../../assets/girl-second.png'
import girlOne from '../../assets/girls/girl-1.png'
import girlTwo from '../../assets/girls/girl-2.png'
import girlThree from '../../assets/girls/girl-3.png'
import girlFour from '../../assets/girls/girl-4.png'
import girlFive from '../../assets/girls/girl-5.png'
import girlSix from '../../assets/girls/girl-6.png'
import girlSeven from '../../assets/girls/girl-7.png'
import girlEight from '../../assets/girls/girl-8.png'
import girlNine from '../../assets/girls/girl-9.png'
import girlTen from '../../assets/girls/girl-10.png'
import girlEleven from '../../assets/girls/girl-11.png'
import girlTwelve from '../../assets/girls/girl-12.png'
import girlThirteen from '../../assets/girls/girl-13.png'
import girlFourteen from '../../assets/girls/girl-14.png'

import dressOne from '../../assets/dresses/dress-1.png'
import dressTwo from '../../assets/dresses/dress-2.png'
import dressOneChosen from '../../assets/dresses/dress-1-chosen.png'
import dressTwoChosen from '../../assets/dresses/dress-2-chosen.png'

import accsessoryOne from '../../assets/accessories/accsesuarize-1.png'
import accsessoryTwo from '../../assets/accessories/accsesuarize-2.png'
import accsessoryThree from '../../assets/accessories/accsesuarize-3.png'
import accsessoryOneChosen from '../../assets/accessories/accsesuarize-1-chosen.png'
import accsessoryTwoChosen from '../../assets/accessories/accsesuarize-2-chosen.png'
import accsessoryThreeChosen from '../../assets/accessories/accsesuarize-3-chosen.png'

import bagOne from '../../assets/bags/bag-1.png'
import bagTwo from '../../assets/bags/bag-2.png'
import bagOneChosen from '../../assets/bags/bag-1-chosen.png'
import bagTwoChosen from '../../assets/bags/bag-2-chosen.png'

import placeOne from '../../assets/places/place-1.png'
import placeTwo from '../../assets/places/place-2.png'

import placeBcgOne from '../../assets/background-place-one.png'
import placeBcgTwo from '../../assets/background-place-two.png'



function getImages(girlSelect) {
    console.log(girlSelect)
    switch (girlSelect) {
        case "1":
            return {
                id: "1",
                girl: girlOne,
                firstItem: bagOne,
                secondItem: bagTwo,
                chosenItemOne: bagOneChosen,
                chosenItemTwo: bagTwoChosen,
                chosenGirlOne: girlThree,
                chosenGirlTwo: girlFour,
            }
        case '2':
            return {
                id: "2",
                girl: girlTwo,
                firstItem: bagOne,
                secondItem: bagTwo,
                chosenItemOne: bagOneChosen,
                chosenItemTwo: bagTwoChosen,
                chosenGirlOne: girlFive,
                chosenGirlTwo: girlSix,
            }


        case '1a':
            return {
                id: "3",
                girl: girlThree,
                firstItem: accsessoryOne,
                secondItem: accsessoryTwo,
                chosenItemOne: accsessoryOneChosen,
                chosenItemTwo: accsessoryTwoChosen,
                chosenGirlOne: girlSeven,
                chosenGirlTwo: girlEight,
            }
        case '1b':
            return {
                id: "4",
                girl: girlFour,
                firstItem: accsessoryOne,
                secondItem: accsessoryTwo,
                chosenItemOne: accsessoryOneChosen,
                chosenItemTwo: accsessoryTwoChosen,
                chosenGirlOne: girlNine,
                chosenGirlTwo: girlTen,
            }
        case '2a':
            return {
                id: "5",
                girl: girlFive,
                firstItem: accsessoryOne,
                secondItem: accsessoryThree,
                chosenItemOne: accsessoryOneChosen,
                chosenItemTwo: accsessoryThreeChosen,
                chosenGirlOne: girlEleven,
                chosenGirlTwo: girlTwelve,
            }
        case '2b':
            return {
                id: "6",
                girl: girlSix,
                firstItem: accsessoryOne,
                secondItem: accsessoryThree,
                chosenItemOne: accsessoryOneChosen,
                chosenItemTwo: accsessoryThreeChosen,
                chosenGirlOne: girlThirteen,
                chosenGirlTwo: girlFourteen,
            }
        case '1aa':
            return {
                id: "7",
                girl: girlSeven,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '1ab':
            return {
                id: "8",
                girl: girlEight,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '1ba':
            return {
                id: "9",
                girl: girlNine,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '1bb':
            return {
                id: "10",
                girl: girlTen,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '2aa':
            return {
                id: "11",
                girl: girlEleven,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '2ab':
            return {
                id: "12",
                girl: girlTwelve,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '2ba':
            return {
                id: "13",
                girl: girlThirteen,
                firstItem: placeOne,
                secondItem: placeTwo,
            }
        case '2bb':
            return {
                id: "1",
                girl: girlFourteen,
                firstItem: placeOne,
                secondItem: placeTwo,
            }


        default:
            return {
                id: "default",
                girl: girlStart,
                firstItem: dressOne,
                secondItem: dressTwo,
                chosenItemOne: dressOneChosen,
                chosenItemTwo: dressTwoChosen,
                chosenGirlOne: girlOne,
                chosenGirlTwo: girlTwo,
            }
    }
}

function getPlaces(placeId) {
    if (placeId === "a") {
        return placeBcgOne
    } else {
        return placeBcgTwo
    }
}

export { getImages, getPlaces }