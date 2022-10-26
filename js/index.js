import Events from "./events.js"

import sounds from "./sounds.js"

import Timer from "./timer.js"

import {
    buttonPlay,
    buttonPause,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPause,
    buttonPlay
})

const sound = sounds()

Events(timer, sound)


     
