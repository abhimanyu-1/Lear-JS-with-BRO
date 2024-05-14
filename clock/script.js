function clock(){

    const now = new Date();
    let hr = now.getHours().toString().padStart(2,0);
    hr = hr-12<0?hr:hr-12;
    let str = hr>12? 'AM':'PM';
    const mnt = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);

    const time = `${hr}:${mnt}:${sec}${str}`;
    let text = document.getElementById("time");
    text.textContent = time;
}
clock();
setInterval(clock,1000);