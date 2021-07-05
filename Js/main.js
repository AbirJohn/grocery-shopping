//All using by coustom javascript
// dom 
// function 
//elememnt
//conter js 


//manu Bar times add , Scroll-top Add //
let manu =document.querySelector('#manu-bar');
let navbar =document.querySelector('.navbar');
let header =document.querySelector('.header-2');

manu.addEventListener('click',()=>{
    manu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


window.onscroll = () =>{
    manu.classList.remove('fa-times');
    navbar.classList.remove('active');



    if(window.scrollY>15){
        header.classList.add('active');

    }else{
        header.classList.remove('active');
    }
}

//Coutdown  Day , hour ,minutes, secound //

let countDate = new Date('July 23,2021 00:00:00').getTime();


function countDown(){

    let now = new Date().getTime();
    gap = countDate -now;


    let seconds = 3600;
    let minute = seconds * 60;
    let hour = minute * 60;
    let day = hour *24;


    let d = Math.floor(gap / (day));
    let h = Math.floor ((gap %(day)) / (hour));
    let m = Math.floor ((gap %(hour)) / (minute));
    let s = Math.floor ((gap %(minute)) / (seconds));


    document.getElementById('day').innerText= d;    
    document.getElementById('hour').innerText = h;    
    document.getElementById('minute').innerText = m;    
    document.getElementById('seconds').innerText = s;    


}

setInterval(function(){
    countDown();
},3600)