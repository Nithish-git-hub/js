colors=document.querySelector("button")
colors.addEventListener("click",()=>{
    let hexadetails="abcdef0123456789"
let hexa="#"
for(i=1;i<=6;i++){
    let colorchange=Math.floor(Math.random()*hexadetails.length)
    hexa+=hexadetails[colorchange]
}
document.body.style.backgroundColor=hexa
})
