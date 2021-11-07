
//Timer Part =>
//Set the date we're counting down to 

var countDownDate = new Date("Nov 15, 2021 15:37:25").getTime();
// console.log(countDownDate);
//Update the count down every 1 sec

var x = setInterval(function () {

    //get today's date and time
    var now = new Date().getTime();
    // console.log(now);
    //find the distance net now and tne count down date
    var distance = countDownDate - now;
    // console.log(distance);
    //time calculations for hours,min,sec

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //output the result in an element

    let hr = document.getElementById("hrDiv");
    hr.textContent = hours;
    let min = document.getElementById("minDiv");
    min.textContent = minutes;
    let sec = document.getElementById("secDiv");
    sec.textContent = seconds;
}, 1000)



//slideShow=>

var images = ["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/ab895734-b83e-49a7-9d1a-6ebb2991d431.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/3b1a836e-7d27-4d4d-b511-0e22426a63d0.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/81d7e0db-9568-4f73-ac8f-90a6f0855622.png",
];
let interval;

let container = document.getElementById("bestDealBox");
function startSlideShow() {
    let counter = 0;
    let img = document.createElement("img");
    img.setAttribute("class", "img")
    img.src = images[counter];
    container.append(img);
    counter++;

    interval = setInterval(function () {
        container.innerHTML = null;
        if (counter == images.length) {
            counter = 0;
        }
        let img = document.createElement("img");
        img.setAttribute("class", "img");
        img.src = images[counter];
        container.append(img);
        counter++;
    }, 5000)


}

startSlideShow();




let changePagetoMind = document.getElementById("mf");

changePagetoMind.addEventListener("click", mindPage)

function mindPage() {
    window.location.href = "mindfulnessPage.html";
}


//accordion=>

const ques = document.querySelectorAll(".sid");
var count = 0;
ques.forEach((el) => {
    el.addEventListener("click", event =>{
        count += 180
        const downArrow = el.nextElementSibling;
       
           
                
                downArrow.style.transform = `rotate(${count}deg)`
                // downArrow.style.padding = "0 0 0 0"
    })
})


let mindFitBox = document.getElementById("mindFitImgBox")
var c = 0;
mindFitBox.addEventListener("click", () => {
    
    let dAB = document.getElementById("imgMf");
        c -= 180;
    dAB.style.transform = `rotate(${c}deg)`;
    dAB.style.transition = " 0.2s ease-in-out";
     
})
let imgMf = document.getElementById("imgMf")

imgMf.addEventListener("click", () => {

    let dAB = document.getElementById("imgMf")
    c -= 180
    dAB.style.transform = `rotate(${c}deg)`
     
})