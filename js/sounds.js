export default function sounds(){


const audio =[ new Audio("./sounds/Floresta.mp3"), new Audio("./sounds/Chuva.mp3"), new Audio("./sounds/Lareira.mp3"), new Audio("./sounds/Cafeteria.mp3")]




function play(currentAudio) {
 
    currentAudio.play();
    currentAudio.loop = true;
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
