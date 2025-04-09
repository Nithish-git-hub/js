function logindetails(e){
    e.preventDefault()
    let mail=document.getElementById("email").value.trim()
    let password=document.getElementById("password").value.trim()

    let login=JSON.parse(localStorage.getItem("allpersonsdetails"))
    let userlogin=login.find(x=>x.user_mail===mail)
    if(userlogin){
        localStorage.setItem("logindetailsmail",JSON.stringify(mail))
        alert("succesfully login")
        window.location.href="dashboard.html"
    }
    else{
        alert("user not exists")
    }
   
}