// var line1=document.querySelector("#line1");
// var line2=document.querySelector("#line2");
// var menu=document.querySelector("#menu");
// var change=0;
// menu.addEventListener('click',function(){
//     if(change==0){
//         line1.style.transform='rotate(45deg)';
//         line2.style.transform='rotate(-45deg)';
// change=1;
//     }else{
//         line1.style.transform='rotate(45deg)'
//     line2.style.transform='rotate(-45deg)'
//     change=0;
//     }
    

// })


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("body", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




      // gsap page2
gsap.to('#page2 #img',{
  duration:1,
  width:"100%",
  stagger:3,
  scrollTrigger:{
    trigger:"#page2 #img",
    scroller:"#main",
    scrub:true,
    // markers:true,
    start:"top 20%",
    end:"top 10%",
    // pin:true

  }
})

// gsap.to('#page3 h1',{
//   onStart:function(){
//     $("#page3 h1").textillate({in:{effect: 'splat'}})
//     $("#page3 h1").textillate({out:{effect: 'foldUnfold',sync:true}})
    
//   }
// })

gsap.from('#page3 h1',{
  rotate:5,
  y:100,
  stagger:1,
  scrollTrigger:{
    trigger:'#page3 h1',
    scroller:'#main',
    // markers:true,
    start:'top 60%',
    end:'top 20%',
    scrub:true,

  }
})


// page4

gsap.from('#page4 h1',{
      // fontSize:'42vw',
      scale:1.2,
transform:"translateScale(2.1)",
  scrollTrigger:{
    trigger:"#page4",
    scroller:'#main',
    markers:true,
    start:'top 0%',
    end:'top -20%',
    scrub:3,
    pin:true
    

  }
})
gsap.from('#page4 h3',{
    // fontSize:'40vw',
    scale:1.2,

  scrollTrigger:{
    trigger:"#page4",
    scroller:'#main',
    markers:true,
    start:'top 0%',
    end:'top -20%',
    scrub:3,
    pin:true

  }
})




