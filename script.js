function formatTime(number){
    if(number < 10){
        return "0" +number.toString();
    }else{
        return number.toString();
    }
    }

window.setInterval(function(){
    var currentTime = new Date() ;

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var Period = "AM";
    
    if(hours == 0){
        hours = 12;
    } else if(hours > 12){
        hours = hours - 12;
        Period = "PM";
    }
    var showTime = formatTime(hours) + ":" + formatTime(minutes) +":" + formatTime(seconds) + Period ;
    
    document.getElementById("MyClockDisplay").innerHTML = showTime ;
  
},1000);




































