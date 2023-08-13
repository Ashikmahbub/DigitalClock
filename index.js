const timeUpdate =function (id,data){

     const currentTime =document.getElementById(id);
     return currentTime.innerText =data;
}

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if(h>12){
        h =h-12;
        ampm = "PM";

    };
   
    timeUpdate('ampm',ampm);
    timeUpdate('hour',h);
    timeUpdate('minutes',m);
    timeUpdate('seconds',s);
    setTimeout(() =>{ 
        updateClock()

    },1000);
    
    

}
updateClock();

