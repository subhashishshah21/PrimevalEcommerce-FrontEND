const countdown = () => {
    const countDate = new Date("August 29, 2021 00:00:00 ");
    console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;
    

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMinute = Math.floor((gap % hour)/ minute);
    const textSecond = Math.floor((gap % minute)/ second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hrs").innerHTML = textHour;
    document.querySelector(".min").innerHTML = textMinute;
    document.querySelector(".sec").innerHTML = textSecond;

    console.log(gap);

};
setInterval(countdown, 1000);