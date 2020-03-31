var deadlineMin = 25;
let deadlineSec =  0;

time = document.querySelector(".time");

let pomodoro = document.querySelector(".pomodoro");
let timeControl = document.querySelector(".timeControl")
let start = document.querySelector(".start");
let stopClock = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let short = document.querySelector(".short");
let long = document.querySelector(".long");


short.onclick = function(){
    deadlineMin = 5;
    time.innerText = deadlineMin + ':' + deadlineSec;
    document.title = "(" + deadlineMin + ':' + deadlineSec + ")" + " TomatoTimer";

}
long.onclick = function(){
    deadlineMin = 10;
    time.innerText = deadlineMin + ':' + deadlineSec;
    document.title = "(" + deadlineMin + ':' + deadlineSec + ")" + " TomatoTimer";

}


var snd = new Audio("file.wav"); 

pomodoro.onclick = function(){
    timeControl.style.display = "block";
    deadlineMin = 25;
    time.innerText = deadlineMin + ':' + deadlineSec;
    document.title = "(" + deadlineMin + ':' + deadlineSec + ")" + " TomatoTimer";

}
start.onclick = function(event){
    snd.pause();
    snd.currentTime = 0;

    let showSeconds = deadlineSec;
    let showMinutes = deadlineMin;

    
    var interval = setInterval(function(){

        if (showMinutes === 0 && showSeconds === 0){
            clearInterval(interval); 
            snd.play();
        }
        else if (showSeconds === 0){
            showMinutes = showMinutes - 1;
            showSeconds = 59;
        }
        else{
            showSeconds = showSeconds - 1;
        }
    
        stopClock.onclick = function (event){
            clearInterval(interval); 
            document.title = "(" + showMinutes + ':' + showSeconds + ")" + " TomatoTimer";

        };
        reset.onclick = function(event){
            clearInterval(interval);
            snd.pause();
            snd.currentTime = 0;
            let showSeconds = deadlineSec;
            let showMinutes = deadlineMin;
            time.innerText = showMinutes + ':' + showSeconds;
            document.title = "(" + showMinutes + ':' + showSeconds + ")" + " TomatoTimer";
        }
        
        time.innerText = showMinutes + ':' + showSeconds;
        document.title = "(" + showMinutes + ':' + showSeconds + ")" + " TomatoTimer";

        
    }, 1000)
}