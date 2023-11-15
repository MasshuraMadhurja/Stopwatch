let msecond = 0;
let interval = null;
let secSpan = document.getElementById("secs")
let minsSpan = document.getElementById("mins")
let hrsSpan = document.getElementById("hrs")
let miliSpan = document.getElementById("milisecs")
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval;


function timer() {
    msecond++;

    let secs = Math.floor(msecond/ 100)
    let milisecs=msecond%100;
    let hrs = Math.floor(secs/ 3600)
    let mins = Math.floor((secs -(hrs*3600))/60)
   

    if (hrs < 10) {
        hrsSpan.innerHTML = `0${hrs}`
    } else { hrsSpan.innerHTML = `${hrs}` }
    if (mins < 10) {
        minsSpan.innerHTML = `0${mins}`
    } else { minsSpan.innerHTML = `${mins}` }
    if (secs < 10) {
        secSpan.innerHTML = `0${secs}`
    } else { secSpan.innerHTML = `${secs}` }
    if (milisecs < 10) {
       miliSpan.innerHTML = `0${milisecs}`
    } else { miliSpan.innerHTML = `${milisecs}` }


}



buttonStart.addEventListener('click',start);

buttonStop.addEventListener('click',stop);

buttonReset.addEventListener('click',reset);

function start(){
    if(interval){
        return
    }
interval=setInterval(timer,10)
};

function stop(){
    clearInterval(interval)
interval=null;
}
function reset(){
    stop();
    second=0;
    secSpan.innerHTML="00";
    minsSpan.innerHTML="00";
    hrsSpan.innerHTML="00";
    miliSpan.innerHTML="00"

}