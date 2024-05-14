let display = document.getElementById("time");
let timer = null;
let startTime = 0;
let elapsedtime = 0;
let running = false;

let Bstart = document.getElementById("start");
let Bstop = document.getElementById("stop");
let Breset = document.getElementById("reset");

Bstart.onclick = function start(){

    if(!running){
        startTime = Date.now() - elapsedtime;
        timer = setInterval(update,10);
        running = true;
    }
}
Bstop.onclick = function stop(){

    if(running){
        clearInterval(timer);
        elapsedtime = Date.now()-startTime;
        running = false;
    }

}
Breset.onclick = function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedtime = 0;
    running = false;
    display.textContent = "00:00:00:00"
}
function update(){
    const currenttime = Date.now();
    elapsedtime = currenttime - startTime;
    
    let hr = Math.floor(elapsedtime / (1000 * 60 * 60));
    let min = Math.floor(elapsedtime/(1000*60)%60);
    let sec = Math.floor(elapsedtime/1000%60);
    let mill = Math.floor(elapsedtime%1000 / 10);

    hr = String(hr).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    mill = String(mill).padStart(2,"0");

    display.textContent=`${hr}:${min}:${sec}:${mill}`
}