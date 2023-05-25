var loader=gsap.timeline(
    {
        stagger:.6,
      
    }
);
loader.from('#d',{
    ease:'bounch ease',
    opacity:1,
    duration:.2

})
loader.from('#c',{
    opacity:1,
    duration:.2

})
loader.from('#b',{
    opacity:1,
    duration:.2
})
loader.from('#a',{
    opacity:1,
    duration:.2

})


loader.to('.loader',{
    y:'-100%',
    duration:2
  
})

gsap.from('.video video',{
    height:500,
    width:500,
    scrollTrigger:{
        trigger:'.page1 .video',
        scrolller:'.main',
        // markers:true,
        start:'top 50%',
        end:'top 0%',
        scrub:true
    }
})

gsap.from('.page3 h1',{
    opacity:0,
    rotate:5,
    y:30,
   duration:.5,
    stagger:.2,
    scrollTrigger:{
        trigger:'.page3 h1',
        scroller:'body',
        // markers:true,
        start:'top 70%',
        end:'top 20%',
        scrub:true
    }
})


// var arrow=document.querySelector('.arrow');
// var page4=document.querySelector('.box1');
// arrow.addEventListener('mousemove',function(dets){
// page4.style.left=`${detx.x}px`
// page4.style.top=`${detx.y}px`

// })
document.addEventListener('mousemove',function(dets){
    document.querySelector('.arrow').style.left=`${dets.x}px`
    document.querySelector('.arrow').style.top=`${dets.y}px`

})

gsap.to('.page7 h1',{
    // overflowX:-10,
    x:'-50%',
    trnsition:2,
    scrollTrigger:{
        trigger:'.page7',
        scroller:'body',
        // markers:true,
        start:'top 15%',
        scrub:true,
        end:'top -100%',
    }
})

 var img=gsap.timeline();

img.to('.page7-1 img',{
    position:'absolute',
    opacity:0,
    y:'500%',
    trnsition:2,
    scrollTrigger:{
        trigger:'.page7',
        scroller:'body',
        // markers:true,
        start:'top 0%',
        scrub:true,
        end:'top -100%',
    }
})
gsap.to('.page10-t h1',{
    opacity:1,
    y:-25,
    stagger:.2,
    // rotate:5,
    scrollTrigger:{
        trigger:'.page10-t h1',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        scrub:true,
        end:'top 20%'
    }
})


// gsap.to('.page1',{
//     scrollTrigger:{
//         trigger:'.page2',
//         start:'top top',
//         scrub:true,
//         end:'+=100px',
//     },
//     // y:'-100vh',
//     ease:'none'
// })

var navbar=document.querySelector('nav');
var menu =document.querySelector('h1');
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add('sticky')
    }
    else{
        (window.pageYOffset >= menu.offsetTop)
            navbar.classList.remove('sticky')
        
    }
}