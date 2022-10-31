import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAddMinutes,
    buttonSubtractMinutes,
    buttonSoundWoods,
    buttonSoundRain,
    buttonSoundCafeteria,
    buttonSoundCampfire,
    minutesDisplay,
    buttonDarkMode,
    buttonLightMode,
    themeDarkMode,
    html,
    volumeBar
} from "./elements.js"
export default function sounds(){


const audio =[ new Audio("./sounds/Floresta.mp3"), new Audio("./sounds/Chuva.mp3"), new Audio("./sounds/Lareira.mp3"), new Audio("./sounds/Cafeteria.mp3")]




function play(currentAudio) {
 
    currentAudio.play();
    currentAudio.loop = true;
    volumeBar[0].addEventListener('change', ()=>{
        audio[0].volume = Number(volumeBar[0].value);
    })
    volumeBar[1].addEventListener('change', ()=>{
        audio[1].volume = Number(volumeBar[1].value);
    })
    volumeBar[2].addEventListener('change', ()=>{
        audio[3].volume = Number(volumeBar[2].value);
    })
    volumeBar[3].addEventListener('change', ()=>{
        audio[2].volume = Number(volumeBar[3].value);
    })

    
    }           

function Stop(currentAudio) {

    currentAudio.pause();   
    currentAudio.currentTime = 0        
}  





return {
    play,
    Stop,
    audio
}


}
