const checkEmailAndPassword = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users"));
    let isValid = false;
    if (!users) {
        return false;
    }
    
    for(let i = 0; i<users.length; i++) {
        if(users[i].email === email && users[i].password === password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        return true;
    }

    return false;
}


let emailElement = document.querySelector("#email");
let passwordElement = document.querySelector("#password");
let errorEmail = document.querySelector("#err-email");
let errorPassword = document.querySelector("#err-pass");
let error = document.querySelector("#error");

errorEmail.style.display = "none";
errorPassword.style.display = "none";
error.style.display = "none";



const login = () => {
    let email = emailElement.value;
    let password = passwordElement.value;
    
    if (email.trim().length === 0) {
        errorEmail.innerHTML = "Email cannot be empty";
        emailElement.setAttribute("class", "form-control error");
        errorEmail.style.display = "block";
    } else {
        emailElement.setAttribute("class", "form-control");
        errorEmail.style.display = "none";
    }

    if (password.trim().length === 0) {
        errorPassword.innerHTML = "Password cannot be empty";
        passwordElement.setAttribute("class", "form-control error");
        errorPassword.style.display = "block";
        return
    } else {
        passwordElement.setAttribute("class", "form-control");
        errorPassword.style.display = "none";
    }
    
    let isValid = checkEmailAndPassword(email, password);
    //console.log(isValid);

    if (isValid) {
        window.location.href = "home.html";
        //console.log(window.location.href);
        let token = "adiohndnknadiaiodiadia";
        window.localStorage.setItem("token", token);
    } else {
        error.innerHTML = "Username/Password is invalid";
        error.style.display = "block";
    }

}