const clock = document.querySelector(".js-clock");

function getCurrentTime(){
    const time = new Date();
    const years = time.getFullYear();
    const months = time.getMonth()+1;
    const days = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerText = `${years}년 ${months}월 ${days}일 ${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    setInterval(getCurrentTime, 1000);
}

getCurrentTime();
init();