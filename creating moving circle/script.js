var tween=gsap.to('img',{
    duration:3,
    x:700,
    stagger:3,
    // ease:"bounce",
    ease:"linear",
    paused:true
});
document.getElementById('play').onclick= () => tween.play();
document.getElementById('pause').onclick= () => tween.pause();
document.getElementById('reverse').onclick= () => tween.reverse();
document.getElementById('restart').onclick= () => tween.restart();
  gsap.to('h1',{
    x:"40%",
    duration:2,
    delay:1,
    color:"red"
  })
  gsap.fromTo('p',{x:"78%"},{
    x:"-4%",
    duration:2,
    delay:1,
    ease:"bounce",
    repeat:-1,
    yoyo:true
  })
  gsap.fromTo('button',{x:"80%"},{
    duration:2,
    delay:1,
    y:20,
    stagger:1,
    ease:"bounce",

   scrollTrigger:{
    

    trigger:"button",
    scroller:"body",
    repeat:-1,
    yoyo:true,
    markers:true,

   }
  })


  gsap.from('img',{
    scrollTrigger:{
      trigger:"img",
      scroller:'.main',
      markers:true,
    }
  })

  