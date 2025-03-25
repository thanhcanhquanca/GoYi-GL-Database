function showEyesPasswordLogin() {
    const input_password_login = document.getElementById("input_password_login");
    const eyes_login = document.getElementById("eyes_password_login");
    let _password = "password";
    let _text = "text";

    if (input_password_login.type === _password){
        input_password_login.type = _text;
        eyes_login.src = "/static/svg/open-eyes.svg";
    }else {
        input_password_login.type = _password;
        eyes_login.src="/static/svg/close-eyes.svg";
    }
}

function showEyesPasswordRegister() {
    const input_password_register = document.getElementById("input_password_register");
    const eyes_register = document.getElementById("eyes_password_register");
    let _password = "password";
    let _text = "text";

    if (input_password_register.type === _password){
        input_password_register.type = _text;
        eyes_register.src = "/static/svg/open-eyes.svg";
    }else {
        input_password_register.type = _password;
        eyes_register.src="/static/svg/close-eyes.svg";
    }
}