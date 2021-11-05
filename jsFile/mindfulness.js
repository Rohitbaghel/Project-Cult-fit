

let changePagetoTherapy = document.getElementById("th");

changePagetoTherapy.addEventListener("click", therapyPage)

function therapyPage() {
    window.location.href = "therapyPage.html";
}


// var innerDiv = document.getElementsByClassName("innerDiv");

// innerDiv.addEventListener("",small)

 
// function small(){

//     let headText = document.getElementsByClassName("head");
//     let descText = document.getElementsByClassName("des");
//     let numbText = document .getElementsByClassName ("numb")

//     headText.style.fontSize = "1.2vw"
//     descText.style.fontSize = ".5vw"
//     numbText.style.fontSize = ".9vw"
    
//     innerDiv.style.transition = "all .2s ease-in-out";
//     innerDiv.style.width = "96.5%"
//     innerDiv.style.height = "89.5%"
//     innerDiv.style.cursor = "pointer"
//     innerDiv.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"
// }

// function removeSmall(){
//     innerDiv.removeEventListener("mouseover", small);
// }

// innerDiv.addEventListener("mouseleave",removeSmall);



function sid(e){
    // console.log(e.target);

    var desc = document.getElementById("desc");

    desc.style.fontSize= ".87vw";
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


