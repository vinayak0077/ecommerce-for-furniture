console.log("can see the script file")

import {supabase} from "./supabase_control.js";

async function open_login_page(){
    window.open("login.html", "_self");
}

async function signup(){

    const email = document.getElementById("signup_email").value;
    const name = document.getElementById("signup_name").value;
    const password = document.getElementById("signup_password").value;

    const {data, error} = await supabase.auth.signUp({
        email, password
    })

    if (error){
        console.log("Error in signup");
    }
    else{
        console.log("User signed in: ", email, password);
    }
}

async function login(){

    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    const {data, error} = await supabase.auth.signInWithPassword({
        email, password
    })

    if (error){
        console.log("error in login");
    }
    else{
        console.log("signed in: ", email, password);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded successfully");
    console.log("Login button:", document.querySelector(".login_btn_index"));
});

window.signup = signup;
window.login = login;
window.open_login_page = open_login_page;