var navbar=document.querySelector('nav');
var menu =document.querySelector('ul');
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add('sticky')
    }
    else{
        (window.pageYOffset >= menu.offsetTop)
            navbar.classList.remove('sticky')
        
    }
}
