function showClock(){
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    const time =
    hour + ":" + minute + ":" + second ;

    document.getElementById("clock").textContent = time;
}

setInterval(showClock, 1000);

showClock();