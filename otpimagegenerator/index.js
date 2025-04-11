btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let otp=""
for(i=1;i<=4;i++){
    let otpgenerator=Math.floor(Math.random()*10)
    otp+=otpgenerator
}
document.getElementById("otps").innerText=otp
console.log(otp)
})


const allimages=["https://miro.medium.com/v2/resize:fit:1400/1*bgcutrYqFA7HBsIwYjPPJw.jpeg","https://cdn.educba.com/academy/wp-content/uploads/2019/10/features-of-javascript.png",
    "https://lh3.googleusercontent.com/jPjJs67i9CoBlXacdGwTiuAAwA2-zo13sQ2g54XBZlHvMkhyWeY8Ci7xNS_fVX5vscP-GjEJBWsXPLaag66ICVsvTTi3WgUFgOeI4QKwDR_lVfjjVNx8EwfPP5-tPbO1Y2WOv2wlfC7iy6R1fHWE6cM_PJiEosAENBASr1MdWJnUVDiObRytoyeOXuWsrA"
]

btn1=document.getElementById("img")
result=document.getElementById("images")
btn1.addEventListener("click",()=>{
    result.innerHTML=""
    let indeximages=Math.floor(Math.random()*allimages.length)
         let resultimg=allimages[indeximages]
        let img1=document.createElement("img")
        img1.setAttribute("src",resultimg)
        result.append(img1)
})


