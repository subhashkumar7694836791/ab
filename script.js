var video=document.querySelector('video');
var text=document.querySelector('.page h1');
var flag=0;
text.addEventListener('click',function(){
   setTimeout(function(){
    if(flag==0){
        video.style.scale=.5;
        video.style.transform='rotate(270deg)'
        text.textContent='video rotate'
flag=1;
    }else{
        video.style.scale=1;
        video.style.transform='rotate(360deg)'
        text.textContent='video normal'
flag=0;
    }
   },2000)
})
gsap.from('#page1 h1',{
    opacity:0,
    scrollTrigger:{
        x:200,
        trigger:"#page1 h1",
        scroller:"#main",
        markers:true,
    }
})