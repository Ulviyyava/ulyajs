//data task
var hour=new Date().getHours();

console.log(hour);
if(hour>7&&hour<=14){
    document.body.style.backgroundcolor='red';
    
}
else if(hour>14&&hour<=21){
    document.body.style.backgroundcolor='green';
    
}
else if(hour>21&&hour<=24){
    document.body.style.backgroundcolor='black';
    
}
else if(hour>0&&hour<=7){
    document.body.style.backgroundcolor='dark black';

}
//task end