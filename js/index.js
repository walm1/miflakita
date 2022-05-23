var clock = document.getElementById('clock')
const nav = document.querySelector('#navbar')

function currentTime(){
    let date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let session = "AM"
    
    if(hour == 0){ hour = 12}
    if(hour > 12){
        hour = hour - 12;
        session = "PM"
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" +  minute: minute ;
    second = ( second< 10) ? "0" +  second: second;
    
    let time = hour + ":" + minute +":"+ second + " " + session

    clock.innerText = time

    let t = setTimeout(function(){
        currentTime()}, 1000)

}

function countDown(){
    var countDownDate = new Date("May 22, 2022 23:11:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();

  // Find the distance between now and the count down date
    var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var hour =  `FALTAN ${hours} HORAS, ${minutes} MINUTOS Y ${seconds} PARA LAS 11:11:00 `
    document.getElementById('countdown').innerHTML = hour

        
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "11:11:00";
    }

    if(distance < 0 ){
        document.getElementById('countdown').innerHTML = ' '
    }
    }, 1000);
}




currentTime()
countDown()





