function showproduct(){

    let flex_div = document.getElementById("flex")
    let product= JSON.parse(localStorage.getItem("display_product"))
    console.log(product)
    
    product.forEach((product)=>{
        // grid-1
        let img_div= document.getElementById("grid1")
        let img = document.createElement("img")
        img.src= product.img
        img_div.append(img)
        // grid-1

// add to cart 
let adbtn= document.getElementById("addtocart")
adbtn.onclick = ()=>{
    addToCartBox(product)
}

// add to cart 


        // grid-2
        let grid2 = document.getElementById("grid2")
        flex_div.append(img_div,grid2)
let brand_name = document.getElementById("brand")
brand_name.textContent = product.brand
let name =document.getElementById("name")
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


function category(){
   alert("Size Available")
}
function category1(){
   alert("Size Not Available Choose Another Size")
}
if(localStorage.getItem("mens_store") == null){
    localStorage.setItem("mens_store",JSON.stringify([]))
}

function addToCartBox(pr){
    let product =JSON.parse(localStorage.getItem("mens_store")) 
    // product= []
    product.push(pr)
    localStorage.setItem("mens_store",JSON.stringify(product))
    console.log(product)
}

function checkpincode(){
    let pincode = document.getElementById("pincode").value
    if(pincode.length ==6){
        alert("Delivery is available to this address")
    }else{
        alert("Invalid pincode or Delivey not available")
    }
}