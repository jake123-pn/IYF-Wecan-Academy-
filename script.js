// ================================
// HIDE SECTIONS WHEN PAGE LOADS
// ================================

window.onload = function () {

    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "none";

    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("stats").style.display = "none";
    document.getElementById("testimonials").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("contact").style.display = "none";

};

// ================================
// SHOW REGISTER PAGE
// ================================

function showRegister(){

    document.getElementById("register-section").style.display="block";
    document.getElementById("login-section").style.display="none";

}

// ================================
// SHOW LOGIN PAGE
// ================================

function showLogin(){

    document.getElementById("login-section").style.display="block";
    document.getElementById("register-section").style.display="none";

}

// ================================
// SHOW REGISTER PASSWORD
// ================================

function showPassword(){

    let password=document.getElementById("password");

    if(password.type==="password"){

        password.type="text";

    }else{

        password.type="password";

    }

}

// ================================
// SHOW LOGIN PASSWORD
// ================================

function showLoginPassword(){

    let password=document.getElementById("login-password");

    if(password.type==="password"){

        password.type="text";

    }else{

        password.type="password";

    }

}

// ================================
// CREATE ACCOUNT
// ================================

document.getElementById("register-form").addEventListener("submit",function(e){

e.preventDefault();

let fullname=document.getElementById("fullname").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let course=document.getElementById("course").value;

// Save user details

localStorage.setItem("fullname",fullname);
localStorage.setItem("email",email);
localStorage.setItem("password",password);
localStorage.setItem("course",course);

alert("Account Created Successfully!");

showLogin();

});

// ================================
// LOGIN
// ================================

document.getElementById("login-form").addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("login-email").value;
let password=document.getElementById("login-password").value;

let savedEmail=localStorage.getItem("email");
let savedPassword=localStorage.getItem("password");

if(email===savedEmail && password===savedPassword){

alert("Welcome to IYF Wecan Academy!");

document.querySelector("header").style.display="none";

document.getElementById("login-section").style.display="none";

document.getElementById("home").style.display="block";
document.getElementById("about").style.display="block";
document.getElementById("services").style.display="block";
document.getElementById("stats").style.display="block";
document.getElementById("testimonials").style.display="block";
document.getElementById("gallery").style.display="block";
document.getElementById("contact").style.display="block";

}else{

alert("Access Denied!\nPlease create an account first.");

}

});

// ================================
// LOGOUT
// ================================

function logout(){

let answer=confirm("Do you want to logout?");

if(answer){

location.reload();

}

}