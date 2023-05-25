var nav=document.querySelector('nav');
var ul=document.querySelector('ul');
window.onscroll = function(){
    if(window.pageYOffset >= ul.offsetTop){
        nav.classList.add('sticky')
    }
}

gsap.to('.center-l',{
      onStart:function(){
        $(".center-l").textillate({in:{effect: 'rollIn'}})
        // $(".center-l").textillate({out:{effect: 'foldUnfold',sync:true}})
        
      }
    })
    

    $('.tlt').textillate({ in: { effect: 'rollIn' } });
    