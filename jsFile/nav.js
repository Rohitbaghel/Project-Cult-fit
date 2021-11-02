let body = document.body;
let str = "";
function login() {
    let a=document.getElementById("login")
    a.style.top = "30px";
    a.style.left="33%";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

}

function cancel() {
    document.getElementById("login").style.top = "-800px";
    body.style.backgroundColor = "white";
}

function random() {
    return Math.floor(Math.random() * 9);
}


function num() {

    let number = document.getElementById("mobile").value;
    if (number.length === 10) {
            for (i = 0; i < 4; i++) {
                str += random();
            }
            alert("your otp is:" + str);
            let input = document.createElement("input");
            input.placeholder = "Enter your otp"
            input.id = "otp";
            let box = document.getElementById("ph");
            box.innerHTML = null;
            box.append(input);
            let div = document.getElementById("continue");
            div.innerHTML=null;
            let btn = document.createElement("button");
            div.appendChild(btn);
            btn.setAttribute("class", "continue");
            btn.textContent="Confirm";
            btn.onclick=()=>{
                let a= document.getElementById("otp").value;
                ch(a,str);
            }
    } else {
        alert("Phone number must be at least 10 characters")
    }
}

function ch(otp,str) {
   if(otp===str){
       cancel();
   }else{
       alert("Check your otp");
   }
}