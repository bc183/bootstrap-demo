
let emailElement = document.querySelector("#email");
let passwordElement = document.querySelector("#password");
let confirmElement = document.querySelector("#confirm-password");
let descriptionElement = document.querySelector("#description");


let errorEmail = document.querySelector("#err-email");
let errorPassword = document.querySelector("#err-pass");
let errorConfirm = document.querySelector("#err-confirm");
let error = document.querySelector("#error");



errorEmail.style.display = "none";
errorPassword.style.display = "none";
errorConfirm.style.display = "none";
error.style.display = "none";

let users = JSON.parse(localStorage.getItem("users"));

if (!users) {
    users = [];
}

const register = () => {
    let email = emailElement.value;
    let password = passwordElement.value;
    let confirmPassword = confirmElement.value;
    let description = descriptionElement.value;

    let isError = false;

    if (email.trim().length === 0) {
        errorEmail.innerHTML = "Email is required";
        errorEmail.style.display = "block";
        isError = true;
    } else {
        errorEmail.style.display = "none";
    }

    if (password.trim().length === 0) {
        errorPassword.innerHTML = "password is required";
        errorPassword.style.display = "block";
        isError = true;

    } else {
        errorPassword.style.display = "none";
    }

    if (confirmPassword.trim().length === 0) {
        errorConfirm.innerHTML = "Confirm password is required";
        errorConfirm.style.display = "block";
        isError = true;

    } else {
        errorConfirm.style.display = "none";
    }

    if (password !== confirmPassword) {
        error.innerHTML = "Passowrd and confirm password do not match."
        error.style.display = "block";
        isError = true;

    } else {
        error.style.display = "none";
    }

    if (isError) {
        return
    }

    users.push({
        email,
        password,
        description
    });

    localStorage.setItem("users", JSON.stringify(users));

    window.alert("Registration successful. Redireting to login page");
    window.location.href = "index.html";

}