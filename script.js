var time = document.querySelector(".time");

function updateTime() {
  let date = new Date();
  let currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  time.innerText = currentTime;
}

document.addEventListener("DOMContentLoaded", updateTime);

setInterval(function () {
  updateTime();
}, 1000);
