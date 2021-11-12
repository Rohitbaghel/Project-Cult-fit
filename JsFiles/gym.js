   //Timer Part =>
//Set the date we're counting down to
var countDownDate = new Date("Nov 3, 2021 15:37:25").getTime();
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


// -----video onj hover
const clip = document.querySelectorAll('.clip')
for(let i=0;i<clip.length;i++){
    clip[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })

    clip[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}




// -----popup from navbar
let changePagetoTherapy = document.getElementById("th");

changePagetoTherapy.addEventListener("click", therapyPage)

function therapyPage() {
    window.location.href = "therapyPage.html";
}



function sid(e){
    // console.log(e.target);

    var desc = document.getElementById("desc");

    desc.style.fontSize= ".89vw";
    desc.style.transition= "all .2s ease-in-out";
    // console.log(desc)

}


function sidLeave(e) {
    // console.log(e.target);
    

    
    var desc = document.getElementById("desc");

    desc.style.fontSize = ".9vw";
    desc.style.transition = "all .2s ease-in-out";
    
    // console.log(desc)

}




// popUp=>
var d = 0;

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



let mindFitBox = document.getElementById("mindFitImgBox")
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
    dAB.style.transition = " 0.2s linear";
})






