const ShowTime = document.getElementById("ShowTime")


function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let meridiem = hours >= 12? "PM" : "AM";
    ShowTime.textContent = `${hours} : ${minutes} : ${seconds} ${meridiem}`
}

setInterval(updateTime, 1000);

updateTime();