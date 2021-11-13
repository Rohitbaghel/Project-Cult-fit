var images = ["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/ab895734-b83e-49a7-9d1a-6ebb2991d431.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/3b1a836e-7d27-4d4d-b511-0e22426a63d0.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/81d7e0db-9568-4f73-ac8f-90a6f0855622.png",
];
let interval;
let container = document.getElementById("bestDealBox");
function startSlideShow() {
    let counter = 0;
    let img = document.createElement("img");
    img.style.height="250px";
    img.style.width="200%";
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
        img.style.height="250px";
        img.style.width="200%";
        img.setAttribute("class", "img");
        img.src = images[counter];
        container.append(img);
        counter++;
    }, 5000)
}
startSlideShow();


const ques = document.querySelectorAll(".sid");
var count = 0;
ques.forEach((el) => {
    el.addEventListener("click", event =>{
        count += 180
        const downArrow = el.nextElementSibling;
                downArrow.style.transform = `rotate(${count}deg)`
        // downArrow.style.transition = " 0.2s ease-in-out";
    })
})

//feedback=>
let yes = document.querySelectorAll(".pinkC");
yes.forEach((el) => {
    el.addEventListener("click", event =>{
        el.style.opacity =  "0.2";
        el.style.cursor= "not-allowed";
        alert("Thanks for your feedback")
    })
})



// updateLocation
updateLocation()
function updateLocation(){
    let Currentcity = JSON.parse(localStorage.getItem("currentcity"));
    console.log('Currentcity:', Currentcity)
    
    if(Currentcity===null){
        document.getElementById("nameCity").innerText = "location";
    }else{

        document.getElementById("nameCity").innerText = Currentcity;
    }
}