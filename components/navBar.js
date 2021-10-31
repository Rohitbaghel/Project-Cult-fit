function navBar() {

    return `<div id="navBar">
        <div id="nameBox">
            <div id="imgbox">
                <img src="https://icon-library.com/images/food-app-icon/food-app-icon-12.jpg" class="img">
            </div>
            <div id="name">
                Food Plaza
            </div>
        </div>
        <div id="serachBox">
            <input type="text" placeholder="Search food" id="inpFood">
            <button id="btn">Search</button>
        </div>
        <div id="day">
            <a href="reciofDay.html">Get receipe if the day</a>
        </div>
        <div id="latest">
            <a href="latestRec.html "> Get Latest Receipe</a>
        </div>
    </div>`
}
export default navBar