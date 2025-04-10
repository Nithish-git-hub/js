let container=document.getElementById("container")
for(i=1;i<=7;i++){
    let btn=document.createElement("button")
    btn.className="buttons";
    let colorname=""
    if(i==1){
        colorname=" Violet"
    }
    else if(i==2){
        colorname="indigo"
    }
    else if(i==3){
        colorname="blue"
    }
    else if(i==4){
        colorname="green"
    }
    else if(i==5){
        colorname="yellow"
    }
    else if(i==6){
        colorname="orange"
    }
    else if(i==7){
        colorname="red"
    }
    btn.textContent=colorname.toUpperCase();
    btn.style.backgroundColor=colorname;

    btn.addEventListener("click",()=>{
        document.body.style.backgroundColor=colorname
    })

    container.appendChild(btn)
}
