function showproduct() {

    let flex_div = document.getElementById("flex")
    let product = JSON.parse(localStorage.getItem("display_product"))
    console.log(product)

    product.forEach((product) => {
        // grid-1
        let img_div = document.getElementById("grid1")
        let img = document.createElement("img")
        img.src = product.img
        img_div.append(img)
        // grid-1

        // add to cart 
        let adbtn = document.getElementById("addtocart")
        adbtn.onclick = () => {
            addToCartBox(product)
            showProduct();
        }

        // add to cart 


        // grid-2
        let grid2 = document.getElementById("grid2")
        flex_div.append(img_div, grid2)
        let brand_name = document.getElementById("brand")
        brand_name.textContent = product.brand
        let name = document.getElementById("name")
        name.textContent = product.name
        let price_div = document.getElementById("price_div")
        let price = document.getElementById("price")
        price.textContent = product.price
        let original_p = document.getElementById("mainprice")
        original_p.textContent = product.mainPrice
        let discount = document.getElementById("discount")
        discount.textContent = product.discount


        // grid-2
    })

}

showproduct()



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

function category() {
    alert("Size Available")
}
function category1() {
    alert("Size Not Available Choose Another Size")
}
if (localStorage.getItem("mens_store") == null) {
    localStorage.setItem("mens_store", JSON.stringify([]))
}

function addToCartBox(pr) {
    let product = JSON.parse(localStorage.getItem("mens_store"))
    // product= []
    product.push(pr)
    localStorage.setItem("mens_store", JSON.stringify(product))
    console.log(product)
}

function checkpincode() {
    let pincode = document.getElementById("pincode").value
    if (pincode.length == 6) {
        alert("Delivery is available to this address")
    } else {
        alert("Invalid pincode or Delivey not available")
    }
}

//cart one
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



function backtohome() {
    window.location.href = "../html/home.html"
}



function showProduct() {

    let sum=0;
    let cart_items = document.getElementById("cart-container");
    cart_items.textContent=null;
    let product_data = JSON.parse(localStorage.getItem("mens_store"));
    product_data.forEach((a) => {
        let img = document.createElement("img");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let f_div1 = document.createElement("div");
        let price = document.createElement("p");
        let name = document.createElement("p")
        let plus_minus= document.createElement("div")
        let add= document.createElement("div");
        let sub= document.createElement("div");
        sub.onclick=()=>{
            dlt(a);
        }
        add.onclick=()=>{
            addToCartBox(a)
            showProduct();
        }
        add.textContent="+";
        sub.textContent="-";
        plus_minus.append(add,sub);
        plus_minus.id="plus_minus";
        img.src = a.img;
        
        let p=a.price;
        let p1="";
        for(let i=1;i<p.length;i++){
            p1 +=p[i];
        }
        console.log(p1);
        sum+= +p1;
        price.textContent = a.price;
        name.textContent = a.name;
        div1.append(img);
        div2.append(name, price,plus_minus);

        f_div1.append(div1, div2);
        f_div1.id="f_div1"
        cart_items.append(f_div1);
        
    });
    let bt= document.createElement("button");
    bt.textContent="Pay ₹"+sum;
    bt.id="total_btn"
    cart_items.append(bt);
    bt.onclick=()=>{
        let d = JSON.parse(localStorage.getItem("checklogin"));
        if(d[0] ==="Logout"){
            window.location.href = "pay.html";
        }else{
            alert("Please Login");
            window.location.href = "home.html"
        }
    }
}

function dlt(a){
    let r=[];
    let c=0;
    let items = JSON.parse(localStorage.getItem("mens_store"));
    console.log(items);
    for(let i=0; i<items.length; i++){
        if(items[i].name===a.name && c===0){
            c++;
            continue;
        }else{

            r.push(items[i]);
        }
    }
    
    localStorage.setItem("mens_store", JSON.stringify(r));
   
    showProduct()
}
