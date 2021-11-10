let slide = document.getElementById('slide');
let image = [
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/a1c3db64-2591-4a1a-92d0-cf4a5c6a390d.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/cc558ed2-937b-421b-a483-a432fcfe425c.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/50791be6-3fe4-4c3c-89fd-79aefa2813a1.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/b175d2ca-82b0-47c7-8a6d-216aa63a6df2.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/65c5a3a7-a418-4ca9-afe6-3ad3e6bc2b51.png"
]
function startslideshow(){
    let counter = 0;
    let img = document.createElement("img");
    img.src =image[0]
    slide.append(img)
    counter++
    let interval = setInterval(()=>{
        slide.innerHTML = null;

        if(counter == image.length){
            counter = 0;
        }
        let img = document.createElement("img");
        img.src =image[counter]
        slide.append(img)
        counter++
    },3000)
}
startslideshow()