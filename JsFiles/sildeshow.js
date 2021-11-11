var slide=document.getElementById("slider")
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var btn3=document.getElementById("btn3")

btn1.addEventListener("click",slider1)
btn2.addEventListener("click",slider2)
btn3.addEventListener("click",slider3)

function slider1(){
        slide.style.transform="translateX(0px)"
        btn1.classList.add("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
    }

function slider2 (){
        slide.style.transform="translateX(-33.33%)"
        btn2.classList.add("active")
        btn1.classList.remove("active")
        btn3.classList.remove("active")
    }

function slider3(){
        slide.style.transform="translateX(-66.66%)"
        btn3.classList.add("active")
        btn1.classList.remove("active")
        btn2.classList.remove("active")
    }

// let interval=
setTimeout(slider2,2000)
setTimeout(slider3,4000)

setInterval(slideshow,6000)
function slideshow(){
    setTimeout(slider1,)
    setTimeout(slider2,2000)
    setTimeout(slider3,4000)
}


