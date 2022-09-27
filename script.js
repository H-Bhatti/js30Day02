const secHand = document.querySelector(".second-hand")

let setDate = () =>{
    
    let now = new Date()
    let sec = now.getSeconds();
    let secDegree = ((sec/60)*360)+90


    //transition property on css for seconds
    secHand.style.transform=`rotate(${secDegree}deg)`
    console.log(sec)
}

setInterval(setDate,1000)