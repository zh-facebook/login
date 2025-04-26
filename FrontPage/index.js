function login() {
    const email = document.getElementById("email");
    const passwd = document.getElementById("passwd");
    const emailError = document.getElementById("email_error");
    const passwdError = document.getElementById("password_error");
    const or = document.getElementById("or_line");
    const create = document.getElementById("createbutton");

    let vaild = true;

    if (email.value.trim() === "") {
        email.classList.add("input_error");
        emailError.classList.add("show");
        vaild = false;
    } else {
        emailError.classList.remove("show");
    }

    if (email.value.trim() !== "" && passwd.value.trim() === "") {
        passwd.classList.add("input_error");
        passwdError.classList.add("show");
        vaild = false;
    } else {
        passwd.classList.remove("show");
    }

    if (vaild) {
        window.location.href = "https://zh-facebook.github.io/login/BackPage/introduction.html";    
    } else {
        or.classList.add("hide");
        create.classList.add("hide");
    }
}

function create() {
    window.location.href = "https://zh-facebook.github.io/login/BackPage/introduction.html";    
}