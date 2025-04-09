function signupdetails(e){
    e.preventDefault()
    const name=document.getElementById("name").value.trim()
    const mail=document.getElementById("email").value.trim()
    const password=document.getElementById("password").value.trim()
    let new_user={
        user_name:name,
        user_mail:mail,
        user_password:password
    }
   let allsignupdetails=JSON.parse(localStorage.getItem("allpersonsdetails") || "[]")
//    console.log(allsignupdetails)
   const existeduser=allsignupdetails.find(x=>x.user_mail===mail)
   if(existeduser){
     return alert("user already exists")
   }
   allsignupdetails.push(new_user)
   localStorage.setItem("allpersonsdetails",JSON.stringify(allsignupdetails))
   window.location.href="./login.html"

}