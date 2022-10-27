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
    svgColor
} from "./elements.js"

export default function Events(timer,soundClass){

    function changeTheme(){
        buttonDarkMode.classList.toggle('hide')
        buttonLightMode.classList.toggle('hide')
        themeDarkMode.classList.toggle('themeDark')
        themeDarkMode.className === 'themeDark' ? svgColor.style.fill = "var(--text-color2)" : svgColor.style.fill = "var(--text-color1)"
    }

        buttonLightMode.addEventListener('click',() => changeTheme()) 
        buttonDarkMode.addEventListener('click',() => changeTheme()) 



buttonPlay.addEventListener('click', function() {
    timer.playClock()
    timer.countdown()
})
buttonPause.addEventListener('click', function() {
    timer.pauseClock()
    timer.hold()
})
buttonStop.addEventListener('click', function() {
    timer.resetClock()
    timer.resetTimer()
})

buttonAddMinutes.addEventListener('click', function() {
    timer.addFiveMinutes()    
})
buttonSubtractMinutes.addEventListener('click', function() {
    if (Number(minutesDisplay.textContent) >= 5) {
        timer.subtractFiveMinutes()                            
    }else{
        timer.subtractAllMinutes()        
        }
    })

    buttonSoundWoods.addEventListener('click',function(){
        buttonSoundWoods.classList.toggle('active')   
        buttonSoundWoods.className === 'woods' ? soundClass.Stop(soundClass.audio[0]) : soundClass.play(soundClass.audio[0])
        })    
    buttonSoundRain.addEventListener('click',function(){
        buttonSoundRain.classList.toggle('active')
        buttonSoundRain.className === 'rain' ? soundClass.Stop(soundClass.audio[1]) : soundClass.play(soundClass.audio[1])
        })
    buttonSoundCafeteria.addEventListener('click',function(){
        buttonSoundCafeteria.classList.toggle('active')
        buttonSoundCafeteria.className === 'cafeteria' ? soundClass.Stop(soundClass.audio[3]) : soundClass.play(soundClass.audio[3])
        })
    buttonSoundCampfire.addEventListener('click',function(){
        buttonSoundCampfire.classList.toggle('active')
        buttonSoundCampfire.className === 'campfire' ? soundClass.Stop(soundClass.audio[2]) : soundClass.play(soundClass.audio[2])
        })
        
     


    }
    