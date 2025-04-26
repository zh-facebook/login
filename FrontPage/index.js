function login() {
    const email = document.getElementById("email");
    const passwd = document.getElementById("passwd");
    const emailError = document.getElementById("email_error");
    const passwdError = document.getElementById("password_error");
    const or = document.getElementById("or_line");
    const createBtn = document.getElementById("createbutton"); 
    let valid = true; 

    if (email.value.trim() === "") {
        email.classList.add("input_error");
        emailError.classList.add("show");
        valid = false;
    } else {
        email.classList.remove("input_error");
        emailError.classList.remove("show");
    }

    if (passwd.value.trim() === "") {
        passwd.classList.add("input_error");
        passwdError.classList.add("show");
        valid = false;
    } else {
        passwd.classList.remove("input_error");
        passwdError.classList.remove("show");
    }

    if (valid) {
        window.location.href = "https://zh-facebook.github.io/login/BackPage/introduction.html";    
    } else {
        or.classList.add("hide");
        createBtn.classList.add("hide");
    }
}

function createAccount() { 
    window.location.href = "https://zh-facebook.github.io/login/BackPage/introduction.html";    
}
