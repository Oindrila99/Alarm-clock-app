console.log("hi");

let btn = document.getElementById("btn").addEventListener("click", setAlarm);
var audio = new Audio('sound/alarm.mp3');

function ringBell() {
    
  audio.play();
}
function setAlarm(e) {

    e.preventDefault();
    let alarm = document.getElementById("alarm");
    alarmDate = new Date(alarm.value);
    console.log(alarmDate);
    now = new Date();
    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
           ringBell(); 
        }, timeToAlarm);
    }

}
