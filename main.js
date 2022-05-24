setInterval(()=>{
    date = new Date();
    hourTime = date.getHours();
    minuteTime = date.getMinutes();
    secondTime = date.getSeconds();

    hourHandRotation = 30*hourTime + minuteTime/2;
    minuteHandRotation = 6*minuteTime;
    secondHandRotation =    6*secondTime;

    hour.style.transform = `rotate(${hourHandRotation}deg)`;
    minute.style.transform = `rotate(${minuteHandRotation}deg)`;
    second.style.transform = `rotate(${secondHandRotation}deg)`;
},1000)
