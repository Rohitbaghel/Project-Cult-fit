// arrow=>
let mindFitBox = document.getElementById("eatFitImgBox")
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