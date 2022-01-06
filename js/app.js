document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let email, password, warning, btn;
    let expr = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let expr2 = /^[a-zA-Z0-9._-]{2,15}$/;
     warning = document.querySelector(".warning")
     email = document.getElementsByTagName("input")[0].value="";
     password= document.getElementsByTagName("input")[1].value="";
     btn = document.getElementsByTagName("input")[2]
     

    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        User();
    });
      User =()=>{

         email = document.getElementsByTagName("input")[0].value;
         password= document.getElementsByTagName("input")[1].value;

        if(email.match(expr) && password.match(expr2) ){
            warning.classList.add("success")
            warning.classList.remove("failure")
            warning.innerText=("Identification correct")
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
            document.location.assign("accueil.html");
        }
            
        else if(email.match(expr)){
            warning.classList.add("success");
            warning.classList.remove("failure");
            warning.innerText = "Saisie incorrect de votre mail ou mot de passe";
            
        }else{
            warning.classList.add("success");
            warning.classList.remove("failure");
            warning.innerText = "Erreur dans la saisie de votre email ou mot de passe";
        }
    }

 });
