// The data/time we want to countdown to
var countDownDate = new Date("Jun 20, 2022 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds
    minutes = minutes < 10 ? "0" + minutes : minutes
    hours = hours < 10 ? "0" + hours : hours
    days = days < 10 ? "0" + days : days
        // Result is output to the specific element
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("secs").innerHTML = seconds


    // Display the message when countdown is over
    if (timeleft < 0) {

        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "HAPPY BIRTHDAY MILES!!!"
        let end = document.querySelector(".div1");
        end.style.display = "none"
        let ending = document.querySelector(".div2");
        ending.style.display = "none"
    }


    let col = document.getElementById("end");

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }
    let rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    col.style.color = rndCol;


}, 500);

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.getElementById("body").classList.toggle("bg")

})