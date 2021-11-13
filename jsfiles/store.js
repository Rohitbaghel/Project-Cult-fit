let slideshow1 = document.getElementById('slideshow123');
let image = [
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/a1c3db64-2591-4a1a-92d0-cf4a5c6a390d.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/cc558ed2-937b-421b-a483-a432fcfe425c.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/50791be6-3fe4-4c3c-89fd-79aefa2813a1.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/b175d2ca-82b0-47c7-8a6d-216aa63a6df2.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/65c5a3a7-a418-4ca9-afe6-3ad3e6bc2b51.png"
]
function startslideshow(){
    let counter = 0;
    let img = document.createElement("img");
    img.src =image[0]
    slideshow1.append(img)
    counter++
    let interval = setInterval(()=>{
        slideshow1.innerHTML = null;

        if(counter == image.length){
            counter = 0;
        }
        let img = document.createElement("img");
        img.src =image[counter]
        slideshow1.append(img)
        counter++
    },3000)
}
startslideshow()

function mens_store(){
    window.location.href = "../html/mens-store.html"
}

function mensPage(){
    window.location.href = "../html/mens-store.html"
}

let a = JSON.parse(localStorage.getItem("currentcity"));
let location_div =document.getElementById("location");
location_div.textContent=a[0];
// console.log(location_div)



function backtohome(){
    window.location.href = "../html/home.html"
}

// arrow=>
let mindFitBox = document.getElementById("FitImgBox")
var c = 0;
mindFitBox.addEventListener("click", () => {
    
    let dAB = document.getElementById("imgMf");
        c += 180;
    dAB.style.transform = `rotate(${c}deg)`;
    dAB.style.transition = " 0.2s linear";
    
    
})

let imgMf = document.getElementById("imgMf")

imgMf.addEventListener("click", () => {

    let dAB = document.getElementById("imgMf")
    c += 180
    dAB.style.transform = `rotate(${c}deg)`
    dAB.style.transition = " 0.1s linear";
})




// popUp=>
var d = 0;

function myFunction() {
   
    let popup = document.getElementById("myPopup");
    d++;
    if(d%2==1){
        popup.style.display = "block"
        
    }
    if (d % 2 == 0) {
        popup.style.display = "none"
    }
    
    
}

function myFunction() {

    let popup = document.getElementById("myPopup");
    d++;
    if (d % 2 == 1) {
        popup.style.display = "block"

    }
    if (d % 2 == 0) {
        popup.style.display = "none"
    }


}

// arrow=>


// FAQs
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

// FAQs
