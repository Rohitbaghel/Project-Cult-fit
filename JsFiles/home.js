let body = document.body;
let str = "";
let blur = document.getElementById("blur");
function login() {
    let a = document.getElementById("login")
    a.style.top = "30px";
    a.style.left = "33%";
    blur.setAttribute("style", "filter:blur(1.5px)")
}

function cancel() {
    document.getElementById("login").style.top = "-800px";
    blur.removeAttribute("style", "filter")
}

function random() {
    return Math.floor(Math.random() * 9);
}

let alertbox = document.getElementById("alt")
function num() {

    let number = document.getElementById("mobile").value;
    if (number.length === 10) {
        alertbox.textContent = null;
        for (i = 0; i < 4; i++) {
            str += random();
        }
        alertbox.textContent = "your otp is:" + str;
        let input = document.createElement("input");
        input.placeholder = "Enter your otp"
        input.id = "otp";
        let box = document.getElementById("phn");
        box.innerHTML = null;
        box.append(input);
        let div = document.getElementById("continue");
        div.innerHTML = null;
        let btn = document.createElement("button");
        div.appendChild(btn);
        btn.setAttribute("class", "continue");
        btn.textContent = "Confirm";
        btn.onclick = () => {
            let a = document.getElementById("otp").value;
            ch(a, str);
        }
    } else {
        alertbox.textContent = "Phone number must be at least 10 characters";

    }
}

function ch(otp, str) {

    if (otp === str) {
        let div = document.getElementById("continue");
        div.innerHTML = null;
        let btn = document.createElement("button");
        div.appendChild(btn);
        btn.setAttribute("class", "continue");
        btn.textContent = "Logout";
        let b= document.getElementById("login-txt");
        b.textContent = "Logout"
        btn.onclick = () => {
            dlt();
        }
        let a = document.createElement("a");
        document.getElementById("phn").style.display = "none";
        alertbox.textContent = null;
        condition();
        cancel();
    } else {
        alertbox.textContent = ("Check your otp");
    }
}

function condition() {
    
    let a = document.getElementById("continue");
    let b = a.textContent;

    if (b === "Logout") {

        if (localStorage.getItem("checklogin") === null) {
            localStorage.setItem("checklogin", JSON.stringify([]));
            let c = [];
            c.push("Logout");
            console.log(c)
            localStorage.setItem("checklogin", JSON.stringify(c));
        }

        // let logOut_btn = document.getElementById("continue");

        // logOut_btn.onclick = () => {
        //     dlt();
        // }
    }
}



function dlt() {
    let d = JSON.parse(localStorage.getItem("checklogin"));
    localStorage.setItem("checklogin", JSON.stringify([]));
    let e = [];
    localStorage.setItem("checklogin", JSON.stringify(e));
    window.location.href = "home.html"
}

//main 
let first = document.getElementById("bg1");
let second = document.getElementById("bg2");
let third = document.getElementById("bg3");

let four = document.getElementById("trans1");
let five = document.getElementById("trans2");
let six = document.getElementById("trans3");

let seven = document.getElementById("tr1");
let eight = document.getElementById("tr2");
let nine = document.getElementById("tr3");

let ten = document.getElementById("fit1");
let eleven = document.getElementById("fit2");
let twelve = document.getElementById("fit3");

let thirteen = document.getElementById("mind1");
let fourteen = document.getElementById("mind2");
let fifteen = document.getElementById("mind3");

let t1 = document.querySelector(`#bg1>div`);
let t2 = document.querySelector(`#bg2>div`);
let t3 = document.querySelector(`#bg3>div`);

let t11 = document.querySelector(`#trans1>div`);
let t22 = document.querySelector(`#trans2>div`);
let t33 = document.querySelector(`#trans3>div`);

function hide(a, b) {
    a.id = "hid";
    b.id = "hid";
}

function vis(x) {
    x.id = "dis";
}


function change(e) {
    let a = e.target.getAttribute("id");
    // console.log(a);
    let b = document.getElementById(a);
    b.style.width = "60%";
    let x = document.querySelector(`#${a}>div`);
    console.log(x);
    vis(x);

    if (a === "bg1") {
        second.style.width = "20%";
        third.style.width = "20%";
        hide(t2, t3);

    } else if (a === "bg2") {
        first.style.width = "20%";
        third.style.width = "20%";
        hide(t1, t3);


    } else if (a === "bg3") {
        first.style.width = "20%";
        second.style.width = "20%"
        hide(t2, t1);

    }

}

function changet(e) {
    let a = e.target.getAttribute("id");
    // console.log(a);
    let b = document.getElementById(a);
    b.style.width = "60%";
    let x = document.querySelector(`#${a}>div`);
    console.log(x)
    vis(x);

    if (a === "trans1") {
        five.style.width = "20%";
        six.style.width = "20%";
        hide(t22, t33);

    } else if (a === "trans2") {
        four.style.width = "20%";
        six.style.width = "20%";
        hide(t11, t33);


    } else if (a === "trans3") {
        four.style.width = "20%";
        five.style.width = "20%"
        hide(t22, t11);

    }

}

