var cross=document.querySelector('.cross');
var line1=document.querySelector('.line1');
var line2=document.querySelector('.line2');
var loader=document.querySelector('.menupage');

var change=0;
cross.addEventListener('click',function(){
   if(change==0){
    line1.style.rotate='20deg';
    line2.style.rotate='-20deg';
    loader.style.top='0vh';

    change=1;
   }else{
    line1.style.rotate='0deg';
    line2.style.rotate='0deg';
    loader.style.top='-100vh';
    change=0;
   }
})
var hover=0;
document.querySelector('.button').addEventListener('mousemove',function(){
if(hover==0){
   
        document.querySelector('.button').style.transform='rotateX(360deg)';
        document.querySelector('.button').style.backgroundColor='black';
        document.querySelector('.button').style.color='white'
        document.querySelector('.button').style.transition='all ease 2s'
    hover=1;
  
}else{
   
        document.querySelector('.button').style.transform='rotateX(0deg)';
        document.querySelector('.button').style.backgroundColor='white';
        document.querySelector('.button').style.color='black'
        hover=0;
}
})

var navbar=document.querySelector('nav');
var menu =document.querySelector('a');
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add('sticky')
    }
    else{
        (window.pageYOffset >= menu.offsetBottom)
            navbar.classList.remove('sticky'); 
    }
}