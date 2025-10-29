let APIKEY = "0dd6d2078e4745b699d1a1f7b40bd87d";
let url = "https://newsapi.org/v2/everything";
let searchI=document.getElementById("searchI")
let newscontainer=document.getElementById("newscontainer")
let loading=document.getElementById("loading")
let hide=document.getElementById("hide")

let displaydata=(data)=>{
    console.log(data)
    let div=document.createElement("div")
    div.classList.add("cards")
    let image=document.createElement("img")
    image.src=data.urlToImage
    image.style.height="50%"
    image.style.width="100%" 
    image.style.borderRadius="10px"
    div.appendChild(image)

    let h3=document.createElement("h3")
    h3.classList.add("author")
    h3.innerHTML=data.author;
    div.appendChild(h3)

    // let p=document.createElement("P")
    // p.classList.add("content")
    // p.innerHTML=data.content;
    // div.appendChild(p)
    let p=document.createElement("P")
    p.classList.add("title")
    p.innerHTML=data.title;
    div.appendChild(p)

    let a=document.createElement("a")
    a.classList.add("viewmore")
    a.innerHTML="viewmore";
    a.href=data.url;
    a.target="_blank"
    div.appendChild(a)
    newscontainer.appendChild(div)
}
let alldata = (data) => {
    if (!data || data.length === 0) {
        // newscontainer.innerHTML=hide.innerHTML;
        hide.style.display="block";
    }
    else{
        hide.style.display="none";
        for (let item of data) {
        displaydata(item);
    }

    }
};
let fetchData = async (search) => {
    try {
        loading.style.display="block";
        let data = await fetch(`${url}?q=${search}&apiKey=${APIKEY}`);
        let jsondata = await data.json();
        loading.style.display="none";
        alldata(jsondata.articles);
    } catch (error){
        console.log(error);
    }
};
window.onload=()=>{
    fetchData("news")
}
searchI.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        newscontainer.innerHTML=""
        fetchData(searchI.value)
        searchI.value=""  
    }
})