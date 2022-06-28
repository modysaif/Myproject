let nav = document.querySelector(".nav-list")
let bars = document.querySelector('.fa-bars-staggered')
let up = document.querySelector('.scroll i')
let logo = document.querySelector('.nav-logo')
let home = document.querySelector('body')
let header = document.querySelector('.header')




bars.addEventListener('click' , function(){
    nav.classList.toggle('show')
    bars.classList.toggle('fa-xmark')

})



window.addEventListener("scroll" , function(){
    if(window.scrollY > 100){
        header.classList.add('sticky')
     
        up.classList.add('see')
        logo.style.color = "#00c3ff"
    }else if(window.scrollY < 100){

        header.classList.remove('sticky')
        up.classList.remove('see')
        logo.style.color = ""
      
    }
})

up.addEventListener('click' , function(){

    window.scrollTo({
        top: 0 ,
        behavior: "smooth",
    })
})