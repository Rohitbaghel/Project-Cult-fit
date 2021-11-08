

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



