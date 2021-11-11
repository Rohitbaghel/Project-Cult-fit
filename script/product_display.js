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