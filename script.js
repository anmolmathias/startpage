var time = document.querySelector(".time");

setInterval(function () {
    let date = new Date();
    let currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    time.innerText = currentTime;
}, 1000);