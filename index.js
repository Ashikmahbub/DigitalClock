const timeUpdate =function (id,data){

     const currentTime =document.getElementById(id);
     return currentTime.innerHTML =data;
}

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";

    }
    timeUpdate('ampm',h);
    timeUpdate('hour')
    

}