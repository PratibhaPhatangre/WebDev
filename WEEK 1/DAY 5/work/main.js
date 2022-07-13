let Username;
let Password;
function login(){
    Username=document.getElementById("Username").value;
    Password=document.getElementById("Password").value;

    if ((Username=="simran") && (Password==jk)){
        alert("login success")
    }
    else{
        alert("login fail")
    }
}