let t21 = document.querySelector(`#tr1>div`);
let t23 = document.querySelector(`#tr2>div`);
let t24 = document.querySelector(`#tr3>div`);

function changeu(e) {
    let a = e.target.getAttribute("id");
    console.log(a);
    let b = document.getElementById(a);
    b.style.width = "60%";
    let x = document.querySelector(`#${a}>div`);
    vis(x);

    if (a === "tr1") {
        eight.style.width = "20%";
        nine.style.width = "20%";
        hide(t23, t24);

    } else if (a === "tr2") {
        seven.style.width = "20%";
        nine.style.width = "20%";
        hide(t21, t24);


    } else if (a === "tr3") {
        seven.style.width = "20%";
        eight.style.width = "20%"
        hide(t21, t23);

    }

}

let t25 = document.querySelector(`#fit1>div`);
let t26 = document.querySelector(`#fit2>div`);
let t27 = document.querySelector(`#fit3>div`);

function changefit(e) {
    let a = e.target.getAttribute("id");
    console.log(a);
    let b = document.getElementById(a);
    b.style.width = "60%";
    let x = document.querySelector(`#${a}>div`);
    vis(x);

    if (a === "fit1") {
        eleven.style.width = "20%";
        twelve.style.width = "20%";
        hide(t26, t27);

    } else if (a === "fit2") {
        ten.style.width = "20%";
        twelve.style.width = "20%";
        hide(t25, t27);


    } else if (a === "fit3") {
        ten.style.width = "20%";
        eleven.style.width = "20%";
        hide(t25, t26);

    }

}

let t28 = document.querySelector(`#mind1>div`);
let t29 = document.querySelector(`#mind2>div`);
let t30 = document.querySelector(`#mind3>div`);

function changemind(e) {
    let a = e.target.getAttribute("id");
    console.log(a);
    let b = document.getElementById(a);
    b.style.width = "60%";
    let x = document.querySelector(`#${a}>div`);
    vis(x);

    if (a === "mind1") {
        fourteen.style.width = "20%";
        fifteen.style.width = "20%";
        hide(t29, t30);

    } else if (a === "mind2") {
        thirteen.style.width = "20%";
        fifteen.style.width = "20%";
        hide(t28, t30);


    } else if (a === "mind3") {
        thirteen.style.width = "20%";
        fourteen.style.width = "20%";
        hide(t28, t29);

    }

}
let div = document.getElementById("vedio-icon");
let vedio = document.getElementById("vedio")
function sound() {

    div.textContent = "volume_up";
    vedio.muted = false;
    div.onclick = () => {
        closeSound();
    }
}

function closeSound() {
    div.textContent = " volume_off";
    vedio.muted = true;
    div.onclick = () => {
        sound();
    }
}

function locate() {
    console.log("enter")
    let a = document.getElementById("select-location");
    a.style.visibility = "visible";
    blur.setAttribute("style", "filter:blur(2.5px)");
    let b = document.getElementById("popularcity");
    document.getElementById("container").onclick = () => { locate_cancel() }
}
function locate_cancel() {
    blur.removeAttribute("style", "filter");
    let a = document.getElementById("select-location");
    a.style.visibility = "hidden";
}

let a = JSON.parse(localStorage.getItem("currentcity"));
let location_div = document.getElementById("login-location");
location_div.textContent = a[0];
console.log(location_div)

function txt_select(e) {
    let a = e.target;
    console.log(a);
    let div = document.getElementById("login-location");
    div.textContent = a.textContent;
    if (localStorage.getItem("currentcity") === null) {
        localStorage.setItem("currentcity", JSON.stringify([]))
    }
    let dt = JSON.parse(localStorage.getItem("current"));
    dt = [];
    dt.push(a.textContent);
    console.log(dt);
    localStorage.setItem("currentcity", JSON.stringify(dt));
}
function cart() {
    let a = document.getElementById("cart-div");
    console.log(a)
    let btn = document.getElementById("cart-icon");
    a.style.visibility = "visible";
    btn.onclick = () => { cart_null() };
}
function cart_null() {
    let a = document.getElementById("cart-div");
    console.log(a)
    a.style.visibility = "hidden";
    let btn = document.getElementById("cart-icon");
    btn.onclick = () => { cart() };
}

// function v() {
//     let logOut_btn = document.getElementById("continue");

//     if (logOut_btn.textContent === "Logout") {
//         logOut_btn.onclick = () => {
//             dlt();
//         }
//     }
// }

// let set_int=setInterval(v,1000);


