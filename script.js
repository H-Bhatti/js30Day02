setInterval(() =>{


    let secHand = document.querySelector(".second-hand")
    let minHand = document.querySelector(".min-hand")
    let hourHand = document.querySelector(".hour-hand")
    
    let now = new Date()
    let sec = now.getSeconds();
    let secDegree = ((sec/60)*360)+90

    let min = now.getMinutes();
    let minDegree = ((min/60)*360)+90

    let hour=now.getHours();
    let hourDegree=((hour/24)*360)+90


    //transition property on css for seconds
    secHand.style.transform=`rotate(${secDegree}deg)`
    // console.log(sec)


    //transition property on css for min
    minHand.style.transform=`rotate(${minDegree}deg)`
    // console.log(min)

    // transition property on css for hour
    hourHand.style.transform=`rotate(${hourDegree}deg)`
    // console.log(`hours = ${hour}`)



},1000)
