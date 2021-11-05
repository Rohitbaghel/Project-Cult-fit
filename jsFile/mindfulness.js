

let changePagetoTherapy = document.getElementById("th");

changePagetoTherapy.addEventListener("click", therapyPage)

function therapyPage() {
    window.location.href = "therapyPage.html";
}


var innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover",small)

 
function small(){

    let headText = document.getElementById("head");
    let descText = document.getElementById("des");
    let numbText = document .getElementById ("numb")

    headText.style.fontSize = "1.2vw"
    descText.style.fontSize = ".75vw"
    numbText.style.fontSize = ".9vw"
    
    innerDiv.style.transition = "all .2s ease-in-out";
    innerDiv.style.width = "96.5%"
    innerDiv.style.height = "89.5%"
    innerDiv.style.cursor = "pointer"
    innerDiv.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"
}

function removeSmall(){
    innerDiv.removeEventListener("mouseover", small);
}

innerDiv.addEventListener("mouseleave",removeSmall);




