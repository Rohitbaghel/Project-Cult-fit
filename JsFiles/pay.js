let parent = document.body;
let btn = document.querySelector("#pay")
console.log(btn);
btn.addEventListener("click", makepay);
function cardpay() {
    let card = document.getElementById("card")
    card.style.color = "brown"
    let cod = document.getElementById("cod")
    cod.style.color = "black"
    btn.innerText = "MAKE PAYMENT"
}
function cod() {
    let card = document.getElementById("card")
    card.style.color = "black"
    let cod = document.getElementById("cod")
    cod.style.color = "brown"
    btn.innerText = "ORDER"
}
function makepay() {
    let cardnum = form.cardnum.value;
    let cvv = form.cvv.value;
    let Date = form.date.value;
    if (btn.innerText == "MAKE PAYMENT") {
        if (cardnum.length == 0 && cvv.length == 0 && Date.length == 0) {
            alert("Please fill the card detail")
        }
        else if ((Date.length != 7) && (cvv.length != 0)) {
            alert("Date Should be in 12/2021 formate")
        }
        else if ((cvv.length != 3) && (cardnum.length != 0)) {
            alert("CVC should be only 3 digit")
        }
        else if (cardnum.length != 14) {
            alert("Card no. should be only 14 digit")
        }
        else {
            let div = document.createElement('div');
            parent.innerText = null;
            let img = document.createElement("img")
            img.src = "https://1.bp.blogspot.com/-TUnIV6lCpUI/Ug5AjWt-L5I/AAAAAAAABRY/X5083DNXw28/s1600/LoadingWait.gif";
            div.append(img)
            parent.append(div);
            div.setAttribute("id", "alt");

            setTimeout(function () {
                let img1 = document.createElement("img")
                img1.src = "https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif";
                div.append(img1)
                parent.append(div);
                div.setAttribute("id", "alt");
            },2000);

            setTimeout(function () {

                window.location.href = "../html/home.html";
            }, 4000);
        }
    } else if (btn.innerText == "ORDER") {
        let div = document.createElement('div');
        parent.innerText = null;
        let img = document.createElement("img")
        img.src = "https://1.bp.blogspot.com/-TUnIV6lCpUI/Ug5AjWt-L5I/AAAAAAAABRY/X5083DNXw28/s1600/LoadingWait.gif";
        div.append(img)
        parent.append(div);
        div.setAttribute("id", "alt");
        //   div.textContent="PAYMENT SUCESSFUL"

        setTimeout(function () {
            div.innerHTML= null;
            let img1 = document.createElement("img")
            img1.src = "https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif";
            div.append(img1)
            parent.append(div);
            div.setAttribute("id", "alt1");
        },2000);


        setInterval(function () {
            window.location.href = "../html/home.html";
        }, 4000);
    } else {
        alert("Chose the payment option")
    }
}