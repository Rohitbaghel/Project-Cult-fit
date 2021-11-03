let first = document.getElementById("bg1");
    let second = document.getElementById("bg2");
    let third = document.getElementById("bg3");

    let t1= document.querySelector(`#bg1>div`);
    let t2= document.querySelector(`#bg2>div`);
    let t3= document.querySelector(`#bg3>div`);

    let four = document.getElementById("trans1");
    let five = document.getElementById("trans2");
    let six = document.getElementById("trans3");

    let seven = document.getElementById("tr1");
    let eight = document.getElementById("tr2");
    let nine = document.getElementById("tr3");
    // let t11= document.querySelector(`#trans1>div`);
    // let t22= document.querySelector(`#trans2>div`);
    // let t33= document.querySelector(`#trans3>div`);

    function hide(a,b) {
        a.id="hid";
        b.id="hid";
    }

    function vis(x){
        x.id="dis";
    }


    function change(e) {
        let a = e.target.getAttribute("id");
        console.log(a);
        let b = document.getElementById(a);
        b.style.width = "60%";
        let x=document.querySelector(`#${a}>div`);
        vis(x);
       
        if (a === "bg1") {
            second.style.width = "20%";
            third.style.width = "20%";
           hide(t2,t3);

        }else if (a === "bg2") {
            first.style.width = "20%";
            third.style.width = "20%";
            hide(t1,t3);

           
        }else if (a === "bg3") {
            first.style.width = "20%";
            second.style.width = "20%"
            hide(t2,t1);

        }

    }

    function changet(e) {
        let a = e.target.getAttribute("id");
        console.log(a);
        let b = document.getElementById(a);
        b.style.width = "60%";
        // let x=document.querySelector(`#${a}>div`);
        // vis(x);
       
        if (a === "trans1") {
            five.style.width = "20%";
            six.style.width = "20%";
        //    hide(t22,t33);

        }else if (a === "trans2") {
            four.style.width = "20%";
            six.style.width = "20%";
            // hide(t11,t33);

           
        }else if (a === "trans3") {
            four.style.width = "20%";
            five.style.width = "20%"
            // hide(t22,t11);

        }

    }

    function changeu(e) {
        let a = e.target.getAttribute("id");
        console.log(a);
        let b = document.getElementById(a);
        b.style.width = "60%";
        // let x=document.querySelector(`#${a}>div`);
        // vis(x);
       
        if (a === "tr1") {
            eight.style.width = "20%";
            nine.style.width = "20%";
        //    hide(t22,t33);

        }else if (a === "tr2") {
            seven.style.width = "20%";
            nine.style.width = "20%";
            // hide(t11,t33);

           
        }else if (a === "tr3") {
            seven.style.width = "20%";
            eight.style.width = "20%"
            // hide(t22,t11);

        }

    }