var secCounter = 0;
var msecCounter = 0;
var minCounter = 0;

var sec = document.getElementById('sec');
var msec = document.getElementById('msec');
var min = document.getElementById('min');
var interval;
var Counter = 0

const timer = () =>{
    msecCounter++;
    msec.innerHTML=msecCounter;
    if(msecCounter===100){
        secCounter++;
        sec.innerHTML=secCounter;
        msecCounter = 0;
        if(secCounter===5){
            secCounter=0;
            minCounter++;
            min.innerHTML=minCounter;
        }
    }
}

function startTimer(){
    interval=setInterval(timer, 10)
}
function stopTimer(){
    clearInterval(interval)
}
function resetTimer(){
    clearInterval(interval)

min.innerHTML='00';
sec.innerHTML='00';
msec.innerHTML='00';
minCounter=0;
secCounter=0;
msecCounter=0;
}