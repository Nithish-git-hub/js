// // let APIKEY = "0dd6d2078e4745b699d1a1f7b40bd87d";
// // let url = "https://newsapi.org/v2/everything";
// let APIKEY = "pub_b66c6fe17e3d434a986dd658e6e5814b";
// let url = "https://newsdata.io/api/1/latest";
// let searchI=document.getElementById("searchI")
// let newscontainer=document.getElementById("newscontainer")
// let loading=document.getElementById("loading")
// let hide=document.getElementById("hide")

// let displaydata=(data)=>{
//     console.log(data)
//     let div=document.createElement("div")
//     div.classList.add("cards")
//     let image=document.createElement("img")
//     image.src=data.urlToImage
//     image.style.height="50%"
//     image.style.width="100%" 
//     image.style.borderRadius="10px"
//     div.appendChild(image)

//     let h3=document.createElement("h3")
//     h3.classList.add("author")
//     h3.innerHTML=data.author;
//     div.appendChild(h3)

//     // let p=document.createElement("P")
//     // p.classList.add("content")
//     // p.innerHTML=data.content;
//     // div.appendChild(p)
//     let p=document.createElement("P")
//     p.classList.add("title")
//     p.innerHTML=data.title;
//     div.appendChild(p)

//     let a=document.createElement("a")
//     a.classList.add("viewmore")
//     a.innerHTML="viewmore";
//     a.href=data.url;
//     a.target="_blank"
//     div.appendChild(a)
//     newscontainer.appendChild(div)
// }
// let alldata = (data) => {
//     if (!data || data.length === 0) {
//         // newscontainer.innerHTML=hide.innerHTML;
//         hide.style.display="block";
//     }
//     else{
//         hide.style.display="none";
//         for (let item of data) {
//         displaydata(item);
//     }

//     }        
// };
// let fetchData = async (search) => {
//     try {
//         loading.style.display="block";
//         let data = await fetch(`${url}?q=${search}&apiKey=${APIKEY}`);
//         let jsondata = await data.json();
//         loading.style.display="none";
//         alldata(jsondata.articles);
//     } catch (error){
//         console.log(error);
//     }
// };
// window.onload=()=>{
//     fetchData("news")
// }
// searchI.addEventListener("keydown",(event)=>{
//     if(event.key=="Enter"){
//         newscontainer.innerHTML=""
//         fetchData(searchI.value)
//         searchI.value=""  
//     }
// })


// API
let APIKEY = "pub_b66c6fe17e3d434a986dd658e6e5814b";
let url = "https://newsdata.io/api/1/latest";

let searchI = document.getElementById("searchI");
let newscontainer = document.getElementById("newscontainer");
let loading = document.getElementById("loading");
let hide = document.getElementById("hide");

document.addEventListener("DOMContentLoaded", () => {
  const displaydata = (data) => {
    // guard if data missing
    const div = document.createElement("div");
    div.classList.add("cards");

    const image = document.createElement("img");
    // newsdata uses different image field names - try a few fallbacks
    image.src = data.image_url || data.image || data.thumbnail || "";
    image.style.height = "50%";
    image.style.width = "100%";
    image.style.borderRadius = "10px";
    div.appendChild(image);

    const h3 = document.createElement("h3");
    h3.classList.add("author");
    // NewsData uses 'creator' (array) — convert to string
    if (Array.isArray(data.creator)) h3.innerText = data.creator.join(", ");
    else h3.innerText = data.creator || "Unknown";
    div.appendChild(h3);

    const p = document.createElement("p");
    p.classList.add("title");
    p.innerText = data.title || data.description || "";
    div.appendChild(p);

    const a = document.createElement("a");
    a.classList.add("viewmore");
    a.innerText = "view more";
    a.href = data.link || data.url || "#";
    a.target = "_blank";
    div.appendChild(a);

    newscontainer.appendChild(div);
  };

  const alldata = (data) => {
    newscontainer.innerHTML = ""; // clear previous results
    if (!data || data.length === 0) {
      hide.style.display = "block";
      return;
    }
    hide.style.display = "none";
    for (let item of data) displaydata(item);
  };

  const fetchData = async (search) => {
    try {
      loading.style.display = "block";
      // NOTE: use 'apikey' param name (lowercase) per NewsData docs
      const res = await fetch(`${url}?apikey=${APIKEY}&q=${encodeURIComponent(search)}&language=en`);
      loading.style.display = "none";

      if (!res.ok) {
        console.error("Network response not ok:", res.status, await res.text());
        hide.style.display = "block";
        return;
      }

      const jsondata = await res.json();
      console.log("raw response:", jsondata); // inspect shape in console
      // NewsData returns results[] (not articles)
      alldata(jsondata.results);
    } catch (error) {
      loading.style.display = "none";
      console.error("fetch error:", error);
      hide.style.display = "block";
    }
  };

  // initial load
  fetchData("news");

  // search
  if (searchI) {
    searchI.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const q = searchI.value.trim();
        if (!q) return;
        fetchData(q);
        searchI.value = "";
      }
    });
  }
});
