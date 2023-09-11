function Login(){
var done=0;
var username = document.login.username.value;
var userlastname = document.login.userlastname.value;
var useremail = document.login.useremail.value;
var password = document.login.password.value;
    
if (username== "" || userlastname== "" || useremail== "" || password== "") {
    alert("Les champs sont obligatoires.");
    }
    
if (username=="Vincent" && userlastname=="Szmulikowski" && useremail=="szmulikowski.vincent.1971@hotmail.com" &&  password=="Moi1971moi") {
    alert("Bienvenu(e) sur le site web de CEPEGRA...");
window.location="https://www.formation-cepegra.be/";}
}
